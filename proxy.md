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