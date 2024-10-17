// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
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
  modules: ["@nuxt/image", "@nuxt/fonts"],
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
    provider: "netlify",
    format: ["webp"],
  },
});
