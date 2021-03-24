<script context="module" lang="ts">
	export async function load({ page, fetch, session, context })
	{
		// So, you can't...
		// * use server code here
		// * import anything here from server code 
		// * know what URL you're on in server.ts

		// So limited compared to Next.js!

		const { filename } = page.params
		// PROBLEM: This doesn't work if you remove the "http://localhost:3000"!
		const html = (await (await fetch(`http://localhost:3000/api/content/${filename}`)).text())
		return { props: { html } }
	}
</script>

<script lang="ts">
	export let html: string
</script>

<main>
	{@html html}
</main>
