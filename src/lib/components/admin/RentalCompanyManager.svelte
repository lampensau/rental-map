<script lang="ts">
	import {
		Building,
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
		MapPin,
		Boxes,
		HelpCircle,
		Globe
	} from 'lucide-svelte';
	import type { RentalCompany } from '$lib/types';
	import * as firestoreService from '$lib/services/firestore';
	import * as geocodingService from '$lib/services/geocoding';
	import { rentalCompaniesStore, refreshProductsData } from '$lib/stores/rentalStore';
	import { sortItems, toggleSort, sortByName } from './utils/sorting';
	import ConfirmDeleteModal from './ui/ConfirmDeleteModal.svelte';
	import InventoryManager from './InventoryManager.svelte';
	import { convertCountryToCode, formatStandardAddress } from '$lib/utils/countryUtils';
	import { validateEntityId } from '$lib/utils/validation';

	// Props
	const props = $props<{
		isAdmin: boolean;
	}>();

	// State variables
	let loading = $state(false);
	let error = $state('');
	let rentalCompanies = $state<RentalCompany[]>([]);
	let editingRentalCompany = $state<RentalCompany | null>(null);
	let confirmDeleteModal = $state<{ id: string; name: string } | null>(null);
	let selectedRentalCompany = $state<RentalCompany | null>(null);
	let newRentalCompanyId = $state('K');

	// Function to create an empty rental company
	function createEmptyRentalCompany(): Omit<RentalCompany, 'id'> {
		return {
			name: '',
			address: '',
			city: '',
			postalCode: '',
			country: 'DE', // Default to Germany (DE)
			latitude: 0,
			longitude: 0,
			website: '',
			phone: '',
			email: '',
			isActive: true,
			inventory: []
		};
	}

	let newRentalCompany = $state(createEmptyRentalCompany());

	// Sorting state
	let sortField = $state<keyof RentalCompany>('name');
	let sortDirection = $state<'asc' | 'desc'>('asc');

	// Subscribe to the store
	$effect(() => {
		const unsubscribe = rentalCompaniesStore.subscribe((value) => {
			rentalCompanies = value;

			// Remove the reactive updates that cause infinite loops
			// We don't need to update these objects here as they're already managed
			// in their respective functions
		});

		return unsubscribe;
	});

	// Sorting functions
	function handleSort(field: keyof RentalCompany) {
		[sortDirection, sortField] = toggleSort(field, sortField, sortDirection);
	}

	function getSortedRentalCompanies(): RentalCompany[] {
		return sortItems(rentalCompanies, sortField, sortDirection);
	}

	// Helper function to normalize website URL (add https:// if not present)
	function normalizeWebsiteUrl(url: string): string {
		if (!url) return '';
		// If URL already starts with http:// or https://, return as is
		if (url.startsWith('http://') || url.startsWith('https://')) {
			return url;
		}
		// Otherwise, prepend https://
		return `https://${url}`;
	}

	// Format address for display
	function formatAddress(company: RentalCompany): string {
		return formatStandardAddress(
			company.address,
			company.postalCode,
			company.city,
			company.country
		);
	}

	// CRUD operations
	async function handleCreateRentalCompany(e: Event) {
		e.preventDefault();
		if (!newRentalCompany.name) {
			error = 'Firmenname ist erforderlich';
			return;
		}

		if (!newRentalCompanyId || !newRentalCompanyId.startsWith('K')) {
			error = 'Firmen-ID muss mit K beginnen';
			return;
		}

		if (!newRentalCompany.address || !newRentalCompany.city || !newRentalCompany.postalCode) {
			error = 'Adresse, Stadt und PLZ sind erforderlich';
			return;
		}

		if (!newRentalCompany.country) {
			error = 'Land ist erforderlich';
			return;
		}

		const validation = validateEntityId('rental-company', newRentalCompanyId);
		if (!validation.valid) {
			error = validation.message || 'Ungültige Firmen-ID';
			return;
		}

		try {
			loading = true;
			error = '';

			// Normalize the website URL
			newRentalCompany.website = normalizeWebsiteUrl(newRentalCompany.website || '');

			const address = formatStandardAddress(
				newRentalCompany.address,
				newRentalCompany.postalCode,
				newRentalCompany.city,
				newRentalCompany.country
			);

			const coordinates = await geocodingService.geocodeAddress(address);

			const rentalCompany = await firestoreService.createRentalCompany({
				id: newRentalCompanyId,
				...newRentalCompany,
				latitude: coordinates?.latitude || 0,
				longitude: coordinates?.longitude || 0
			});

			rentalCompaniesStore.update((items) => sortByName([...items, rentalCompany]));
			newRentalCompany = createEmptyRentalCompany();
			newRentalCompanyId = 'K';
		} catch (err) {
			if (err instanceof Error) {
				error = err.message;
			} else {
				error = 'Fehler beim Erstellen der DryHire-Firma';
			}
		} finally {
			loading = false;
		}
	}

	async function saveEditedRentalCompany() {
		if (!editingRentalCompany) return;

		try {
			loading = true;
			error = '';

			if (!editingRentalCompany.name) {
				error = 'Firmenname ist erforderlich';
				return;
			}

			if (
				!editingRentalCompany.address ||
				!editingRentalCompany.city ||
				!editingRentalCompany.postalCode
			) {
				error = 'Adresse, Stadt und PLZ sind erforderlich';
				return;
			}

			if (!editingRentalCompany.country) {
				error = 'Land ist erforderlich';
				return;
			}

			// Normalize the website URL
			editingRentalCompany.website = normalizeWebsiteUrl(editingRentalCompany.website || '');

			// Convert country name to code if necessary
			if (editingRentalCompany.country && editingRentalCompany.country.length > 2) {
				editingRentalCompany.country = convertCountryToCode(editingRentalCompany.country) || 'DE';
			}

			const address = formatStandardAddress(
				editingRentalCompany.address,
				editingRentalCompany.postalCode,
				editingRentalCompany.city,
				editingRentalCompany.country
			);

			const coordinates = await geocodingService.geocodeAddress(address);

			await firestoreService.updateRentalCompany(editingRentalCompany.id, {
				name: editingRentalCompany.name,
				address: editingRentalCompany.address,
				city: editingRentalCompany.city,
				postalCode: editingRentalCompany.postalCode,
				country: editingRentalCompany.country,
				latitude: coordinates?.latitude || editingRentalCompany.latitude,
				longitude: coordinates?.longitude || editingRentalCompany.longitude,
				website: editingRentalCompany.website,
				phone: editingRentalCompany.phone,
				email: editingRentalCompany.email,
				isActive: editingRentalCompany.isActive
			});

			rentalCompaniesStore.update((items) =>
				items.map((item) =>
					item.id === editingRentalCompany?.id
						? {
								...item,
								name: editingRentalCompany.name,
								address: editingRentalCompany.address,
								city: editingRentalCompany.city,
								postalCode: editingRentalCompany.postalCode,
								country: editingRentalCompany.country,
								latitude: coordinates?.latitude || editingRentalCompany.latitude,
								longitude: coordinates?.longitude || editingRentalCompany.longitude,
								website: editingRentalCompany.website,
								phone: editingRentalCompany.phone,
								email: editingRentalCompany.email,
								isActive: editingRentalCompany.isActive
							}
						: item
				)
			);

			editingRentalCompany = null;
		} catch (err) {
			if (err instanceof Error) {
				error = err.message;
			} else {
				error = 'Fehler beim Aktualisieren der DryHire-Firma';
			}
		} finally {
			loading = false;
		}
	}

	function startEditingRentalCompany(company: RentalCompany) {
		editingRentalCompany = { ...company };
	}

	function cancelEditingRentalCompany() {
		// Reset editing state without saving changes
		editingRentalCompany = null;
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

			await firestoreService.deleteRentalCompany(confirmDeleteModal.id);
			rentalCompaniesStore.update((items) =>
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

	async function handleToggleRentalCompanyStatus(id: string, isActive: boolean) {
		try {
			loading = true;
			error = '';

			await firestoreService.updateRentalCompany(id, { isActive: !isActive });
			rentalCompaniesStore.update((items) =>
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

	async function selectRentalCompany(company: RentalCompany) {
		try {
			loading = true;
			error = '';

			// Load all products and manufacturers to ensure we have the complete dataset
			await refreshProductsData();
			selectedRentalCompany = { ...company };
		} catch (err) {
			if (err instanceof Error) {
				error = err.message;
			} else {
				error = 'Fehler beim Laden der Daten';
			}
		} finally {
			loading = false;
		}
	}

	function closeInventoryManagement() {
		// Clear the selectedRentalCompany state
		selectedRentalCompany = null;
	}
</script>

{#if selectedRentalCompany}
	<InventoryManager company={selectedRentalCompany} onClose={closeInventoryManagement} />
{:else}
	<div>
		{#if error}
			<div class="mb-4 rounded-md bg-red-50 p-4 text-red-800">
				{error}
			</div>
		{/if}

		<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
			<div class="lg:col-span-1">
				{#if editingRentalCompany}
					<!-- Edit Rental Company Form -->
					<div class="rounded-md border border-blue-200 bg-blue-50 p-4">
						<h3 class="mb-3 flex items-center text-lg font-medium">
							<Edit size={18} class="mr-2" />
							DryHire-Firma bearbeiten
						</h3>
						<form onsubmit={saveEditedRentalCompany}>
							<div class="mb-3">
								<input
									type="text"
									placeholder="Firmenname"
									class="w-full rounded-md border border-gray-300 p-2"
									bind:value={editingRentalCompany.name}
									aria-label="Firmenname"
									title="Name der Firma"
									required
								/>
							</div>
							<div class="mb-3">
								<div class="relative">
									<span class="absolute top-2.5 left-2.5 text-gray-500">
										<MapPin size={16} />
									</span>
									<input
										type="text"
										placeholder="Straße und Hausnummer"
										class="w-full rounded-md border border-gray-300 p-2 pl-8"
										bind:value={editingRentalCompany.address}
										aria-label="Straße und Hausnummer"
										title="Straßenadresse der Firma"
										required
									/>
								</div>
							</div>
							<div class="mb-3 grid grid-cols-10 gap-3">
								<input
									type="text"
									placeholder="Land"
									class="col-span-2 w-full rounded-md border border-gray-300 p-2"
									bind:value={editingRentalCompany.country}
									aria-label="Land"
									title="Ländercode (z.B. DE für Deutschland)"
									required
								/>
								<input
									type="text"
									placeholder="PLZ"
									class="col-span-3 w-full rounded-md border border-gray-300 p-2"
									bind:value={editingRentalCompany.postalCode}
									aria-label="Postleitzahl"
									title="Postleitzahl"
									required
								/>
								<input
									type="text"
									placeholder="Stadt"
									class="col-span-5 w-full rounded-md border border-gray-300 p-2"
									bind:value={editingRentalCompany.city}
									aria-label="Stadt"
									title="Stadt"
									required
								/>
							</div>
							<div class="mb-3">
								<div class="relative">
									<span class="absolute top-2.5 left-2.5 text-gray-500">
										<Globe size={16} />
									</span>
									<input
										type="url"
										placeholder="Webseite"
										class="w-full rounded-md border border-gray-300 p-2 pl-8"
										bind:value={editingRentalCompany.website}
										aria-label="Webseite"
										title="Webseite der Firma (https:// wird automatisch hinzugefügt)"
									/>
								</div>
							</div>
							<div class="mb-3 grid grid-cols-2 gap-3">
								<input
									type="tel"
									placeholder="Telefon"
									class="w-full rounded-md border border-gray-300 p-2"
									bind:value={editingRentalCompany.phone}
									aria-label="Telefon"
									title="Telefonnummer der Firma"
								/>
								<input
									type="email"
									placeholder="E-Mail"
									class="w-full rounded-md border border-gray-300 p-2"
									bind:value={editingRentalCompany.email}
									aria-label="E-Mail"
									title="E-Mail-Adresse der Firma"
								/>
							</div>
							<div class="mb-3 flex items-center justify-between">
								<label
									class="flex cursor-pointer items-center gap-2"
									title="Aktiviert oder deaktiviert die Firma"
								>
									<div class="relative">
										<input
											type="checkbox"
											class="peer sr-only"
											bind:checked={editingRentalCompany.isActive}
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
										onclick={cancelEditingRentalCompany}
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
					<!-- Create Rental Company Form -->
					<div class="rounded-md border border-gray-200 bg-gray-50 p-4">
						<h3 class="mb-3 flex items-center text-lg font-medium">
							<PlusCircle size={18} class="mr-2" />
							Neues Unternehmen
						</h3>
						<form onsubmit={handleCreateRentalCompany}>
							<div class="mb-3">
								<input
									type="text"
									placeholder="Firmen-ID (Format: KXXXX...)"
									class="mb-3 w-full rounded-md border border-gray-300 p-2"
									bind:value={newRentalCompanyId}
									title="Eindeutige Firmen-ID (beginnt mit K gefolgt von Ziffern)"
									aria-label="Firmen-ID"
									required
								/>
								<input
									type="text"
									placeholder="Firmenname"
									class="w-full rounded-md border border-gray-300 p-2"
									bind:value={newRentalCompany.name}
									aria-label="Firmenname"
									title="Name der Firma"
									required
								/>
							</div>
							<div class="mb-3">
								<div class="relative">
									<span class="absolute top-2.5 left-2.5 text-gray-500">
										<MapPin size={16} />
									</span>
									<input
										type="text"
										placeholder="Straße und Hausnummer"
										class="w-full rounded-md border border-gray-300 p-2 pl-8"
										bind:value={newRentalCompany.address}
										aria-label="Straße und Hausnummer"
										title="Straßenadresse der Firma"
										required
									/>
								</div>
							</div>
							<div class="mb-3 grid grid-cols-10 gap-3">
								<input
									type="text"
									placeholder="Land"
									class="col-span-2 w-full rounded-md border border-gray-300 p-2"
									bind:value={newRentalCompany.country}
									aria-label="Land"
									title="Ländercode (z.B. DE für Deutschland)"
									required
								/>
								<input
									type="text"
									placeholder="PLZ"
									class="col-span-3 w-full rounded-md border border-gray-300 p-2"
									bind:value={newRentalCompany.postalCode}
									aria-label="Postleitzahl"
									title="Postleitzahl"
									required
								/>
								<input
									type="text"
									placeholder="Stadt"
									class="col-span-5 w-full rounded-md border border-gray-300 p-2"
									bind:value={newRentalCompany.city}
									aria-label="Stadt"
									title="Stadt"
									required
								/>
							</div>
							<div class="mb-3">
								<div class="relative">
									<span class="absolute top-2.5 left-2.5 text-gray-500">
										<Globe size={16} />
									</span>
									<input
										type="url"
										placeholder="Webseite"
										class="w-full rounded-md border border-gray-300 p-2 pl-8"
										bind:value={newRentalCompany.website}
										aria-label="Webseite"
										title="Webseite der Firma (https:// wird automatisch hinzugefügt)"
									/>
								</div>
							</div>
							<div class="mb-3 grid grid-cols-2 gap-3">
								<input
									type="tel"
									placeholder="Telefon"
									class="w-full rounded-md border border-gray-300 p-2"
									bind:value={newRentalCompany.phone}
									aria-label="Telefon"
									title="Telefonnummer der Firma"
								/>
								<input
									type="email"
									placeholder="E-Mail"
									class="w-full rounded-md border border-gray-300 p-2"
									bind:value={newRentalCompany.email}
									aria-label="E-Mail"
									title="E-Mail-Adresse der Firma"
								/>
							</div>
							<div class="flex items-center justify-between">
								<label
									class="flex cursor-pointer items-center gap-2"
									title="Aktiviert oder deaktiviert die Firma"
								>
									<div class="relative">
										<input
											type="checkbox"
											class="peer sr-only"
											bind:checked={newRentalCompany.isActive}
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
									title="Neue Firma hinzufügen"
									aria-label="Firma hinzufügen"
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
				<div class="overflow-hidden">
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
										class="w-[15%] cursor-pointer px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
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
										class="w-[25%] px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase"
									>
										Aktionen
									</th>
								</tr>
							</thead>
							<tbody class="divide-y divide-gray-200 bg-white">
								{#each getSortedRentalCompanies() as company}
									<tr class={editingRentalCompany?.id === company.id ? 'bg-blue-50' : ''}>
										<td class="px-6 py-4 whitespace-nowrap">
											<span class="truncate-text">{company.name}</span>
										</td>
										<td class="px-6 py-4 whitespace-nowrap">
											{#if company.isActive}
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
										<td
											class="flex flex-wrap justify-end gap-1 px-6 py-4 text-right whitespace-nowrap"
										>
											<button
												onclick={() => selectRentalCompany(company)}
												class="flex items-center rounded bg-purple-100 px-2 py-1 text-purple-800 hover:bg-purple-200"
												title="Lagerbestand verwalten"
												aria-label="Lagerbestand verwalten"
											>
												<Boxes size={16} />
											</button>
											<button
												onclick={() => startEditingRentalCompany(company)}
												class="flex items-center rounded bg-blue-100 px-2 py-1 text-blue-800 hover:bg-blue-200"
												title="Firma bearbeiten"
												aria-label="Firma bearbeiten"
												disabled={editingRentalCompany !== null}
											>
												<Edit size={16} />
											</button>
											<button
												onclick={() =>
													handleToggleRentalCompanyStatus(company.id, company.isActive)}
												class={`flex items-center rounded px-2 py-1 ${company.isActive ? 'bg-orange-100 text-orange-800 hover:bg-orange-200' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}
												title={company.isActive ? 'Firma deaktivieren' : 'Firma aktivieren'}
												aria-label={company.isActive ? 'Firma deaktivieren' : 'Firma aktivieren'}
											>
												{#if company.isActive}
													<XCircle size={16} />
												{:else}
													<CheckCircle size={16} />
												{/if}
											</button>
											<button
												onclick={() => showDeleteConfirmation(company.id, company.name)}
												class="flex items-center rounded bg-red-100 px-2 py-1 text-red-800 hover:bg-red-200"
												title="Firma löschen"
												aria-label="Firma löschen"
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
{/if}

<ConfirmDeleteModal
	show={confirmDeleteModal !== null}
	itemName={confirmDeleteModal?.name || ''}
	{loading}
	onConfirm={confirmDelete}
	onCancel={cancelDelete}
/>

<style>
	.overflow-x-auto {
		max-width: 100%;
		overflow-x: hidden;
	}

	/* Make action buttons wrap gracefully */
	td.flex {
		min-width: 0;
		padding-right: 0.5rem !important;
	}

	/* Make sure truncated text works properly */
	.truncate-text {
		max-width: 100%;
	}
</style>
