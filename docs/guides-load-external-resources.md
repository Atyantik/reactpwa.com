---
id: load-external-resources
title: External resources
sidebar_label: External resources
---

## Load External JS

There are two ways you can load external JS in your application. 
   1. [Use **loadScript** function](#1-use-loadscript-function)
   2. [Add the Javascript link in the head](#2-add-the-javascript-link-in-the-head-only-when-ssr-is-enabled) (only when SSR is **enabled**).

Suppose we want to load the javascript for the google maps. We can do it in following ways:
 
### 1. Use loadScript function
  Using **loadScript** function, we can load the **javascript** once the component has been mounted. The **loadScript** function 
  makes sure that if the script is already loaded, it wont make a request to fetch the script again. You can also set states
  of the component as it is a promise.  
  
**Usage:**  
```javascript
  // other imports
  import {loadScript} from "@pawjs/pawjs/src/utils/utils";
  
  // ... your other code
  componentDidMount() {
    loadScript("https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLEMAPS_APIKEY&ver=4.9.4").then((res) => {
      // callbackFunction
    }).catch(err => {
      // handle error loading JS situation
    });
  }
  // ...
```

### 2. Add the Javascript link in the head (only when SSR is enabled)
  Alternatively, you can add the link of the external Javascript file between the `<head></head>` tags in the html 
  that will be rendered by the Server.

```javascript
import React from "react";

export default class Server {
    apply(serverHandler) {
    // ...
    serverHandler.hooks.beforeHtmlRender.tap("Add Google Maps JS", (Application) => {
      // ...
      Application.htmlProps.head.push(
        <script key="google_maps" async src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLEMAPS_APIKEY&ver=4.9.4"/>);
      return Application;
    });
    // ...
  }
}
```

## Load External CSS

There are two ways you can load external CSS in your application. 
   1. [Use **loadStyle** function](#1-use-loadstyle-function)
   2. [Add the CSS link in the head](#2-add-the-stylesheet-link-in-the-head-only-when-ssr-is-enabled) (only when SSR is **enabled**).

Suppose we want to load the CSS for the Bootstrap. We can do it in following ways:
 
### 1. Use loadStyle function
  Using **loadStyle** function, we can load the **stylesheets** once the component has been mounted. The **loadStyle** function 
    makes sure that if the stylesheet is already loaded, it wont make a request to fetch the stylesheet again. You can also set states
    of the component as it is a promise.
 
**Usage:**  
```javascript
  // other imports
  import {loadStyle} from "@pawjs/pawjs/src/utils/utils";
  
  // ... your other code
  componentDidMount() {
    loadStyle("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css").then((res) => {
      // callbackFunction
    }).catch(err => {
      // handle error loading JS situation
    });
  }
  // ...
```

### 2. Add the Stylesheet link in the head (only when SSR is enabled)
  Alternatively, you can add the link of the external Stylesheet file between the `<head></head>` tags in the html 
    that will be rendered by the Server.

```javascript
import React from "react";

export default class Server {
    apply(serverHandler) {
    // ...
    serverHandler.hooks.beforeHtmlRender.tap("Add BootStrap CSS", (Application) => {
      // ...
      Application.htmlProps.head.push(
        <script key="bootstrap_css" async src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>);
      return Application;
    });
    // ...
  }
}
```


<div class="custom-slant"></div>  
