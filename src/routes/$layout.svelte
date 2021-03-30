<script lang="ts">
	import "../app.scss"
	import { base } from "$app/paths"
	import Year from "$lib/components/Year.svelte"

	// Importing app.scss here inlines it into the layout's JavaScript, so you get a FOUC. :(
	// It appears that this behavior is planned to be improved: https://github.com/sveltejs/kit/issues/11

	// The links below really belong in app.html, but I've moved them here to show an example of using the base path.
	// (On the default GitHub Pages deployment, the whole site goes in a subfolder, so all of the root-relative links in the site break.)
</script>

<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" /> 
	<link rel="icon" href="{base}/images/app/logo.svg" />
	<link rel="mask-icon" href="{base}/images/app/logo-mask.svg" color="#4f9adc" />
	<link rel="apple-touch-icon" href="{base}/images/app/logo-solid180.png" />
	<link rel="manifest" href="{base}/app.webmanifest" />
</svelte:head>

<header>
<div><nav>
	<ul>
		<li><a href="{base}/">SvelteKit test site</a></li>
	</ul>
</nav></div>
</header>

<main>
<div class="content">
<slot></slot>
</div>
</main>

<footer>
<p>
	Template &copy; <Year from={2021} /> Travis Spomer.
</p>
</footer>
