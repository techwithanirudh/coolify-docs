# Service Templates

Service templates are predefined normal [docker-compose](https://docs.docker.com/compose/compose-file/compose-file-v3/) files + a bit of magic.

## The bit of Magic

To be able to predefine values, like usernames, passwords, fqdns, predefined values for bind (file) mounts etc, the docker-compose files are extended with a few keywords.

--- 

In the [enviroment](https://docs.docker.com/compose/compose-file/compose-file-v3/#environment) option, you can do the following. 

Let's use `APPWRITE` as an example with a generate UUID of `vgsco4o` and with a [wildcard](./servers.md#wildcard-domain) domain of `http://example.com`.

## FQDN

This will [generate](./servers.md#wildcard-domain) a FQDN for appwrite service. Traefik proxy configurations generated automatically.

```yaml
services:
    appwrite:
      environment:
        # http://appwrite-vgsco4o.example.com/
        - SERVICE_FQDN_APPWRITE 
```

If you use the same variable on another service, it will generate the same FQDN for you. 

```yaml
# This does not make sense, just here to show you how it works.
services:
    appwrite:
      environment:
        # http://appwrite-vgsco4o.example.com/
        - SERVICE_FQDN_APPWRITE 
    not-appwrite:
      environment:
        # http://appwrite-vgsco4o.example.com/
        - SERVICE_FQDN_APPWRITE
```

You sometimes need the same domain, but with different paths.

```yaml
# This make sense, not like the previous.
services:
    appwrite:
      environment:
        # http://appwrite-vgsco4o.example.com/
        - SERVICE_FQDN_APPWRITE
    not-appwrite:
      environment:
        # http://appwrite-vgsco4o.example.com/v1/realtime
        - SERVICE_FQDN_APPWRITE=/v1/realtime 
    definitely-not-appwrite:
      environment:
        # As SERVICE_FQDN_API is not the same as SERVICE_FQDN_APPWRITE
        # Coolify will generate a new FQDN 
        # http://definitely-not-appwrite-vgsco4o.example.com/api
        - SERVICE_FQDN_API=/api
```

You can reuse this generated FQDN anywhere.

```yaml
services:
    appwrite:
      environment:
        # http://appwrite-vgsco4o.example.com/
        - SERVICE_FQDN_APPWRITE 
        - _APP_URL=$SERVICE_FQDN_APPWRITE # _APP_URL will have the FQDN because SERVICE_FQDN_APPWRITE is just a simple environment variable
```

## Username
 
WIP