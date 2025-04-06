<script lang="ts">
	import RentalApp from '$lib/components/RentalApp.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		// Handle GitHub Pages 404 redirect
		const url = new URL(window.location.href);
		const path = url.searchParams.get('path');

		if (path) {
			// Remove the path param to prevent infinite loops
			url.searchParams.delete('path');
			history.replaceState({}, '', url.toString());

			// Parse and route to the requested path
			const [pathname, search, hash] = path.split(/(?=\?)|(?=#)/);
			goto(pathname + (search || '') + (hash || ''), { replaceState: true });
		}
	});
</script>

<RentalApp />
