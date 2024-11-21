// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL || "https://www.easyhrworld.com",
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
    indexable: process.env.NODE_ENV === "production",
  },
  sitemap: {
    defaults: {
      lastmod: new Date().toISOString(),
      priority: 0.5,
      changefreq: "weekly",
    },
  },
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        {
          rel: "preload",
          as: "image",
          href: "/images/logo.webp",
          type: "image/webp",
          fetchpriority: "high",
        },
      ],
      title: "EasyHR | HR Payroll Software for SMEs",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content:
            "EasyHR is a HR software that helps businesses manage their HR tasks, employee management, and payroll.",
        },
        { name: "author", content: "EasyHR" },
        { name: "robots", content: "index, follow" },
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
  modules: [
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/sitemap",
    // "nuxt-gtag",
    "nuxt-seo-utils",
    "@nuxtjs/robots",
    "nuxt-schema-org",
    // "@nuxtjs/partytown",
  ],
  fonts: {
    preload: true,
    google: [
      {
        family: "Inter",
      },
    ],
  },
  ssr: true,
  experimental: {
    payloadExtraction: false,
  },
  image: {
    contentful: {
      baseURL: "https://images.ctfassets.net/",
    },
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
    presets: {
      hero: {
        modifiers: {
          format: "webp",
          quality: "80",
          loading: "eager",
          fetchpriority: "high",
        },
      },
    },
    domains: ["easyhrworld.com", "images.ctfassets.net"],
    format: ["webp", "avif", "jpeg", "jpg", "png"],
  },
  routeRules: {
    "/**": {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
});
