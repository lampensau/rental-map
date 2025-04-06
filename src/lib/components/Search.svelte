<script lang="ts">
	import { Search as SearchIcon } from 'lucide-svelte';
	import {
		setTextFilter,
		filteredRentalCompanies,
		searchFilters,
		loadFiltersFromURL
	} from '$lib/stores/rentalStore';
	import ResultsList from './ResultsList.svelte';
	import { onMount, onDestroy } from 'svelte';

	let searchText = $state('');
	let showResults = $state(false);
	let resultCount = $state(0);
	let debouncedSearchTimer: ReturnType<typeof setTimeout>;

	// Handler for map interactions
	function handleMapInteraction(event: Event) {
		// Cast to CustomEvent to access detail property
		const customEvent = event as CustomEvent<{
			source?: string;
			isMarkerClick?: boolean;
			target?: EventTarget | null;
		}>;

		// Get information about the event source and target
		const source = customEvent.detail?.source;
		const target = customEvent.detail?.target as HTMLElement | null;

		// Check if the click was on a FAB or filter panel
		const clickedFab = target?.closest('.filter-fab');
		const clickedFilterPanel = target?.closest('.mobile-filter-panel');

		// Close search results only for map clicks/drags and not for FAB/filter interactions
		if ((source === 'map-click' || source === 'map-drag') && !clickedFab && !clickedFilterPanel) {
			showResults = false;
		}
	}

	// Initialize search text from URL on component mount
	onMount(() => {
		// Listen for custom map interaction events - only in browser
		if (typeof window !== 'undefined') {
			window.addEventListener('map-interaction', handleMapInteraction as EventListener);

			// Load search text from URL
			const urlFilters = loadFiltersFromURL();
			if (urlFilters.text) {
				searchText = urlFilters.text;
			}

			// Show results if there are any filters active
			if (
				urlFilters.text ||
				urlFilters.manufacturers.length > 0 ||
				urlFilters.products.length > 0
			) {
				showResults = true;
			}
		}
	});

	onDestroy(() => {
		// Clean up listener - only in browser
		if (typeof window !== 'undefined') {
			window.removeEventListener('map-interaction', handleMapInteraction as EventListener);
		}
	});

	$effect(() => {
		const unsubscribe = filteredRentalCompanies.subscribe((companies) => {
			resultCount = companies.length;
		});

		// Show results when filters are applied
		const unsubscribeFilters = searchFilters.subscribe((filters) => {
			if (filters.manufacturers.length > 0 || filters.products.length > 0) {
				showResults = true;
			}
		});

		return () => {
			unsubscribe();
			unsubscribeFilters();
		};
	});

	function handleSearchInput() {
		// Clear previous timer
		if (debouncedSearchTimer) {
			clearTimeout(debouncedSearchTimer);
		}

		// Set a timeout to search after typing stops
		debouncedSearchTimer = setTimeout(() => {
			setTextFilter(searchText);
			// Always show results if there are matches, regardless of screen size
			if (searchText.trim() && resultCount > 0) {
				showResults = true;
			} else if (!searchText.trim()) {
				// Only hide results if no filters are applied
				const unsubscribe = searchFilters.subscribe((filters) => {
					if (filters.manufacturers.length === 0 && filters.products.length === 0) {
						showResults = false;
					}
				});
				unsubscribe();
			}
		}, 300); // 300ms debounce
	}

	function handleFocus() {
		// Always show results when focused, regardless of filters or search text
		showResults = true;

		// Close any open map popups when search is focused
		if (typeof window !== 'undefined') {
			// Dispatch a custom event to close map popups
			window.dispatchEvent(new CustomEvent('close-map-popups'));
		}
	}

	function hasActiveFilters(): boolean {
		let result = false;
		const unsubscribe = searchFilters.subscribe((filters) => {
			result = filters.manufacturers.length > 0 || filters.products.length > 0;
		});
		unsubscribe();
		return result;
	}

	function handleBlur(event: FocusEvent) {
		// Delay to allow clicking on results
		setTimeout(() => {
			const relatedTarget = event.relatedTarget as HTMLElement;

			// Don't hide results if focus moved to results container, a FAB, or a filter panel
			const movedToResults = relatedTarget?.closest('.search-results-container');
			const movedToFab = relatedTarget?.closest('.filter-fab');
			const movedToFilterPanel = relatedTarget?.closest('.mobile-filter-panel');

			if (!relatedTarget || (!movedToResults && !movedToFab && !movedToFilterPanel)) {
				// Only hide results if no filters are applied
				if (!hasActiveFilters()) {
					showResults = false;
				}
			}
		}, 200);
	}

	function handleEscape(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			showResults = false;
		}
	}
</script>

<div class="search-control relative">
	<!-- Search input with shadow -->
	<div class="relative">
		<input
			type="text"
			bind:value={searchText}
			oninput={handleSearchInput}
			onfocus={handleFocus}
			onblur={handleBlur}
			onkeydown={handleEscape}
			placeholder="Adresse, Firmenname, Hersteller, etc."
			class="w-full rounded-xl {showResults
				? 'rounded-b-none'
				: ''} border border-gray-300 {showResults
				? 'border-b-0'
				: ''} bg-white py-2 pr-4 pl-4 shadow-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
		/>
		<div
			class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500"
		>
			<SearchIcon size={18} />
		</div>
	</div>

	<!-- Search results dropdown -->
	{#if showResults}
		<div
			class="absolute top-full left-0 z-50 mt-0 w-full rounded-b-xl border border-gray-300 bg-white shadow-lg"
		>
			<ResultsList />
		</div>
	{/if}
</div>
