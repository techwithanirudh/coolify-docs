import { defineConfig } from "vitepress";
const config = {
  title: "Coolify",
  description: "Coolify Documentation",
  lastUpdated: true,
  lang: "en-US",
  base: "/docs/",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/coolify-transparent.png",
    nav: [
      {
        text: "Other Products",
        items: [
          { text: "Safetyper", link: "https://safetyper.com" },
          { text: "Fonts", link: "https://fonts.coollabs.io" },
        ],
      },
    ],

    sidebar: [
      {
        text: "Introduction",
        collapsed: false,
        items: [
          { text: "What is Coolify?", link: "/" },
          { text: "Contact", link: "/contact" },
        ],
      },
      {
        text: "Get Started",
        collapsed: false,
        items: [
          { text: "Installation", link: "/installation" },
          {
            text: "Building Blocks",
            link: "/building-blocks",
          },
          {
            text: "No Vendor Lock-in",
            link: "/no-vendor-lock-in",
          },
          {
            text: "Firewall",
            link: "/firewall",
          },
        ],
      },
      {
        text: "Deep Dive",
        collapsed: false,
        items: [
          { text: "Servers", link: "/servers" },
          { text: "Proxy", link: "/proxy" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/coollabsio/coolify" },
      { icon: "twitter", link: "https://twitter.com/heyandras" },
      { icon: "discord", link: "https://coollabs.io/discord" },
      { icon: "mastodon", link: "https://fosstodon.org/@andrasbacsai" },
    ],
  },
}
if (process.env.NODE_ENV !== "development") { 
  config.head.push([
    "script",
    {
      async: "",
      src: "https://umami.coollabs.io/script.js",
      "data-website-id": "6c35d8be-3230-4d81-ba73-77322af9ddf8",
    },
  ]);
}

export default defineConfig(config);
