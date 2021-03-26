<script lang="ts">
	import { onMount } from "svelte"

	export let dragHandle: string
	export let setClassesOn: string | undefined = undefined

	let _root: HTMLElement
	let _left: string = "0", _top: string = "0", _width: string = "300px", _height: string = "200px"

	onMount(async () =>
	{
		const { makeDraggable } = await import("$lib/draggable")

		makeDraggable(_root, getChildByIDOrReference(_root, dragHandle), setClassesOn ? getChildByIDOrReference(_root, setClassesOn) : undefined)
		positionRandomly()
	})

	export function positionRandomly(): void
	{
		_left = Math.floor(100 + 600 * Math.random()) + "px"
		_top = Math.floor(350 + 300 * Math.random()) + "px"
		_width = Math.floor(300 + 200 * Math.random()) + "px"
		_height = Math.floor(200 + 200 * Math.random()) + "px"
	}

	function getChildByIDOrReference(parentElement: HTMLElement, id: HTMLElement | string | null): HTMLElement | undefined
	{
		if (!id || id === "")
			return undefined

		if (typeof id === "object")
			return id as HTMLElement

		const child: HTMLElement | null | undefined =
			id ? (parentElement.querySelector("#" + id) as HTMLElement) : undefined
		if (child)
			return child
		throw new Error(`Element with ID '${id}' not found.`)
	}
</script>

<style lang="scss">

draggable-element
{
	display: block;
	position: absolute;
	z-index: 100000;
}

</style>

<draggable-element bind:this={_root} style="left: {_left}; top: {_top}; width: {_width}; height: {_height};">
	<slot></slot>
</draggable-element>
