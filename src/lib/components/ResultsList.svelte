<script lang="ts">
	import { Globe, Phone, Map, ChevronDown, ChevronUp } from 'lucide-svelte';
	import {
		filteredRentalCompanies,
		searchFilters,
		productsStore,
		manufacturersStore
	} from '$lib/stores/rentalStore';
	import type { RentalCompany, Product, Manufacturer } from '$lib/types';

	let companies: RentalCompany[] = $state([]);
	let isLoading = $state(true);
	let expandedCompanies = $state<string[]>([]);
	let selectedFilters = $state<{ manufacturers: string[]; products: string[] }>({
		manufacturers: [],
		products: []
	});
	let productsMap: Record<string, Product> = $state({});
	let manufacturersMap: Record<string, Manufacturer> = $state({});

	$effect(() => {
		const unsubscribe = filteredRentalCompanies.subscribe((value) => {
			companies = [...value];
			isLoading = false;
		});

		const unsubscribeFilters = searchFilters.subscribe((filters) => {
			selectedFilters = {
				manufacturers: [...filters.manufacturers],
				products: [...filters.products]
			};
		});

		const unsubscribeProducts = productsStore.subscribe((products) => {
			productsMap = products.reduce(
				(acc, product) => {
					acc[product.id] = product;
					return acc;
				},
				{} as Record<string, Product>
			);
		});

		const unsubscribeManufacturers = manufacturersStore.subscribe((manufacturers) => {
			manufacturersMap = manufacturers.reduce(
				(acc, manufacturer) => {
					acc[manufacturer.id] = manufacturer;
					return acc;
				},
				{} as Record<string, Manufacturer>
			);
		});

		return () => {
			unsubscribe();
			unsubscribeFilters();
			unsubscribeProducts();
			unsubscribeManufacturers();
		};
	});

	function getProductName(productId: string): string {
		const product = productsMap[productId];
		return product?.name || 'Unbekanntes Produkt';
	}

	function getManufacturerName(manufacturerId: string): string {
		const manufacturer = manufacturersMap[manufacturerId];
		return manufacturer?.name || 'Unbekannter Hersteller';
	}

	function getManufacturerForProduct(productId: string): string {
		const product = productsMap[productId];
		if (!product) return 'Unbekannt';

		return getManufacturerName(product.manufacturerId);
	}

	function getTotalItems(company: RentalCompany): number {
		const filteredInventory = getFilteredInventory(company);
		return filteredInventory.reduce((sum, item) => sum + item.quantity, 0);
	}

	function toggleExpandCompany(companyId: string) {
		if (expandedCompanies.includes(companyId)) {
			expandedCompanies = expandedCompanies.filter((id) => id !== companyId);
		} else {
			expandedCompanies = [...expandedCompanies, companyId];
		}
	}

	function shouldShowUnfilteredInventory(company: RentalCompany): boolean {
		return expandedCompanies.includes(company.id);
	}

	function getFilteredInventory(company: RentalCompany) {
		// If no filters are applied, return all inventory
		if (selectedFilters.manufacturers.length === 0 && selectedFilters.products.length === 0) {
			return sortInventoryItems(company.inventory);
		}

		// Filter inventory based on selected products and manufacturers
		const filteredInventory = company.inventory.filter((item) => {
			// If product filters are applied
			if (selectedFilters.products.length > 0) {
				return selectedFilters.products.includes(item.productId);
			}

			// If manufacturer filters are applied
			if (selectedFilters.manufacturers.length > 0) {
				const product = productsMap[item.productId];
				return product && selectedFilters.manufacturers.includes(product.manufacturerId);
			}

			return true;
		});

		return sortInventoryItems(filteredInventory);
	}

	// Helper function to sort inventory items by manufacturer and product name
	function sortInventoryItems(inventory: { productId: string; quantity: number }[]) {
		// Don't try to sort if we don't have the necessary data
		if (
			!inventory.length ||
			Object.keys(productsMap).length === 0 ||
			Object.keys(manufacturersMap).length === 0
		) {
			return inventory;
		}

		// Create a new array to avoid reactivity issues with direct mutation
		return [...inventory].sort((a, b) => {
			const productA = productsMap[a.productId];
			const productB = productsMap[b.productId];

			if (!productA || !productB) return 0;

			const manufacturerA = manufacturersMap[productA.manufacturerId];
			const manufacturerB = manufacturersMap[productB.manufacturerId];

			if (!manufacturerA || !manufacturerB) return 0;

			// First sort by manufacturer name
			const manufacturerComparison = manufacturerA.name.localeCompare(manufacturerB.name);
			if (manufacturerComparison !== 0) {
				return manufacturerComparison;
			}

			// Then sort by product name
			return productA.name.localeCompare(productB.name);
		});
	}

	// Handle clicking on a company to zoom the map to its location
	function handleCompanyClick(company: RentalCompany) {
		// Dispatch custom event for map to listen to
		if (typeof window !== 'undefined') {
			window.dispatchEvent(
				new CustomEvent('zoom-to-location', {
					detail: {
						latitude: company.latitude,
						longitude: company.longitude,
						zoom: 14,
						companyId: company.id
					}
				})
			);
		}
	}

	// Format address according to requested format
	function formatAddress(company: RentalCompany): string {
		return `${company.address}, ${company.country}-${company.postalCode} ${company.city}`;
	}
</script>

<!-- Wrapper with rounded corners and overflow hidden -->
<div class="relative overflow-hidden rounded-xl">
	<div class="absolute top-0 right-0 z-10 h-2 w-4 bg-white"></div>
	<!-- Inner scrollable container with padding for scrollbar -->
	<div class="search-results-container custom-scrollbar max-h-[500px] overflow-y-auto pr-[2px]">
		{#if isLoading}
			<div class="flex items-center justify-center p-6">
				<div class="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-700"></div>
			</div>
		{:else if companies.length === 0}
			<div class="p-6 text-center text-gray-500">Keine Ergebnisse gefunden</div>
		{:else}
			<div class="divide-y divide-gray-200">
				{#each companies as company (company.id)}
					<div
						class="cursor-pointer p-4 hover:bg-gray-50"
						role="button"
						tabindex="0"
						onclick={() => handleCompanyClick(company)}
						onkeydown={(e) => e.key === 'Enter' && handleCompanyClick(company)}
					>
						<!-- Company name and basic info -->
						<div class="relative">
							<div class="flex items-center justify-between">
								<h4 class="mr-2 mb-1 text-lg font-medium text-gray-900">{company.name}</h4>
								<span
									class="absolute top-0 right-0 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800"
									title="Anzahl der verfügbaren Produkte"
									aria-label="Anzahl der verfügbaren Produkte: {getTotalItems(company)}"
								>
									{getTotalItems(company)}
								</span>
							</div>
							<div class="text-sm text-gray-500">
								{formatAddress(company)}
							</div>
						</div>

						<!-- Contact information -->
						<div class="mt-3 flex w-full flex-wrap gap-x-3 gap-y-2 text-xs">
							{#if company.website}
								<div class="flex items-center text-blue-600">
									<Globe size={14} class="mr-1.5 flex-shrink-0" />
									<a
										href={company.website}
										target="_blank"
										rel="noopener noreferrer"
										title="Besuchen Sie die Website von {company.name}"
										aria-label="Besuchen Sie die Website von {company.name}"
										class="whitespace-nowrap"
									>
										Website
									</a>
								</div>
							{/if}

							{#if company.email}
								<div class="flex items-center text-blue-600">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="14"
										height="14"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="mr-1.5 flex-shrink-0"
										><rect width="20" height="16" x="2" y="4" rx="2" /><path
											d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
										/></svg
									>
									<a
										href={`mailto:${company.email}`}
										title="Kontaktieren Sie {company.name} per E-Mail"
										aria-label="Kontaktieren Sie {company.name} per E-Mail"
										class="whitespace-nowrap"
									>
										E-Mail
									</a>
								</div>
							{/if}

							{#if company.phone}
								<div class="flex items-center text-blue-600">
									<Phone size={14} class="mr-1.5 flex-shrink-0" />
									<a
										href={`tel:${company.phone}`}
										title="Rufen Sie {company.name} an: {company.phone}"
										aria-label="Rufen Sie {company.name} an: {company.phone}"
										class="whitespace-nowrap"
									>
										Anrufen
									</a>
								</div>
							{/if}

							<div class="flex items-center text-blue-600">
								<Map size={14} class="mr-1.5 flex-shrink-0" />
								<a
									href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${company.address}, ${company.postalCode} ${company.city}, ${company.country}`)}`}
									target="_blank"
									rel="noopener noreferrer"
									title="Route zu {company.name} planen"
									aria-label="Route zu {company.name} planen"
									class="whitespace-nowrap"
								>
									Route planen
								</a>
							</div>
						</div>

						<!-- Inventory summary -->
						<div class="mt-3">
							<div class="mb-1 flex items-center justify-between">
								<h5 class="text-xs font-medium text-gray-700">Inventar:</h5>
								<button
									onclick={() => toggleExpandCompany(company.id)}
									class="flex items-center text-xs text-blue-600 hover:text-blue-800"
								>
									{#if expandedCompanies.includes(company.id)}
										Weniger anzeigen <ChevronUp size={12} class="ml-1" />
									{:else}
										Alle anzeigen <ChevronDown size={12} class="ml-1" />
									{/if}
								</button>
							</div>

							{#if getFilteredInventory(company).length === 0 && !shouldShowUnfilteredInventory(company)}
								<div class="py-2 text-center text-xs text-gray-500">
									Keine passenden Produkte gefunden
								</div>
							{:else}
								<div class="grid grid-cols-2 gap-2">
									{#if expandedCompanies.includes(company.id)}
										{#each company.inventory as item (item.productId)}
											<div
												class="flex items-center overflow-hidden rounded-md bg-gray-100 px-2 py-1"
											>
												<div class="min-w-0 flex-1">
													<div class="truncate text-xs font-medium text-gray-700">
														{getProductName(item.productId)}
													</div>
													<div class="truncate text-xs text-gray-500">
														{getManufacturerForProduct(item.productId)}
													</div>
												</div>
												<div class="ml-1 flex items-center text-xs font-medium text-gray-700">
													×{item.quantity}
												</div>
											</div>
										{/each}
									{:else}
										{#each getFilteredInventory(company).slice(0, 4) as item (item.productId)}
											<div
												class="flex items-center overflow-hidden rounded-md bg-gray-100 px-2 py-1"
											>
												<div class="min-w-0 flex-1">
													<div class="truncate text-xs font-medium text-gray-700">
														{getProductName(item.productId)}
													</div>
													<div class="truncate text-xs text-gray-500">
														{getManufacturerForProduct(item.productId)}
													</div>
												</div>
												<div class="ml-1 flex items-center text-xs font-medium text-gray-700">
													×{item.quantity}
												</div>
											</div>
										{/each}
									{/if}
								</div>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>

	<!-- Corner element overlay to ensure rounded appearance -->
	<div class="absolute right-0 bottom-0 z-10 h-3 w-4 rounded-br-xl bg-white"></div>
</div>

<style>
	/* Fix for horizontal scrollbars in dropdowns - ensure the truncation works correctly */
	:global(.svelte-select .item) {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/* Force custom scrollbar to not interfere with corner */
	.custom-scrollbar::-webkit-scrollbar-corner {
		background: transparent;
	}
</style>
