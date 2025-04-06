<script lang="ts">
	import { Factory, X, ChevronDown, Check, Bug, RotateCcw } from 'lucide-svelte';
	import {
		toggleManufacturerFilter,
		manufacturersStore,
		searchFilters,
		resetFilters,
		getProducts,
		getRentalCompanies,
		getSearchFilters
	} from '$lib/stores/rentalStore';
	import type { Manufacturer } from '$lib/types';
	import { createLogger } from '$lib/utils/logger';
	import { onMount } from 'svelte';

	// Create logger for this component
	const logger = createLogger('ManufacturerFilter');

	// Import a store to track if search results should be shown
	import { writable } from 'svelte/store';
	export const showSearchResults = writable(false);

	// Element reference for context detection
	let filterElement: HTMLElement;
	let isMobile = $state(false);

	let manufacturers: Manufacturer[] = $state([]);
	let selectedManufacturers: string[] = $state([]);
	let isOpen = $state(false);
	let showDebug = $state(false);

	// Track last values to prevent unnecessary updates
	let lastManufacturerIds: string[] = [];
	let lastSelectedManufacturerIds: string[] = [];

	// Check for mobile context on mount
	onMount(() => {
		// If this component is inside a mobile filter panel, it's in mobile mode
		isMobile = !!filterElement.closest('.mobile-filter-panel');

		// In mobile mode, keep dropdown always open
		if (isMobile) {
			isOpen = true;
		}
	});

	// Check for debug mode in URL
	$effect(() => {
		if (typeof window !== 'undefined') {
			const urlParams = new URLSearchParams(window.location.search);
			showDebug = urlParams.get('debug') === 'true';
		}
	});

	// Separate effect for manufacturers to avoid reactivity cycles
	$effect(() => {
		const unsubscribeManufacturers = manufacturersStore.subscribe((value) => {
			// Check if manufacturers actually changed before updating
			const currentManufacturerIds = value
				.map((m) => m.id)
				.sort()
				.join(',');
			if (currentManufacturerIds === lastManufacturerIds) return;

			lastManufacturerIds = currentManufacturerIds;

			// Sort manufacturers alphabetically by name
			manufacturers = [...value].sort((a, b) => a.name.localeCompare(b.name));
		});

		return () => {
			unsubscribeManufacturers();
		};
	});

	// Separate effect for filters to avoid reactivity cycles
	$effect(() => {
		const unsubscribeFilters = searchFilters.subscribe((value) => {
			// Check if selected manufacturers actually changed before updating
			const currentSelectedIds = value.manufacturers.slice().sort().join(',');
			if (currentSelectedIds === lastSelectedManufacturerIds) return;

			lastSelectedManufacturerIds = currentSelectedIds;
			selectedManufacturers = [...value.manufacturers];
		});

		return () => {
			unsubscribeFilters();
		};
	});

	function handleToggleManufacturer(manufacturerId: string) {
		toggleManufacturerFilter(manufacturerId);
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
		if (!target.closest('.manufacturer-dropdown')) {
			isOpen = false;
		}
	}

	function showDebugInfo() {
		logger.debug('======= DEBUG INFO =======');
		logger.debug('Manufacturers:', manufacturers);
		logger.debug('Selected manufacturers:', selectedManufacturers);

		// Get data from the stores using getter methods
		const allProducts = getProducts();
		const allCompanies = getRentalCompanies();
		const currentFilters = getSearchFilters();

		logger.debug('Products:', allProducts);
		logger.debug('Companies:', allCompanies);
		logger.debug('Current filters:', currentFilters);

		// Print relationships between products and manufacturers
		logger.debug('Product-Manufacturer relationships:');
		allProducts.forEach((product) => {
			const manufacturer = manufacturers.find((m) => m.id === product.manufacturerId);
			logger.debug(
				`Product: ${product.name} (${product.id}) → Manufacturer: ${manufacturer?.name || 'Unknown'} (${product.manufacturerId})`
			);
		});

		// Print inventory relationships
		logger.debug('Inventory relationships:');
		allCompanies.forEach((company) => {
			logger.debug(`Company: ${company.name} (${company.id})`);
			company.inventory.forEach((item: any) => {
				const product = allProducts.find((p) => p.id === item.productId);
				if (product) {
					const manufacturer = manufacturers.find((m) => m.id === product.manufacturerId);
					logger.debug(
						`  - Product: ${product.name} (${item.productId}) → Manufacturer: ${manufacturer?.name || 'Unknown'} (${product.manufacturerId}), Quantity: ${item.quantity}`
					);
				} else {
					logger.warn(`  - Product not found: ${item.productId}, Quantity: ${item.quantity}`);
				}
			});
		});

		logger.debug('=========================');
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

<div bind:this={filterElement} class="manufacturer-dropdown relative {isMobile ? '' : 'w-full'}">
	{#if !isMobile}
		<button
			onclick={toggleDropdown}
			class="flex w-full items-center justify-between {isOpen
				? 'rounded-t-xl rounded-b-none border-b-0'
				: 'rounded-xl'} border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 shadow-md hover:bg-gray-50"
		>
			<div class="flex items-center gap-2">
				{#if selectedManufacturers.length === 0}
					<Factory size={18} />
					<span> Alle Hersteller </span>
				{:else if selectedManufacturers.length === 1}
					<Factory size={18} class="text-blue-600" />
					<span>
						{manufacturers.find((m) => m.id === selectedManufacturers[0])?.name || 'Hersteller'}
					</span>
				{:else}
					<Factory size={18} class="text-blue-600" />
					<span>
						{selectedManufacturers.length} Hersteller ausgewählt
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
					{#if selectedManufacturers.length > 0}
						<span class="text-xs font-medium text-gray-700"
							>{selectedManufacturers.length} ausgewählt</span
						>
						<button
							onclick={handleReset}
							class="flex h-2 items-center gap-1 text-xs text-blue-600 hover:text-blue-800"
						>
							<X size={12} />
							Zurücksetzen
						</button>
					{:else}
						<span class="text-xs font-medium text-gray-700">Hersteller auswählen</span>
					{/if}
				</div>
			{/if}

			<div
				class="custom-scrollbar {isMobile ? 'max-h-[350px]' : 'max-h-[300px]'} overflow-y-auto p-2"
			>
				{#each manufacturers as manufacturer (manufacturer.id)}
					<div class="py-1">
						<label class="flex w-full cursor-pointer items-center">
							<div class="flex flex-shrink-0 items-center">
								<input
									type="checkbox"
									checked={selectedManufacturers.includes(manufacturer.id)}
									onchange={() => handleToggleManufacturer(manufacturer.id)}
									class="sr-only"
								/>
								<div
									class={`mr-2 flex h-4 w-4 items-center justify-center rounded border ${
										selectedManufacturers.includes(manufacturer.id)
											? 'border-blue-500 bg-blue-500'
											: 'border-gray-300'
									}`}
								>
									{#if selectedManufacturers.includes(manufacturer.id)}
										<Check size={12} class="text-white" />
									{/if}
								</div>
							</div>
							<span class="truncate text-sm text-gray-700" title={manufacturer.name}
								>{manufacturer.name}</span
							>
						</label>
					</div>
				{/each}
			</div>

			{#if showDebug}
				<div class="border-t border-gray-200 p-2">
					<button
						onclick={showDebugInfo}
						class="flex w-full items-center justify-center gap-1 rounded bg-gray-100 px-3 py-1 text-xs text-gray-700 hover:bg-gray-200"
					>
						<Bug size={12} />
						Debug Info
					</button>
				</div>
			{/if}
		</div>
	{/if}
</div>
