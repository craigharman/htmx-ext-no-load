# No load HTMX Extension

Will automatically stop HTMX making a request if the current page URL equals the request URL.

## Installation

The package is available via npm:

```bash
npm install htmx-ext-no-load
```

Alternatively you can copy the `no-load.js` file into your HTMX project.

## Usage

Simply add no-load as an HTMX extension:

```ts
import htmx from 'htmx.org'
import no-load from 'no-load'
```

That's it! Any time a user tries to load data that would be from the current browser path it will be intercepted and not loaded.

