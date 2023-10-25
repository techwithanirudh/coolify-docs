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

# One-click Services

Here is the currently supported list of services:

<script setup>
  import { onMounted, ref } from 'vue'
  let loading = ref(true);
  let services = ref([]); 
  let failedToLoad = ref(false);
  onMounted(async () => {
    let res = null
    try {
      res = await fetch('https://cdn.coollabs.io/coolify/service-templates.json')
    } catch(error) {}
    try {
      res = await fetch('https://raw.githubusercontent.com/coollabsio/coolify/main/templates/service-templates.json')
    } catch(error) {}
    if (res.ok === false) {
      failedToLoad.value = true
      loading.value = false
      return
    }
    const data = await res.json()
    services.value = Object.keys(data)
    loading.value = false
  })
  function capitalizeFirstLetter(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
  }
</script>
<div v-if="loading">Loading services...</div>
<li v-for="item in services">
  {{ capitalizeFirstLetter(item) }}
</li>

<div v-if="failedToLoad">
  <div>Failed to load services from CDN/Github. </div>
  <a href="https://github.com/coollabsio/coolify/tree/main/templates/compose" target="_blank">Check out the list of services on Github</a>
</div>
