# Persistent Storage

You could add persistent storage to your resources, so you can preserve your data between deployments.

This persistent storage could be different in different Destinations.

## Docker Engine

If you are using Docker Engine, persistent storage could be a `volume` or a `bind mount` (a file/directory from the host system - your server).

### Volume

To create a volume, you need to define:

- `Name` of the volume.
- `Destination Path` where the volume will be mounted inside the container.

:::tip
To prevent storage overlapping between resources, Coolify automatically adds the resource's UUID to the volume name.
:::

### Bind Mount

To create a bind mount, you need to define:

- `Name` of the volume, which will be used as a reference.
- `Source Path` from the host system.
- `Destination Path` where the volume will be mounted inside the container.

No docker volume created in this case.

::: danger
Share file between more than one container?  **NOT RECOMMENDED.**

If you mount the same file to more than one container, you will need to make sure that the proper file locking mechanism is implemented in your resources.
:::