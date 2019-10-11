---
id: feature-hot-reloading
title: Hot Reloading
sidebar_label: Hot Reloading
---

## What is Hot Reloading?
**Hot reloading** only refreshes the files that were changed without losing the state of the app. 
For example, if you were four links deep into your navigation and saved a change to some styling, 
the state would not change, but the new styles would appear on the page without having to navigate 
back to the page you are on because you would still be on the same page.

## How does it work?
Hot Reloading is built on top of a feature [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html), or HMR. It was first introduced 
by Webpack and we implemented it inside of React Native Packager. HMR makes the Packager watch for 
file changes and send HMR updates to a thin HMR runtime included on the app.

In a nutshell, the HMR update contains the new code of the JS modules that changed. When the runtime 
receives them, it replaces the old modules' code with the new one:

![Hot Reloading](/img/features/hot-reloading.png)

<div class="custom-slant"></div>
