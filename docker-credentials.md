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
# Docker Credentials

Docker credentials (from v4.0.0-beta.88) are used to authenticate with Docker registries to pull images for your resources. 

## Login to Docker Registry
If you want to use a private Docker registry, you need to login on the server with the same user that configured inside Coolify.

> Currently only `root` user is supported. Non-root users will be supported in the future.

Login to your server with `root` user and execute `docker login` command. You will be prompted to enter your Docker registry username and password/token.

Once you logged in, Coolify will automatically detect your credentials and use them to pull images from your private Docker registry - if needed.
