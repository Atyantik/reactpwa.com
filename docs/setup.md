---
id: setup
title: Setup
sidebar_label: Setup
---


- #####  Install it:

```bash
npm install --save @pawjs/pawjs
```

- and add a script to your package.json like this:

```javascript
{
   "scripts": {
      "start": "pawjs start:dev",
      "build": "pawjs build:prod"
   }
}
```

- Create a file `routes.js` in `src` folder in your root directory.

- Add the following code to it: 

```javascript
import React from "react";
export default class Routes {

  apply(routeHandler) {

    const routes = [
      {
        path: "/",
        exact: true,
        component: () => <div>Hello World.</div>,
      },
    ];

    routeHandler.hooks.initRoutes.tapPromise("AppRoutes", async () => {
      routeHandler.addRoutes(routes);
    });
  }
}
```
