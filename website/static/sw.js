/* eslint-disable */
importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");
if (workbox) {
  workbox.setConfig({ debug: false });
  workbox.skipWaiting();
  workbox.clientsClaim();
  workbox.routing.registerRoute(
    new RegExp('.*'),
    workbox.strategies.networkFirst()
  );
}
