// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  runtimeConfig: {
    public: {
      contentful: {
        spaceId: "",
        accessToken: "",
      },
    },
  },
  site: {
    url: "https://www.easyhrworld.com",
    name: "EasyHR",
    description: `EasyHR is a user-friendly and intuitive HR software designed for
              SMEs and enterprises. It streamlines the management of HRIS
              records, leave and attendance, payroll, expenses, and travel,
              making HR operations effortless.`,
  },
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
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
  modules: ["@nuxt/image", "@nuxt/fonts", "@nuxtjs/sitemap"],
  fonts: {
    preload: true,
    google: [
      {
        family: "Inter",
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    ],
  },
  // ssr: true,
  // nitro: {
  //   preset: "static",
  //   prerender: {
  //     routes: ["/"], // Include your main routes here if needed
  //   },
  // },
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
      ipx: {}
    },
  },
});
