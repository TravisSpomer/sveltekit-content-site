<script lang="ts">
	import Draggable from "$lib/components/Draggable.svelte"

	export let title: string = "Title"
</script>

<style lang="scss">

.root
{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	position: absolute;

	background-color: white;
	border-width: 1px;
	border-style: solid;
	border-color: var(--grey);
	box-shadow: rgba(black, 0.1) 1px 4px 8px;
	transition: background-color 0.1s cubic-bezier(.67, 0, .33, 1);
	transition: box-shadow 0.1s cubic-bezier(.67, 0, .33, 1);

	user-select: contain;

	animation: add-object 0.1s ease-in;

	@supports(backdrop-filter: blur(24px))
	{
		background-color: rgba(white, 0.6);
		backdrop-filter: blur(24px);
	}

	&.drag, .drag &
	{
		border-color: var(--grey-dark1);
		box-shadow: rgba(black, 0.2) 1px 4px 16px;
	}

	& > :last-child
	{
		flex: 1;
		padding: .5em;

		overflow: auto;
	}

	& .drag-handle
	{
		flex: none;
		display: flex;
		min-height: 32px;

		background-color: var(--primary-dark1);
		transition: background-color 0.064s cubic-bezier(.67, 0, .33, 1);
		color: white;
	}

	&.hover .drag-handle
	{
		background-color: var(--primary);
	}
	@at-root .hover & .drag-handle
	{
		background-color: var(--primary);
	}

	.drag-handle > :first-child
	{
		flex: 1;
	}

	.drag-handle > :not(:first-child)
	{
		flex: none;
	}

	.drag-handle > :first-child
	{
		flex: 1;
		display: flex;

		overflow: hidden;
	}

	.drag-handle .title
	{
		flex: 1;
		margin: auto .5em;

		font-weight: 600;

		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
}

</style>


<Draggable dragHandle="drag-handle">
	<div class="root">
		<div id="drag-handle" class="drag-handle"><div class="title">{title}</div></div>
		<div>I'm a component! Drag this window around by the title bar!</div>
	</div>
</Draggable>
