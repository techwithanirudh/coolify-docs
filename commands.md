# Commands

There are several commands to execute from terminal to manage Coolify.

## Reset Root Password

```bash
docker exec -ti coolify bash -c "php artisan users:reset-root"
```

## Delete Resource

```bash
docker exec -ti coolify bash -c "php artisan resources:delete"
```
