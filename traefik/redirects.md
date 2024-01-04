---
head:
  - - meta
    - name: description
      content: Coolify - Redirects with Traefik
  - - meta
    - name: keywords
      content: coolify self-hosting github github-actions docker kubernetes vercel netlify heroku render digitalocean aws gcp azure redirects traefik
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:site
      content: "@coolifyio"
  - - meta
    - name: twitter:title
      content: Coolify - Redirects with Traefik
  - - meta
    - name: twitter:description
      content: Self-hosting with superpowers.
  - - meta
    - name: twitter:image
      content: https://coolcdn.b-cdn.net/assets/coolify/redirects-og-image.png
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
      content: https://coolcdn.b-cdn.net/assets/coolify/redirects-og-image.png
---

# Redirects with Traefik

This guide will help you to configure redirects in Coolify with Traefik.

## WWW <-> Non-WWW
You can redirect your `www` to `non-www` or vice versa with Traefik. There are two ways to do this. With global middlewares or with resource middlewares.

### With Global Middlewares
1. You need to set both FQDNs for your resource, so for example: `coolify.io,www.coolify.io`
2. Make sure you have the following labels in your Traefik proxy:
```bash
- 'traefik.http.middlewares.https-www-to-non-www.redirectregex.regex=^https?://www\.(.+)'
- 'traefik.http.middlewares.https-www-to-non-www.redirectregex.replacement=https://$1'
- traefik.http.middlewares.https-www-to-non-www.redirectregex.permanent=true
- 'traefik.http.middlewares.https-non-www-to-www.redirectregex.regex=^https?://(?:www\.)?(.+)'
- 'traefik.http.middlewares.https-non-www-to-www.redirectregex.replacement=https://www.$${1}'
- traefik.http.middlewares.https-non-www-to-www.redirectregex.permanent=true
- 'traefik.http.middlewares.http-www-to-non-www.redirectregex.regex=^http://www\.(.+)'
- 'traefik.http.middlewares.http-www-to-non-www.redirectregex.replacement=http://$1'
- traefik.http.middlewares.http-www-to-non-www.redirectregex.permanent=true
- 'traefik.http.middlewares.http-non-www-to-www.redirectregex.regex=^http://(?:www\.)?(.+)'
- 'traefik.http.middlewares.http-non-www-to-www.redirectregex.replacement=http://www.$${1}'
- traefik.http.middlewares.http-non-www-to-www.redirectregex.permanent=true
```

If you are using the default Traefik configuration and you are on at least beta.182 version, you can reset your Traefik configurations to default by clicking on the `Reset configuration to default`.

After that, you can add the following middlewares to your resources
- `http-www-to-non-www` for redirecting `www` to `non-www` in HTTP
- `http-non-www-to-www` for redirecting `non-www` to `www` in HTTP
- `https-www-to-non-www` for redirecting `www` to `non-www` in HTTPS
- `https-non-www-to-www` for redirecting `non-www` to `www` in HTTPS

3. Set custom labels on your resource
  - Go to your resource
  - In the `Container Labels` field, add one of the labels from the global middlewares section above to the right traefik.http.router.your-router-name.middlewares field.
  
```bash{4}
# A similar line is already defined.
traefik.http.routers.xc0k4og-1-http.rule=Host(`www.coolify.io`) && PathPrefix(`/`)
# You need to add this line
traefik.http.routers.xc0k4og-1-http.middlewares=http-www-to-non-www
```

### With Resource Middlewares

1. You need to set both FQDNs for your resource, so for example: `coolify.io,www.coolify.io`

2. Add a unique middleware to your resource. 
  
#### www->non-www
```bash{4,6-8}
# A similar line is already defined.
traefik.http.routers.xc0k4og-1-http.rule=Host(`www.coolify.io`) && PathPrefix(`/`)
# You need to add these lines
traefik.http.routers.xc0k4og-1-http.middlewares=example-middleware
# Replace http:// with https:// if you want to redirect to https
traefik.http.middlewares.example-middleware.redirectregex.regex=^http://www\.(.+)
traefik.http.middlewares.example-middleware.redirectregex.replacement=http://$1
traefik.http.middlewares.example-middleware.redirectregex.permanent=true
```
#### non-www->www
```bash{4,6-8}
# A similar line is already defined.
traefik.http.routers.xc0k4og-1-http.rule=Host(`coolify.io`) && PathPrefix(`/`)
# You need to add these lines
traefik.http.routers.xc0k4og-1-http.middlewares=example-middleware
# Replace http:// with https:// if you want to redirect to https
traefik.http.middlewares.example-middleware.redirectregex.regex=^http://(?:www\.)?(.+)
traefik.http.middlewares.example-middleware.redirectregex.replacement=http://www.$${1}
traefik.http.middlewares.example-middleware.redirectregex.permanent=true
```