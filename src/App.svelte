<script>
	export let name;
	import { onMount } from 'svelte';

	let rembrandtData;

	const fetchArtistData = async () => {
		let res = await fetch(`https://api.harvardartmuseums.org/object?size=100&person=28241&apikey=e8318a20-5da1-11ea-b8c0-65473d792676`);
		let galleryData = await res.json();
		rembrandtData = galleryData.records
	}

	onMount(async () => {
		await console.log('do not stress the api yet')
	});
</script>

<main>
	<h1>What {name} is this?!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

</style>
