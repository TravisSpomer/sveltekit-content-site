<script lang="ts">
	export let title: string
</script>

<svelte:head>
	<title>{title ? title + " - " : ""}My SvelteKit test site</title>
</svelte:head>

<slot></slot>
