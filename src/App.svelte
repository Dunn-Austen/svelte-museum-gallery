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
		fetchArtistData()
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
			{#each currentData as datum}
				<div class='gallery-item'>
					<h2>{datum.title}</h2>
					<img class='gallery-image' src={datum.primaryimageurl} alt={datum.title}>
				</div>
			{/each}
		</section>
	</section>
</main>

<style>

	body {
		height: 100%;
		margin: 0px;
		padding: 0px;
	}

	main {
		height: 100%;
		width: 100%;
	}

	header {
		background-color: #938876;
		height: 10%
	}

	h1 {
		color: black;
		text-transform: uppercase;
		font-size: 30px;
		margin: 0;
		padding: 0;
		text-align: center;
	}

	.outer-container {
		align-items: center;
		background-color: #4E4B46;
		display: flex;
		flex-direction: column;
		height: 90%;
		justify-content: space-around;
	}

	.btn-container {
		align-items: center;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		width: 95%;
	}

	.inner-container {
		align-items: center;
		background-color: #BAA688;
		border: 4px ridge black;
		box-shadow: 0px 1.5px 9px 1px black;
		display: flex;
		flex-wrap: wrap;
		height: 70%;
		justify-content: space-around;
		overflow: scroll;
		width: 85%;
	}

	.gallery-item {
		align-items: center;
		background-color: #292421;
		border: 2px solid black;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		height: 310px;
		margin: 10px;
		width: 250px;
	}

	.gallery-image {
		border: 2px solid black;
		height: 200px;
		width: 170px;
	}

	h2 {
		color: white;
		font-size: 16px;
		height: 55px;
		margin: 0;
		padding: 0 2px;
		text-align: center;
	}

</style>
