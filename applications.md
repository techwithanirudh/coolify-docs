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
      content:Self-hosting with superpowers.
  - - meta
    - property: og:site_name
      content: Coolify
  - - meta
    - property: og:image
      content: https://cdn.coollabs.io/assets/coolify/og-image-docs.png
---
# Applications

Coolify uses [Nixpacks](https://nixpacks.com) as build pack by default. Nixpacks detect what kind of application are you trying to deploy and builds it accordingly.

But if needed, you can customize it by adding a `nixpacks.toml` file to your repository or setting the right environment variables.

For example, if you are using a NodeJS application, you can set the `NIXPACKS_NODE_VERSION` to control the NodeJS version.

:::tip
Worth reading their [documentation](https://nixpacks.com/docs) to understand how it works.
:::

## General

### Domains

[Read here](/domains)

### Commands

You can overwrite the default commands by setting a custom value on the UI.

- Build
- Install
- Start

:::tip
If you leave it empty, Nixpacks will detect which commands to run. For example, in Nodejs, it will check the lock files and run `npm ci` or `yarn install` or `pnpm install` accordingly.
:::

### Base Directory

> Currently turned off

### Public Directory

If you are building a static site, it is important to set the public directory, so the builder will know which directory to serve.

### Port Exposes

Port exposes are required for Docker Engine to know which ports to expose. The first port will be the default port for health checks.

### Port Mappings

:::warning
You will lose some functionality if you map a port to the host system, like `Rolling Updates`.
:::

If you would like to map a port to the host system (server), you can do it here like this: `8080:80`.

This will map the port 8080 on the host system to the port 80 inside the container.

:::tip
If you would like to get perfomance boost and you do not need any domain (websocket server with VERY high traffic), you can map its port to the host, so the request will not go through the proxy.
:::

## Advanced

### Static Site (Is it a static site?)

> This feature is only available for Nixpacks buildpacks.

If you need to serve a static site (SPA, HTML, etc), you can set this to `true`. It will be served by Nginx. `Disabled by default`.

### Force HTTPS

If you would like to force HTTPS, so no HTTP connections allowed, you can set this to `true`. `Enabled by default`.

### Auto Deploy

> This feature is only available for GitHub App based repositories.

If you would like to deploy automatically when a new commit is pushed to the repository, you can set this to `true`. `Enabled by default`.

### Preview Deployments

Preview deployments are a great way to test your application before merging it into the main branch. Imagine it like a staging environment.

#### URL Template

You can setup your preview URL with a custom template. Default is <span v-pre>`{{pr_id}}.{{domain}}`</span>.

This means that if you open a Pull Request with the ID `123`, and you resource domain is `example.com` the preview URL will be `123.example.com`.

:::tip
If you have several domains for your resource, the first will be used as the <span v-pre>`{{domain}}`</span> part.
:::

#### Automated Preview Deployments

> This feature is only available for GitHub App based repositories.

If you would like to deploy a preview version of your application (based on a Pull Requests), you can set this to `true`. `Disabled by default`.

If set to `true`, all PR's that are opened against the resource's configured branch, will be deployed to a unique URL.

#### Manually Triggered Preview Deployments

You can manually deploy a Pull Request to a unique URL by clicking on the `Deploy` button on the Pull Request page.

### Git Submodules

If you are using git submodules, you can set this to `true`. `Enabled by default`.

### Git LFS

If you are using git lfs, you can set this to `true`. `Enabled by default`.

## Environment Variables

[Read here](/environment-variables.md)

## Persistent Storage

[Read here](/persistent-storage.md)

## Health Checks

By default, all containers are checked for liveness.

:::warning
Traefik Proxy won't work if the container has health check defined, but it is `unhealthy`. If you do not know how to set up health checks, turn it off.
:::

## Rollbacks

You can rollback to a previous version of your resource. At the moment, only local images are supported, so you can only rollback to a locally available docker image.

:::tip
Docker Registry support is coming soon.
:::


## Resource Limits

By default, the container won't have any resource limits. You can set the limits here. For more details, read the [Docker documentation](https://docs.docker.com/compose/compose-file/compose-file-v2/#cpu_count-cpu_percent-cpu_shares-cpu_period-cpu_quota-cpus-cpuset-domainname-hostname-ipc-mac_address-mem_limit-memswap_limit-mem_swappiness-mem_reservation-oom_kill_disable-oom_score_adj-privileged-read_only-shm_size-stdin_open-tty-user-working_dir).