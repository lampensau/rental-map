<script lang="ts">
	import {
		ArrowUpDown,
		CheckCircle as CircleCheck,
		XCircle as CircleX,
		Pencil as PencilIcon,
		Trash as TrashIcon
	} from 'lucide-svelte';
	import type { Product, Manufacturer } from '$lib/types/';
	import { productsStore, manufacturersStore } from '$lib/stores/rentalStore';

	// State variables
	let products = $state<Product[]>([]);
	let manufacturers = $state<Manufacturer[]>([]);
	let filteredProducts = $state<Product[]>([]);

	// Subscribe to the stores
	$effect(() => {
		const unsubProducts = productsStore.subscribe((value) => {
			products = value;
			filteredProducts = [...products];
		});

		const unsubManufacturers = manufacturersStore.subscribe((value) => {
			manufacturers = value;
		});

		return () => {
			unsubProducts();
			unsubManufacturers();
		};
	});

	// Utility functions
	function getManufacturerName(manufacturerId: string): string {
		const manufacturer = manufacturers.find((m) => m.id === manufacturerId);
		return manufacturer ? manufacturer.name : 'Unknown';
	}

	function sortProducts(field: keyof Product) {
		filteredProducts = [...filteredProducts].sort((a, b) => {
			const valueA = a[field];
			const valueB = b[field];
			if (typeof valueA === 'string' && typeof valueB === 'string') {
				return valueA.localeCompare(valueB);
			}
			return String(valueA).localeCompare(String(valueB));
		});
	}

	function handleEditProduct(product: Product) {
		// Placeholder for edit functionality
		console.log('Edit product:', product);
	}

	function handleDeleteProduct(product: Product) {
		// Placeholder for delete functionality
		console.log('Delete product:', product);
	}
</script>

<div class="mt-4">
	<div class="overflow-hidden rounded-lg border">
		<table class="min-w-full divide-y divide-gray-200">
			<thead class="bg-gray-50">
				<tr>
					<th
						class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
					>
						NAME
						<button class="ml-1" onclick={() => sortProducts('name')}>
							<ArrowUpDown size={12} />
						</button>
					</th>
					<th
						class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
					>
						HERSTELLER
					</th>
					<th
						class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
					>
						STATUS
					</th>
					<th
						class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
					>
						AKTION
					</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-200 bg-white">
				{#each filteredProducts as product}
					<tr>
						<td class="px-6 py-4 whitespace-nowrap">
							<span class="truncate-text">{product.name}</span>
						</td>
						<td class="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
							{getManufacturerName(product.manufacturerId)}
						</td>
						<td class="px-6 py-4 text-sm whitespace-nowrap">
							{#if product.isActive}
								<span class="flex items-center">
									<CircleCheck class="mr-1 h-4 w-4 text-green-500" />
									<span>Aktiv</span>
								</span>
							{:else}
								<span class="flex items-center">
									<CircleX class="mr-1 h-4 w-4 text-red-500" />
									<span>Inaktiv</span>
								</span>
							{/if}
						</td>
						<td class="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
							<button
								class="mr-2 text-blue-600 hover:text-blue-900"
								onclick={() => handleEditProduct(product)}
							>
								<PencilIcon class="h-5 w-5" />
							</button>
							<button
								class="text-red-600 hover:text-red-900"
								onclick={() => handleDeleteProduct(product)}
							>
								<TrashIcon class="h-5 w-5" />
							</button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
