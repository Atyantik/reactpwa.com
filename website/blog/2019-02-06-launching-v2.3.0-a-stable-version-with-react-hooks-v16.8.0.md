---
title: ReactPWA upgraded to React 16.8.0 with hooks
author: Tirth Bodawala
authorURL: https://twitter.com/tirthbodawala
authorFBID: 1501220844
og:image: /img/blog/reactpwa-with-react-hooks-16-8.png
image: /img/blog/reactpwa-with-react-hooks-16-8.png
---
The long awaited React 16.8.0 with hooks is now released and as you all know the team at Atyantik Technologies constantly works on improving ReactPWA, 
so we tested out the code with the new react version and are happy to announce release of @pawjs/pawjsv2.3.0 with support to React hooks, thus releasing 
ReactPWA v2.2.3 

<!--truncate-->


## Goodness of React v16.8.0
If you are aware of React hooks, you already know how much it would
help user to reduce code and thus creating small bundle packages. if you are not aware of the goodness of 
react hooks do take a look at below links:

[https://dev.to/dan_abramov/making-sense-of-react-hooks-2eib](https://dev.to/dan_abramov/making-sense-of-react-hooks-2eib)  
[https://medium.freecodecamp.org/why-react-hooks-and-how-did-we-even-get-here-aa5ed5dc96af](https://medium.freecodecamp.org/why-react-hooks-and-how-did-we-even-get-here-aa5ed5dc96af)

### +30% code reduction
We observed in the projects we implemented that we can reduce code by 30% which is a very big achievement. With non-class or functional code JavaScript minifiers does 
does not have to worry about preserving the class name and class method names thus the minified code is even better

### Faster rendering
We saw improved rendering in DOM as there is reduction in the nested DOM structure which is great!

<div class="custom-slant"></div>  

## Upgrading to latest version
if you are already using ReactPWA all you need to do is as below:
### Step 1. remove old @pawjs/pawjs and react version if you installed it manually
```bash
npm r @pawjs/pawjs react react-dom
```
**WHY?** because there are some conflicts if you have two react version!

### Step 2. Upgrade to latest @pawjs/pawjs version in your existing app
```bash
npm i @pawjs/pawjs@latest
```

And that is all folks! You should have access to latest React v16.8.

#### Fresh checkout
If you are trying out ReactPWA for the first time just download the latest release of 
[ReactPWA v2.2.3](https://github.com/Atyantik/react-pwa/archive/v2.2.3.zip) 

## Officially Introducing: TypeScript
With stable release of @pawjs/pawjsv2.3.0 we are now supporting TypeScript in ReactPWA with support to ES6 as well (yes all mixed together).
We are enjoying typescript and are planning to upgrade PawJS fully with React v16.8 hooks and TypeScript, because it is awesome.
  

  
<div class="custom-slant"></div>  

