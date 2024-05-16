// If a url request matches the current path then do not fetch it
htmx.defineExtension("no-load", {
	onEvent: function (name, evt) {
		if (name === "htmx:confirm") {
			if (evt.detail.path === window.location.pathname) {
				evt.preventDefault() // Cancel the event
			}
		}
	},
})
