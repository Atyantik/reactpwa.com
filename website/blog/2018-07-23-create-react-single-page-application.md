---
title: Create React Single Page Application
author: Tirth Bodawala
authorURL: https://twitter.com/tirthbodawala
authorFBID: 1501220844
---

## Missing Single Page Applications?
I remember a time when everyone wanted a single page application! Everyone was moving to Single Page Application from their old web app for better user experience. 
Many moved to SPA and started facing the issue of SEO and started utilizing services such as prerender.io to get their SEO done.  
Now this was an issue and thus came the era of Universal Apps. React started the ERA SSR and many libraries followed the lead.

Thus everyone are now targeting SSR compatible universal applications.

> Single Page Application are alive and still rocking the web!

<!-- truncate -->

<div class="custom-slant"></div>

Single page applications has many pros when compared to Universal Applications.
1. It is fast, once the assets are loaded and cached you get a blazing fast UX. Only transmission back and forth is of API.
2. Server rendering is expensive and increases TTFB (Time to First Byte), which is not he case when using SPA
3. Combining SPA with Progressive Web Application features can help you develop applications that can provide great UX
4. Using CDN and compression for service assets can be best utilized and becomes an important factor for user interaction
5. Including code splitting with SPA can give you best loading time.

## Where & When to use SPA?
The answer is very simple, use SPA where there is no need for SEO! 
I would use SPA in creating following application:

- Admin Panel
- CPanel
- User Dashboard
- Creating PWA only targeting mobile
- Any interface that is hidden from bots

## ReactPWA & Single Page Application
ReactPWA is now able to build SPA with server less output and an `index.html`

Changing a line is all it takes! 

> SPA functionality can be utilized with implementation of `@pawjs/pawjs@2.1.1`
 
### Step 1
Open file `pawconfig.json` in the root folder

### Step 2
Add/Update the option as below:
```json
{
  // ...other options
  "singlePageApplication": true
}
```
Adding or updating the option `singlePageApplication` to `true` will override the behaviour of variable
`serverSideRender` to `false`
and the url routing will be updated to use `HashRouter`

Urls will now be `/#/docs`, `/#/contact` etc.

<div class="custom-slant"></div>  

## Why use ReactPWA for SPA?
Well, we offer great set of [features](/docs/en/features.html) and [plugins](/docs/en/plugins.html) with infinite possibility of extendability, so WHY NOT!  
Also we are always available on [Gitter](https://gitter.im/react-pwa/Lobby) for chat and assistance.
