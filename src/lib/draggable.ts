import { supportsPassiveEvents } from "$lib/utils"
import { autoStartDragTracker } from "$lib/drag-tracker"

if (!window.PointerEvent)
{
	// Note: pointer events are only recently available on Safari
	// https://caniuse.com/#search=pointer%20events
	console.error("Pointer events aren't supported by this browser, so drag functionality won't work.  Please update your browser.")
}

interface Position
{
	x: number
	y: number
}

class Draggable
{
	private readonly _parent: HTMLElement
	private readonly _dragHandle: HTMLElement
	private readonly _setClassesOn: HTMLElement

	private _isHovering: boolean
	private _isDragging: boolean
	private readonly _position: Position = { x: 0, y: 0 }

	constructor(readonly parentElement: HTMLElement, dragHandle: HTMLElement = parentElement, setClassesOn: HTMLElement = parentElement)
	{
		this._parent = parentElement
		this._dragHandle = dragHandle
		this._setClassesOn = setClassesOn

		dragHandle.style.cursor = "all-scroll"
		dragHandle.style.userSelect = "none"

		console.assert(parentElement.style.transform === "", "Don't make an element draggable if it already has a transform applied!")

		const options = supportsPassiveEvents ? { passive: true } : undefined
		dragHandle.addEventListener("pointerenter", this.onPointerEnter, options)
		dragHandle.addEventListener("pointerleave", this.onPointerLeave, options)

		autoStartDragTracker(this._dragHandle, {
			onTryStart: () =>
			{
				this.setIsDragging(true)
				return true
			},
			onUpdate: (ev) => this.updateTransform(ev.dx, ev.dy),
			onFinish: (ev) =>
			{
				this.setIsDragging(false)
				this._position.x += ev.dx
				this._position.y += ev.dy
				this.updateTransform(0, 0)
				// We ignore isCancelled and commit the drag whether it succeeded or failed.
			},
		})
	}

	private setIsHovering = (isHovering: boolean): void =>
	{
		if (isHovering === this._isHovering) return

		this._isHovering = isHovering
		if (isHovering)
			this._setClassesOn.classList.add("hover")
		else
			this._setClassesOn.classList.remove("hover")
	}

	private setIsDragging = (isDragging: boolean): void =>
	{
		if (isDragging === this._isDragging) return

		this._isDragging = isDragging
		if (isDragging)
			this._setClassesOn.classList.add("drag")
		else
			this._setClassesOn.classList.remove("drag")
	}

	private updateTransform = (dx: number, dy: number): void =>
	{
		this._parent.style.transform = `translate(${this._position.x + dx}px, ${this._position.y + dy}px)`
	}

	private onPointerEnter = (_ev: PointerEvent): void =>
	{
		this.setIsHovering(true)
	}

	private onPointerLeave = (_ev: PointerEvent): void =>
	{
		this.setIsHovering(false)
	}
}

/**
 * Makes an element draggable. It should be an absolutely-positioned element that does not already have a transform applied.
 * The draggable element (or setClassesOn element) will have the "hover" CSS class attached to it when the user hovers over it,
 * and "drag" when the user is actively dragging it.
 *
 * @param parentElement The element to make draggable.
 * @param dragHandle The specific element that can be clicked to drag the parent element.  If not specified, the entire parent is draggable.
 * @param setClassesOn The element to set "hover" and "drag" CSS classes on.  If not specified, the parent is used.
 */
export function makeDraggable(parentElement: HTMLElement, dragHandle: HTMLElement = parentElement, setClassesOn: HTMLElement = parentElement): void
{
	new Draggable(parentElement, dragHandle, setClassesOn)
}
