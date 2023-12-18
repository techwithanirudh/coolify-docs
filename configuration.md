---
head:
  - - meta
    - name: description
      content: Coolify Documentation
  - - meta
    - name: keywords
      content: coolify self-hosting docker kubernetes vercel netlify heroku render digitalocean aws gcp azure
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:site
      content: '@coolifyio'
  - - meta
    - name: twitter:title
      content: Coolify Documentation
  - - meta
    - name: twitter:description
      content: Self-hosting with superpowers.
  - - meta
    - name: twitter:image
      content: https://cdn.coollabs.io/assets/coolify/og-image-docs.png
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
      content: https://cdn.coollabs.io/assets/coolify/og-image-docs.png
---
# Configuration

## Instance Domain

You can set your Coolify instance a custom domain in the `/settings` page.

## Custom Proxy
If you are using a custom proxy (like Nginx / Caddy), you need to set the following manually for your Coolify instance.

You need to proxy `/app*` to `coolify-realtime:6001` and `*` to `coolify:8000` containers. 

### Caddy

```bash
# Caddyfile
app.coolify.io {
  handle /app* {
		reverse_proxy coolify-realtime:6001
	}

	handle {
		reverse_proxy coolify:8000
	}
}
```

### Nginx

```bash
# nginx.conf
server {
  listen 80;
  server_name app.coolify.io;

  location /app {
    proxy_pass http://coolify-realtime:6001;
  }

  location / {
    proxy_pass http://coolify:8000;
  }
}
```