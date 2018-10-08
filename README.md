# TI4 - Home Page for Twilight Imperium Game Nights

Site built with [svelte](https://svelte.technology/).

`index.html` is a static event page that sends form responses back to [netlify](https://www.netlify.com/).

The dynamic site is located at `.\app` and is currently a work in progress.

Netlify is set up with the master branch being served at ti4.dominicbisset.co.uk and other branches running as subdomains off that main subdomain.

## Build and run locally

Clone the repo, then run the following commands in the project root folder.

```
npm install
npm run-script build
npm run-script dev
```

This will serve the site on `localhost:5000`

Note that
* the build step is required at least once as it creates the public folder and copies static files from the `data` directory plus the `*.html` and `global.css` files in the `src` directory. 
  * you'll need to stop the server and rebuild the full site if you ever change that static content
* the data json files are hard coded with references to my domain.  One day I might fix this.

## Hosting 
```
npm install
npm run-script build
```
Then serve the `public` folder
