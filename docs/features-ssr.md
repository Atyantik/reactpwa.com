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


<h3 align="center" style="text-align:center">Client Side Rendering - CSR</h1>
  Our server initially sends a blank page to the user. Then the browser needs to download **bundled js** and runs it. 
  Once the data fetching happens we show the result to the user.   
  
![Client Side Rendering](/img/features/csr.png)


<h3 align="center" style="text-align:center">Server Side Rendering - SSR</h1>
  Here is where the server-side rendering comes in to the game. Instead of leaving all the work for the 
  browser we may do everything on the server and send the final markup. And then React is smart enough to 
  understand the markup that is currently on the page and reuse it.  
  
![Server Side Rendering](/img/features/ssr.png)

## Consider using a SSR page when:
   - The network is slow.
   - The server has plenty of resources to render the page with data. Remember, Node is single-threaded 
   and heavy computation may block incoming requests.
   - The delay before data shows up is short. In other words, the brief flash of a blank page is perceived 
   as fast loading or not noticed by users.
   - The main scripts is large and loads slowly. For our SSR page, the very first request asks for a rendered 
   page with data. Unlike the CSR case, there is no delay in sending this request. In CSR, our app sends an 
   extra request only after the app finishes loading the main scripts.
   - SEO is important. Googlebot and other search engine bots properly index a SSR page.

## Consider using CSR page when:   
   - The network is fast.
   - The server has few resources to spare for server-side rendering.
    - The delay before data shows up is significant (you have to display a lot of data). In other words, 
    users need to see some reassurance that the page is loading, for example a progress bar, loading spinner, 
    or some other placeholder.
    - The main scripts is small and loads fast. In that case, the app loads the main scripts quickly, and the 
    extra request that asks for dynamic data gets sent sooner.

<div class="custom-slant"></div>  
