# sveltekit-content-site

Wherein Travis tries out [SvelteKit](https://kit.svelte.dev/docs) for a pretty basic static content site scenario. It shows off:

* A couple of very simple Svelte custom components
	* `Year` which lets you specify a year range, like `© <Year from={1980} />` → `© 1980-2021`
	* `Counter` (which comes with the SvelteKit template)
* TypeScript integration
* Restyling the site template
* Markdown transformation using a couple of different methods
	* One example page using MDsveX
	* One example page using a custom API endpoint instead of adding another SvelteKit plugin
	* Both support adding Front Matter properties (`title`)
* Static site generation
* Publishing to [GitHub Pages](https://travisspomer.github.io/sveltekit-content-site/)
	* The deployment isn't perfect, mostly due to the fact that I'm deploying it to a subfolder and SvelteKit's support for base URLs isn't fully-formed yet
* ESLint integration
