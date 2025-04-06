<!--
  MissingEntityResolver.svelte - Component for resolving missing entities during import
  Allows users to provide details for entities that are referenced but don't exist
-->
<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { createLogger } from '$lib/utils/logger';
	import { X, AlertTriangle, Info, Plus, RefreshCw } from 'lucide-svelte';
	import { manufacturersStore, productsStore } from '$lib/stores/rentalStore';
	import type { Manufacturer, Product } from '$lib/types';

	const logger = createLogger('MissingEntityResolver');
	const dispatch = createEventDispatcher<{
		complete: { resolutions: Record<string, EntityResolution> };
		cancel: undefined;
	}>();

	// Props
	interface MissingEntity {
		type: 'manufacturer' | 'product';
		id: string;
		referencedIn: string; // ID of the entity referencing this entity
		referenceName?: string; // Optional name that was referenced
	}

	interface EntityResolution {
		type: 'manufacturer' | 'product';
		id: string;
		action: 'create' | 'skip' | 'reference';
		name?: string; // Name for new entity if creating
		referenceId?: string; // ID of existing entity to use as reference
	}

	const props = $props<{
		missingEntities: MissingEntity[];
		importSessionId: string;
		show: boolean;
	}>();

	// Component state
	let loading = $state(false);
	let resolutions = $state<Record<string, EntityResolution>>({});
	let manufacturers = $state<Manufacturer[]>([]);
	let products = $state<Product[]>([]);
	let error = $state('');

	// Initialize resolutions objects when component is created
	// This avoids infinite updates by initializing once instead of in an effect
	$effect(() => {
		// Only run this initialization once when props are available and resolutions is empty
		if (props.missingEntities.length > 0 && Object.keys(resolutions).length === 0) {
			const resObj: Record<string, EntityResolution> = {};
			props.missingEntities.forEach((entity: MissingEntity) => {
				resObj[entity.id] = {
					type: entity.type,
					id: entity.id,
					action: 'create',
					name: entity.referenceName || ''
				};
			});
			resolutions = resObj;
			logger.debug('Initialized resolutions:', resolutions);
		}
	});

	// Load existing entities from stores
	$effect(() => {
		const unsubscribeManufacturers = manufacturersStore.subscribe((value) => {
			manufacturers = value;
		});

		const unsubscribeProducts = productsStore.subscribe((value) => {
			products = value;
		});

		return () => {
			unsubscribeManufacturers();
			unsubscribeProducts();
		};
	});

	// Handle cancel button click
	function handleCancel() {
		dispatch('cancel');
	}

	// Handle submit button click
	async function handleSubmit() {
		if (!validateResolutions()) {
			return;
		}

		loading = true;
		error = '';

		try {
			logger.debug('Submitting resolutions:', resolutions);
			logger.debug('Import session ID:', props.importSessionId);

			// Send resolutions to the API
			const response = await fetch(`/api/import`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					importSessionId: props.importSessionId,
					resolutions
				})
			});

			const data = await response.json();
			logger.debug('Resolution response:', data);

			if (response.ok && data.success) {
				dispatch('complete', { resolutions });
			} else {
				error = data.error || 'Failed to resolve entities';
				logger.error('Resolution failed:', error);
			}
		} catch (err) {
			error = err instanceof Error ? err.message : 'Unknown error occurred';
			logger.error('Exception during resolution:', error);
		} finally {
			loading = false;
		}
	}

	// Validate all resolutions before submission
	function validateResolutions(): boolean {
		let valid = true;

		Object.values(resolutions).forEach((resolution) => {
			if (resolution.action === 'create' && (!resolution.name || resolution.name.trim() === '')) {
				error = `Name is required for creating new ${resolution.type} with ID ${resolution.id}`;
				valid = false;
			}

			if (resolution.action === 'reference' && !resolution.referenceId) {
				error = `Reference ID is required for ${resolution.type} with ID ${resolution.id}`;
				valid = false;
			}
		});

		if (!valid) {
			logger.warn('Resolution validation failed:', error);
		}

		return valid;
	}

	// Update a specific resolution
	function updateResolution(id: string, change: Partial<EntityResolution>) {
		if (id in resolutions) {
			resolutions = {
				...resolutions,
				[id]: {
					...resolutions[id],
					...change
				}
			};
			logger.debug(`Updated resolution for ${id}:`, resolutions[id]);
		}
	}

	// Get appropriate entities for reference selections based on entity type
	function getReferenceOptions(entityType: 'manufacturer' | 'product') {
		return entityType === 'manufacturer'
			? manufacturers.filter((m) => m.isActive)
			: products.filter((p) => p.isActive);
	}

	// Get entity name for display
	function getEntityTypeName(type: 'manufacturer' | 'product'): string {
		return type === 'manufacturer' ? 'Hersteller' : 'Produkt';
	}

	// Event handlers
	function handleActionChange(id: string, action: 'create' | 'skip' | 'reference') {
		updateResolution(id, { action });
	}

	function handleNameChange(id: string, event: Event) {
		const target = event.target as HTMLInputElement | null;
		if (target) {
			updateResolution(id, { name: target.value });
		}
	}

	function handleReferenceChange(id: string, event: Event) {
		const target = event.target as HTMLSelectElement | null;
		if (target) {
			updateResolution(id, { referenceId: target.value });
		}
	}
</script>

{#if props.show}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
		<div class="flex max-h-[90vh] w-full max-w-3xl flex-col rounded-lg bg-white shadow-xl">
			<div class="flex items-center justify-between border-b p-4">
				<h2 class="flex items-center text-xl font-bold">
					<AlertTriangle size={20} class="mr-2 text-yellow-500" />
					Missing Entities Resolution
				</h2>
				<button
					onclick={handleCancel}
					class="rounded-full p-2 hover:bg-gray-200"
					aria-label="Close"
				>
					<X size={20} />
				</button>
			</div>

			<div class="border-b bg-yellow-50 p-4">
				<p class="flex items-start">
					<Info size={20} class="mt-0.5 mr-2 flex-shrink-0 text-blue-500" />
					<span>
						The import process found references to entities that don't exist in the system. Please
						specify how to handle each missing entity before continuing.
					</span>
				</p>
			</div>

			{#if error}
				<div class="mx-4 mt-4 rounded border border-red-200 bg-red-50 p-3 text-red-700">
					{error}
				</div>
			{/if}

			<div class="flex-grow overflow-y-auto p-4">
				{#if props.missingEntities.length === 0}
					<p class="py-4 text-center text-gray-500">No missing entities to resolve.</p>
				{:else}
					<div class="space-y-6">
						{#each props.missingEntities as entity (entity.id)}
							<div class="rounded-lg border p-4">
								<h3 class="mb-2 font-medium">
									{getEntityTypeName(entity.type)} ID: <span class="font-mono">{entity.id}</span>
								</h3>
								<p class="mb-3 text-sm text-gray-600">
									Referenced in: {entity.referencedIn}
									{#if entity.referenceName}
										<span class="ml-1">as "{entity.referenceName}"</span>
									{/if}
								</p>

								<div class="space-y-3">
									<div>
										<p class="mb-2 font-medium">Select an action:</p>
										<div class="space-y-2">
											<label class="flex items-center">
												<input
													type="radio"
													name="action-{entity.id}"
													value="create"
													checked={resolutions[entity.id]?.action === 'create'}
													onclick={() => handleActionChange(entity.id, 'create')}
													class="mr-2"
												/>
												<span>Create new {getEntityTypeName(entity.type)}</span>
											</label>

											<label class="flex items-center">
												<input
													type="radio"
													name="action-{entity.id}"
													value="reference"
													checked={resolutions[entity.id]?.action === 'reference'}
													onclick={() => handleActionChange(entity.id, 'reference')}
													class="mr-2"
												/>
												<span>Reference existing {getEntityTypeName(entity.type)}</span>
											</label>

											<label class="flex items-center">
												<input
													type="radio"
													name="action-{entity.id}"
													value="skip"
													checked={resolutions[entity.id]?.action === 'skip'}
													onclick={() => handleActionChange(entity.id, 'skip')}
													class="mr-2"
												/>
												<span>Skip (ignore this reference)</span>
											</label>
										</div>
									</div>

									{#if resolutions[entity.id]?.action === 'create'}
										<div class="mt-2">
											<label for="name-{entity.id}" class="block text-sm font-medium text-gray-700"
												>Name</label
											>
											<input
												type="text"
												id="name-{entity.id}"
												class="w-full rounded border p-2"
												value={resolutions[entity.id]?.name || entity.referenceName || ''}
												oninput={(e) => handleNameChange(entity.id, e)}
												placeholder={`Enter ${getEntityTypeName(entity.type)} name`}
											/>
										</div>
									{:else if resolutions[entity.id]?.action === 'reference'}
										<div class="mt-2">
											<select
												id="reference-{entity.id}"
												class="w-full rounded border p-2"
												value={resolutions[entity.id]?.referenceId || ''}
												onchange={(e) => handleReferenceChange(entity.id, e)}
											>
												<option value="">Select a {getEntityTypeName(entity.type)}</option>
												{#each getReferenceOptions(entity.type) as option}
													<option value={option.id}>{option.name || option.id}</option>
												{/each}
											</select>
										</div>
									{/if}
								</div>
							</div>
						{/each}
					</div>
				{/if}
			</div>

			<div class="flex justify-end space-x-2 border-t p-4">
				<button onclick={handleCancel} class="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300">
					Cancel Import
				</button>
				<button
					onclick={handleSubmit}
					disabled={loading || props.missingEntities.length === 0}
					class="flex items-center rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-blue-400"
				>
					{#if loading}
						<RefreshCw size={16} class="mr-2 animate-spin" />
						Processing...
					{:else}
						<Plus size={16} class="mr-2" />
						Apply & Continue Import
					{/if}
				</button>
			</div>
		</div>
	</div>
{/if}
