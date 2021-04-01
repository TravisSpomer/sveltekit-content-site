<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from "@sveltejs/kit/types.internal"

	// I wouldn't really recommend this, but it does work, even for static builds.
	// It seems that the proper thing to do for cases like this is to build a SvelteKit-specific plugin, which already exists for this case as MDxveX.
	export async function load({ page, fetch }: LoadInput): Promise<LoadOutput>
	{
		const filename = page.params.filename
		const data = (await (await fetch(`/api/content/${filename}`)).json())
		const { properties, html } = data
		return { props: { title: properties.title || filename, html } }
	}

	// Not actually necessary since we're using adapter-static.
	export const prerender = true

	// These pages don't ever need to be rehydrated on the client, so disable that here.
	// This page/component should be FULLY prerendered into an HTML string.
	export const hydrate = false
</script>

<script lang="ts">
	export let title: string
	export let html: string
</script>

<svelte:head>
	<title>{title} - My SvelteKit test site</title>
</svelte:head>

{@html html}
