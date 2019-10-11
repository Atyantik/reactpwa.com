---
id: add-new-route
title: Add new route
sidebar_label: Add new route
---

## What is a Router?
  A router allows your application to navigate between different components, changing the browser URL, 
  modifying the browser history, and keeping the UI state in sync. However, as React focuses only on 
  building user interfaces, it doesn’t have a built-in solution for routing. 
   
  **React Router** is the most popular routing library for React.

## Configuring Route
  Lets consider adding a page `/contact-us` to our **PWA** app.  
  
  ### Step 1: Create a new file `src/pages/contact.js`
  
  Using normal **import**
  
  ```javascript
  import ContactUs from "../app/components/contact-us";
  export default [
    {
      //path that user will access
      path: "/contact-us", 
      exact: true,          
      //Component to be displayed when the user visits the url of path
      component: ContactUs, 
    }
  ];
  ```
  
  **OR**
  
  Using dynamic **`import()`**
        
  ```javascript
  export default [
    // ... other routes
    {
      path: "/contact-us",
      exact: true,
      component: import("../app/components/contact-us"),
    }
  ];
  ```
  ### Step 2: Add file to the routes
  We need to add the new route to the list of existing routes.  
  In `routes.js` : 
  ```javascript
  // other imports
  import ContactUsRoute from "./pages/contact-us";

  export default class Routes {
    
    apply(routeHandler) {
    
      const routes = [
        // ... other routes
        ...ContactUsRoute
      ];
      
      routeHandler.hooks.initRoutes.tapPromise("AppRoutes", async () => {
        routeHandler.addRoutes(routes);
      });
    }
  }
  ```
> We use React-Router v4 along with some extra options.



<div class="custom-slant"></div>  
