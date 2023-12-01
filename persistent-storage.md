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
      content: "@coolifyio"
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

# Persistent Storage

You could add persistent storage to your resources, so you can preserve your data between deployments.

This persistent storage could be different in different Destinations.

## Docker Engine

If you are using Docker Engine, persistent storage could be a `volume` or a `bind mount` (a file/directory from the host system - your server).

### Volume

To create a volume, you need to define:

- `Name` of the volume.
- `Destination Path` where the volume will be mounted inside the container.
  
:::warning
The base directory inside the container is `/app`. So if you need to store your files under `storage` directory, you need to define `/app/storage` as the destination path.
:::

:::tip
To prevent storage overlapping between resources, Coolify automatically adds the resource's UUID to the volume name.
:::

### Bind Mount

To create a bind mount, you need to define:

- `Name` of the volume, which will be used as a reference.
- `Source Path` from the host system. **No docker volume created in this case.**
- `Destination Path` where the volume will be mounted inside the container.

:::warning
The base directory inside the container is `/app`. So if you need to store your files under `storage` directory, you need to define `/app/storage` as the destination path.
:::

::: danger
Share file between more than one container? **NOT RECOMMENDED.**

If you mount the same file to more than one container, you will need to make sure that the proper file locking mechanism is implemented in your resources.
:::
