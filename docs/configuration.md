---
id: configuration
title: PawJS configuration
sidebar_label: PawJS Configuration
---

The configuration file is used to change the behaviour of the boilerplate. The config file used in this boilerplate belongs to **PawJS Framework**.


The default config for `pawconfig.json` that we provide with this boilerplate is:
```json
{
  "port": "3003",
  "host": "0.0.0.0",
  "appRootUrl": "/",
  "serviceWorker": false,
  "serverSideRender": true,
  "singlePageApplication": false
}
```


## Configuration options

| Name        |  Type          | Default|
| ------------- |:----------------:|:---------------:|
|   [port](#port)  | `String` |   "9090"   |
|   [host](#host)  |   `String`    |   "0.0.0.0"    |
|   [appRootUrl](#approoturl)    | `String`    |   "/"   |
|   [cdnUrl](#cdnurl)        | `String`    |   ""    |
|   [serviceWorker](#serviceworker)    | `Boolean`    |   true    |
|   [serverSideRender](#serversiderender)    | `Boolean`    |    true    |
|   [asyncCSS](#asynccss)       |  `Boolean` |   true    |
|   [clientRootElementId](#clientrootelementid) | `String`  |   "app"   |
|   [hstsEnabled](#hstsenabled)   |   `Boolean` |   true    |
|   [hstsmaxAge](#hstsmaxage)    |   `Integer`   |   31536000    |
|   [hstsIncludeSubDomains](#hstsincludesubdomains) |  `Boolean`  |   true    |
|   [hstsPreload](#hstspreload)   |   `Boolean`   |   false   |
|   [singlePageApplication](#singlepageapplication)   |   `Boolean`   |   false   |


## port

Define on which port you want to run the application.


## host

Define the IP/hostname; you want to run your application on, without the schema. Example: `127.0.0.1` or `localhost`


## appRootUrl

`appRootUrl` allows you to host your app in the subdirectories too.

Suppose your domain is `https://www.example.com/` and you want to host the app at `https://www.example.com/react-pwa/`  then add `appRootUrl: "/react-pwa"`.


## cdnUrl

Loading assets from a CDN becomes easy. Just mention the `cdnUrl`, and the app fetches the assets from the CDN.

**NOTE:** There are two types of CDN namely PULL and PUSH ([more here](/blog/2018/07/02/pull-vs-push-cdn.html)) if you are using a PUSH CDN kindly push 
the assets to the CDN before deploying the app.


## serviceWorker

You can enable or disable **Service-Worker** by setting it to `true` or `false`. 

> **NOTE:** We highly discourage use of service-worker during development.


## serverSideRender

If you want to enable Server Side Rendering(SSR) then set value to `true` or else set it as `false`. 
Enabling SSR is beneficial for your site's performance and also makes it easy for search engines to crawl the content of your website to make it **SEO friendly**.

## asyncCSS

To load CSS asynchronously set the value to `true`. Setting it as `false` loads the CSS before the HTML loads.

## clientRootElementId
You can change the **Root Element ID** where the react components render.

## hstsEnabled

You can enable HSTS by setting the value of this variable to `true`. Setting it to `false` disables HSTS. Read more about HSTS [here](features-hsts.md)

## hstsMaxAge

This option lets you set the Max-Age of HSTS (in seconds).  

## hstsIncludeSubDomains
Setting `hstsIncludeSubDomains` to `true` enables HSTS on all subdomains and directories.

## hstsPreload

HSTS preloading is browser's inbuilt function whereby a global list of hosts enfore their site to use HTTPS only. 
Enabling it forces the user to access the site on `HTTPS` only.

> **NOTE: If HSTS is disabled, setting other HSTS options will not affect the app.**  

## Single Page Application (SPA)
Run & build the application as a Single Page Application. Uses HashRouter and is ideal for applications that does not require server support or SEO.   
***Default: false***


<div class="custom-slant"></div>  
