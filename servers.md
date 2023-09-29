# Servers
## Types
- **Localhost**: the server where Coolify is installed.
- **Remote Server**: could be any remote linux server.

## Localhost
To be able to manage the server where Coolify is running on, the docker container of Coolify should reach the host server through SSH.

You can use localhost as a server where all your resources are running, but it is not recommended as high server usage could prevent to use Coolify.

:::info
You can use our [Cloud](https://app.coolify.io) version, so you only need a server for your resources. You will get a few other things included with the cloud version, like free email notifications, s3 storage, etc based on your subscription plan.
:::

   
## Remote Server
You can connect any type of servers to Coolify. It could be a VPS, a Raspberry PI or a laptop running Linux.

### Requirements

1. Connectivity
   - SSH connectivity between Coolify and the server with SSH key authentication.
   :::info
   Your public key should be added to **root** user's `~/.ssh/authorized_keys`.

   If you do not have an SSH Key, you can generate on through Coolify with a simple button or you can generate one manually.
   :::
   - Root user access.
   :::info
   We are working on to use non-root user.
   :::
2. Docker Engine (24+)
   - Automatically installed from the UI, but you can install manually.

The only manual step you need to do is to place your SSH key on the server, into `root` user's `~/.ssh/authorized_keys` file.

##### Cloudflare Tunnels
You can also set to use Cloudflare Tunnels for your servers.

:::info
Coolify does not install cloudflared on your server, it needs to be done prior.

All it does is to add the right ProxyCommand (`ProxyCommand <ip / hostname> access ssh --hostname %h`) to all ssh connections.
:::


## Features
### Disk Cleanup threshold 
You can set a threshold in % for your / filesystem. If this percentage is reached, Coolify tries to cleanup a lot of unnecessary files from your server.

- Unused Docker Images (`docker image prune -af'`)
- Unsused Docker Build Images (`docker builder prune -af`)
- Stopped Docker Containers deployed by Coolify (`docker container prune -f --filter "label=coolify.managed=true"`)

### Wildcard Domain
You can set a wildcard domain (`example: http://127.0.0.1.sslip.io`) to your server, so you can easily assign generated domains to all the resources connected to this server.

If you set the example, you will get the following for an application that has a generated UUID of vgsco4o: `http://vgsco4o.127.0.0.1.sslip.io`

:::tip
If you want to test out your application on a test domain, you can use [sslip.io](https://sslip.io).
:::