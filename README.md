# No load HTMX Extension

Will automatically stop HTMX making a request if the current page URL equals the request URL.

## Usage

### Script tag

HTMX recommends you link from unpkg:

```html
<head>
    ...
    <script src="https://unpkg.com/htmx-ext-no-load@^1/no-load.js" defer></script>
    ...
</head>
```

### NPM package

If you are using Vite as a package manager.

```bash
npm install @rollup/plugin-inject htmx-ext-no-load
```

```ts
// vite.config.js
import inject from '@rollup/plugin-inject'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    inject({
       htmx: 'htmx.org'
    }),
  ],
})
```

```ts
// app.js
import htmx from 'htmx.org'
import 'htmx-ext-no-load'
```

That's it! Any time a user tries to load data that would be from the current browser path it will be intercepted and not loaded.
