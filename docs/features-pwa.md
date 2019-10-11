---
id: feature-pwa
title: PWA - Progressive Web Application
sidebar_label: PWA
---

[![PWA States Gif](https://media.giphy.com/media/xT9Igz9xhXychk8LyE/giphy.gif)](/img/features/pwa_app.gif)

## What is PWA?

**The web…but better**  
  
A Progressive Web App (PWA) is a web app that uses modern web capabilities to deliver an app-like experience to users. These apps meet certain requirements (see below), are deployed to servers, accessible through URLs, and indexed by search engines.

**Progressive Web Apps are:**  

**Progressive**  
They are built with progressive enhancement as the core principle and it works for every user regardless of the browser used by the user.
  
**Responsive**  
Fits to whatever size of screen it is, whether it is desktop, tablet, mobile device or any future gadget.

**Connectivity Independent**  
Capable of working offline and slow internet networks.

**App-like**  
Utilizes the app-shell model which provides app-style navigations and interactions.

**Fresh**  
Always up-to-date thanks to the service worker update process.

**Safe**  
Served by means of TLS to avert snooping and guarantee content hasn't been tampered.

**Discoverable**  
Are identifiable as “applications” thanks to W3C manifests and service worker registration scope permitting web indexes to discover them.

**Installable**  
Enable users to "keep" applications they find most valuable on their home screen without the bothering about an application store.

**Linkable**  
Effortlessly share by means of URL and not require complex installation.
---

## Why Progressive Apps?

**Case 1**: Users nowadays doesn't want to install app every time when they have to get their work done, User doesn't have to wait to download app from a app store then use it. Instead web apps provide same experience on the mobile browser to complete user's task. - **No more waiting**  

**Case 2**: In the world of millions apps and 30+ apps already on users phone with an average of 10+ app updates daily it really becomes hard for user to update apps every time there is new version launched, Whereas web apps makes it simpler for user. **Ease of use**

**Case 3**: Data bandwith, User who is on mobile with a mobile data and with limited bandwith(2g) or a user from remote area cannot really cannot download app and cannot actually use app with low speed, Whereas in browser with PWA it becomes easier for user and makes the experience delightful.

---

## How is PWA implemented?

PWAs are based on a set of things on which Web Apps are already based on:

 - Responsive Web Design (<abbr lang="en" title="Responsive Web Design">RWD</abbr>), of course, to adapt interfaces to all screens;
 - Web Services and Web Sockets provided by servers and which allow access to information or actions implementation via web actions;
 - Some API provided by browsers, which allow to take full advantage of the context (for example, we would have access to different APIs depending on the capabilities of the consulting hardware: audio, video, acceleration, geolocation, transcription, vibration, etc.).


However, they are distinguished by two recent technical components:

 - [Service Workers](https://developer.mozilla.org/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers): This is a browser capability to provide an intermediate layer between the Web App and the network, which runs in the background (even when the application is closed). This “network” layer is capable of listening and sending requests, notifications or even capturing connectivity changes;
 - The [Web Workers](https://developer.mozilla.org/fr/docs/Utilisation_des_web_workers) are also background capabilities but they are rather dedicated to calculations and “services” oriented development.

---

## Who are using PWA?

<a href="https://mobile.twitter.com/" target="_blank"><img width="80px" src="/img/features/twitter.png" alt="Twitter Logo" style="max-width:100%; display: inline-block; margin-right: 10px;"></a>
<a href="https://www.washingtonpost.com/pwa" target="_blank"><img width="80px" src="/img/features/washington-post.png" alt="Washington Post Logo" style="max-width:100%; display: inline-block; margin-right: 10px;"></a>
<a href="https://flipboard.com/" target="_blank"><img width="80px" src="/img/features/flipboard.png" alt="Flipboard Logo" style="max-width:100%; display: inline-block; margin-right: 10px;"></a>
<a href="https://paperplanes.world/" target="_blank"><img width="80px" src="/img/features/paper-planes.png" alt="Paper Planes Logo" style="max-width:100%; display: inline-block; margin-right: 10px;"></a>


<div class="custom-slant"></div>  
