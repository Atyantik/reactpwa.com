---
id: feature-hsts
title: HTTP Strict Transport Security - HSTS
sidebar_label: HSTS
---

![HSTS](/img/features/hsts.gif)

## What is HSTS?

Servers are usually not connected directly to each other, they must pass their requests and responses 
through a series of network routers. These routers, located in-between servers, have complete access to 
requests sent via HTTP connections. Since the data is transferred as unencrypted plain text, the routers 
can act as a “man in the middle” and read or manipulate data in transit.

This can cause users to receive manipulated information or be directed to hostile servers used by attackers 
to steal information like passwords and credit card info. This kind of interception can go undetected since 
a compromised HTTP response looks the same as a genuine response.

The HSTS policy forces all responses to pass through HTTPS connections instead of plain text HTTP. This ensures 
that the entire channel is encrypted before any data is sent, making it impossible for attackers to read or modify 
the data in transit.

---

## How HSTS works?

Enabling HSTS on a server involves adding the following HSTS response header in an HTTPS reply:

```bash
Strict-Transport-Security: max-age=expireTime; [includeSubdomains]
```
  

For example:
```bash
Strict-Transport-Security: max-age=16070400; includeSubDomains
```

The minimum parameter is the 'max-age' in seconds. This specifies the time the browser should connect to the 
server using the HTTPS connection. However, it’s recommended to include the subdirectories so that the browser 
uses the HTTPS connection for existing and future subdomains.

**When the browser accesses the website, the server replies with the HSTS header.**

This instructs the browser to only connect to the server and the entire domain through HTTPS. The browser will 
then remember to use the HTTPS connection for the specified 'max-age'.

Even if a user types `http://www.domain.com`, types the domain name without http, uses a bookmark, or a third party 
HTTP link, the browser will automatically upgrade the request to HTTPS. Once the 'max-age' expires, the browser 
starts accessing the server through HTTP unless the user specifies HTTPS.

**After receiving the HSTS header, the browser sends an HTTPS request.**

---

## What are the benefits of using HSTS?

 - Protection against HTTP downgrade attacks (SSL stripping attacks) by requiring all traffic to utilize HTTPS. 
 It rewrites requests that do not point to encrypted sources.

 - Mixed content defense. HSTS automatically upgrades fetches to HTTPS in situations where a domain has mixed content.

 - Better security in general: An HSTS-compliant browser aborts the connection to an HSTS-compliant server whenever the 
 security of a certificate can’t be confirmed. Plus, users can’t click through self-signed certificates.


<div class="custom-slant"></div>  
