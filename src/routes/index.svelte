<script lang="ts">
	import Counter from "$lib/components/Counter.svelte"
	import DraggableWidget from "$lib/components/DraggableWidget.svelte"
</script>

<svelte:head>
	<title>My SvelteKit test site</title>
</svelte:head>

<h1>Imagine... a world with a button...<br />that you can click to add 1!</h1>

<Counter />

<p>
	Now visit <a href="page-two">page two</a> when you're ready to have your <strong>MIND BLOWN</strong>.
</p>
<p>
	Or just jump directly to some <a href="content/page-three">Markdown content in a dynamic route</a>.
</p>

<DraggableWidget title="Drag me!" />
