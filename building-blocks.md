# Building Blocks

## Server

Servers are where all your resources are deployed to.

### Types

- **Localhost:** the server where Coolify is installed.
- **Remote Server:** could be any server, rechable through SSH.

[More details.](/servers.md)

## Proxy

A server could have a proxy that is used to route traffic to the right resource. It is not mandatory, but it is highly recommended to use a proxy.

Coolify uses Traefik at the moment. Configuration done automatically by Coolify in case you deploy a resource that requires this proxy.

Like if you add a domain to your application, Coolify detects it and starts a proxy automatically.

:::info
Free SSL certificates included, thanks to Let's Encrypt.
:::

[More details.](/proxy.md)

## Project

Resources are grouped together into a project, a tree structure. A project could have infinite number of resources.

## Environment

Each project, by default have a `production` environment, that is not deletable, but renameable.
Environments consists of resources, like [application](#application), [database](#database) or a [service](#service), etc.

## [Application](/applications.md)

An application could be a web application, a static website, a backend API, etc. It is a container that runs a process deployed to a defined [server](#server).

### Types

1. Public Git Repositories
2. Private Git Repositories (through [GitHub App](https://docs.github.com/en/apps/using-github-apps/about-using-github-apps))
3. Private Git Repositories (through [Deploy Key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys))
4. Simple Dockerfile
5. Any Docker Compose files

:::tip
To have full integration with GitHub, like fully automated commit or pull request based deployments, you need a GitHub App (created automatically by Coolify).
:::

## Database

All supported databases could have scheduled, automatic backups, that is saved to your server or to an S3 compatible storage.

### Types

- PostgreSQL
  :::info
  MySQL, MariaDB, MongoDB, etc, coming soon...
  :::

## Service

A service is a more complex type of resource, that consists of several other resources, like an [application](#application) and a [database](#database), etc.

Imagine you would like to deploy a Wordpress application, you would need a database, a web server and a PHP runtime. You could create a service that consists of these resources, grouped together and created automatically for you. Each resource in a service could be deployed to a different server.

Current list:

- Appsmith
- Appwrite
- Fider
- Ghost
- Umami
- Uptime Kuma

## Destination

Destination defines the type of the containerization technology you would like to use. It could be Docker, Docker Swarm or Kubernetes.

It also defines the network which you would like to add your resource. This helps you to separate your resources on the network layer.

:::info
Currently only standalone Docker engine is supported.
:::

## Source

Source defines the type of the source code repository you would like to use, like Github, Gitlab, Bitbucket, etc.

Github & GitLab public source is defined by default, but unseen by the users.

To use private repositories, you need to make a GitHub or GitLab App to have all kinds of integrations available.

## Automations & Monitoring

Coolify will automate a few maintenance tasks on the operating system, so you do not need to do them manually.

Coolify monitors your server & your deployed resources and immediately notifies you if something good or bad happens. You will always know what is going on in your self-hosted environment.

All you need to do is to setup your preferred notification system. Currently available:

- Email
- Discord Webhooks
- Telegram Bot

WIP:

- Webhooks
- Slack
