<!-- 
  ImportData.svelte - Component for importing rental company data
  Allows importing CSV or JSON data, validates format, and processes import
-->
<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { createLogger } from '$lib/utils/logger';
	import { loadInitialData } from '$lib/stores/rentalStore';
	import { AlertCircle, Check, X, Upload, RefreshCw, FileUp } from 'lucide-svelte';
	import { convertCountryToCode } from '$lib/utils/countryUtils';

	// Props can be passed from parent
	const props = $props<{
		initialImportType?: 'csv' | 'json';
		initialEntityType?: 'manufacturers' | 'products' | 'rentalCompanies';
	}>();

	const logger = createLogger('ImportData');
	const dispatch = createEventDispatcher<{
		success: { created: any; updated: any; message: string; forceRefresh: boolean };
		error: { errors: string[] };
		resolveMissingEntities: { missingEntities: MissingEntity[]; importSessionId: string };
	}>();

	// Types for missing entity resolution
	interface MissingEntity {
		type: 'manufacturer' | 'product';
		id: string;
		referencedIn: string; // ID of the entity that references this missing entity
		referenceName?: string; // Optional name for better display
	}

	interface ImportSelection {
		manufacturers: boolean;
		products: boolean;
		rentalCompanies: boolean;
	}

	// Component state
	let importType = $state<'csv' | 'json'>(props.initialImportType || 'csv');
	let importData = $state('');
	let isLoading = $state(false);
	let fileInput = $state<HTMLInputElement | null>(null);

	// Initialize placeholder based on props and update when props change
	let placeholder = $state('');

	// This effect updates when importType or initialEntityType changes
	$effect(() => {
		placeholder = getPlaceholderExample(importType, props.initialEntityType || 'manufacturers');
	});

	// Set up initial import selection based on entity type
	let importSelection = $state<ImportSelection>({
		manufacturers: props.initialEntityType === 'manufacturers',
		products: props.initialEntityType === 'products',
		rentalCompanies:
			props.initialEntityType === 'rentalCompanies' || (!props.initialEntityType && true)
	});

	// Entity type selection - single selection from dropdown
	let selectedEntityType = $state<'manufacturers' | 'products' | 'rentalCompanies'>(
		props.initialEntityType || 'manufacturers'
	);

	// Drop zone state
	let dragActive = $state(false);

	// Update entity selection when dropdown changes
	function updateEntitySelection() {
		importSelection = {
			...importSelection,
			manufacturers: selectedEntityType === 'manufacturers',
			products: selectedEntityType === 'products',
			rentalCompanies: selectedEntityType === 'rentalCompanies'
		};

		// Update placeholder when entity type changes
		placeholder = getPlaceholderExample(importType, selectedEntityType);
	}

	// Remove the problematic effect that's causing infinite updates
	// And instead just set the initial state correctly once at component initialization
	// $effect(() => {
	// 	updateEntitySelection();
	// });

	let result = $state<{
		success: boolean;
		message?: string;
		errors?: string[];
		created?: { manufacturers: number; products: number; rentalCompanies: number };
		updated?: { manufacturers: number; products: number; rentalCompanies: number };
		pendingResolution?: boolean;
		importSessionId?: string;
	} | null>(null);

	// Normalize imported data to ensure country codes are in 2-letter format
	function normalizeImportData(data: string, format: 'csv' | 'json'): string {
		if (format === 'json') {
			try {
				const jsonData = JSON.parse(data);
				if (Array.isArray(jsonData) && selectedEntityType === 'rentalCompanies') {
					const normalizedData = jsonData.map((company) => {
						if (company.country) {
							company.country = convertCountryToCode(company.country);
						}
						return company;
					});
					return JSON.stringify(normalizedData, null, 2);
				}
			} catch (e) {
				logger.error('Failed to parse JSON data for normalization:', e);
			}
		} else if (format === 'csv' && selectedEntityType === 'rentalCompanies') {
			// For CSV, we'll do basic line processing
			// This assumes a CSV structure where the country is the 4th field (0-indexed)
			const lines = data.trim().split('\n');
			const normalizedLines = lines.map((line) => {
				const fields = line.split(',').map((f) => f.trim());
				if (fields.length >= 4) {
					fields[3] = convertCountryToCode(fields[3]);
				}
				return fields.join(', ');
			});
			return normalizedLines.join('\n');
		}
		return data;
	}

	// Import data from textarea or file
	async function handleImport() {
		if (!importData.trim()) {
			result = { success: false, message: 'Please provide data to import' };
			return;
		}

		isLoading = true;
		result = null;

		try {
			logger.debug(`Starting ${importType} import with selection:`, importSelection);

			// Normalize data to ensure proper country codes
			const normalizedData = normalizeImportData(importData, importType);

			const response = await fetch('/api/import', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					data: normalizedData,
					format: importType,
					options: {
						importManufacturers: importSelection.manufacturers,
						importProducts: importSelection.products,
						importRentalCompanies: importSelection.rentalCompanies
					}
				})
			});

			const data = await response.json();
			isLoading = false;

			if (response.ok && data.success) {
				result = {
					success: true,
					message: data.message,
					created: data.created,
					updated: data.updated
				};

				// Refresh data after successful import - force a complete refresh
				try {
					// First clear any cached data
					await loadInitialData();

					// Dispatch a custom event to notify parent components about data refresh
					window.dispatchEvent(
						new CustomEvent('data-updated', {
							detail: { forceRefresh: true }
						})
					);
				} catch (err) {
					logger.error('Error refreshing data after import:', err);
				}

				// Dispatch success event
				dispatch('success', {
					created: data.created,
					updated: data.updated,
					message: data.message,
					forceRefresh: true
				});
			} else if (data.missingEntities && data.missingEntities.length > 0) {
				// We need user input to resolve missing entities
				logger.debug('Missing entities detected:', data.missingEntities);
				result = {
					success: false,
					message: 'Missing entities need to be resolved before importing',
					pendingResolution: true,
					importSessionId: data.importSessionId
				};

				// Dispatch event for parent component to handle resolution
				dispatch('resolveMissingEntities', {
					missingEntities: data.missingEntities,
					importSessionId: data.importSessionId
				});
			} else {
				result = {
					success: false,
					message: data.message || data.error || 'Import failed',
					errors: data.errors || [data.error || 'Unknown error']
				};

				// Dispatch error event
				dispatch('error', { errors: result.errors || [] });
			}
		} catch (error) {
			logger.error('Import error:', error);
			isLoading = false;
			result = {
				success: false,
				message: error instanceof Error ? error.message : 'Unknown error during import'
			};

			// Dispatch error event
			dispatch('error', { errors: [result.message || 'Unknown error'] });
		}
	}

	// Handle file upload
	function handleFileUpload(event: Event) {
		const input = event.target as HTMLInputElement;
		const file = input.files?.[0];
		processFile(file);
	}

	// Handle import type change
	function handleImportTypeChange(newType: 'csv' | 'json') {
		importType = newType;
		placeholder = getPlaceholderExample(newType, selectedEntityType);
	}

	// Process the uploaded file
	function processFile(file: File | undefined) {
		if (!file) return;

		// Determine import type based on file extension
		let newImportType = importType;
		if (file.name.toLowerCase().endsWith('.json')) {
			newImportType = 'json';
		} else if (
			file.name.toLowerCase().endsWith('.csv') ||
			file.name.toLowerCase().endsWith('.txt')
		) {
			newImportType = 'csv';
		}

		// Update import type if changed
		if (newImportType !== importType) {
			handleImportTypeChange(newImportType);
		}

		// Read file content
		const reader = new FileReader();
		reader.onload = (e) => {
			importData = (e.target?.result as string) || '';
		};
		reader.readAsText(file);
	}

	// Clear the form
	function handleClear() {
		importData = '';
		result = null;
		if (fileInput) fileInput.value = '';
	}

	// Get example placeholder based on selected import options
	function getPlaceholderExample(
		type: 'csv' | 'json',
		entityType: 'manufacturers' | 'products' | 'rentalCompanies'
	): string {
		if (type === 'csv') {
			if (entityType === 'rentalCompanies') {
				return 'Format for rental companies:\nK1234, Example Company GmbH, 123 Main St, Berlin, DE, 12345, https://example.com, +123456789, info@example.com\n\n# Products follow company line (matched to last company defined above)\n559-1065-2012, Green-GO MCXEXT, Green-GO, 15';
			} else if (entityType === 'products') {
				return 'Format for products:\n# productId, productName, manufacturerName, quantity\n559-1065-2012, Green-GO MCXEXT, Green-GO, 15\n511-5083-3310, Stagemaker SL10, Stagemaker, 3';
			} else if (entityType === 'manufacturers') {
				return 'Format for manufacturers:\n# manufacturerId, manufacturerName\n511, Stagemaker\n559, Green-GO';
			}
		} else {
			// JSON examples
			if (entityType === 'rentalCompanies') {
				return '[\n  {\n    "id": "K1234",\n    "name": "Example Company GmbH",\n    "address": "123 Main St",\n    "city": "Berlin",\n    "country": "DE",\n    "postalCode": "12345",\n    "website": "https://example.com",\n    "phone": "+12345678",\n    "email": "info@example.com",\n    "inventory": [\n      { "productId": "559-1065-2012", "productName": "Green-GO MCXEXT", "manufacturerName": "Green-GO", "quantity": 15 }\n    ]\n  }\n]';
			} else if (entityType === 'products') {
				return '[\n  {\n    "id": "559-1065-2012",\n    "name": "Green-GO MCXEXT",\n    "manufacturerId": "559",\n    "isActive": true\n  },\n  {\n    "id": "511-5083-3310",\n    "name": "Stagemaker SL10",\n    "manufacturerId": "511",\n    "isActive": true\n  }\n]';
			} else if (entityType === 'manufacturers') {
				return '[\n  {\n    "id": "511",\n    "name": "Stagemaker",\n    "isActive": true\n  },\n  {\n    "id": "559",\n    "name": "Green-GO",\n    "isActive": true\n  }\n]';
			}
		}
		return '';
	}

	// Drag and drop handlers
	function handleDragEnter(e: DragEvent) {
		e.preventDefault();
		e.stopPropagation();
		dragActive = true;
	}

	function handleDragLeave(e: DragEvent) {
		e.preventDefault();
		e.stopPropagation();
		dragActive = false;
	}

	function handleDragOver(e: DragEvent) {
		e.preventDefault();
		e.stopPropagation();
		dragActive = true;
	}

	function handleDrop(e: DragEvent) {
		e.preventDefault();
		e.stopPropagation();
		dragActive = false;

		if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
			processFile(e.dataTransfer.files[0]);
		}
	}

	function triggerFileInput() {
		fileInput?.click();
	}

	// Handle keyboard events for accessibility
	function handleKeyDown(e: KeyboardEvent) {
		// Trigger file input on Enter or Space
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			triggerFileInput();
		}
	}
</script>

<div class="rounded-b-xl bg-white">
	<!-- Format and entity type selection -->
	<div class="grid grid-cols-1 gap-4 px-4 py-4">
		<!-- File upload / Drop zone -->
		<div
			class="border-2 {dragActive
				? 'border-blue-500 bg-blue-50'
				: 'border-gray-300'} rounded-lg p-4 text-center transition-colors"
			ondragenter={handleDragEnter}
			ondragleave={handleDragLeave}
			ondragover={handleDragOver}
			ondrop={handleDrop}
			onclick={triggerFileInput}
			onkeydown={handleKeyDown}
			role="button"
			tabindex="0"
			aria-label="Upload file by clicking or dropping files here"
		>
			<input
				id="file-upload"
				type="file"
				accept=".csv,.json,.txt"
				onchange={handleFileUpload}
				bind:this={fileInput}
				class="hidden"
			/>
			<div class="flex flex-col items-center justify-center py-4">
				<FileUp size={32} class="mb-2 text-gray-400" />
				<p class="mb-1 text-sm font-medium text-gray-700">
					Drag and drop a file here, or click to select
				</p>
				<p class="text-xs text-gray-500">Supports CSV and JSON files</p>
				{#if fileInput?.files?.[0]}
					<div class="mt-2 rounded bg-blue-100 px-3 py-1 text-sm">
						Selected: {fileInput.files[0].name}
					</div>
				{/if}
			</div>
		</div>
	</div>

	<!-- Text area for data -->
	<div class="px-4 pb-4">
		<textarea
			id="import-data"
			bind:value={importData}
			rows="6"
			class="max-h-80 w-full rounded border border-gray-300 p-3 font-mono text-sm"
			{placeholder}
			aria-label="Import data input"
		></textarea>
	</div>

	<!-- Action buttons -->
	<div class="flex items-center justify-end gap-2 rounded-b-xl border-t border-gray-200 px-4 py-3">
		<button
			class="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
			onclick={handleClear}
			disabled={isLoading || !importData.trim()}
		>
			<X size={16} class="mr-2" />
			Clear
		</button>
		<button
			class="disabled:text-white-500 inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none disabled:bg-gray-400"
			onclick={handleImport}
			disabled={isLoading || !importData.trim()}
		>
			{#if isLoading}
				<RefreshCw size={16} class="mr-2 animate-spin" />
				Importing...
			{:else}
				<Upload size={16} class="mr-2" />
				Import
			{/if}
		</button>
	</div>

	<!-- Results section -->
	{#if result}
		<div
			class="mx-4 mt-4 mb-4 rounded border p-3 {result.success
				? 'border-green-200 bg-green-50'
				: 'border-red-200 bg-red-50'}"
		>
			<h4 class="mb-1 flex items-center text-sm font-medium">
				{#if result.success}
					<Check size={16} class="mr-2 text-green-600" />
					Import Successful
				{:else}
					<AlertCircle size={16} class="mr-2 text-red-600" />
					{result.pendingResolution ? 'Action Required' : 'Import Failed'}
				{/if}
			</h4>
			<p class="mb-2 text-sm">{result.message}</p>

			{#if result.success && result.created}
				<div class="rounded border border-gray-200 bg-white p-2">
					<div class="grid grid-cols-2 gap-1 text-sm">
						<div>Created: {result.created.manufacturers} manufacturers</div>
						<div>Created: {result.created.products} products</div>
						<div>Created: {result.created.rentalCompanies} companies</div>
						<div>Updated: {result.updated?.rentalCompanies || 0} companies</div>
					</div>
				</div>
			{/if}

			{#if !result.success && result.errors && result.errors.length > 0}
				<div class="rounded border border-red-200 bg-white p-2">
					<div class="mb-1 text-sm font-medium">Errors:</div>
					<ul class="ml-4 list-disc text-sm text-red-700">
						{#each result.errors as error}
							<li>{error}</li>
						{/each}
					</ul>
				</div>
			{/if}

			{#if result.pendingResolution}
				<div class="mt-2 rounded border border-yellow-200 bg-yellow-50 p-2">
					<p class="text-sm font-medium">Missing entities need to be resolved.</p>
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	/* Base styling for consistent appearance */
	:global(.import-modal) {
		max-width: 600px;
	}
</style>
