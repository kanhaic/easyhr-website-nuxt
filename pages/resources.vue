<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <div class="relative py-16 px-4 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <span
            class="text-base text-indigo-600 font-semibold tracking-wide uppercase"
          >
            {{ resourcePage.topTag }}
          </span>
          <h1
            class="mt-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            {{ resourcePage.title }}
          </h1>
          <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500 lg:mx-auto">
            {{ resourcePage.subtitle }}
          </p>
        </div>

        <!-- Resource Cards Grid -->
        <div
          class="mt-12 sm:mt-24 max-w-lg mx-auto grid gap-8 sm:grid-cols-1 lg:grid-cols-2 lg:max-w-none"
        >
          <div
            v-for="resource in resourceList"
            :key="resource.title"
            class="flex flex-col rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div class="flex-1 bg-white p-12 flex flex-col justify-between border border-gray-200 rounded-lg">
              <div class="flex-1">
                <div class="flex items-center space-x-3">
                  <a :href="resource.link" class="flex items-center space-x-2">
                  <h3 class="text-xl font-semibold text-gray-900">
                    {{ resource.title }}
                  </h3>
                  <!-- Arrow Icon -->
                  <svg
                    class="h-5 w-5 text-indigo-500"
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
                </div>
                <p class="mt-3 text-base text-gray-500">
                  {{ resource.description }}
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

const { data, error } = await useAsyncData("resources", () =>
  client.getEntries({
    content_type: "landingPage",
    "fields.type": "main",
    "fields.slug": "resources",
    limit: 1,
  })
);

const resourcePage = data.value?.items[0].fields;

const logos = resourcePage.logos.map((logo) => ({
  src: logo.fields.file.url,
  alt: logo.fields.title,
}));

// Your existing resourceList data
const resourceList = [
  {
    title: "Blog",
    description:
      "Read our latest blog posts to stay updated with the latest trends and insights in the HR industry.",
    link: "/blog",
  },
  {
    title: "Case Studies",
    description:
      "Learn how our products are used in real-world scenarios to solve HR challenges.",
    link: "/case-studies",
  },
  {
    title: "HR Glossary",
    description:
      "A comprehensive list of HR terms and definitions to help you understand the language of HR.",
    link: "/hr-glossary",
  },
  {
    title: "HR Email Templates",
    description:
      "Download our HR email templates to help you communicate with your team effectively.",
    link: "/hr-emails",
  },
  {
    title: "HR OKRs",
    description:
      "Download our HR OKRs to help you align your team and achieve your goals.",
    link: "/okrs",
  },
  {
    title: "HR Checklist",
    description:
      "Download our HR checklist to help you stay on top of your HR tasks.",
    link: "/hr-checklist",
  },
  {
    title: "Policy Templates",
    description:
      "Download our policy templates to help you create compliant HR policies.",
    link: "/policy-templates",
  },
  {
    title: "Statutory Compliance",
    description:
      "Download our statutory compliance resources to help you stay compliant with HR regulations.",
    link: "/statutory-compliance",
  },
  {
    title: "Job Description",
    description:
      "Download our job description templates to help you create effective job descriptions.",
    link: "/job-description",
  },
  {
    title: "HR Letters",
    description:
      "Download our HR letters to help you communicate with your team effectively.",
    link: "/hr-letters",
  },
];

// Add meta tags for SEO
useHead({
  title: "HR Resources - CraftingHR",
  meta: [
    {
      name: "description",
      content:
        "Access comprehensive HR resources, templates, and tools to streamline your HR processes and enhance workplace management.",
    },
    {
      name: "keywords",
      content:
        "HR resources, templates, HR tools, HR management, workplace management, HR processes",
    },
  ],
});

useSeoMeta({
  articleModifiedTime: new Date().toISOString().split("T")[0],
});
</script>
