---
id: plugin-sass
title: Sass
sidebar_label: Sass
---

Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.
Writing CSS can be fun and it is used by many good CSS frameworks such as Bootstrap.

Thus we decided to add SASS support to the ReactPWA with simple plugin `@pawjs/sass` 


## Installation

```
$ npm i @pawjs/sass --save-dev
```

## webpack.js

Edit/Create `/src/webpack.js`

```javascript
import SassPlugin from "@pawjs/sass/webpack";

// ... other imports if any


export default class ProjectWebpack {
  constructor({addPlugin}) {

    addPlugin(new SassPlugin);
    // ...
  }
}
```

As simple as that now you application can  parse `.sass` files and can extract it to the CSS generated from anywhere inside the project.

> Pretty cool right! 

<div class="custom-slant"></div>  
