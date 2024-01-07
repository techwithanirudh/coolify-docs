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
      content: Revolutionize self-hosting with Coolify.
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
      content: Empowering self-hosting with Coolify.
  - - meta
    - property: og:site_name
      content: Coolify
  - - meta
    - property: og:image
      content: https://cdn.coollabs.io/assets/coolify/og-image-docs.png
---

# Utilizing Cloudflare Tunnels with Coolify

Coolify can be seamlessly integrated with Cloudflare Tunnels. This setup allows you to host Coolify on local hardware (e.g., an old laptop or Raspberry Pi) and make it accessible online without needing to open router ports.

> For comprehensive information on Cloudflare Tunnels, visit [Cloudflare's Documentation](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/).

## Setting Up Your Instance

Once Cloudflare Tunnels are installed on your server, follow these steps:

**Key Points:**
- Coolify defaults to port `8000`.
- Starting from beta.154, Coolify also launches a [Soketi](https://docs.soketi.app/) server on port `6001`.

There are two main approaches for configuring your tunnels:
1. Use a wildcard domain for all tunnels.
2. Assign a specific domain to each tunnel.

### Wildcard Domain Configuration

To set up a wildcard domain:
1. Add a wildcard domain (e.g., `*.example.com`) in your Tunnels settings, pointing to your server's local or public IP address over `http`. Leave the port field blank or set it to 80.
2. Obtain your Tunnel ID, e.g., `8cad65a8-7fbb-45f2-86a3-6ccc2de0dfac`.
3. Create a `CNAME` DNS record for `*.example.com` pointing to your Tunnel ID, like `8cad65a8-7fbb-45f2-86a3-6ccc2de0dfac.cfargotunnel.com`.
4. Set your SSL/TLS settings to at least `Full`.

This setup forwards all requests to the Coolify proxy. Use HTTP for your Coolify instance and all deployed resources. The `Full` SSL configuration will ensure encryption (HTTPS) between the client and Cloudflare.

### Specific Domain Configuration  

For individual domains:
- Map `app.coolify.io` to port `8000`.
- Map `realtime.coolify.io` to port `6001`.
- Link each deployed resource's domain to the respective Cloudflare tunnel.

### Configuring the Realtime Server

Post-setup, add these lines to your `.env` file in `/data/coolify/source`:

```bash
###########
# Additional Configuration
PUSHER_HOST=realtime.coolify.io
PUSHER_PORT=443
###########
```

Restart Coolify using:

```bash
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

> Note: Adjust your firewall settings to allow the [required ports](./configuration.md#firewall).

## Verification

1. Access your Coolify instance, e.g., `https://app.coolify.io`.
2. Log in as the root user.
3. In a new tab, visit `https://app.coolify.io/api/v1/test/realtime`. You should see a notification in the first tab.
4. For advanced users, inspect the network tab for websocket connections.

## Next Steps

After completing the setup:
- Set your server's Wildcard Domain to `http://example.com`.
- Configure your instance URL as `http://app.example.com`.
