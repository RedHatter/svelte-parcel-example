import App from './App.svelte';

const app = new App({
	target: document.body,
	data: {
		name: 'world'
	}
});

export default app;