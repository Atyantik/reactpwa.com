---
title: Pull vs Push CDN
author: Yash Thakur
authorURL: https://www.yashthakur.in
authorFBID: 1472013489
---

## What is a CDN?

Content Delivery Network(CDN) is a system of distributed networks that are used to deliver
the content like web pages and content(images, videos, audio, etc.) based the location of 
the user, the origin of the webpage and the location of CDN server.

CDN service is effective for websites that have high traffic and global reach of users.
The content will be delivered faster to the user if the server is closer to the user 

<!--truncate-->  

## Types of CDN

There are mainly two types of CDN services: [Pull](#pull-cdn) and [Push](#push-cdn)  

You may have heard either or both the terms but not sure what it means? To the end 
users they work in the same way, but to the site administrator, they work in 
entirely different ways.


### Push CDN
**Push CDN** works like a secondary server. The owner of the website has to manually push 
the content that needs to be cached to the CDN. This is often accomplished by setting 
up a remote file that can perform the automatic copy process or cron job which copies 
the files at a specified interval. 

**Advantages:**
  - The end user does not have to wait for the content to be copied to the CDN and then
  downloaded to their browser.
  - A **Push CDN** gives you more control over the files to be copied and when they are 
  to be copied.  

**Disadvantages:**
  - You have to configure the process that copies the files remotely and ensure that it 
  is always working.
  
   
### Pull CDN

When the end-user requests information from the CDN and the file is not present on the CDN 
then it pulls the content from the web server. Once the file has been pulled, it is stored 
or cached by the CDN and served to the user until the file expires. 

**Advantages:**
  - A very little configuration is required to set it up and rest of the work is done by the CDN.
  
**Disadvantages:**
  - It is less flexible.
  - The first user may find it time consuming to load the resources.  
  
<div class="custom-slant"></div>  
