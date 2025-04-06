<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	// Redirect to home page with admin query parameter
	// The admin modal will be shown because we check for this parameter in RentalApp.svelte
	onMount(() => {
		goto('/?admin=true');
	});
</script>

<div class="flex h-screen items-center justify-center">
	<p>Weiterleitung...</p>
</div>
