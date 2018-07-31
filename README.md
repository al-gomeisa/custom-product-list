# Custom Product List

## Overview

This application shows basic 'product listing page' using modern webdesign, especially with following features:

* endless scrolling (Listed items are dynamically generated, in production case more actuarization required)

* hover functionality on a product providing additional informaiton like color variations etc. (Filters only added temporarily without functionality)

* a dummy filter functionality for listed items (Text search, Filter by Brand, Sorting)


The application is loosely based on the **Google Phone Gallery** tutorial, found at https://docs.angularjs.org/tutorial.


## Prerequisites

### Node.js and Tools

- After cloning this repository, please install the tool dependencies: `npm install`

- After `npm install` please run `npm start`, then aplication will be available on browser under http://localhost:8000

### Installing Dependencies

The application relies upon various Node.js tools, such as [Bower][bower], [Karma][karma] and
[Protractor][protractor].

## Application Directory Layout

```
app/                     --> all the source code of the app (along with unit tests)
  bower_components/...   --> 3rd party JS/CSS libraries, including Angular and jQuery
  core/                  --> all the source code of the core module (stuff used throughout the app)
    item/...             --> files for the `core.item` submodule, including JS source code, specs
    core.module.js       --> the core module
  item-list/...         --> files for the `itemList` module, including JS source code, HTML templates, specs
  items/...             --> static JSON files with item data (used to fake a backend API)
  app.animations.css     --> hooks for running CSS animations with `ngAnimate`
  app.animations.js      --> hooks for running JS animations with `ngAnimate`
  app.config.js          --> app-wide configuration of Angular services
  app.css                --> default stylesheet
  app.module.js          --> the main app module
  index.html             --> app layout file (the main HTML template file of the app)

node_modules/...         --> development tools (fetched using `npm`)

bower.json               --> Bower specific metadata, including client-side dependencies
package.json             --> Node.js specific metadata, including development tools dependencies
```
