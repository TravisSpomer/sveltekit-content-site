---
title: Page two
---

<script lang="ts">
	import Counter from "$lib/components/Counter.svelte"
	import Year from "$lib/components/Year.svelte"
</script>

# Page two

Creating a second page is as easy as 1-2-...

This page was written in Markdown and transformed with MDsveX. I can even put Svelte components in here.

<Counter />

Oh, "but that's the same one as before?" Waah. *Waaaaaah.* ***You big baby.*** Okay, fine, here's my custom Year component instead:

If you were born in 1980 and died today, your tombstone might say "RIP Big Baby, <Year from={1980} />."

Now let's go crazy and do [page 3](content/page-three) as a dynamic route with a custom API endpoint!
