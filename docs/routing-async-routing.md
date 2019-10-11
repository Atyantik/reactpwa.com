---
id: async-routing
title: Async routing
sidebar_label: Async routing
---

## What is a Router?
  A router allows your application to navigate between different components, changing the browser URL, 
  modifying the browser history, and keeping the UI state in sync. However, as React focuses only on 
  building user interfaces, it doesn’t have a built-in solution for routing. 
   
  **React Router** is the most popular routing library for React.

## Configuring Route
Lets consider adding a page `/contact-us` to our **PWA** app.

```javascript
import React from "react";
import ContactUs from "./components/contact-us";
export default class Routes {

  apply(routeHandler) {

    const routes = [
      // ... other routes
      {
        //path that user will access
        path: "/contact-us", 
        exact: true,          
        //Component to be displayed when the user visits the url of path
        component: ContactUs, 
      }
    ];

    routeHandler.hooks.initRoutes.tapPromise("AppRoutes", async () => {
      routeHandler.addRoutes(routes);
    });
  }
}
```
> We use React-Router v4 along with some extra options.

### Use dynamic `import()`

```javascript
import React from "react";
export default class Routes {

  apply(routeHandler) {

    const routes = [
      // ... other routes
      {
        path: "/contact-us",
        exact: true,
        component: import("./components/contact-us"),
      }
    ];

    routeHandler.hooks.initRoutes.tapPromise("AppRoutes", async () => {
      routeHandler.addRoutes(routes);
    });
  }
}
```

## Add Nested Routes
**Benefits of Nested Routing:** Rewrite sections of a page rather than loading entire new pages.  
You can add **nested routes** as follows:

```javascript
// ... other imports
import Blog from "./components/blog";
import NestedRouteDemo from "./components/nested-route-demo"
  // ... code
  // ... other routes
  {
    path: "/blog",
    abstract: true,
    component: Blog,
    routes: [
      {
        path: "/blog/nested-route-demo",
        exact: true,
        component: NestedRouteDemo
      }
    ]
  }
  // ... code
```

In `blog.js` add following code:
```javascript
import React, {Component} from "react";
import { renderRoutes } from "react-router-config";
export default class Blog extends Component {
  render() {
    return (
      <div>
        <!-- display common content in all sub-routes -->
        <h1>Blog</h1>
        <!--To render Sub-Routes -->
        <div>{renderRoutes(this.props.route.routes)}</div>
      </div>
    );
  }
}
```



<div class="custom-slant"></div>  
