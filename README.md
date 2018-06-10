# Svelte Parcel Example

This setup, while the most basic possible, doesn't seem to work.

    $ yarn install
    $ yarn run start
    yarn run v1.5.1
    $ parcel src/index.html
    Server running at http://localhost:1234
    🚨  /home/timothy/Projects/Web/parcel-example/src/main.js:1:16: Cannot resolve dependency './App.svelte' at '/home/timothy/Projects/Web/parcel-example/src/App.svelte'
    > 1 | import App from './App.svelte';
        |                 ^
      2 |
      3 | const app = new App({
      4 | 	target: document.body,
