---
head:
  - - meta
    - name: description
      content: Coolify - Basic Auth with Traefik
  - - meta
    - name: keywords
      content: coolify self-hosting github github-actions docker kubernetes vercel netlify heroku render digitalocean aws gcp azure basic auth traefik
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:site
      content: "@coolifyio"
  - - meta
    - name: twitter:title
      content: Coolify - Basic Auth with Traefik
  - - meta
    - name: twitter:description
      content: Self-hosting with superpowers.
  - - meta
    - name: twitter:image
      content: https://coolcdn.b-cdn.net/assets/coolify/basic-auth-with-traefik-og-image.png
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://coolify.io
  - - meta
    - property: og:title
      content: Coolify
  - - meta
    - property: og:description
      content: Self-hosting with superpowers.
  - - meta
    - property: og:site_name
      content: Coolify
  - - meta
    - property: og:image
      content: https://coolcdn.b-cdn.net/assets/coolify/basic-auth-with-traefik-og-image.png
---

# Basic Auth with Traefik

This guide will help you to configure basic auth in Coolify & Traefik.

All you need to do is to set custom labels on your application.

```bash {7-8}
traefik.enable=true
traefik.http.routers.q04o0gk-0-http.rule=Host(`o8ogs84.127.0.0.1.sslip.io`) && PathPrefix(`/`)
traefik.http.routers.q04o0gk-0-http.entryPoints=http
traefik.http.routers.q04o0gk-0-http.middlewares=gzip
traefik.http.routers.q04o0gk-0-http.service=q04o0gk-0-http
traefik.http.services.q04o0gk-0-http.loadbalancer.server.port=80
traefik.http.middlewares.custom-auth.basicauth.users=test:$$2y$$12$$ci.4U63YX83CwkyUrjqxAucnmi2xXOIlEF6T/KdP9824f1Rf1iyNG
traefik.http.routers.q04o0gk-0-http.middlewares=custom-auth
```

The last two labels are the most important ones. 
- `q04o0gk-0-http` is the name of the service. You can change it to whatever you want, but you need to use the same for all labels where you see `q04o0gk-0-http`.
- `custom-auth` is the name of the middleware. You can change it to whatever you want. 


## How to generate user/password?
You need to set your username and password in the `users` label. You can generate your password with [Online htpasswd generator](https://www.web2generators.com/apache-tools/htpasswd-generator) or [htpasswd](https://httpd.apache.org/docs/current/programs/htpasswd.html) command.

```bash
htpasswd -nbB test test
```