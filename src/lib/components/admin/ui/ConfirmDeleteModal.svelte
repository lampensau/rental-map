<script lang="ts">
	import { X } from 'lucide-svelte';

	// Props with TypeScript validation
	const props = $props<{
		show: boolean;
		itemName: string;
		loading: boolean;
		onConfirm: () => void;
		onCancel: () => void;
	}>();

	// Handle key presses
	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			e.preventDefault();
			props.onConfirm();
		} else if (e.key === 'Escape') {
			e.preventDefault();
			props.onCancel();
		}
	}

	// Add/remove event listener when component mounts/unmounts
	$effect(() => {
		if (props.show) {
			window.addEventListener('keydown', handleKeyDown);
			return () => {
				window.removeEventListener('keydown', handleKeyDown);
			};
		}
	});
</script>

{#if props.show}
	<div class="fixed inset-0 z-[60] flex items-center justify-center bg-black/50">
		<div class="w-96 rounded-lg bg-white p-6 shadow-xl">
			<h3 class="mb-4 text-lg font-semibold">Bestätigung</h3>
			<p class="mb-4">
				Möchten Sie wirklich "{props.itemName}" löschen? Diese Aktion kann nicht rückgängig gemacht
				werden.
			</p>
			<div class="flex justify-end space-x-3">
				<button
					onclick={props.onCancel}
					class="rounded-md bg-gray-200 px-4 py-2 text-gray-800"
					disabled={props.loading}
				>
					Abbrechen
				</button>
				<button
					onclick={props.onConfirm}
					class="rounded-md bg-red-600 px-4 py-2 text-white"
					disabled={props.loading}
				>
					{props.loading ? 'Löschen...' : 'Löschen'}
				</button>
			</div>
		</div>
	</div>
{/if}
