<script lang="ts">
	let count: number = 0

	const increment = () => count += 1
</script>

<button class="accent" on:click={increment}>
	Clicks: {count}
</button>

<style lang="scss">

button
{
	padding: 1em 2em;
	width: 200px;
}

</style>
