<script lang="ts">
	import Search from './Search.svelte';
	import ManufacturerFilter from './ManufacturerFilter.svelte';
	import ProductFilter from './ProductFilter.svelte';
	import RentalMap from './RentalMap.svelte';
	import AdminModal from './admin/AdminModal.svelte';
	import {
		isLoading,
		error,
		loadInitialData,
		searchFilters,
		resetFilters
	} from '$lib/stores/rentalStore';
	import { AlertCircle, RefreshCw, X, Package, Factory, RotateCcw } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let loading = $state(true);
	let errorMessage = $state<string | null>(null);
	let showAdminModal = $state(false);
	let isMobileView = $state(false);
	let showManufacturerFilter = $state(false);
	let showProductFilter = $state(false);
	let selectedManufacturers = $state<string[]>([]);
	let selectedProducts = $state<string[]>([]);

	// Check if screen is mobile size
	function checkMobileView() {
		isMobileView = window.innerWidth < 940;
	}

	$effect(() => {
		const unsubscribeLoading = isLoading.subscribe((value) => {
			loading = value;
		});

		const unsubscribeError = error.subscribe((value) => {
			errorMessage = value;
		});

		const unsubscribeFilters = searchFilters.subscribe((filters) => {
			selectedManufacturers = filters.manufacturers;
			selectedProducts = filters.products;
		});

		return () => {
			unsubscribeLoading();
			unsubscribeError();
			unsubscribeFilters();
		};
	});

	// Check if the URL has admin query parameter to show the admin modal
	$effect(() => {
		showAdminModal = $page.url.searchParams.has('admin');
	});

	onMount(() => {
		// Initial check
		checkMobileView();

		// Add resize listener
		window.addEventListener('resize', checkMobileView);

		// Add click listener to close panels when clicking outside
		document.addEventListener('click', handleGlobalClick);

		return () => {
			window.removeEventListener('resize', checkMobileView);
			document.removeEventListener('click', handleGlobalClick);
		};
	});

	function handleRetry() {
		loadInitialData();
	}

	function toggleManufacturerFilter(event: MouseEvent) {
		if (isMobileView) {
			// Prevent event propagation and default behavior
			event.stopPropagation();
			event.preventDefault();

			// Close product filter if opening manufacturer filter
			if (!showManufacturerFilter && showProductFilter) {
				showProductFilter = false;
			}
			showManufacturerFilter = !showManufacturerFilter;
		}
	}

	function toggleProductFilter(event: MouseEvent) {
		if (isMobileView) {
			// Prevent event propagation and default behavior
			event.stopPropagation();
			event.preventDefault();

			// Close manufacturer filter if opening product filter
			if (!showProductFilter && showManufacturerFilter) {
				showManufacturerFilter = false;
			}
			showProductFilter = !showProductFilter;
		}
	}

	function closeFilters() {
		showManufacturerFilter = false;
		showProductFilter = false;
	}

	// Close filter panels when clicking on the map or elsewhere outside
	function handleGlobalClick(event: MouseEvent) {
		if (!isMobileView) return;

		const target = event.target as HTMLElement;
		const isManufacturerFAB = target.closest('.manufacturer-fab');
		const isProductFAB = target.closest('.product-fab');
		const isFilterPanel = target.closest('.mobile-filter-panel');
		const isSearchResults = target.closest('.search-results-container');
		const isSearchInput = target.closest('.search-control');

		// Don't close filter panels when clicking on search results or search input
		if (isSearchResults || isSearchInput) {
			event.stopPropagation(); // Stop propagation to prevent closing search results
			return;
		}

		// If click was outside both FABs and filter panels, close all panels
		if (!isManufacturerFAB && !isProductFAB && !isFilterPanel) {
			closeFilters();
		}
	}
</script>

<div class="relative h-screen w-full overflow-hidden">
	{#if loading}
		<div class="absolute inset-0 z-50 flex items-center justify-center bg-white/80">
			<div class="text-center">
				<div class="mx-auto h-12 w-12 animate-spin rounded-full border-b-2 border-blue-700"></div>
				<p class="mt-4 text-gray-600">DryHire-Daten werden geladen...</p>
			</div>
		</div>
	{:else if errorMessage}
		<div class="absolute inset-0 z-50 flex items-center justify-center bg-white/80">
			<div class="max-w-md rounded-lg bg-red-50 p-6 text-center shadow-md">
				<AlertCircle size={32} class="mx-auto mb-3 text-red-500" />
				<h3 class="mb-2 text-lg font-medium text-red-800">Fehler beim Laden der Daten</h3>
				<p class="mb-4 text-red-600">{errorMessage}</p>
				<button
					onclick={handleRetry}
					class="mx-auto flex items-center rounded bg-blue-600 px-4 py-2 text-white"
				>
					<RefreshCw size={16} class="mr-2" />
					Erneut versuchen
				</button>
			</div>
		</div>
	{/if}

	<!-- Admin Modal -->
	<AdminModal show={showAdminModal} />

	<!-- Full-screen map -->
	<RentalMap />

	<!-- Controls - Desktop View (screens >= 940px) -->
	{#if !isMobileView}
		<div class="absolute top-4 left-6 z-10 flex items-center space-x-4">
			<!-- Search control -->
			<div class="w-100">
				<Search />
			</div>

			<!-- Manufacturer filter -->
			<div class="w-60">
				<ManufacturerFilter />
			</div>

			<!-- Product filter -->
			<div class="w-60">
				<ProductFilter />
			</div>
		</div>
	{:else}
		<!-- Mobile View (screens < 940px) -->
		<!-- Search control at top -->
		<div class="absolute top-4 right-4 left-4 z-10">
			<Search />
		</div>

		<!-- FAB filters at bottom left - now horizontal layout -->
		<div class="absolute bottom-15 left-4 z-10 flex flex-row space-x-3">
			<!-- Manufacturer filter FAB -->
			<button
				onclick={(e) => toggleManufacturerFilter(e)}
				class="filter-fab manufacturer-fab relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg"
				aria-label="Manufacturer Filter"
			>
				<Factory size={20} />
				{#if selectedManufacturers.length > 0}
					<span
						class="filter-badge absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-medium text-white"
					>
						{selectedManufacturers.length}
					</span>
				{/if}
			</button>

			<!-- Product filter FAB -->
			<button
				onclick={(e) => toggleProductFilter(e)}
				class="filter-fab product-fab relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg"
				aria-label="Product Filter"
			>
				<Package size={20} />
				{#if selectedProducts.length > 0}
					<span
						class="filter-badge absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-medium text-white"
					>
						{selectedProducts.length}
					</span>
				{/if}
			</button>
		</div>

		<!-- Floating manufacturer filter panel - positioned centered above FAB -->
		{#if showManufacturerFilter}
			<div
				class="mobile-filter-panel manufacturer-panel absolute bottom-31 left-2 z-20 w-64 rounded-xl bg-white shadow-xl"
			>
				<div class="filter-panel-header flex items-center justify-between rounded-t-xl p-2">
					<h3 class="flex items-center text-sm font-medium">
						<Factory size={16} class="mr-1.5 text-blue-600" />
						Hersteller Filter
					</h3>
					<div class="flex items-center">
						{#if selectedManufacturers.length > 0}
							<button
								onclick={(e) => {
									e.stopPropagation();
									resetFilters();
								}}
								class="mr-3 flex items-center justify-center text-blue-600 hover:text-blue-800"
								aria-label="Filter zurücksetzen"
							>
								<RotateCcw size={16} />
							</button>
						{/if}
						<button
							onclick={(e) => {
								e.stopPropagation();
								closeFilters();
							}}
							class="text-gray-500 hover:text-gray-700"
						>
							<X size={18} />
						</button>
					</div>
				</div>
				<div>
					<ManufacturerFilter />
				</div>
			</div>
		{/if}

		<!-- Floating product filter panel - positioned centered above FAB -->
		{#if showProductFilter}
			<div
				class="mobile-filter-panel product-panel absolute bottom-31 left-16 z-20 w-64 rounded-xl bg-white shadow-xl"
			>
				<div class="filter-panel-header flex items-center justify-between rounded-t-xl p-2">
					<h3 class="flex items-center text-sm font-medium">
						<Package size={16} class="mr-1.5 text-blue-600" />
						Produkt Filter
					</h3>
					<div class="flex items-center">
						{#if selectedProducts.length > 0}
							<button
								onclick={(e) => {
									e.stopPropagation();
									resetFilters();
								}}
								class="mr-3 flex items-center justify-center text-blue-600 hover:text-blue-800"
								aria-label="Filter zurücksetzen"
							>
								<RotateCcw size={16} />
							</button>
						{/if}
						<button
							onclick={(e) => {
								e.stopPropagation();
								closeFilters();
							}}
							class="text-gray-500 hover:text-gray-700"
						>
							<X size={18} />
						</button>
					</div>
				</div>
				<div>
					<ProductFilter />
				</div>
			</div>
		{/if}
	{/if}
</div>
