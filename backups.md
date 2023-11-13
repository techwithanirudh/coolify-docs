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
Coolify creates a full backup of your PostgreSQL databases. You can specify which database to backup, with a comma separated list.

:::tip
Coolify own database is also backed up using this method.
:::

### Backup
Coolify uses the following command:

```bash
pg_dump --format=custom --no-acl --no-owner --username <username> <databaseName> > /data/coolify/backups/databases/<teamName-teamId>/<databaseUuid>/pg-dump-<databaseName>-<timestamp>.dmp
# Example: /data/coolify/backups/databases/root-team-0/mcgkc4o/pg-dump-postgres-1697207547.dmp
```
### Restore

As you can see, it a custom format backup, so you can restore it using the following command (or any equivalent tool):

```bash
pg_restore --verbose --clean -h localhost -U postgres -d postgres pg-dump-postgres-1697207547.dmp
```

## S3 Backups
You can also define your own S3 compatible storage to store your backups. 

### Supported
Currently supported S3 compatible storages are:
  - AWS
  - DigitalOcean Spaces
  - MinIO
  - Cloudflare's R2

Other's could work, but not tested yet.

### S3 Client

Coolify uses MinIO's client, called [`mc`](https://min.io/docs/minio/linux/reference/minio-mc.html), to copy the backup files to your S3 compatible storage.


### Verification
To be able to use your S3 compatible storage, you need to verify it first. Verification done with `ListObjectsV2` request to your specified bucket.

So you need to create a bucket first, and then you can verify it.
