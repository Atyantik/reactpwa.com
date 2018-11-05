---
id: plugin-less
title: LESS
sidebar_label: LESS
---

Less (which stands for Leaner Style Sheets) is a backwards-compatible language extension for CSS.  
It is a JavaScript tool that converts your Less styles to CSS styles.

We decided to add LESS support to the ReactPWA with simple plugin `@pawjs/less` while implementing  
CSS framework libraries like AntDesign.   


## Installation

```
$ npm i @pawjs/less --save-dev
```

## webpack.js

Edit/Create `/src/webpack.js`

```javascript
import LessPlugin from "@pawjs/less/webpack";

// ... other imports if any


export default class ProjectWebpack {
  constructor({addPlugin}) {

    addPlugin(new LessPlugin);
    // ...
  }
}
```

As simple as that now you application can  parse `.less` files and can extract it to the CSS generated from anywhere inside the project.

> Pretty cool right! 

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7586505628408924"
     data-ad-slot="5652642939"
     data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
