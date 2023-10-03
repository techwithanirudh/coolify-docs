# Password reset

From `v4.0.0-beta.58`, you can use the following method to reset the root user's password, in case you forgot and do not have an SMTP server set, so you cannot request a forgot password.

Login to your server through SSH and execute the following command:

```bash
docker exec -ti coolify bash -c "php artisan users:reset-root"
```