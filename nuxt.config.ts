// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL || 'https://www.easyhrworld.com',
      contentful: {
        spaceId: "",
        accessToken: "",
      },
    },
  },
  seo: {
    automaticDefaults: true,
  },
  site: {
    url: "https://www.easyhrworld.com",
    name: "EasyHR",
    description: `EasyHR is a user-friendly and intuitive HR software designed for
              SMEs and enterprises. It streamlines the management of HRIS
              records, leave and attendance, payroll, expenses, and travel,
              making HR operations effortless.`,
    indexable: true,
  },
  sitemap: {
    defaults: {
      lastmod: new Date().toISOString(),
      priority: 0.5,
      changefreq: 'weekly'
    }
  },
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "preconnect", href: "https://www.googletagmanager.com" },
        { rel: "preconnect", href: "https://embed.small.chat" },
        { rel: "preconnect", href: "https://n8n.craftinghr.com" },
        { rel: "preconnect", href: "https://www.google-analytics.com" },
        { rel: "dns-prefetch", href: "https://www.google-analytics.com" },
        { rel: "dns-prefetch", href: "https://embed.small.chat" },
        { rel: "dns-prefetch", href: "https://n8n.craftinghr.com" },
      ],
      title: "EasyHR | HR Software for SMEs",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content:
            "EasyHR is a HR software that helps businesses manage their HR tasks, employee management, and payroll.",
        },
        {
          name: "keywords",
          content: "HR software, employee management, payroll, EasyHR",
        },
        { name: "author", content: "EasyHR" },
        { name: "robots", content: "index, follow" },
        { name: "publisher", content: "EasyHR" },
        { name: "msapplication-TileColor", content: "#2d89ef" },
        { name: "theme-color", content: "#ffffff" },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/image", "@nuxt/fonts", "@nuxtjs/sitemap", "nuxt-gtag", "nuxt-seo-utils", "@nuxtjs/robots", "nuxt-schema-org"],
  fonts: {
    preload: true,
    google: [
      {
        family: "Inter",
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    ],
  },
  ssr: true,
  experimental: {
    payloadExtraction: false,
  },
  image: {
    format: ["webp"],
    providers: {
      contentful: {
        accessToken: process.env.NUXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.NUXT_PUBLIC_CONTENTFUL_SPACE_ID,
        dangerouslyAllowSVG: true,
        generate: {
          fallback: true,
        },
      },
    },
  },
  gtag: {
    enabled: true,
    id: "G-RKFHSKFF92",
    loadingStrategy: "async"
  },
});