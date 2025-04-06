<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { X, Users, Factory, Package, Building, Upload } from 'lucide-svelte';
	import { isUserAdmin, isAuthenticated, signIn, signOut } from '$lib/services/auth';
	import ManufacturerManager from './ManufacturerManager.svelte';
	import ProductManager from './ProductManager.svelte';
	import RentalCompanyManager from './RentalCompanyManager.svelte';
	import ImportData from './ImportData.svelte';
	import MissingEntityResolver from './MissingEntityResolver.svelte';
	import * as rentalStore from '$lib/stores/rentalStore';
	import { createLogger } from '$lib/utils/logger';

	// Add logger for debugging
	const logger = createLogger('AdminModal');

	// Props
	const props = $props<{ show?: boolean }>();

	// State variables
	let showModal = $state(props.show || false);
	let email = $state('');
	let password = $state('');
	let loading = $state(false);
	let error = $state('');
	let activeTab = $state('manufacturers');
	let isAdminUser = $state(false);
	let isAuthenticatedUser = $state(false);
	let showImportModal = $state(false);
	let missingEntities = $state<MissingEntity[]>([]);
	let showEntityResolver = $state(false);
	let importSessionId = $state('');
	let selectedEntityType = $state<'manufacturers' | 'products' | 'rentalCompanies'>(
		'manufacturers'
	);
	let importType = $state<'csv' | 'json'>('csv');

	// Update showModal when props.show changes
	$effect(() => {
		showModal = props.show || false;
	});

	// Subscribe to auth changes
	onMount(() => {
		const unsubscribeAdmin = isUserAdmin.subscribe((value) => {
			isAdminUser = value;
		});

		const unsubscribeAuth = isAuthenticated.subscribe((value) => {
			isAuthenticatedUser = value;
		});

		// Initial data loading
		rentalStore.refreshProductsData();

		// Add listener for data updates
		const handleDataUpdated = (event: Event) => {
			// Cast to CustomEvent to access detail property
			const customEvent = event as CustomEvent<{ forceRefresh?: boolean }>;
			logger.debug('Data updated event received, refreshing data');
			rentalStore.refreshProductsData();

			// Check if we need a force refresh of data
			const forceRefresh = customEvent.detail?.forceRefresh === true;
			if (forceRefresh) {
				logger.debug('Force refreshing all data...');
				// Use setTimeout to ensure the UI updates first before potentially heavy data loading
				setTimeout(() => {
					rentalStore.loadInitialData();
				}, 100);
			}
		};

		// Add event listener for our custom event
		window.addEventListener('data-updated', handleDataUpdated);

		return () => {
			unsubscribeAdmin();
			unsubscribeAuth();
			window.removeEventListener('data-updated', handleDataUpdated);
		};
	});

	// Functions
	function closeModal() {
		showModal = false;
		// Remove admin query parameter when closing the modal
		if (window.location.search.includes('admin=true')) {
			goto('/', { replaceState: true });
		}
		// Dispatch a close event
		const event = new CustomEvent('close');
		dispatchEvent(event);
	}

	async function handleSignIn() {
		loading = true;
		error = '';

		try {
			await signIn(email, password);
			// Only navigate away on successful login
		} catch (err) {
			if (err instanceof Error) {
				error = err.message;
			} else {
				error = 'Anmeldung fehlgeschlagen';
			}
			// Add a test-friendly error class that's easy to select in tests
			error = `<span class="auth-error">${error}</span>`;
			// Keep the modal open and don't navigate away on failed login
		} finally {
			loading = false;
		}
	}

	async function handleSignOut() {
		await signOut();
	}

	function toggleImportModal() {
		logger.debug('Toggling import modal. Current state:', showImportModal);
		showImportModal = !showImportModal;
		logger.debug('New import modal state:', showImportModal);

		// Reset resolution state when toggling modal
		if (showImportModal === false) {
			// Only reset the entity resolver state, not the active tab
			showEntityResolver = false;
			missingEntities = [];
			importSessionId = '';
		}
	}

	function handleImportSuccess(event: CustomEvent) {
		showImportModal = false;
		// Refresh data
		rentalStore.refreshProductsData();
	}

	function handleImportError() {
		// Optional: handle import errors
	}

	// Define missing entity type
	interface MissingEntity {
		type: 'manufacturer' | 'product';
		id: string;
		referencedIn: string;
		referenceName?: string;
	}

	// Reset function to ensure proper state after operations
	function resetState() {
		showEntityResolver = false;
		missingEntities = [];
		importSessionId = '';
	}

	// Handle missing entity resolution
	function handleMissingEntities(
		event: CustomEvent<{ missingEntities: MissingEntity[]; importSessionId: string }>
	) {
		missingEntities = event.detail.missingEntities;
		importSessionId = event.detail.importSessionId;
		showEntityResolver = true;
	}

	// Handle entity resolution completion
	function handleResolutionComplete() {
		resetState();
		// Refresh data to show newly imported items
		rentalStore.loadInitialData();
	}

	// Tab switch handler with state reset
	function switchTab(tab: string) {
		activeTab = tab;
		resetState();
	}

	// Helper to dispatch an event
	function dispatchEvent(event: CustomEvent) {
		const el = document.createElement('div');
		el.dispatchEvent(event);
	}

	// Add a function to handle entity type selection
	function handleEntityTypeChange(event: Event) {
		const target = event.target as HTMLSelectElement;
		if (target) {
			selectedEntityType = target.value as 'manufacturers' | 'products' | 'rentalCompanies';
			// Force re-render of ImportData component with new prop values
			showImportModal = false;
			setTimeout(() => {
				showImportModal = true;
			}, 0);
		}
	}

	// Add a function to handle import type selection
	function handleImportTypeChange(event: Event) {
		const target = event.target as HTMLSelectElement;
		if (target) {
			importType = target.value as 'csv' | 'json';
			// Force re-render of ImportData component with new prop values
			showImportModal = false;
			setTimeout(() => {
				showImportModal = true;
			}, 0);
		}
	}
</script>

{#if showModal}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black/30 p-4 backdrop-blur-sm"
	>
		<div class="max-h-[90vh] w-11/12 max-w-6xl rounded-lg bg-white shadow-xl">
			<div class="flex h-full flex-col overflow-hidden">
				<div class="flex items-center justify-between border-b border-gray-200 p-4">
					<h1 class="text-2xl font-bold">Admin Panel</h1>
					<div class="flex items-center space-x-3">
						{#if isAuthenticatedUser}
							{#if isAdminUser}
								<button
									onclick={toggleImportModal}
									class="flex items-center rounded-md bg-green-600 px-3 py-1.5 text-white"
									title="Import"
								>
									<Upload size={16} class="mr-1" />
									Import
								</button>
							{/if}
							<button onclick={handleSignOut} class="rounded-md bg-gray-200 px-3 py-1.5 text-sm">
								Abmelden
							</button>
						{/if}
						<button
							onclick={closeModal}
							class="rounded-full p-2 hover:bg-gray-200"
							aria-label="Schließen"
						>
							<X size={24} />
						</button>
					</div>
				</div>

				<div class="custom-scrollbar max-h-[calc(90vh-80px)] flex-1 overflow-y-auto p-6 pb-8">
					{#if !isAuthenticatedUser}
						<div class="mx-auto my-8 max-w-md">
							<h2 class="mb-4 text-xl">Anmelden</h2>

							{#if error}
								<div class="mb-4 rounded-md bg-red-50 p-4 text-red-800">
									{@html error}
								</div>
							{/if}

							<form>
								<div class="mb-4">
									<label class="mb-1 block text-sm font-medium" for="email">Email</label>
									<input
										id="email"
										type="email"
										class="w-full rounded-md border border-gray-300 p-2"
										bind:value={email}
										required
									/>
								</div>

								<div class="mb-4">
									<label class="mb-1 block text-sm font-medium" for="password">Passwort</label>
									<input
										id="password"
										type="password"
										class="w-full rounded-md border border-gray-300 p-2"
										bind:value={password}
										required
									/>
								</div>

								<button
									type="button"
									onclick={handleSignIn}
									class="rounded-md bg-blue-600 px-4 py-2 text-white disabled:bg-blue-300"
									disabled={loading}
								>
									{loading ? 'Anmelden...' : 'Anmelden'}
								</button>
							</form>
						</div>
					{:else if !isAdminUser}
						<div class="rounded-md bg-yellow-50 p-4 text-yellow-800">
							<p>Sie benötigen Administratorrechte, um dieses Dashboard zu verwenden.</p>
						</div>
					{:else}
						<div class="mb-6 border-b border-gray-200">
							<nav class="-mb-px flex">
								<button
									onclick={() => switchTab('manufacturers')}
									class="mr-2 px-4 py-2 {activeTab === 'manufacturers'
										? 'border-b-2 border-blue-500 text-blue-600'
										: 'text-gray-500 hover:text-gray-700'}"
								>
									<span class="flex items-center">
										<Factory size={16} class="mr-1" />
										Hersteller
									</span>
								</button>
								<button
									onclick={() => switchTab('products')}
									class="mr-2 px-4 py-2 {activeTab === 'products'
										? 'border-b-2 border-blue-500 text-blue-600'
										: 'text-gray-500 hover:text-gray-700'}"
								>
									<span class="flex items-center">
										<Package size={16} class="mr-1" />
										Produkte
									</span>
								</button>
								<button
									onclick={() => switchTab('rental-companies')}
									class="px-4 py-2 {activeTab === 'rental-companies'
										? 'border-b-2 border-blue-500 text-blue-600'
										: 'text-gray-500 hover:text-gray-700'}"
								>
									<span class="flex items-center">
										<Building size={16} class="mr-1" />
										DryHire-Firmen
									</span>
								</button>
							</nav>
						</div>

						{#if activeTab === 'manufacturers'}
							<ManufacturerManager isAdmin={isAdminUser} />
						{:else if activeTab === 'products'}
							<ProductManager isAdmin={isAdminUser} />
						{:else if activeTab === 'rental-companies'}
							<RentalCompanyManager isAdmin={isAdminUser} />
						{/if}
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}

{#if showImportModal}
	<div
		class="fixed inset-0 z-[60] flex items-center justify-center overflow-auto bg-black/30 p-4 backdrop-blur-sm"
	>
		<div class="import-modal max-h-[70vh] w-11/12 max-w-4xl rounded-xl bg-white shadow-xl">
			<div class="flex items-center justify-between border-b border-gray-200 p-4">
				<h2 class="text-xl font-bold">Import Data</h2>

				<div class="flex items-center space-x-4">
					<select
						id="entity-type-select"
						value={selectedEntityType}
						onchange={handleEntityTypeChange}
						class="h-9 rounded border border-gray-300 bg-white px-2 py-1 text-sm"
						aria-label="Select entity type to import"
					>
						<option value="manufacturers">Manufacturers</option>
						<option value="products">Products</option>
						<option value="rentalCompanies">Companies</option>
					</select>

					<select
						id="import-format-select"
						value={importType}
						onchange={handleImportTypeChange}
						class="h-9 rounded border border-gray-300 bg-white px-2 py-1 text-sm"
						aria-label="Select import file format"
					>
						<option value="csv">CSV</option>
						<option value="json">JSON</option>
					</select>

					<button
						class="text-gray-500 hover:text-gray-700"
						onclick={toggleImportModal}
						aria-label="Close import dialog"
					>
						<X size={20} />
					</button>
				</div>
			</div>

			{#if showEntityResolver}
				<MissingEntityResolver
					{missingEntities}
					{importSessionId}
					show={showEntityResolver}
					on:complete={handleResolutionComplete}
					on:cancel={resetState}
				/>
			{:else}
				<ImportData
					initialImportType={importType}
					initialEntityType={selectedEntityType}
					on:success={handleImportSuccess}
					on:error={handleImportError}
					on:resolveMissingEntities={handleMissingEntities}
				/>
			{/if}
		</div>
	</div>
{/if}

<style>
	/* Modern slim scrollbar styling */
	.custom-scrollbar::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	}

	.custom-scrollbar::-webkit-scrollbar-track {
		background: transparent;
		margin: 4px;
	}

	.custom-scrollbar::-webkit-scrollbar-thumb {
		background: rgba(136, 136, 136, 0.5);
		border-radius: 3px;
	}

	.custom-scrollbar::-webkit-scrollbar-thumb:hover {
		background: rgba(85, 85, 85, 0.7);
	}

	/* Firefox scrollbar styling */
	.custom-scrollbar {
		scrollbar-width: thin;
		scrollbar-color: rgba(136, 136, 136, 0.5) transparent;
	}

	/* Add text truncation for long names */
	:global(.truncate-text) {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 100%;
		display: inline-block;
	}

	/* Fixed width tables to prevent horizontal scrolling */
	:global(table.table-fixed) {
		table-layout: fixed;
		width: 100%;
	}

	:global(table.table-fixed td) {
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
