# Firewall

If you are using any kind of firewall, you need to allow the following ports:

- For Coolify: `8000` and `22` (or any other SSH port you defined) (required)
- Reverse Proxy: `80, 443` (optional)

:::warning 
If you are using `Oracle Cloud free ARM server`, you need to allow these ports inside Oracle's Dashboard, otherwise you cannot reach your instance from the internet after installation.
:::

- For GitHub integration, [check this](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses).

## Coolify Cloud
If you need the public facing IPs to allow inbound connections to your servers, please [contact us](./contact.md).

