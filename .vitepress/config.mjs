import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Coolify",
  description: "Coolify Documentation",
  lastUpdated: true,
  lang: "en-US",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/coolify-transparent.png',
    nav: [
      {
        text: 'Other Products',
        items: [
          { text: 'Safetyper', link: 'https://safetyper.com',  },
          { text: 'Fonts', link: 'https://fonts.coollabs.io' },
        ]
      }
    ],

    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'What is Coolify?', link: '/' },
          { text: 'Installation', link: '/installation' },
          {
            text: "Building Blocks",
            link: "/building-blocks",
          },
          {
            text: "Configurations",
            link: "/configurations",
          },
          {
            text: "Firewall",
            link: "/firewall",
          },
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/coollabsio/coolify" },
      { icon: "twitter", link: "https://twitter.com/heyandras" },
      { icon: "discord", link: "https://coollabs.io/discord" },
      { icon: "mastodon", link: "https://fosstodon.org/@andrasbacsai"}

    ],
  }
})
