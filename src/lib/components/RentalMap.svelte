<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import {
		mapMarkers,
		filteredRentalCompanies,
		searchFilters,
		productsStore,
		manufacturersStore
	} from '$lib/stores/rentalStore';
	import type { MapMarker, RentalCompany, Product, Manufacturer } from '$lib/types';
	import { createLogger } from '$lib/utils/logger';

	// Create logger for this component
	const logger = createLogger('RentalMap');

	// Export empty function for interface compatibility
	export function setSearchResultsVisibility() {
		// Implementation handled externally
	}

	let mapContainer: HTMLElement;
	let map: L.Map | null = null; // Leaflet map instance
	let markers: L.Marker[] = []; // Leaflet markers
	let currentMarkers: MapMarker[] = $state([]);
	let rentalCompanies: RentalCompany[] = $state([]);
	let isLoading = $state(true);
	let productsMap: Record<string, Product> = $state({});
	let manufacturersMap: Record<string, Manufacturer> = $state({});

	$effect(() => {
		const markersUnsubscribe = mapMarkers.subscribe((value) => {
			currentMarkers = [...value];
			updateMarkers();
		});

		const companiesUnsubscribe = filteredRentalCompanies.subscribe((value) => {
			rentalCompanies = [...value];
		});

		const productsUnsubscribe = productsStore.subscribe((products) => {
			productsMap = products.reduce(
				(acc, product) => {
					acc[product.id] = product;
					return acc;
				},
				{} as Record<string, Product>
			);
		});

		const manufacturersUnsubscribe = manufacturersStore.subscribe((manufacturers) => {
			manufacturersMap = manufacturers.reduce(
				(acc, manufacturer) => {
					acc[manufacturer.id] = manufacturer;
					return acc;
				},
				{} as Record<string, Manufacturer>
			);
		});

		return () => {
			markersUnsubscribe();
			companiesUnsubscribe();
			productsUnsubscribe();
			manufacturersUnsubscribe();
		};
	});

	onMount(async () => {
		if (typeof window !== 'undefined') {
			try {
				// Dynamic import to avoid SSR issues
				const { L } = await import('$lib/utils/leaflet');

				// Initialize map
				map = L.map(mapContainer, {
					zoomControl: false, // We'll position it manually
					attributionControl: false // We'll add it in a custom position
				}).setView([51.1657, 10.4515], 6); // Center on Germany

				// Add custom positioned controls
				L.control
					.zoom({
						position: 'bottomright',
						zoomInTitle: 'Vergrößern',
						zoomOutTitle: 'Verkleinern'
					})
					.addTo(map);

				L.control
					.attribution({
						position: 'bottomleft',
						prefix: 'Powered by <a href="https://leafletjs.com" target="_blank">Leaflet</a>'
					})
					.addAttribution(
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Mitwirkende'
					)
					.addTo(map);

				// Set global Leaflet popup options for consistent styling
				L.Popup.prototype.options.className = 'custom-popup';

				// Use a custom OSM Bright style
				L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
					maxZoom: 19,
					subdomains: 'abcd'
				}).addTo(map);

				// Add event handlers to hide search results when interacting with map
				map.on('click', (event) => {
					// Check if the click was on a marker (which has its own handling)
					const clickedMarker = markers.some((marker) => {
						const markerElement = marker.getElement();
						return (
							markerElement &&
							document
								.elementsFromPoint(event.originalEvent.clientX, event.originalEvent.clientY)
								.some((el) => el === markerElement || markerElement.contains(el))
						);
					});

					if (typeof window !== 'undefined' && window.dispatchEvent) {
						// Dispatch custom event that Search.svelte can listen for
						window.dispatchEvent(
							new CustomEvent('map-interaction', {
								detail: {
									source: 'map-click',
									isMarkerClick: clickedMarker,
									target: event.originalEvent.target
								}
							})
						);
					}
				});

				map.on('dragstart', () => {
					if (typeof window !== 'undefined' && window.dispatchEvent) {
						window.dispatchEvent(
							new CustomEvent('map-interaction', {
								detail: { source: 'map-drag' }
							})
						);
					}
				});

				// Listen for zoom-to-location events from ResultsList
				if (typeof window !== 'undefined') {
					window.addEventListener('zoom-to-location', ((event: CustomEvent) => {
						const { latitude, longitude, zoom, companyId } = event.detail;
						if (map && latitude && longitude) {
							map.setView([latitude, longitude], zoom || 14);

							// Find the marker for this company and open its popup
							if (companyId) {
								setTimeout(() => {
									// Use setTimeout to ensure view change completes first
									const marker = markers.find((marker) => {
										// Get marker data to compare with company
										const markerData = currentMarkers.find(
											(m) =>
												m.latitude === marker.getLatLng().lat &&
												m.longitude === marker.getLatLng().lng
										);
										return markerData && markerData.id === companyId;
									});

									if (marker) {
										marker.openPopup();
									}
								}, 100);
							}
						}
					}) as EventListener);

					// Listen for close-map-popups events from Search component
					window.addEventListener('close-map-popups', (() => {
						// Close all popups if map exists
						if (map) {
							map.closePopup();
						}
					}) as EventListener);
				}

				updateMarkers();

				// Set German translations for Leaflet controls
				try {
					// Only run this client-side
					if (typeof document !== 'undefined') {
						// This ensures text in control buttons and map elements are in German
						const controlContainer = document.querySelector('.leaflet-control-container');
						if (controlContainer) {
							// Find and translate any remaining English text
							const elements = controlContainer.querySelectorAll('*');
							elements.forEach((el) => {
								if (el.textContent === 'Zoom in') el.textContent = 'Vergrößern';
								if (el.textContent === 'Zoom out') el.textContent = 'Verkleinern';
								// Add more translations as needed
							});
						}
					}
				} catch (e) {
					logger.error('Error translating map elements:', e);
				}

				isLoading = false;
			} catch (error) {
				logger.error('Error initializing map:', error);
				isLoading = false;
			}
		}
	});

	onDestroy(() => {
		if (map) {
			map.remove();
		}

		// Clean up event listeners
		if (typeof window !== 'undefined') {
			window.removeEventListener('zoom-to-location', (() => {}) as EventListener);
			window.removeEventListener('close-map-popups', (() => {}) as EventListener);
		}
	});

	function getProductName(productId: string): string {
		const product = productsMap[productId];
		return product?.name || 'Unknown product';
	}

	function getManufacturerName(manufacturerId: string): string {
		const manufacturer = manufacturersMap[manufacturerId];
		return manufacturer?.name || 'Unknown manufacturer';
	}

	function getManufacturerForProduct(productId: string): string {
		const product = productsMap[productId];
		if (!product) return 'Unknown';

		return getManufacturerName(product.manufacturerId);
	}

	function createPopupContent(companyId: string): string {
		const company = rentalCompanies.find((c) => c.id === companyId);
		if (!company) return '';

		// Filter inventory based on filters
		let inventoryToShow = [...company.inventory];
		let selectedManufacturers: string[] = [];
		let selectedProducts: string[] = [];

		searchFilters.subscribe(({ manufacturers, products }) => {
			selectedManufacturers = manufacturers;
			selectedProducts = products;
		})();

		if (selectedManufacturers.length > 0 || selectedProducts.length > 0) {
			if (selectedProducts.length > 0) {
				// Filter by selected products
				inventoryToShow = inventoryToShow.filter((item) =>
					selectedProducts.includes(item.productId)
				);
			} else if (selectedManufacturers.length > 0) {
				// Filter by selected manufacturers
				inventoryToShow = inventoryToShow.filter((item) => {
					const product = productsMap[item.productId];
					return product && selectedManufacturers.includes(product.manufacturerId);
				});
			}
		}

		const totalItems = inventoryToShow.reduce((sum, item) => sum + item.quantity, 0);

		let inventoryHtml = '';
		if (inventoryToShow.length > 0) {
			inventoryHtml = inventoryToShow
				.slice(0, 3)
				.map((item) => {
					const productName = getProductName(item.productId);
					const manufacturerName = getManufacturerForProduct(item.productId);
					return `
					<div class="flex items-center justify-between text-xs py-1 border-t border-gray-200">
						<div>
							<div class="font-medium">${productName}</div>
							<div class="text-gray-500">${manufacturerName}</div>
						</div>
						<div class="ml-2 font-medium">×${item.quantity}</div>
					</div>
				`;
				})
				.join('');

			if (inventoryToShow.length > 3) {
				inventoryHtml += `
					<div class="text-xs text-center text-blue-600 pt-1 border-t border-gray-200">
						+${inventoryToShow.length - 3} mehr Artikel
					</div>
				`;
			}
		}

		return `
			<div class="map-popup" style="min-width: 280px; max-width: 350px; margin-top: 20px;">				
				<div class="relative">
					<div class="font-medium text-lg mt-2">${company.name}</div>
					<span class="absolute -left-1 -top-5 bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">
						${totalItems} Produkte
					</span>
					<div class="text-sm text-gray-600 mb-2">${company.address}, ${company.postalCode} ${company.city}</div>
				</div>
				
				<!-- Contact links -->
				<div class="flex flex-wrap gap-x-3 gap-y-2 text-xs mb-3">
					${
						company.website
							? `<a href="${company.website}" target="_blank" class="flex items-center text-blue-600 hover:text-blue-800">
							<svg xmlns="http://www.w3.org/2000/svg" class="mr-1.5 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
							<span class="whitespace-nowrap">Website</span>
						</a>`
							: ''
					}
					
					${
						company.email
							? `<a href="mailto:${company.email}" class="flex items-center text-blue-600 hover:text-blue-800">
							<svg xmlns="http://www.w3.org/2000/svg" class="mr-1.5 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
							<span class="whitespace-nowrap">E-Mail</span>
						</a>`
							: ''
					}
					
					<a 
						href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${company.address}, ${company.postalCode} ${company.city}, ${company.country}`)}" 
						target="_blank"
						class="flex items-center text-blue-600 hover:text-blue-800"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5 flex-shrink-0"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></svg>
						<span class="whitespace-nowrap">Route planen</span>
					</a>
				</div>
				
				${inventoryHtml ? `<div class="font-medium text-sm mb-1">Inventar:</div>${inventoryHtml}` : ''}
			</div>
		`;
	}

	async function updateMarkers() {
		if (!map) return; // Don't update if map isn't initialized

		// Clear existing markers
		markers.forEach((marker) => marker.remove());
		markers = [];

		// Add new markers if there are any
		if (currentMarkers.length > 0) {
			try {
				// Dynamic import to avoid SSR issues
				const { L } = await import('$lib/utils/leaflet');

				markers = currentMarkers.map((markerData) => {
					const marker = L.marker([markerData.latitude, markerData.longitude], {
						title: markerData.title
					});

					// Only add popup to the map if it exists
					if (map) {
						marker
							.addTo(map)
							// Remove the tooltip binding completely
							.bindPopup(createPopupContent(markerData.id), {
								className: 'custom-popup',
								closeButton: true
							});

						// Add click event to center map on marker click without changing zoom
						marker.on('click', function (e: L.LeafletMouseEvent) {
							if (map) {
								// Get current zoom level
								const currentZoom = map.getZoom();
								// Center map on marker position maintaining the current zoom level
								map.setView(e.target.getLatLng(), currentZoom);
							}
						});
					}

					return marker;
				});

				// Adjust map view to fit all markers
				if (markers.length > 0 && map) {
					const markerGroup = L.featureGroup(markers);
					map.fitBounds(markerGroup.getBounds(), { padding: [50, 50] });
				}
			} catch (error) {
				logger.error('Error updating markers:', error);
			}
		}
	}
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
		integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
		crossorigin=""
	/>
	<!-- We're moving the custom styles to app.css for better consistency -->
</svelte:head>

<div class="absolute inset-0">
	{#if !isLoading && currentMarkers.length === 0}
		<div class="absolute inset-0 z-10 flex items-center justify-center bg-white/50">
			<div class="rounded-lg bg-white p-6 text-center shadow-md">
				<p class="text-lg text-gray-600">Keine zu den Suchkriterien passenden Anbieter gefunden</p>
			</div>
		</div>
	{/if}
	<div bind:this={mapContainer} class="h-full w-full"></div>
</div>
