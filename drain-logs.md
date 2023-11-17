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

# Drain Logs

You can drain logs of your deployed services to a third-party applications like [Axiom](https://axiom.co/) or [New Relic](https://newrelic.com).

We will support more services in the future, like Signoz, HyperDX, etc.

## How to enable?
Go to your `Server` where you want to enable the `Drain Logs` and click on the `Drain Logs` tab.

## Axiom

You need to have a `Dataset` and an `API key` from Axiom. More information [here](https://axiom.co/docs).

## New Relic

You need to have an `License key` from New Relic. More information [here](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/#ingest-license-key).


:::warning
Once you enabled at least one of the `Drain Logs`, you need to `Restart` your service to apply the changes.
:::
