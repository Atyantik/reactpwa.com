---
id: web-app-manifest
title: Web App manifest
sidebar_label: Web App manifest
---

It is very simple to configure the `manifest.json` and thus making it your own progressive web application.
The default configuration for `manifest.json` that we provide with this boilerplate is as below:
```json
{
    "name": "PawJS",
    "short_name": "PawJS",

    // Possible values ltr(left to right)/rtl(right to left)
    "dir": "ltr",

    // language: Default en-US
    "lang": "en-US",

    // Orientation of web-app possible:
    // any, natural, landscape, landscape-primary, landscape-secondary, portrait, portrait-primary, portrait-secondary
    "orientation": "any",
    "start_url": "/",
    "background_color": "#fff",
    "theme_color": "#fff",
    "display": "standalone",
    "description": "A highly scalable & plug-able, Progressive Web Application foundation with the best Developer Experience.",
    "icons": [
      {
        "src": "/path-to-pwa-icon-size-192x192.png",
        "sizes": "192x192"
      },
      {
        "src": "/path-to-pwa-icon-size-512x512.png",
        "sizes": "512x512"
      }
    ]
  }
```
## Update your `src/routes.js`
This can be easily set up in `src/routes.js`. It makes sense to add the configuration to router.js as it is shared by both client and 
server and also we are talking about the route `/manifest.json`
 
```javascript
// ...other imports

// Please import the desired icon
import PwaIcon192 from "./resources/images/path-to-pwa-icon-192x192.png";
import PwaIcon512 from "./resources/images/path-to-pwa-icon-512x512.png";

export default class Routes {

  apply(router) {

    router.setPwaSchema({
      "name": "MyProgressiveWebApp",
      "short_name": "MyPWA",

      // Possible values ltr(left to right)/rtl(right to left) #optional
      "dir": "ltr",

      // language: Default en-US #optional
      "lang": "en-US",
      "icons": [
            {
              "src": PwaIcon192,
              "sizes": "192x192"
            },
            {
              "src": PwaIcon512,
              "sizes": "512x512"
            }
            // You may add more size if you want to, but it is optional
          ]
    });
    
    // ..code
    // router.hooks.initRoutes.tap...
  }
}

```
> *Note*: visit [https://developers.google.com/web/fundamentals/web-app-manifest/](https://developers.google.com/web/fundamentals/web-app-manifest/) for more detailed explanation of web app manifest.
Below are some details from the link

## Key manifest properties
---
### short_name and/or name  

You must provide at least the short_name or name property. If both are provided, short_name is used on the user's home screen, launcher, or other places where space may be limited. name is used on the app install prompt.
```
"short_name": "Maps",
"name": "Google Maps"
```

### icons  
When a user adds your site to their home screen, you can define a set of icons for the browser to use. These icons are used in places like the home screen, app launcher, task switcher, splash screen, etc.

icons is an array of image objects, each object should include the src, a sizes property, and the type of image.
```
"icons": [
  {
    "src": "/images/icons-192.png",
    "type": "image/png",
    "sizes": "192x192"
  },
  {
    "src": "/images/icons-512.png",
    "type": "image/png",
    "sizes": "512x512"
  }
]
```

*include a 192x192 pixel icon and a 512x512 pixel icon. Chrome will automatically scale the icon for the device. If you'd prefer to scale your own icons and adjust them for pixel-perfection, provide icons in increments of 48dp.*  

### start_url
The start_url tells the browser where your application should start when it is launched, and prevents the app from starting on whatever page the user was on when they added your app to their home screen.  
Your start_url should direct the user straight into your app, rather than a product landing page. Think about what the user will want to do once they open your app, and place them there.
```
"start_url": "/?utm_source=pwa"
```
*add a query string to the end of the start_url to track how often your app is launched.*

### background_color
The background_color property is used on the splash screen when the application is first launched.

### display
You can customize what browser UI is shown when your app is launched. For example, you can hide the address bar and browser chrome. Or games may want to go completely full screen.

```
"display": "standalone"
```
#### Parameters  

| value      | Description                                                                                                                                                                                                       |
|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| fullscreen | Opens the web application without any browser UI and takes up the entirety of the available display area.                                                                                                         |
| standalone | Opens the web app to look and feel like a standalone native app. The app runs in it's own window, separate from the browser, and hides standard browser UI elements like the URL bar, etc.Not supported by Chrome |
| minimal-ui | Not supported by Chrome. This mode is similar to fullscreen, but provides the user with some means to access a minimal set of UI elements for controlling navigation (i.e., back, forward, reload, etc).          |
| browser    | A standard browser experience.                                                                                                                                                                                    |  
> In order to show the Add to Home Screen Prompt, display must be set to standalone.

### orientation
You can enforce a specific orientation, which is advantageous for apps that work in only one orientation, such as games. Use this selectively. Users prefer selecting the orientation.  

```
"orientation": "landscape"
```

### scope
The scope defines the set of URLs that the browser considers within your app, and is used to decide when you’ve left your app, and should be bounced back out to a browser tab. The scope controls the url structure that encompasses all the entry and exit points in your web app. Your start_url must reside within the scope.
```
"scope": "/maps/"
```

*Some tips:*

- If you don't include a scope in your manifest, then the default implied scope is the directory that your web app manifest is served from.
- The scope attribute can be a relative path (../), or any higher level path (/) which would allow for an increase in coverage of navigations in your web app.
- The start_url must be in the scope.
- The start_url is relative to the path defined in the scope attribute.
- A start_url starting with / will always be the root of the origin.

### theme_color
The theme_color sets the color of the tool bar, and in the task switcher.

```
"theme_color": "#3367D6"
```

Pretty simple right!


<div class="custom-slant"></div>  
