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

# Cloudflare Tunnels

You can run Coolify behind Cloudflare Tunnels. You can run Coolify on your local machine (like old laptop/raspberry pi) and expose it to the internet without opening any ports on your router.

> For more details about CF Tunnels, please visit [this page](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/).

## Configuration

After you completed CF Tunnels setup on your server, you can continue with the following steps.

1. Coolify listens on port `8000` by default.
2. From beta.154, a [Soketi](https://docs.soketi.app/) server is also started on port `6001`.

You need to map these two ports to your domains.

Let's say you have:
- `app.coolify.io` mapped to `8000`
- `realtime.coolify.io` mapped to `6001`

After you installed Coolify, you need to add 3 lines your `.env` file, located in `/data/coolify/source` folder.

```bash
APP_ID=<random string>
APP_KEY=<random string>
APP_NAME=Coolify
DB_PASSWORD=<random string>
PUSHER_APP_ID=<random string>
PUSHER_APP_KEY=<random string>
PUSHER_APP_SECRET=<random string>
REDIS_PASSWORD=<random string>

###########
# Add these lines
PUSHER_HOST=realtime.coolify.io
PUSHER_PORT=443
###########
```

This tells Coolify how to connect to it's realtime server through Cloudflare Tunnels.

3. Restart Coolify with the installation script.

```bash
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

> If you have a firewall, you also need to allow the [following ports](./firewall.md).
## Verify

1. Navigate to your Coolify instance, as in the example: `https://app.coolify.io`.
2. Login with the root user (the first user you created after installation).
3. Open another tab/window and navigate to `https://app.coolify.io/api/v1/test/realtime`. On the other tab (opened in point 2), you should see a notification about the test event.
4. If you know what are you doing, you can check the network tab as well. Search for a websocket connection.
