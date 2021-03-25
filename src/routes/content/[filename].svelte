<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from "@sveltejs/kit/types.internal"

	export async function load({ page, fetch }: LoadInput): Promise<LoadOutput>
	{
		const filename = page.params.filename
		// PROBLEM: This doesn't work if you remove the "http://localhost"! You get a string starting with
		// the text "Not found", which of course isn't valid JSON.
		// But, fetching the exact same URL using the browser fetch() works fine.
		const data = (await (await fetch(`/api/content/${filename}`)).json())
		const { properties, html } = data
		return { props: { title: properties.title || filename, html } }
	}
</script>

<script lang="ts">
	export let title: string
	export let html: string
</script>

<svelte:head>
	<title>{title} - My SvelteKit test site</title>
</svelte:head>

{@html html}
