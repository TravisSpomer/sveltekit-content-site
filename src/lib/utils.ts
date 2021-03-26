function getSupportsPassiveEvents(): boolean
{
	// Test passive events support by registering for a fake event listener, and seeing if the browser
	// accesses the "passive" property of addEventListener.  Older browsers will just see the options object
	// as a true-ish value and continue.

	let supportsPassiveEvents = false
	try
	{
		const options = Object.defineProperty({}, "passive",
			{
				get: () =>
				{
					supportsPassiveEvents = true
					return undefined
				},
			})

		window.addEventListener("__testevent", null as unknown as EventListener, options)
	}
	catch (e)
	{
		// Expected
	}

	return supportsPassiveEvents
}

/** True if the browser supports passive events: that is, addEventListener(_, _, { passive:true }). */
export const supportsPassiveEvents = getSupportsPassiveEvents()
