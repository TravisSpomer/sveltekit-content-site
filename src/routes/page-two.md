---
title: Page two
---

<script lang="ts">
	import DraggableWidget from "$lib/components/DraggableWidget.svelte"
	import Year from "$lib/components/Year.svelte"
</script>

# Page two

Oh, a slightly restyled version of the exact component that came with the SvelteKit starter kit isn't good enough for you? Waah. *Waaaaaah.* ***You big baby.*** Okay, fine, here's my custom Year component instead:

> If you were born in 1980 and died today, your tombstone might say "RIP Big Baby, <Year from={1980} />."

This page was written in Markdown and transformed with MDsveX. I can even put Svelte components in here. In fact, I did just that with `Year` and this annoying `DraggableWidget` that's floating around in sace.

Now let's go crazy and do [page 3](content/page-three) as a dynamic route with a custom API endpoint!

<DraggableWidget title="Drag me!" />
