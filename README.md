# The Cookie Jar V1 Reverse Proxy
This code is designed to work with a Cloudflare worker to form a reverse proxy when serving The Cookie Jar V1 SDK.
## Why would you want this?
Modern browsers have built in blockers for some external URLs that might prevent tools like The Cookie Jar from doing its job.  The best way around this is to use a reverse proxy to route the requests that are made to The Cookie Jar through your own domain first.  That way these tracking prevention measures don't see it as an external request.

# Getting Started
Once you have cloned this repository you will need to edit the wrangler file to match the KV binding to your own one.

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/The-Cookie-Jar-CMP/thecookiejar-cmp-reverse-proxy)