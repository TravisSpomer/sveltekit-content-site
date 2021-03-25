<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from "@sveltejs/kit/types.internal"

	export async function load({ page, fetch }: LoadInput): Promise<LoadOutput>
	{
		// Here, you can't...
		// * use server code here
		// * import anything here from server code
		// * know what URL you're on in server.ts
		// So limited compared to Next.js!

		const { filename } = page.params
		// PROBLEM: This doesn't work if you remove the "http://localhost:3000"!
		const data = (await (await fetch(`http://localhost:3000/api/content/${filename}`)).json())
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
