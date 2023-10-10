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

# Backups

Scheduled database backups could be configured for PostgreSQL and for Coolify itself.

This schedules are based on cron expressions, so you can configure them to run as often as you want.

You can also use simple cron expressions like:

```js
const VALID_CRON_STRINGS = [
    'every_minute' => '* * * * *',
    'hourly' => '0 * * * *',
    'daily' => '0 0 * * *',
    'weekly' => '0 0 * * 0',
    'monthly' => '0 0 1 * *',
    'yearly' => '0 0 1 1 *',
];
```

## PostgreSQL
Coolify creates a full backup of your PostgreSQL database. 

:::tip
Coolify own database is also backed up using this method.
:::

### Backup
Coolify uses the following command:

```bash
pg_dump -Fc -U <username> > /data/coolify/backups/databases/<teamName-teamId>/<databaseUuid>/pg-backup-customformat-<timestamp>.backup
# Example: /data/coolify/backups/databases/root-team-0/z84wg0w/pg-backup-customformat-1696936552.backup
```
### Restore

As you can see, it a custom format backup, so you can restore it using the following command (or any equivalent tool):

```bash
pg_restore --verbose --clean -h localhost -U postgres -d postgres pg-backup-customformat-1696935887.backup
```

## S3 Backups
You can also define your own S3 compatible storage to store your backups. 

### Supported
Currently supported S3 compatible storages are:
  - AWS
  - DigitalOcean Spaces
  - MinIO

Other's could work, but not tested yet.

### S3 Client

Coolify uses MinIO's client, called [`mc`](https://min.io/docs/minio/linux/reference/minio-mc.html), to copy the backup files to your S3 compatible storage.


