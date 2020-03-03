<script>
	export let name;
	import { onMount } from 'svelte';

let galleryData = [];

onMount(async () => {
	const res = await fetch(`https://api.harvardartmuseums.org/object?person=28241&apikey=e8318a20-5da1-11ea-b8c0-65473d792676`);
	galleryData = await res.json();
});
</script>

<main>
	<h1>What {name} is this?!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
