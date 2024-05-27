// If a url request matches the current path then do not fetch it
htmx.defineExtension("no-load", {
	onEvent: function (name, evt) {
		if (name === "htmx:confirm") {
			if (evt.detail.path === window.location.pathname) {
				evt.preventDefault() // Cancel the event
			}
			return
		}
		if (name === "htmx:beforeOnLoad") {
			var responseHTML = evt.detail.xhr.responseText
			var targetElement = evt.detail.target

			// Create a temporary element to hold the response HTML
			var tempDiv = document.createElement("div")
			tempDiv.innerHTML = responseHTML

			// Compare the inner HTML of the target element and the response
			if (
				targetElement.innerHTML ===
				tempDiv.querySelector(targetElement.tagName.toLowerCase()).innerHTML
			) {
				evt.preventDefault() // Cancel the event
			}
		}
	},
})
