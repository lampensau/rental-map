<script lang="ts">
	import { Boxes, X, Trash2 } from 'lucide-svelte';
	import type { RentalCompany, Product, Manufacturer, InventoryItem } from '$lib/types';
	import * as firestoreService from '$lib/services/firestore';
	import { productsStore, manufacturersStore, rentalCompaniesStore } from '$lib/stores/rentalStore';
	import { sortByName } from './utils/sorting';

	// Props
	const props = $props<{
		company: RentalCompany | null;
		onClose: () => void;
	}>();

	// State variables
	let loading = $state(false);
	let error = $state('');
	let products = $state<Product[]>([]);
	let manufacturers = $state<Manufacturer[]>([]);
	let newInventoryItem = $state({ productId: '', quantity: 1 });

	// Subscribe to stores
	$effect(() => {
		const unsubscribeProducts = productsStore.subscribe((value) => {
			products = value;
		});

		const unsubscribeManufacturers = manufacturersStore.subscribe((value) => {
			manufacturers = value;
		});

		return () => {
			unsubscribeProducts();
			unsubscribeManufacturers();
		};
	});

	// Reset form when company changes
	$effect(() => {
		if (props.company) {
			newInventoryItem = { productId: '', quantity: 1 };
		}
	});

	// Operations
	async function addInventoryItem() {
		if (!props.company) return;

		try {
			loading = true;
			error = '';

			if (!newInventoryItem.productId) {
				error = 'Produkt ist erforderlich';
				return;
			}

			if (newInventoryItem.quantity <= 0) {
				error = 'Menge muss größer als 0 sein';
				return;
			}

			// Check if product already exists in inventory
			const existingItemIndex = props.company.inventory.findIndex(
				(item: InventoryItem) => item.productId === newInventoryItem.productId
			);

			let updatedInventory: InventoryItem[];

			if (existingItemIndex >= 0) {
				// Update existing item
				updatedInventory = [...props.company.inventory];
				updatedInventory[existingItemIndex] = {
					...updatedInventory[existingItemIndex],
					quantity: updatedInventory[existingItemIndex].quantity + newInventoryItem.quantity
				};
			} else {
				// Add new item
				updatedInventory = [...props.company.inventory, { ...newInventoryItem }];
			}

			// Update in Firestore
			await firestoreService.updateRentalCompany(props.company.id, {
				inventory: updatedInventory
			});

			// Create a new company object with updated inventory to avoid circular updates
			const updatedCompany = {
				...props.company,
				inventory: updatedInventory
			};

			// Update store without referencing the props directly
			rentalCompaniesStore.update((companies) =>
				companies.map((c) => (c.id === updatedCompany.id ? updatedCompany : c))
			);

			// Reset form
			newInventoryItem = { productId: '', quantity: 1 };
		} catch (err) {
			if (err instanceof Error) {
				error = err.message;
			} else {
				error = 'Fehler beim Hinzufügen des Inventarartikels';
			}
		} finally {
			loading = false;
		}
	}

	async function removeInventoryItem(productId: string) {
		if (!props.company) return;

		try {
			loading = true;
			error = '';

			const updatedInventory = props.company.inventory.filter(
				(item: InventoryItem) => item.productId !== productId
			);

			// Update in Firestore
			await firestoreService.updateRentalCompany(props.company.id, {
				inventory: updatedInventory
			});

			// Create a new company object with updated inventory
			const updatedCompany = {
				...props.company,
				inventory: updatedInventory
			};

			// Update store without referencing the props directly
			rentalCompaniesStore.update((companies) =>
				companies.map((c) => (c.id === updatedCompany.id ? updatedCompany : c))
			);
		} catch (err) {
			if (err instanceof Error) {
				error = err.message;
			} else {
				error = 'Fehler beim Entfernen des Inventarartikels';
			}
		} finally {
			loading = false;
		}
	}

	// Helper functions
	function getProductName(productId: string): string {
		return products.find((p) => p.id === productId)?.name || 'Unbekanntes Produkt';
	}

	function getManufacturerName(productId: string): string {
		const product = products.find((p) => p.id === productId);
		if (!product) return 'Unbekannt';

		return (
			manufacturers.find((m) => m.id === product.manufacturerId)?.name || 'Unbekannter Hersteller'
		);
	}
</script>

{#if props.company}
	<div class="mb-6 border-b border-gray-200 pb-2">
		<div class="flex items-center justify-between">
			<h2 class="text-xl font-bold">Inventar für: {props.company.name}</h2>
			<button onclick={props.onClose} class="rounded-md bg-gray-200 px-3 py-1 text-sm">
				Zurück
			</button>
		</div>

		{#if error}
			<div class="mt-4 rounded-md bg-red-50 p-4 text-red-800">
				{error}
			</div>
		{/if}

		<div class="mt-4 mb-6 rounded-md border border-gray-200 p-4">
			<h3 class="mb-3 text-lg font-medium">Produkt hinzufügen</h3>
			<div class="grid grid-cols-3 gap-4">
				<div class="col-span-2">
					<select
						class="w-full rounded-md border border-gray-300 p-2"
						bind:value={newInventoryItem.productId}
						onkeydown={(e) => {
							if (e.key === 'Enter') {
								e.preventDefault();
								addInventoryItem();
							}
						}}
					>
						<option value="">Produkt auswählen</option>
						{#each sortByName(products.filter((p) => p.isActive)) as product}
							<option value={product.id}>
								{product.name} ({manufacturers.find((m) => m.id === product.manufacturerId)?.name ||
									''})
							</option>
						{/each}
					</select>
				</div>
				<div>
					<input
						type="number"
						min="1"
						placeholder="Menge"
						class="w-full rounded-md border border-gray-300 p-2"
						bind:value={newInventoryItem.quantity}
					/>
				</div>
			</div>
			<div class="mt-3 flex justify-end">
				<button
					onclick={addInventoryItem}
					class="rounded-md bg-blue-600 px-4 py-2 text-white disabled:bg-blue-300"
					disabled={loading}
				>
					{loading ? 'Hinzufügen...' : 'Hinzufügen'}
				</button>
			</div>
		</div>

		<div class="overflow-x-auto">
			<table class="min-w-full divide-y divide-gray-200">
				<thead class="bg-gray-50">
					<tr>
						<th
							class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
						>
							Produkt
						</th>
						<th
							class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
						>
							Hersteller
						</th>
						<th
							class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
						>
							Menge
						</th>
						<th
							class="px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase"
						>
							Aktionen
						</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-200 bg-white">
					{#each props.company.inventory as item}
						{@const productId = item.productId}
						<tr>
							<td class="px-6 py-4 whitespace-nowrap">
								{getProductName(productId)}
							</td>
							<td class="px-6 py-4 whitespace-nowrap">
								{getManufacturerName(productId)}
							</td>
							<td class="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
							<td class="px-6 py-4 text-right text-sm whitespace-nowrap">
								<button
									onclick={() => removeInventoryItem(item.productId)}
									class="flex items-center rounded bg-red-100 px-2 py-1 text-red-800 hover:bg-red-200"
								>
									<Trash2 size={16} class="mr-1" />
									Entfernen
								</button>
							</td>
						</tr>
					{/each}

					{#if props.company.inventory.length === 0}
						<tr>
							<td colspan="4" class="px-6 py-4 text-center text-gray-500">
								Keine Produkte im Inventar
							</td>
						</tr>
					{/if}
				</tbody>
			</table>
		</div>
	</div>
{/if}
