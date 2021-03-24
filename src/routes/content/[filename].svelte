<script context="module" lang="ts">
	import MarkdownIt from "markdown-it"

	const md = new MarkdownIt({
		html: true,
		linkify: true,
		quotes: "“”‘’",
		typographer: true,
	})

	export async function load({ page, fetch, session, context })
	{
		const html = md.render(`Hello this is **${page.params.filename}** rendered using Markdown`)
		return { props: { filename: page.params.filename, html: html } }
	}
</script>

<script lang="ts">
	export let html: string
</script>

<main>
	{@html html}
</main>
