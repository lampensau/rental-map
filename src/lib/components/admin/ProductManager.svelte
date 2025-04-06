<script lang="ts">
	import {
		Package,
		PlusCircle,
		Edit,
		Save,
		RefreshCw,
		X,
		CheckCircle,
		XCircle,
		Trash2,
		ArrowUp,
		ArrowDown,
		HelpCircle
	} from 'lucide-svelte';
	import type { Product, Manufacturer } from '$lib/types';
	import * as firestoreService from '$lib/services/firestore';
	import { productsStore, manufacturersStore } from '$lib/stores/rentalStore';
	import { sortItems, toggleSort, sortByName } from './utils/sorting';
	import ConfirmDeleteModal from './ui/ConfirmDeleteModal.svelte';
	import {
		isValidProductId,
		generateProductId,
		extractManufacturerIdFromProductId,
		normalizeProductId,
		validateEntityId
	} from '$lib/utils/validation';

	// Props
	const props = $props<{
		isAdmin: boolean;
	}>();

	// State variables
	let loading = $state(false);
	let error = $state('');
	let products = $state<Product[]>([]);
	let manufacturers = $state<Manufacturer[]>([]);
	let editingProduct = $state<Product | null>(null);
	let newProduct = $state<{
		id: string;
		name: string;
		isActive: boolean;
	}>({
		id: '',
		name: '',
		isActive: true
	});
	let confirmDeleteModal = $state<{ id: string; name: string } | null>(null);
	let newManufacturerName = $state('');
	let showManufacturerPrompt = $state(false);
	let pendingProductData = $state<{
		id: string;
		name: string;
		manufacturerId: string;
		isActive: boolean;
	} | null>(null);

	// Sorting state
	let sortField = $state<keyof Product>('name');
	let sortDirection = $state<'asc' | 'desc'>('asc');

	// Subscribe to the stores
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

	// Sorting functions
	function handleSort(field: keyof Product) {
		[sortDirection, sortField] = toggleSort(field, sortField, sortDirection);
	}

	function getSortedProducts(): Product[] {
		return sortItems(products, sortField, sortDirection);
	}

	// CRUD operations
	async function handleCreateProduct(e: Event) {
		e.preventDefault();
		if (!newProduct.name) {
			error = 'Produktname ist erforderlich';
			return;
		}

		const validation = validateEntityId('product', newProduct.id);
		if (!validation.valid) {
			error = validation.message || 'Ungültige Produkt-ID';
			return;
		}

		// Normalize the product ID to ensure consistent format
		const normalizedProductId = normalizeProductId(newProduct.id);

		// Extract manufacturer ID from the product ID
		const manufacturerId = extractManufacturerIdFromProductId(normalizedProductId);

		if (!manufacturerId) {
			error = 'Ungültiges Produkt-ID Format. Format muss XXX-XXXX-XXXX sein.';
			return;
		}

		// Check if manufacturer exists
		const existingManufacturer = manufacturers.find((m) => m.id === manufacturerId);

		if (!existingManufacturer) {
			// Store pending product data and show manufacturer prompt
			pendingProductData = {
				id: normalizedProductId,
				name: newProduct.name,
				manufacturerId,
				isActive: newProduct.isActive
			};
			showManufacturerPrompt = true;
			return;
		}

		// Continue with product creation
		try {
			loading = true;
			error = '';

			// Check if product ID already exists
			const existingProduct = products.find((p) => p.id === normalizedProductId);
			if (existingProduct) {
				error = `Produkt-ID ${normalizedProductId} wird bereits verwendet`;
				loading = false;
				return;
			}

			const product = await firestoreService.createProduct({
				id: normalizedProductId,
				name: newProduct.name,
				manufacturerId,
				isActive: newProduct.isActive
			});

			productsStore.update((items) => sortByName([...items, product]));
			newProduct = {
				id: '',
				name: '',
				isActive: true
			};
		} catch (err) {
			if (err instanceof Error) {
				error = err.message;
			} else {
				error = 'Fehler beim Erstellen des Produkts';
			}
		} finally {
			loading = false;
		}
	}

	async function createManufacturerAndProduct() {
		if (!newManufacturerName || !pendingProductData) {
			return;
		}

		try {
			loading = true;
			error = '';

			// Create the manufacturer first
			const manufacturer = await firestoreService.createManufacturer({
				id: pendingProductData.manufacturerId,
				name: newManufacturerName,
				isActive: true
			});

			// Then create the product
			const product = await firestoreService.createProduct(pendingProductData);

			// Update stores
			manufacturersStore.update((items) => sortByName([...items, manufacturer]));
			productsStore.update((items) => sortByName([...items, product]));

			// Reset state
			newProduct = {
				id: '',
				name: '',
				isActive: true
			};
			newManufacturerName = '';
			showManufacturerPrompt = false;
			pendingProductData = null;
		} catch (err) {
			if (err instanceof Error) {
				error = err.message;
			} else {
				error = 'Fehler beim Erstellen des Herstellers und Produkts';
			}
		} finally {
			loading = false;
		}
	}

	function cancelManufacturerPrompt() {
		showManufacturerPrompt = false;
		pendingProductData = null;
		newManufacturerName = '';
	}

	async function saveEditedProduct() {
		if (!editingProduct) return;

		try {
			loading = true;
			error = '';

			if (!editingProduct.name) {
				error = 'Produktname ist erforderlich';
				return;
			}

			if (!editingProduct.id) {
				error = 'Produkt-ID ist erforderlich';
				return;
			}

			const validation = validateEntityId('product', editingProduct.id);
			if (!validation.valid) {
				error = validation.message || 'Ungültige Produkt-ID';
				return;
			}

			// Extract manufacturer ID from the product ID
			const manufacturerId = extractManufacturerIdFromProductId(editingProduct.id);
			if (!manufacturerId) {
				error = 'Ungültiges Produkt-ID Format. Format muss XXX-XXXX-XXXX sein.';
				return;
			}

			// Check if manufacturer exists
			const existingManufacturer = manufacturers.find((m) => m.id === manufacturerId);
			if (!existingManufacturer) {
				error = `Hersteller mit ID ${manufacturerId} existiert nicht.`;
				return;
			}

			// Update the manufacturerId based on the product ID
			editingProduct.manufacturerId = manufacturerId;

			await firestoreService.updateProduct(editingProduct.id, {
				name: editingProduct.name,
				manufacturerId: manufacturerId, // Always use the derived manufacturer ID
				isActive: editingProduct.isActive
			});

			productsStore.update((items) =>
				items.map((item) => (item.id === editingProduct?.id ? { ...editingProduct } : item))
			);

			editingProduct = null;
		} catch (err) {
			if (err instanceof Error) {
				error = err.message;
			} else {
				error = 'Fehler beim Aktualisieren des Produkts';
			}
		} finally {
			loading = false;
		}
	}

	function startEditingProduct(product: Product) {
		editingProduct = { ...product };
	}

	function cancelEditingProduct() {
		editingProduct = null;
	}

	function showDeleteConfirmation(id: string, name: string) {
		confirmDeleteModal = { id, name };
	}

	function cancelDelete() {
		confirmDeleteModal = null;
	}

	async function confirmDelete() {
		if (!confirmDeleteModal) return;

		try {
			loading = true;
			error = '';

			await firestoreService.deleteProduct(confirmDeleteModal.id);
			productsStore.update((items) => items.filter((item) => item.id !== confirmDeleteModal?.id));
			confirmDeleteModal = null;
		} catch (err) {
			if (err instanceof Error) {
				error = err.message;
			} else {
				error = 'Fehler beim Löschen';
			}
		} finally {
			loading = false;
		}
	}

	async function handleToggleProductStatus(id: string, isActive: boolean) {
		try {
			loading = true;
			error = '';

			await firestoreService.updateProduct(id, { isActive: !isActive });
			productsStore.update((items) =>
				items.map((item) => (item.id === id ? { ...item, isActive: !isActive } : item))
			);
		} catch (err) {
			if (err instanceof Error) {
				error = err.message;
			} else {
				error = 'Fehler beim Ändern des Status';
			}
		} finally {
			loading = false;
		}
	}

	// Get manufacturer name by id
	function getManufacturerName(manufacturerId: string): string {
		return manufacturers.find((m) => m.id === manufacturerId)?.name || 'Unbekannt';
	}
</script>

<div>
	{#if error}
		<div class="mb-4 rounded-md bg-red-50 p-4 text-red-800">
			{error}
		</div>
	{/if}

	<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
		<div class="lg:col-span-1">
			{#if editingProduct}
				<!-- Edit Product Form -->
				<div class="rounded-md border border-blue-200 bg-blue-50 p-4">
					<h3 class="mb-3 flex items-center text-lg font-medium">
						<Edit size={18} class="mr-2" />
						Produkt bearbeiten
					</h3>
					<form onsubmit={saveEditedProduct}>
						<div class="mb-3">
							<input
								type="text"
								placeholder="Produktname"
								class="w-full rounded-md border border-gray-300 p-2"
								bind:value={editingProduct.name}
								aria-label="Produktname"
								title="Name des Produkts"
								required
							/>
						</div>
						<div class="mb-3">
							<input
								type="text"
								placeholder="Produkt-ID (z.B. 123-4567-8901)"
								class="w-full rounded-md border border-gray-300 p-2"
								bind:value={editingProduct.id}
								aria-label="Produkt-ID"
								title="Eindeutige ID für das Produkt (Format: XXX-XXXX-XXXX). Die ersten drei Ziffern bestimmen den Hersteller."
								required
							/>
							<p class="mt-1 text-xs text-gray-500">
								Hinweis: Die ersten drei Ziffern bestimmen den Hersteller und können nicht geändert
								werden.
							</p>
						</div>
						<div class="mb-3">
							<div class="w-full rounded-md border border-gray-100 bg-gray-50 p-2">
								<span class="text-sm text-gray-700"
									>Hersteller: {getManufacturerName(editingProduct.manufacturerId)}</span
								>
							</div>
							<p class="mt-1 text-xs text-gray-500">
								Der Hersteller wird automatisch aus den ersten drei Ziffern der Produkt-ID
								abgeleitet.
							</p>
						</div>
						<div class="mb-3 flex items-center justify-between">
							<label
								class="flex cursor-pointer items-center gap-2"
								title="Aktiviert oder deaktiviert das Produkt"
							>
								<div class="relative">
									<input
										type="checkbox"
										class="peer sr-only"
										bind:checked={editingProduct.isActive}
									/>
									<div
										class="h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-green-600 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-5"
									></div>
								</div>
								<span>Aktiv</span>
							</label>
							<div class="flex space-x-2">
								<button
									type="submit"
									class="flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-white disabled:bg-blue-300"
									disabled={loading}
									title="Änderungen speichern"
									aria-label="Speichern"
								>
									{#if loading}
										<RefreshCw size={16} class="mr-1 animate-spin" />
										Speichern...
									{:else}
										<Save size={16} class="mr-1" />
										Speichern
									{/if}
								</button>
								<button
									type="button"
									onclick={cancelEditingProduct}
									class="flex items-center rounded-md bg-gray-200 px-3 py-1.5 text-gray-700"
									title="Bearbeitung abbrechen"
									aria-label="Abbrechen"
								>
									<X size={16} />
								</button>
							</div>
						</div>
					</form>
				</div>
			{:else}
				<!-- Create Product Form -->
				<div class="rounded-md border border-gray-200 bg-gray-50 p-4">
					<h3 class="mb-3 flex items-center text-lg font-medium">
						<PlusCircle size={18} class="mr-2" />
						Neues Produkt
					</h3>
					<form onsubmit={handleCreateProduct}>
						<div class="mb-3">
							<input
								type="text"
								placeholder="Produktname"
								class="w-full rounded-md border border-gray-300 p-2"
								bind:value={newProduct.name}
								aria-label="Produktname"
								title="Name des Produkts"
								required
							/>
						</div>
						<div class="mb-3">
							<input
								id="product-id"
								type="text"
								placeholder="Produkt-ID (z.B. 123-4567-8901)"
								class="w-full rounded-md border border-gray-300 p-2"
								bind:value={newProduct.id}
								aria-label="Produkt-ID"
								title="Eindeutige ID für das Produkt (Format: XXX-XXXX-XXXX). Die ersten drei Ziffern bestimmen den Hersteller."
								required
							/>
						</div>
						<div class="flex items-center justify-between">
							<label
								class="flex cursor-pointer items-center gap-2"
								title="Aktiviert oder deaktiviert das Produkt"
							>
								<div class="relative">
									<input type="checkbox" class="peer sr-only" bind:checked={newProduct.isActive} />
									<div
										class="h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-green-600 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-5"
									></div>
								</div>
								<span>Aktiv</span>
							</label>
							<button
								type="submit"
								class="flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-white disabled:bg-blue-300"
								disabled={loading}
								title="Neues Produkt hinzufügen"
								aria-label="Produkt hinzufügen"
							>
								{#if loading}
									<RefreshCw size={16} class="mr-1 animate-spin" />
									Hinzufügen...
								{:else}
									<PlusCircle size={16} class="mr-1" />
									Hinzufügen
								{/if}
							</button>
						</div>
					</form>
				</div>
			{/if}
		</div>

		<div class="lg:col-span-2">
			<div class="overflow-x-auto">
				<div class="custom-scrollbar max-h-[60vh] overflow-y-auto">
					<table class="min-w-full table-fixed divide-y divide-gray-200">
						<thead class="sticky top-0 z-10 bg-gray-50">
							<tr>
								<th
									onclick={() => handleSort('name')}
									class="w-[35%] cursor-pointer px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
								>
									Name
									{#if sortField === 'name'}
										{#if sortDirection === 'asc'}
											<ArrowUp size={16} class="ml-1 inline" />
										{:else}
											<ArrowDown size={16} class="ml-1 inline" />
										{/if}
									{/if}
								</th>
								<th
									onclick={() => handleSort('manufacturerId')}
									class="w-[25%] cursor-pointer px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
								>
									Hersteller
									{#if sortField === 'manufacturerId'}
										{#if sortDirection === 'asc'}
											<ArrowUp size={16} class="ml-1 inline" />
										{:else}
											<ArrowDown size={16} class="ml-1 inline" />
										{/if}
									{/if}
								</th>
								<th
									onclick={() => handleSort('isActive')}
									class="w-[10%] cursor-pointer px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
								>
									Status
									{#if sortField === 'isActive'}
										{#if sortDirection === 'asc'}
											<ArrowUp size={16} class="ml-1 inline" />
										{:else}
											<ArrowDown size={16} class="ml-1 inline" />
										{/if}
									{/if}
								</th>
								<th
									class="w-[30%] px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase"
								>
									Aktionen
								</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-200 bg-white">
							{#each getSortedProducts() as product}
								<tr class={editingProduct?.id === product.id ? 'bg-blue-50' : ''}>
									<td class="px-6 py-4 whitespace-nowrap">
										<span class="truncate-text">{product.name}</span>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<span class="truncate-text">{getManufacturerName(product.manufacturerId)}</span>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										{#if product.isActive}
											<span class="flex items-center text-green-800">
												<CheckCircle size={16} class="mr-1" />
												Aktiv
											</span>
										{:else}
											<span class="flex items-center text-red-800">
												<XCircle size={16} class="mr-1" />
												Inaktiv
											</span>
										{/if}
									</td>
									<td class="flex justify-end space-x-2 px-6 py-4 text-right whitespace-nowrap">
										<button
											onclick={() => startEditingProduct(product)}
											class="flex items-center rounded bg-blue-100 px-2 py-1 text-blue-800 hover:bg-blue-200"
											title="Produkt bearbeiten"
											aria-label="Produkt bearbeiten"
											disabled={editingProduct !== null}
										>
											<Edit size={16} />
										</button>
										<button
											onclick={() => handleToggleProductStatus(product.id, product.isActive)}
											class={`flex items-center rounded px-2 py-1 ${product.isActive ? 'bg-orange-100 text-orange-800 hover:bg-orange-200' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}
											title={product.isActive ? 'Produkt deaktivieren' : 'Produkt aktivieren'}
											aria-label={product.isActive ? 'Produkt deaktivieren' : 'Produkt aktivieren'}
										>
											{#if product.isActive}
												<XCircle size={16} />
											{:else}
												<CheckCircle size={16} />
											{/if}
										</button>
										<button
											onclick={() => showDeleteConfirmation(product.id, product.name)}
											class="flex items-center rounded bg-red-100 px-2 py-1 text-red-800 hover:bg-red-200"
											title="Produkt löschen"
											aria-label="Produkt löschen"
										>
											<Trash2 size={16} />
										</button>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>

<ConfirmDeleteModal
	show={confirmDeleteModal !== null}
	itemName={confirmDeleteModal?.name || ''}
	{loading}
	onConfirm={confirmDelete}
	onCancel={cancelDelete}
/>

{#if showManufacturerPrompt}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 backdrop-blur-sm">
		<div class="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
			<h3 class="mb-4 text-lg font-medium">Neuer Hersteller benötigt</h3>
			<p class="mb-4">
				Der Hersteller mit ID <strong>{pendingProductData?.manufacturerId}</strong> existiert noch nicht.
				Bitte geben Sie einen Namen für diesen Hersteller ein.
			</p>
			<div class="mb-4">
				<input
					type="text"
					placeholder="Herstellername"
					class="w-full rounded-md border border-gray-300 p-2"
					bind:value={newManufacturerName}
					aria-label="Herstellername"
				/>
			</div>
			<div class="flex justify-end space-x-2">
				<button
					onclick={cancelManufacturerPrompt}
					class="rounded-md bg-gray-200 px-4 py-2 text-gray-700"
				>
					Abbrechen
				</button>
				<button
					onclick={createManufacturerAndProduct}
					class="rounded-md bg-blue-600 px-4 py-2 text-white"
					disabled={!newManufacturerName.trim() || loading}
				>
					{loading ? 'Erstellen...' : 'Hersteller erstellen & fortfahren'}
				</button>
			</div>
		</div>
	</div>
{/if}
