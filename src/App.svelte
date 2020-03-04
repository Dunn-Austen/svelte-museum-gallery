<script>
	import { onMount } from 'svelte';

	let rembrandtData = [];
	let engravingData = [];
	let etchingData = [];
	let drypointData = [];
	let mezzotintData = [];
	let currentData = rembrandtData;

	const setCurrentData = (event) => {
		if (event.target.value === 'rembrandt') {
			currentData = rembrandtData
		}
		if (event.target.value === 'engraving') {
			currentData = engravingData
		}
		if (event.target.value === 'etching') {
			currentData = etchingData
		}
		if (event.target.value === 'drypoint') {
			currentData = drypointData
		}
		if (event.target.value === 'mezzotint') {
			currentData = mezzotintData
		}
	}

	const formatData = (data) => {
		data.forEach(datum => {
			if (datum.technique !== null) {
				rembrandtData.push(datum)
			}
			if (datum.technique && datum.technique.toLowerCase().includes('engraving')) {
				engravingData.push(datum)
			}
			if (datum.technique && datum.technique.toLowerCase().includes('etching')) {
				etchingData.push(datum)
			}
			if (datum.technique && datum.technique.toLowerCase().includes('drypoint')) {
				drypointData.push(datum)
			}
			if (datum.technique && datum.technique.toLowerCase().includes('mezzotint')) {
				mezzotintData.push(datum)
			}
		})
	}

	const fetchArtistData = async () => {
		let res1 = await fetch('https://api.harvardartmuseums.org/object?size=100&person=28241&apikey=e8318a20-5da1-11ea-b8c0-65473d792676&page=1');
		let galleryData1 = await res1.json();
		formatData(galleryData1.records);

		let res2 = await fetch('https://api.harvardartmuseums.org/object?size=100&person=28241&apikey=e8318a20-5da1-11ea-b8c0-65473d792676&page=2');
		let galleryData2 = await res2.json();
		formatData(galleryData2.records);

		let res3 = await fetch('https://api.harvardartmuseums.org/object?size=100&person=28241&apikey=e8318a20-5da1-11ea-b8c0-65473d792676&page=3');
		let galleryData3 = await res3.json();
		formatData(galleryData3.records);

		let res4 = await fetch('https://api.harvardartmuseums.org/object?size=100&person=28241&apikey=e8318a20-5da1-11ea-b8c0-65473d792676&page=4');
		let galleryData4 = await res4.json();
		formatData(galleryData4.records);

		let res5 = await fetch('https://api.harvardartmuseums.org/object?size=100&person=28241&apikey=e8318a20-5da1-11ea-b8c0-65473d792676&page=5');
		let galleryData5 = await res5.json();
		formatData(galleryData5.records);

		let res6 = await fetch('https://api.harvardartmuseums.org/object?size=100&person=28241&apikey=e8318a20-5da1-11ea-b8c0-65473d792676&page=6');
		let galleryData6 = await res6.json();
		formatData(galleryData6.records);

		let res7 = await fetch('https://api.harvardartmuseums.org/object?size=100&person=28241&apikey=e8318a20-5da1-11ea-b8c0-65473d792676&page=7');
		let galleryData7 = await res7.json();
		formatData(galleryData7.records);

		console.log('current', currentData)
	}

	onMount(async () => {

	});
</script>

<main>
	<header>
		<h1>Rembrandt</h1>
	</header>
	<section class='outer-container'>
		<div class='btn-container'>
			<button class='all' value='rembrandt' on:click|preventDefault={(event) => setCurrentData(event)}> All Styles </button>
			<button class='engravings' value='engraving' on:click|preventDefault={(event) => setCurrentData(event)}> Engravings </button>
			<button class='etchings' value='etching' on:click|preventDefault={(event) => setCurrentData(event)}> Etchings </button>
			<button class='drypoints' value='drypoint' on:click|preventDefault={(event) => setCurrentData(event)}> Drypoints </button>
			<button class='mezzotints' value='mezzotint' on:click|preventDefault={(event) => setCurrentData(event)}> Mezzotints </button>
		</div>
		<section class='inner-container'>
			{#each currentData as {primaryimageurl, title}}
				<div class='art-card'>
					<h2>{title}</h2>
					<img class='art-image' src={primaryimageurl} alt={title} height="45" width="45">
				</div>
			{/each}
		</section>
	</section>
</main>

<style>
	main {
		height: 100vh;
	}

	header {
		background-color: red;
		height: 10vh
	}

	.outer-container {
		background-color: yellow;
		height: 90vh;
	}

	.btn-container {
		align-items: center;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.inner-container {
		background-color: orange;
		height: 90vh;
	}

	h1 {
		color: black;
		text-transform: uppercase;
		font-size: 30px;
		text-align: center;
	}

</style>
