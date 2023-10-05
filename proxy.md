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
# Proxy
## Types
- **Traefik**: Automatically configure Traefik(v2) based on your deployed resources.
- **Custom/None**: You will configure a proxy manually (only for advanced users).

:::info
Soon we will support Nginx & Caddy with fully automated configuration.
:::

## Traefik
Coolify uses Traefik proxy by default to create a reverse proxy for your resources.

:::tip
Traefik only starts when you did not select any proxy for your server and you have a domain configured for a resource or your Coolify instance itself. 
:::

## Add Custom Configuration
You can always add your own configuration to the proxy settings from Coolify's UI (`/server/<server_uuid>/proxy`) or by adding it to a [specific directory](/no-vendor-lock-in.md#persistent-directories) on your server.