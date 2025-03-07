<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <div class="relative py-8 px-4 sm:px-6 sm:py-14 lg:py-24 lg:px-8">
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <span
            class="text-base text-indigo-600 font-semibold tracking-wide uppercase"
          >
            {{ industriesPage.topTag }}
          </span>
          <h1
            class="mt-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            {{ industriesPage.title }}
          </h1>
          <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500 lg:mx-auto">
            {{ industriesPage.subtitle }}
          </p>
        </div>

        <!-- Industry Cards Grid -->
        <div
          class="mt-12 sm:mt-24 max-w-lg mx-auto grid gap-8 sm:grid-cols-1 lg:grid-cols-2 lg:max-w-none"
        >
          <div
            v-for="industry in industries"
            :key="industry?.fields?.menuTitle"
            class="flex flex-col rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div
              class="flex-1 bg-white p-12 flex space-x-6 border border-gray-100 rounded-lg"
            >
              <!-- Icon on the left -->
              <div class="flex-shrink-0 self-center">
                <div
                  class="mt-1 flex h-16 w-16 flex-none items-center justify-center rounded-lg"
                  :class="industry?.fields?.iconBgColor ?? 'bg-gray-50'"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    class="w-12 h-12"
                    :class="industry?.fields?.iconColor ?? 'text-gray-600'"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      :d="industry?.fields?.menuIcon"
                    />
                  </svg>
                </div>
              </div>
              <!-- Title, Arrow, and Description -->
              <div class="flex-1">
                <a
                  :href="industry?.fields?.slug"
                  class="flex items-center space-x-2"
                >
                  <h3 class="text-xl font-semibold text-gray-900">
                    {{ industry?.fields?.menuTitle }}
                  </h3>
                  <svg
                    class="h-8 w-8 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <p class="mt-3 text-base text-gray-500">
                  {{ industry?.fields?.menuDescription }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Logos Section -->
        <div class="mt-12">
          <LogoSection :logos="logos" />
        </div>

        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script setup>
import * as contentful from "contentful";

const config = useRuntimeConfig();

const client = contentful.createClient({
  space: config.public.contentful.spaceId,
  accessToken: config.public.contentful.accessToken,
});

// Fetch the industries page content
const { data: pageData } = await useAsyncData("industriesPage", () =>
  client.getEntries({
    content_type: "landingPage",
    "fields.type": "main",
    "fields.slug": "industries",
    limit: 1,
  })
);

// Fetch all industries
const { data: industriesData } = await useAsyncData("industries", () =>
  client.getEntries({
    content_type: "landingPage",
    "fields.type": "industry",
    order: "fields.seq",
    limit: 1000,
  })
);

const industriesPage = pageData.value?.items[0].fields;
const industries = industriesData.value?.items || [];

const logos = industriesPage.logos.map((logo) => ({
  src: logo.fields.file.url,
  alt: logo.fields.title,
  provider: "contentful",
}));

// Add meta tags for SEO
useHead({
  title: industriesPage.seoTitle,
  meta: [
    {
      name: "description",
      content: industriesPage.seoDescription,
    }
  ],
});


</script>
