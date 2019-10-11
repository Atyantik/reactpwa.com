---
id: working-with-environment-variables
title: Environment Variables
sidebar_label: Environment Variables
---

Environment variables can be used when one wants to deploy to a server and need staging or production specific configurations.

A simple use of environment variables is changing the API communication which your app is using.

| *Environment* | *Endpoint*                                     |
| ------------- |------------------------------------------------|
| **Local**     | `http://localhost:8080/api/`                   |
| **Staging**   | `https://stage-api.example.com/api/v2.2/`      |
| **Live**      | `https://api.example.com/api/v1.1/`            |


Understanding how environment variables work with ReactPWA is very important

## Compiling with env variables
As ReactPWA compiles to standalone executable nodejs server and chunked JavaScript for browser, one can simply **NOT** execute the following:
```bash
API_URL="https://api.example.com/api/v1.1/" node server.js
```
and expect the client and server to accept the value of API_URL!

If you have a look at the scripts tags of [package.json of ReactPWA](https://github.com/Atyantik/react-pwa/blob/master/package.json) you will see that 
[PawJS](https://github.com/Atyantik/pawjs) starts the application
```json
{
  "scripts": {
    "start": "pawjs --no-cache --env=development start",
    "build": "pawjs --no-cache --config=./prod-pawconfig.json --env=production build"
  }
}
```
We will need to pass env variables to the above script tags to have access to environment variables in the application.

### Working with env variables in development mode
Start the development server with the following line
  
`API_URL="http://localhost:8080/api/" npm start`  
OR
update the start script in `package.json` to following
```json
{
  "scripts": {
    "start": "API_URL=\"http://localhost:8080/api/\" pawjs --no-cache --env=development start"
  }
}
```

### Working with env variables in production mode
Build production/staging environment with following:
`API_URL="http://localhost:8080/api/" npm run build`
OR
update the build script in `package.json` to the following
```json
{
  "scripts": {
    "build": "API_URL=\"https://api.example.com/api/v1.1/\" pawjs --no-cache --config=./prod-pawconfig.json --env=production build"
  }
}
```

### Accessing environment
Once you configured above, you can use process.env.API_URL in both client and server scripts to access the env variable.
> `process` is not available on client side, but with help of webpack.EnvironmentPlugin we can access it

The above is good if one needs to work with just a simple environment variable for API. But we cannot just add secret keys to `package.json`!
We would prefer using

##  DotEnv
Setting up multiple and secret variables can be difficult while adding them all to a single command line
with @pawjs/pawjs >= v2.3.2 you can specify the path of `.env` file that can add env variables to the application.

### Upgrade your pawjs version to latest
Ideally upgrading pawjs should never break your application, cause ReactPWA is an upgradable boilerplate.

```bash
npm i @pawjs/pawjs@latest
``` 

### Create .env file(s)
Preferably .env files should not be added to git as it may vary from according to different environment
so create .env file add it to .gitignore and run
```bash
ENV_CONFIG_PATH=./.env npm start
```
to start development server with env configurations in `.env` file.  
Example dotenv config file `.env`:
```dotenv
APP_NAME="ReactPWA"
```
Then you would be able to access `process.env.APP_NAME` in your application anywhere.
to make your start script permanent, one should rather update start script in `package.json`
    
```json
{
  "scripts": {
    "start": "ENV_CONFIG_PATH=\".env\" pawjs --no-cache --env=development start"
  }
}
```

PawJS also comes with `--env-config-path` option to set env-config-path via cli option, thus the above 
becomes equivalent to
    
```json
{
  "scripts": {
    "start": "pawjs --no-cache --env=development --env-config-path=./.env start"
  }
}
```  

## Continuous integration
Many CI provide `.env` file access, and many does not once can build staging or production version 
in CI as below:  
### Individual Variables
```bash
#... other commands
API_URL=${API_URL} FACEBOOK_SECRET=${FB_SECRET} npm run build
``` 

### .env file
```bash
#... other commands
ENV_CONFIG_PATH=${ci/env/config/path} npm run build
```

If you are building production version on your private server, then you can save the .env file on a safe location and just build 
the application as above.
```bash
#... other commands
ENV_CONFIG_PATH=${secure/path/to/home/dir/.env} npm run build
```


<div class="custom-slant"></div>  
