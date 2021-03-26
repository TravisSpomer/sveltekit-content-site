import { supportsPassiveEvents } from "$lib/utils"

if (!window.PointerEvent)
{
	// Note: pointer events are only recently available on Safari
	// https://caniuse.com/#search=pointer%20events
	console.error("Pointer events aren't supported by this browser, so drag functionality won't work.  Please update your browser.")
}

export interface DragTrackerTryStartEvent<CustomDataType = any>
{
	/** An optional custom data type to be passed to other events. */
	data?: CustomDataType
	/** If set to true, the drag event will be cancelled and not started. */
	cancel: boolean
	/** The PointerEvent that triggered this drag start event. */
	readonly pointerEvent: PointerEvent
}

export interface DragTrackerEvent<CustomDataType = any>
{
	/** The number of pixels on the X axis that the item has been moved. */
	readonly dx: number
	/** The number of pixels on the Y axis that the item has been moved. */
	readonly dy: number
	/** If true, the drag operation was cancelled before it completed. */
	readonly isCancelled: boolean
	/** The optional data object that was passed in when starting the drag operation. */
	readonly data?: CustomDataType
}

type DragCallback<CustomDataType> = (ev: DragTrackerEvent<CustomDataType>) => void

interface StartDragOptions<CustomDataType>
{
	/**
	 * A callback that will be called each time the drag operation progresses, so you can update the UI accordingly.
	 */
	readonly onUpdate: DragCallback<CustomDataType>

	/**
	 * A callback that will be called when the drag operation finishes, immediately after the last onUpdate.
	 * Note that if the operation was cancelled, onFinish will still be called.  You may want to reverse any
	 * changes made in onUpdate at that time.
	 */
	readonly onFinish: DragCallback<CustomDataType>

	/** Optional user-defined data of any type that will be available during the onUpdate and onFinish events. */
	readonly data?: CustomDataType
}

interface AutoStartDragOptions<CustomDataType> extends StartDragOptions<CustomDataType>
{
	/**
	 * An optional callback that will be called each time that the user tries to start a new drag operation.
	 * You can inspect the PointerEvent that triggered this operation, cancel the operation before it starts,
	 * and set a data payload to be handed to future events.
	 */
	readonly onTryStart?: (ev: DragTrackerTryStartEvent<CustomDataType>) => void
}

/**
 * Internal class that handles the logistics of the drag operation.
 */
class DragTracker<CustomDataType>
{
	private readonly _isReusable: boolean = false
	private readonly _parent: HTMLElement
	private readonly _options: StartDragOptions<CustomDataType>

	private _isDragging: boolean = false
	private _dragOriginX: number
	private _dragOriginY: number

	constructor(element: HTMLElement, ev: PointerEvent | null, options: StartDragOptions<CustomDataType>)
	{
		this._parent = element
		this._options = options

		const eventOptions = supportsPassiveEvents ? { passive: true } : undefined

		if (ev)
		{
			// This is a one-use drag tracker, so start the drag immediately.
			this.startDrag(ev)
		}
		else
		{
			// This is a multi-use drag tracker, so wait until the pointerDown event.
			this._isReusable = true
			element.addEventListener("pointerdown", this.onPointerDown)
			element.style.touchAction = "none"
		}

		element.addEventListener("pointerup", this.onPointerUp)
		element.addEventListener("pointermove", this.onPointerMove, eventOptions)
		element.addEventListener("lostpointercapture", this.onLostPointerCapture, eventOptions)
	}

	private cleanup(): void
	{
		if (!this._isDragging) return
		this._isDragging = false

		if (!this._isReusable)
		{
			this._parent.removeEventListener("pointerup", this.onPointerUp)
			this._parent.removeEventListener("pointermove", this.onPointerMove)
			this._parent.removeEventListener("lostpointercapture", this.onLostPointerCapture)
		}
	}

	private startDrag(ev: PointerEvent): void
	{
		this._isDragging = true
		this._parent.setPointerCapture(ev.pointerId)
		this._dragOriginX = ev.clientX
		this._dragOriginY = ev.clientY
	}

	private onPointerDown = (ev: PointerEvent): void =>
	{
		if (this._isDragging) return

		// We only want to handle the left mouse button or equivalent.
		if (!ev.isPrimary || ev.button !== 0) return

		// If an onTryStart callback was provided, call it.
		const options = this._options as AutoStartDragOptions<CustomDataType>
		if (options.onTryStart)
		{
			const dragEvent: DragTrackerTryStartEvent<CustomDataType> =
			{
				cancel: false,
				pointerEvent: ev,
			}
			options.onTryStart(dragEvent)
			if (dragEvent.cancel) return
			// Allow the onTryStart callback to mutate the original data object passed in.
			if (dragEvent.data !== undefined)
				(this._options.data as CustomDataType) = dragEvent.data
		}

		this.startDrag(ev)
		ev.preventDefault
	}

	private onPointerUp = (ev: PointerEvent): void =>
	{
		if (!this._isDragging) return

		// We only want to handle the left mouse button or equivalent.
		if (!ev.isPrimary || ev.button !== 0) return

		const args = this.buildDragTrackerEventArgs(ev)
		this._options.onUpdate(args)
		this._options.onFinish(args)
		this._parent.releasePointerCapture(ev.pointerId)
		ev.preventDefault()

		this.cleanup()
	}

	private onPointerMove = (ev: PointerEvent): void =>
	{
		if (!this._isDragging) return

		this._options.onUpdate(this.buildDragTrackerEventArgs(ev))
	}

	private onLostPointerCapture = (ev: PointerEvent): void =>
	{
		if (!this._isDragging) return

		const args = this.buildDragTrackerEventArgs(ev, /* isCancelled: */ true)
		this._options.onUpdate(args)
		this._options.onFinish(args)

		this.cleanup()
	}

	private buildDragTrackerEventArgs(ev: PointerEvent, isCancelled = false): DragTrackerEvent<CustomDataType>
	{
		// const relativeTo = this._parent.getBoundingClientRect()
		// console.log(`RELATIVE position: ${ev.clientX - relativeTo.left}, ${ev.clientY - relativeTo.top}`)
		return {
			dx: ev.clientX - this._dragOriginX,
			dy: ev.clientY - this._dragOriginY,
			data: this._options.data,
			isCancelled: isCancelled,
		}
	}
}

/**
 * Immediately begins a drag operation on an element.
 * @param ev The PointerEvent value from the pointerDown event that the drag operation is being started in response to.
 * @param options Callbacks and options for this drag operation.
 */
export function startDragTracker<CustomDataType = any>(element: HTMLElement, ev: PointerEvent, options: StartDragOptions<CustomDataType>): void
{
	new DragTracker(element, ev, options)
}

/**
 * Attaches a pointer event handler to an element and automatically starts drag operations as necessary.
 * @param element The element to watch for pointer events.
 * @param options Callbacks and options for this drag tracker.
 */
export function autoStartDragTracker<CustomDataType = any>(element: HTMLElement, options: AutoStartDragOptions<CustomDataType>): void
{
	new DragTracker(element, null, options)
}
