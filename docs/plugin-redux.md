---
id: plugin-redux
title: Redux
sidebar_label: Redux
---

Redux is a powerful tool to manage store for your application, but implementing it with SSR is a bit tricky. 
This plugin allows you to add Redux to this boilerplate with simple configurations.


## Installation

```
$ npm i redux react-redux @pawjs/redux --save-dev
```

## client.js

Edit/Create `/src/client.js`

```javascript
import ReduxClient from "@pawjs/redux/client";

// Import reducers from a consolidated file
// import AppReducers from "./app/reducers";
// ... other imports


const AppReducers = {
  counter: function(state = null) {
    return state;
  }
};

const AppInitialState = {
  counter: 1
};

export default class Client {
  constructor({addPlugin}) {

    const reduxClient = new ReduxClient({addPlugin});
    reduxClient.setReducers(AppReducers);
    // If you want to add some redux middleware
    // reduxClient.addMiddleware(AnyMiddleware);
    
    // If you want to add some redux enahncers
    // reduxClient.addEnhancer(SomeEnhancer);
    addPlugin(reduxClient);
    
    // ...
  }
  
  apply(clientHandler) {
    clientHandler
      .hooks
      .reduxInitialState
      .tapPromise("ReduxInitialState", async ({getInitialState, setInitialState}) => {
        const initialState = Object.assign({}, getInitialState(), AppInitialState);
        // You can also wait for something async to happen
        // await fetch("/api/counter/details") and add it to the initial state if needed
        setInitialState(initialState);
      });
  }
}
```

## server.js

For server side rendered application you will also need to update you server.js file. 
The configuration of server is similar to client.

```javascript
import ReduxServer from "@pawjs/redux/server";

// Import reducers from a consolidated file
// import AppReducers from "./app/reducers";
// ... other imports


const AppReducers = {
  counter: function(state = null) {
    return state;
  }
};

const AppInitialState = {
  counter: 1
};

export default class Server {
  constructor({addPlugin}) {

    const reduxServer = new ReduxServer({addPlugin});
    reduxServer.setReducers(AppReducers);
    // If you want to add some redux middleware
    // reduxServer.addMiddleware(AnyMiddleware);
    
    // If you want to add some redux enahncers
    // reduxServer.addEnhancer(SomeEnhancer);
    addPlugin(reduxServer);
    
    // ...
  }
  
  apply(serverHandler) {
    serverHandler
      .hooks
      .reduxInitialState
      .tapPromise("AppInitialState", async ({getInitialState, setInitialState}) => {
        const initialState = Object.assign({}, getInitialState(), AppInitialState);
        // You can also wait for something async to happen
        // await fetch("/api/counter/details") and add it to the initial state if needed
        setInitialState(initialState);
      });
  }
}
```


As you can see above having a common reducer file like `app/reducer.js` is good coding practice.
As initial state may depend on many server parameters it is inevitable to ignore the initialization of 
reduxInitialState in both `client.js` & `server.js`

<div class="custom-slant"></div>  
