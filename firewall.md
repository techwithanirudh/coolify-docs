---
head:
  - - meta
    - name: description
      content: Coolify
  - - meta
    - name: keywords
      content: coollabs coolify documentation
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:site
      content: '@heyandras'
  - - meta
    - name: twitter:title
      content: Coolify
  - - meta
    - name: twitter:description
      content: An open-source & self-hostable Heroku / Netlify alternative.
  - - meta
    - name: twitter:image
      content: https://cdn.coollabs.io/assets/coollabs/og-image-documentation.png
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
      content: An open-source & self-hostable Heroku / Netlify alternative.
  - - meta
    - property: og:site_name
      content: Coolify
  - - meta
    - property: og:image
      content: https://cdn.coollabs.io/assets/coollabs/og-image-documentation.png
---
# Firewall

If you are using any kind of firewall, you need to allow the following ports:

- For Coolify: `8000` and `22` (or any other SSH port) (required)
- Reverse Proxy: `80, 443` (optional)

:::warning 
If you are using `Oracle Cloud free ARM server`, you need to allow these ports inside Oracle's Dashboard, otherwise you cannot reach your instance from the internet after installation.
:::