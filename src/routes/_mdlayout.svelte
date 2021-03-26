<script>
	export let title
</script>

<svelte:head>
	<title>{title ? title + " - " : ""}My SvelteKit test site</title>
</svelte:head>

<slot></slot>
