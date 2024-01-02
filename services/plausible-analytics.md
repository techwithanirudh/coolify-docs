---
head:
  - - meta
    - name: description
      content: Coolify - Plausible Analytics 
  - - meta
    - name: keywords
      content: coolify self-hosting docker kubernetes vercel netlify heroku render digitalocean aws gcp azure service plausible analytics
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:site
      content: "@coolifyio"
  - - meta
    - name: twitter:title
      content: Coolify - Plausible Analytics
  - - meta
    - name: twitter:description
      content: Self-hosting with superpowers.
  - - meta
    - name: twitter:image
      content: https://coolcdn.b-cdn.net/assets/coolify/plausible-og-image.png
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
      content: https://coolcdn.b-cdn.net/assets/coolify/plausible-og-image.png
---

# Plausible Analytics

Due to trademark issues, we can't make a fully automated installation for Plausible Analytics. But don't worry, it's still easy to install it.

## Installation
1. You need to select the `Based on Docker Compose` application type where you can add any docker-compose file you want.
2. Copy the following file to the input box (with the comments): https://raw.githubusercontent.com/coollabsio/coolify/main/templates/compose/plausible.yaml
3. Click on the `Save` button.
4. Go to the `Plausible` service's settings page (gear icon on the right side).
5. Add your custom domain name to the `FQDN` input box.
6. Click on the `Save` button.
7. Click on the `Deploy` button.
