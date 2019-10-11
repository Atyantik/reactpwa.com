---
id: feature-access-offline
title: Offline Accessibility
sidebar_label: Offline Accessibility
---

![Offline access](/img/features/offline.png)

When you visit a website without an internet connection in Chrome, you see the offline dinosaur.

No wonder we tend to think of websites as less reliable than mobile applications - we can't use them without the network.

At least, not typically. We could use [App Cache](http://diveintohtml5.info/offline.html) and the Cache Manifest to create an offline experience. For [a number of reasons](http://alistapart.com/article/application-cache-is-a-douchebag), developers have found App Cache difficult to work with.

Luckily, there's a new web standard, [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API), 
that potentially supplants App Cache by providing more granular control over networking in JavaScript, as opposed to manifest files.

Service Workers are JavaScript tasks (a bit like server-side daemons but running on the client side) that are instantiated by web pages and from that point, can intercept and route traffic emanating from that page. 
The Service Worker API is much more flexible than AppCache as it allows the developer to decide in minute detail what happens to each client-side web request — but with flexibility comes complexity.

<div class="custom-slant"></div>  
