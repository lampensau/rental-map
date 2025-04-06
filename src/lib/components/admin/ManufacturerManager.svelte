<script lang="ts">
	import {
		Factory,
		PlusCircle,
		Edit,
		Save,
		RefreshCw,
		X,
		CheckCircle,
		XCircle,
		Trash2,
		ArrowUp,
		ArrowDown,
		HelpCircle
	} from 'lucide-svelte';
	import type { Manufacturer } from '$lib/types';
	import * as firestoreService from '$lib/services/firestore';
	import { manufacturersStore } from '$lib/stores/rentalStore';
	import { sortItems, toggleSort, sortByName } from './utils/sorting';
	import ConfirmDeleteModal from './ui/ConfirmDeleteModal.svelte';
	import { isValidManufacturerId } from '$lib/utils/validation';

	// Props
	const props = $props<{
		isAdmin: boolean;
	}>();

	// State variables
	let loading = $state(false);
	let error = $state('');
	let manufacturers = $state<Manufacturer[]>([]);
	let editingManufacturer = $state<Manufacturer | null>(null);
	let newManufacturer = $state({ id: '', name: '', isActive: true });
	let confirmDeleteModal = $state<{ id: string; name: string } | null>(null);

	// Sorting state
	let sortField = $state<keyof Manufacturer>('name');
	let sortDirection = $state<'asc' | 'desc'>('asc');

	// Subscribe to the store
	$effect(() => {
		const unsubscribe = manufacturersStore.subscribe((value) => {
			manufacturers = value;
		});

		return unsubscribe;
	});

	// Sorting functions
	function handleSort(field: keyof Manufacturer) {
		[sortDirection, sortField] = toggleSort(field, sortField, sortDirection);
	}

	function getSortedManufacturers(): Manufacturer[] {
		return sortItems(manufacturers, sortField, sortDirection);
	}

	// CRUD operations
	async function handleCreateManufacturer(e: Event) {
		e.preventDefault();
		if (!newManufacturer.name) {
			error = 'Herstellername ist erforderlich';
			return;
		}

		if (!newManufacturer.id) {
			error = 'Hersteller-ID ist erforderlich';
			return;
		}

		if (!isValidManufacturerId(newManufacturer.id)) {
			error = 'Hersteller-ID muss eine 3-stellige Zahl sein';
			return;
		}

		// Check if manufacturer ID already exists
		const existingManufacturer = manufacturers.find((m) => m.id === newManufacturer.id);
		if (existingManufacturer) {
			error = `Hersteller-ID ${newManufacturer.id} wird bereits verwendet`;
			return;
		}

		try {
			loading = true;
			error = '';

			const manufacturer = await firestoreService.createManufacturer({
				id: newManufacturer.id, // Pass the ID explicitly
				name: newManufacturer.name,
				isActive: newManufacturer.isActive,
				products: []
			});

			manufacturersStore.update((items) => sortByName([...items, manufacturer]));
			newManufacturer = { id: '', name: '', isActive: true };
		} catch (err) {
			if (err instanceof Error) {
				error = err.message;
			} else {
				error = 'Fehler beim Erstellen des Herstellers';
			}
		} finally {
			loading = false;
		}
	}

	async function saveEditedManufacturer() {
		if (!editingManufacturer) return;

		try {
			loading = true;
			error = '';

			if (!editingManufacturer.name) {
				error = 'Herstellername ist erforderlich';
				return;
			}

			if (!editingManufacturer.id) {
				error = 'Hersteller-ID ist erforderlich';
				return;
			}

			if (!isValidManufacturerId(editingManufacturer.id)) {
				error = 'Hersteller-ID muss eine 3-stellige Zahl sein';
				return;
			}

			// Make sure the ID isn't already in use by another manufacturer
			const manufacturerId = editingManufacturer!.id;
			const originalId = editingManufacturer!.id;
			const existingManufacturer = manufacturers.find(
				(m) => m.id === manufacturerId && m.id !== originalId
			);
			if (existingManufacturer) {
				error = `Hersteller-ID ${manufacturerId} wird bereits verwendet`;
				return;
			}

			// Save the edited manufacturer
			await firestoreService.updateManufacturer(editingManufacturer.id, {
				name: editingManufacturer.name,
				isActive: editingManufacturer.isActive,
				id: editingManufacturer.id
			});

			manufacturersStore.update((items) =>
				items.map((item) =>
					item.id === editingManufacturer?.id ? { ...editingManufacturer } : item
				)
			);

			editingManufacturer = null;
		} catch (err) {
			if (err instanceof Error) {
				error = err.message;
			} else {
				error = 'Fehler beim Aktualisieren des Herstellers';
			}
		} finally {
			loading = false;
		}
	}

	function startEditingManufacturer(manufacturer: Manufacturer) {
		editingManufacturer = { ...manufacturer };
	}

	function cancelEditingManufacturer() {
		editingManufacturer = null;
	}

	function showDeleteConfirmation(id: string, name: string) {
		confirmDeleteModal = { id, name };
	}

	function cancelDelete() {
		confirmDeleteModal = null;
	}

	async function confirmDelete() {
		if (!confirmDeleteModal) return;

		try {
			loading = true;
			error = '';

			await firestoreService.deleteManufacturer(confirmDeleteModal.id);
			manufacturersStore.update((items) =>
				items.filter((item) => item.id !== confirmDeleteModal?.id)
			);
			confirmDeleteModal = null;
		} catch (err) {
			if (err instanceof Error) {
				error = err.message;
			} else {
				error = 'Fehler beim Löschen';
			}
		} finally {
			loading = false;
		}
	}

	async function handleToggleManufacturerStatus(id: string, isActive: boolean) {
		try {
			loading = true;
			error = '';

			await firestoreService.updateManufacturer(id, { isActive: !isActive });
			manufacturersStore.update((items) =>
				items.map((item) => (item.id === id ? { ...item, isActive: !isActive } : item))
			);
		} catch (err) {
			if (err instanceof Error) {
				error = err.message;
			} else {
				error = 'Fehler beim Ändern des Status';
			}
		} finally {
			loading = false;
		}
	}
</script>

<div>
	{#if error}
		<div class="mb-4 rounded-md bg-red-50 p-4 text-red-800">
			{error}
		</div>
	{/if}

	<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
		<div class="lg:col-span-1">
			{#if editingManufacturer}
				<!-- Edit Manufacturer Form -->
				<div class="rounded-md border border-blue-200 bg-blue-50 p-4">
					<h3 class="mb-3 flex items-center text-lg font-medium">
						<Edit size={18} class="mr-2" />
						Hersteller bearbeiten
					</h3>
					<form onsubmit={saveEditedManufacturer}>
						<div class="mb-3">
							<input
								type="text"
								placeholder="Herstellername"
								class="w-full rounded-md border border-gray-300 p-2"
								bind:value={editingManufacturer.name}
								aria-label="Herstellername"
								title="Name des Herstellers"
								required
							/>
						</div>
						<div class="mb-3">
							<input
								type="text"
								placeholder="Hersteller-ID (3-stellige Zahl)"
								class="w-full rounded-md border border-gray-300 p-2"
								bind:value={editingManufacturer.id}
								maxlength="3"
								pattern="[0-9]{3}"
								title="Eindeutige Hersteller-ID (3-stellige Zahl)"
								aria-label="Hersteller-ID"
								required
							/>
							<p class="mt-1 text-xs text-gray-500">
								Hinweis: Die Hersteller-ID wird für alle Produkte dieses Herstellers verwendet.
							</p>
						</div>
						<div class="mb-3 flex items-center justify-between">
							<label
								class="flex cursor-pointer items-center gap-2"
								title="Aktiviert oder deaktiviert den Hersteller"
							>
								<div class="relative">
									<input
										type="checkbox"
										class="peer sr-only"
										bind:checked={editingManufacturer.isActive}
									/>
									<div
										class="h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-green-600 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-5"
									></div>
								</div>
								<span>Aktiv</span>
							</label>
							<div class="flex space-x-2">
								<button
									type="submit"
									class="flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-white disabled:bg-blue-300"
									disabled={loading}
									title="Änderungen speichern"
									aria-label="Speichern"
								>
									{#if loading}
										<RefreshCw size={16} class="mr-1 animate-spin" />
										Speichern...
									{:else}
										<Save size={16} class="mr-1" />
										Speichern
									{/if}
								</button>
								<button
									type="button"
									onclick={cancelEditingManufacturer}
									class="flex items-center rounded-md bg-gray-200 px-3 py-1.5 text-gray-700"
									title="Bearbeitung abbrechen"
									aria-label="Abbrechen"
								>
									<X size={16} />
								</button>
							</div>
						</div>
					</form>
				</div>
			{:else}
				<!-- Create Manufacturer Form -->
				<div class="rounded-md border border-gray-200 bg-gray-50 p-4">
					<h3 class="mb-3 flex items-center text-lg font-medium">
						<PlusCircle size={18} class="mr-2" />
						Neuer Hersteller
					</h3>
					<form onsubmit={handleCreateManufacturer}>
						<div class="mb-3">
							<input
								type="text"
								placeholder="Herstellername"
								class="mb-3 w-full rounded-md border border-gray-300 p-2"
								bind:value={newManufacturer.name}
								aria-label="Herstellername"
								title="Name des Herstellers"
								required
							/>
							<input
								type="text"
								placeholder="Hersteller-ID (3-stellige Zahl)"
								class="w-full rounded-md border border-gray-300 p-2"
								bind:value={newManufacturer.id}
								maxlength="3"
								pattern="[0-9]{3}"
								title="Eindeutige Hersteller-ID (3-stellige Zahl)"
								aria-label="Hersteller-ID"
								required
							/>
						</div>
						<div class="flex items-center justify-between">
							<label
								class="flex cursor-pointer items-center gap-2"
								title="Aktiviert oder deaktiviert den Hersteller"
							>
								<div class="relative">
									<input
										type="checkbox"
										class="peer sr-only"
										bind:checked={newManufacturer.isActive}
									/>
									<div
										class="h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-green-600 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-5"
									></div>
								</div>
								<span>Aktiv</span>
							</label>
							<button
								type="submit"
								class="flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-white disabled:bg-blue-300"
								disabled={loading}
								title="Neuen Hersteller hinzufügen"
								aria-label="Hersteller hinzufügen"
							>
								{#if loading}
									<RefreshCw size={16} class="mr-1 animate-spin" />
									Hinzufügen...
								{:else}
									<PlusCircle size={16} class="mr-1" />
									Hinzufügen
								{/if}
							</button>
						</div>
					</form>
				</div>
			{/if}
		</div>

		<div class="lg:col-span-2">
			<div class="overflow-x-auto">
				<div class="custom-scrollbar max-h-[60vh] overflow-y-auto">
					<table class="min-w-full table-fixed divide-y divide-gray-200">
						<thead class="sticky top-0 z-10 bg-gray-50">
							<tr>
								<th
									onclick={() => handleSort('name')}
									class="w-[60%] cursor-pointer px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
								>
									Name
									{#if sortField === 'name'}
										{#if sortDirection === 'asc'}
											<ArrowUp size={16} class="ml-1 inline" />
										{:else}
											<ArrowDown size={16} class="ml-1 inline" />
										{/if}
									{/if}
								</th>
								<th
									onclick={() => handleSort('isActive')}
									class="w-[10%] cursor-pointer px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
								>
									Status
									{#if sortField === 'isActive'}
										{#if sortDirection === 'asc'}
											<ArrowUp size={16} class="ml-1 inline" />
										{:else}
											<ArrowDown size={16} class="ml-1 inline" />
										{/if}
									{/if}
								</th>
								<th
									class="w-[30%] px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase"
								>
									Aktionen
								</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-200 bg-white">
							{#each getSortedManufacturers() as manufacturer}
								<tr class={editingManufacturer?.id === manufacturer.id ? 'bg-blue-50' : ''}>
									<td class="px-6 py-4 whitespace-nowrap">
										<span class="truncate-text">{manufacturer.name}</span>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										{#if manufacturer.isActive}
											<span class="flex items-center text-green-800">
												<CheckCircle size={16} class="mr-1" />
												Aktiv
											</span>
										{:else}
											<span class="flex items-center text-red-800">
												<XCircle size={16} class="mr-1" />
												Inaktiv
											</span>
										{/if}
									</td>
									<td class="flex justify-end space-x-2 px-6 py-4 text-right whitespace-nowrap">
										<button
											onclick={() => startEditingManufacturer(manufacturer)}
											class="flex items-center rounded bg-blue-100 px-2 py-1 text-blue-800 hover:bg-blue-200"
											title="Hersteller bearbeiten"
											aria-label="Hersteller bearbeiten"
											disabled={editingManufacturer !== null}
										>
											<Edit size={16} />
										</button>
										<button
											onclick={() =>
												handleToggleManufacturerStatus(manufacturer.id, manufacturer.isActive)}
											class={`flex items-center rounded px-2 py-1 ${manufacturer.isActive ? 'bg-orange-100 text-orange-800 hover:bg-orange-200' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}
											title={manufacturer.isActive
												? 'Hersteller deaktivieren'
												: 'Hersteller aktivieren'}
											aria-label={manufacturer.isActive
												? 'Hersteller deaktivieren'
												: 'Hersteller aktivieren'}
										>
											{#if manufacturer.isActive}
												<XCircle size={16} />
											{:else}
												<CheckCircle size={16} />
											{/if}
										</button>
										<button
											onclick={() => showDeleteConfirmation(manufacturer.id, manufacturer.name)}
											class="flex items-center rounded bg-red-100 px-2 py-1 text-red-800 hover:bg-red-200"
											title="Hersteller löschen"
											aria-label="Hersteller löschen"
										>
											<Trash2 size={16} />
										</button>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>

<ConfirmDeleteModal
	show={confirmDeleteModal !== null}
	itemName={confirmDeleteModal?.name || ''}
	{loading}
	onConfirm={confirmDelete}
	onCancel={cancelDelete}
/>
