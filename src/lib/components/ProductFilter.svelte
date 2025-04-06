<script lang="ts">
	import { Package, X, ChevronDown, Check, RotateCcw } from 'lucide-svelte';
	import {
		toggleProductFilter,
		filteredProducts,
		searchFilters,
		resetFilters,
		manufacturersStore
	} from '$lib/stores/rentalStore';
	import type { Product, Manufacturer } from '$lib/types';
	import { onMount } from 'svelte';

	// Element reference for context detection
	let filterElement: HTMLElement;
	let isMobile = $state(false);

	let products: Product[] = $state([]);
	let selectedProducts: string[] = $state([]);
	let isOpen = $state(false);
	let manufacturersMap: Record<string, Manufacturer> = $state({});

	// Track last values to prevent unnecessary updates
	let lastProductIds: string[] = [];
	let lastManufacturerIds: string[] = [];

	// Check for mobile context on mount
	onMount(() => {
		// If this component is inside a mobile filter panel, it's in mobile mode
		isMobile = !!filterElement.closest('.mobile-filter-panel');

		// In mobile mode, keep dropdown always open
		if (isMobile) {
			isOpen = true;
		}
	});

	// Separate effect for manufacturers to break potential dependency cycles
	$effect(() => {
		const unsubscribeManufacturers = manufacturersStore.subscribe((manufacturers) => {
			// Check if manufacturers actually changed before updating
			const currentManufacturerIds = manufacturers
				.map((m) => m.id)
				.sort()
				.join(',');
			if (currentManufacturerIds === lastManufacturerIds) return;

			lastManufacturerIds = currentManufacturerIds;

			manufacturersMap = manufacturers.reduce(
				(acc, manufacturer) => {
					acc[manufacturer.id] = manufacturer;
					return acc;
				},
				{} as Record<string, Manufacturer>
			);

			// Only resort products when manufacturer data changes
			sortProducts();
		});

		return () => {
			unsubscribeManufacturers();
		};
	});

	// Separate effect for products to avoid circular dependencies
	$effect(() => {
		const unsubscribeProducts = filteredProducts.subscribe((value) => {
			// Check if products actually changed before updating
			const currentProductIds = value
				.map((p) => p.id)
				.sort()
				.join(',');
			if (currentProductIds === lastProductIds) return;

			lastProductIds = currentProductIds;

			// Update product data first without sorting
			products = [...value];

			// Then sort in a separate operation to avoid reactivity issues
			sortProducts();
		});

		return () => {
			unsubscribeProducts();
		};
	});

	// Separate effect for filters to avoid circular dependencies
	$effect(() => {
		const unsubscribeFilters = searchFilters.subscribe((value) => {
			selectedProducts = [...value.products];
		});

		return () => {
			unsubscribeFilters();
		};
	});

	// Safe sort function that doesn't trigger reactivity loops
	function sortProducts() {
		// Don't sort if we don't have products or manufacturers yet
		if (products.length === 0 || Object.keys(manufacturersMap).length === 0) return;

		// Create a sorted copy without modifying the original array directly
		const sorted = [...products].sort((a, b) => {
			const manufacturerA = manufacturersMap[a.manufacturerId]?.name || '';
			const manufacturerB = manufacturersMap[b.manufacturerId]?.name || '';

			// First sort by manufacturer name
			const manufacturerComparison = manufacturerA.localeCompare(manufacturerB);
			if (manufacturerComparison !== 0) {
				return manufacturerComparison;
			}

			// If same manufacturer, sort by product name
			return a.name.localeCompare(b.name);
		});

		// Only update if the sort actually changed something
		const sortedIds = sorted.map((p) => p.id).join(',');
		const currentIds = products.map((p) => p.id).join(',');
		if (sortedIds !== currentIds) {
			products = sorted;
		}
	}

	function handleToggleProduct(productId: string) {
		toggleProductFilter(productId);
	}

	function handleReset() {
		resetFilters();
	}

	function toggleDropdown() {
		if (!isMobile) {
			isOpen = !isOpen;
		}
	}

	function handleClickOutside(event: MouseEvent) {
		// Don't close if in mobile view
		if (isMobile) return;

		const target = event.target as HTMLElement;
		if (!target.closest('.product-dropdown')) {
			isOpen = false;
		}
	}

	// Add click outside handler
	$effect(() => {
		if (isOpen && !isMobile) {
			document.addEventListener('click', handleClickOutside);
		} else {
			document.removeEventListener('click', handleClickOutside);
		}

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div bind:this={filterElement} class="product-dropdown relative {isMobile ? '' : 'w-full'}">
	{#if !isMobile}
		<button
			onclick={toggleDropdown}
			class="flex w-full items-center justify-between {isOpen
				? 'rounded-t-xl rounded-b-none border-b-0'
				: 'rounded-xl'} border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 shadow-md hover:bg-gray-50"
		>
			<div class="flex min-w-0 flex-1 items-center gap-2">
				{#if selectedProducts.length === 0}
					<Package size={18} />
					<span>Alle Produkte</span>
				{:else if selectedProducts.length === 1}
					<Package size={18} class="text-blue-500" />
					<span class="truncate">
						{products.find((p) => p.id === selectedProducts[0])?.name || 'Produkt'}
					</span>
				{:else}
					<Package size={18} class="text-blue-500" />
					<span>
						{selectedProducts.length} Produkte ausgewählt
					</span>
				{/if}
			</div>
			<ChevronDown size={18} class={isOpen ? 'rotate-180 transform' : ''} />
		</button>
	{/if}

	{#if isOpen || isMobile}
		<div
			class="{isMobile ? 'relative' : 'absolute z-50 mt-0 w-full'} overflow-hidden {isMobile
				? ''
				: 'rounded-b-xl border border-gray-200 bg-white shadow-lg'}"
		>
			{#if !isMobile}
				<div class="flex items-center justify-between border-b border-gray-200 p-2">
					{#if selectedProducts.length > 0}
						<span class="text-xs font-medium text-gray-700"
							>{selectedProducts.length} ausgewählt</span
						>
						<button
							onclick={handleReset}
							class="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800"
						>
							<X size={12} />
							Zurücksetzen
						</button>
					{:else}
						<span class="text-xs font-medium text-gray-700">Produkte auswählen</span>
					{/if}
				</div>
			{/if}

			<div
				class="custom-scrollbar {isMobile ? 'max-h-[350px]' : 'max-h-[300px]'} overflow-y-auto p-2"
			>
				{#if products.length === 0}
					<div class="p-2 text-sm text-gray-500 italic">Keine Produkte verfügbar</div>
				{:else}
					{#each products as product (product.id)}
						<div class="py-1">
							<label class="flex w-full cursor-pointer items-center">
								<div class="flex flex-shrink-0 items-center">
									<input
										type="checkbox"
										checked={selectedProducts.includes(product.id)}
										onchange={() => handleToggleProduct(product.id)}
										class="sr-only"
									/>
									<div
										class={`mr-2 flex h-4 w-4 items-center justify-center rounded border ${
											selectedProducts.includes(product.id)
												? 'border-blue-500 bg-blue-500'
												: 'border-gray-300'
										}`}
									>
										{#if selectedProducts.includes(product.id)}
											<Check size={12} class="text-white" />
										{/if}
									</div>
								</div>
								<span class="truncate text-sm text-gray-700" title={product.name}
									>{product.name}</span
								>
							</label>
						</div>
					{/each}
				{/if}
			</div>
		</div>
	{/if}
</div>

<style>
	/* Ensure proper truncation for product names */
	.truncate {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
