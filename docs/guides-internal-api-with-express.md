---
id: internal-api-with-expressjs
title: Internal API with ExpressJS
sidebar_label: Internal APIs
---

ReactPWA uses [PawJS](https://github.com/Atyantik/pawjs/) which is build using 
[ExpressJS](https://expressjs.com/) 
for SSR and thus we can use this for creating internal APIs for our PWA 
 
### HapiJS/Sails.js/other... nodejs framework for creating API...
We have been asked many times if one can use other frameworks like HapiJS, SailJS etc to power their API, well that is the dream right! But as of now, 
no, we are only supporting ExpressJS

If you want to run different API server, it would be best to manage a different code base.  

### Limitation &amp; Implementation 

#### Limitation
For implementing custom internal API with Express it is inevitable to execute the project in non-SPA mode.
Please make sure that you have not set `singlePageApplication` option to `true` in your `pawconfig.json`.    
  
```json
{
  "singlePageApplication": false 
}
```
The default value of "singlePageApplication" is `false` so if you do not have the configuration 
in your pawconfig.json then you can create APIs with ExpressJS

#### Implementation
Let us get started with creating a simple JSON API that will return a timestamp.  
##### Step 1 - Isolating API from the main application
For simplicity let us create `src/api` folder that has our API related models and files etc.  
Creating express API is very simple. You just need to plug in the API as middleware.

##### Step 2 - Creating an ExpressJS app that handles API request   
A typical example of an API with express is as follows:
```javascript
// Import express
import express from 'express';

// Initialize the app
let app = express();

// Send timestamp
app.get('/api/timestamp', (req, res) => {
  return res.json({
    timestamp: (new Date()).getTime(),
  });
});

const port = 8080;
app.listen(port, function () {
     console.log("Running API on port " + port);
});
export default app;
```

We do not need the API listening on the custom port as our application would be listing on port mentioned in  
`pawconfig.json`  

So let us keep it simple as below:
```javascript
// Filename: `src/api/index.js`
// Import express
import express from 'express';

// Initialize the app
let app = express();

// Send timestamp
app.get('/api/timestamp', (req, res) => {
  return res.json({
    timestamp: (new Date()).getTime(),
  });
});
export default app;
```
##### Step 3 - Importing express app as middleware 
Create/update `src/server.js` with below:
```javascript
import ApiMiddleware from './api/index';

export default class ProjectServer {
  
  constructor({ addMiddleware }) {
    addMiddleware(ApiMiddleware);
  }
}

```
voila! that is all. You may now start/build your application to test your API at `/api/timestamp` 

Make sure you are returning/exporting default `app` so we can add it as middleware and we are not using routes that are defined for our frontend usage.
Best practice would be adding an API prefix like `/api/v1` to all API routes to avoid clashing routes with your application routes that are used in `src/routes.js`.

You may handle cache and routes as you see fit or add any ExpressJS middleware as per your requirement.  

<div class="custom-slant"></div>  
