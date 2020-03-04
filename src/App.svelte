<script>
	export let name;
	import { onMount } from 'svelte';

	let rembrandtData = [];
	let engravingData = [];
	let etchingData = [];
	let drypointData = [];
	let mezzotintData = [];

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

		console.log(rembrandtData)
		console.log(drypointData)
		console.log(engravingData)
		console.log(etchingData)
		console.log(mezzotintData)
	}

	onMount(async () => {
		console.log('dont wear out the API')
	});
</script>

<main>

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
