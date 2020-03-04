import App from '../App/App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Rembrandt'
	}
});

export default app;
