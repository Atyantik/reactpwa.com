---
id: feature-ssr
title: Server Side Rendering
sidebar_label: SSR
---

## What is Server Side Rendering - SSR ?

The most common use case for server-side rendering is to handle the initial render when a user 
(or search engine crawler) first requests our app. When the server receives the request, it 
renders the required component(s) into an HTML string, and then sends it as a response to the client. 
From that point on, the client takes over rendering duties.

---

## How is Server Side Rendering beneficial?

We are using server side rendering for mainly two reasons:

 - Performance benefit for our users
 - Consistent SEO performance
 
Here is a very simple timeline diagram(super simple) to showcase the difference between SSR and CSR.

<h3 align="center" style="text-align:center">SSR</h1>
![Server Side Rendering](/img/features/ssr.png)

<h3 align="center" style="text-align:center">CSR</h1>
![Client Side Rendering](/img/features/csr.png)

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7586505628408924"
     data-ad-slot="5652642939"
     data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>