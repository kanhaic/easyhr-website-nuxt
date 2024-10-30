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
            class="flex flex-col rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div class="flex-1 bg-white p-12 flex space-x-6 border border-gray-100 rounded-lg">
              <!-- Icon on the left -->
              <div class="flex-shrink-0 self-center">
                <div
                  class="mt-1 flex h-16 w-16 flex-none items-center justify-center rounded-lg"
                  :class="resource.iconBgColor"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    class="w-12 h-12"
                    :class="resource.iconColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      :d="resource.iconPath"
                    />
                  </svg>
                </div>
              </div>
              <!-- Title, Arrow, and Description -->
              <div class="flex-1">
                <a :href="resource.link" class="flex items-center space-x-2">
                  <h3 class="text-xl font-semibold text-gray-900">
                    {{ resource.title }}
                  </h3>
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
  provider: "contentful",
}));

// Updated resourceList with SVG icons
const resourceList = [
  {
    title: "Blog",
    description: "Read our latest blog posts to stay updated with the latest trends and insights in the HR industry.",
    link: "/blog",
    iconPath: "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z",
    iconBgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Case Studies",
    description: "Learn how our products are used in real-world scenarios to solve HR challenges.",
    link: "/case-studies",
    iconPath: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z",
    iconBgColor: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    title: "HR Glossary",
    description: "A comprehensive list of HR terms and definitions to help you understand the language of HR.",
    link: "/hr-glossary",
    iconPath: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
    iconBgColor: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    title: "HR Email Templates",
    description: "Download our HR email templates to help you communicate with your team effectively.",
    link: "/hr-emails",
    iconPath: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75",
    iconBgColor: "bg-yellow-50",
    iconColor: "text-yellow-600"
  },
  {
    title: "HR OKRs",
    description: "Download our HR OKRs to help you align your team and achieve your goals.",
    link: "/okrs",
    iconPath: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605",
    iconBgColor: "bg-pink-50",
    iconColor: "text-pink-600"
  },
  {
    title: "HR Checklist",
    description: "Download our HR checklist to help you stay on top of your HR tasks.",
    link: "/hr-checklist",
    iconPath: "M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z",
    iconBgColor: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    title: "Policy Templates",
    description: "Download our policy templates to help you create compliant HR policies.",
    link: "/policy-templates",
    iconPath: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
    iconBgColor: "bg-teal-50",
    iconColor: "text-teal-600"
  },
  {
    title: "Statutory Compliance",
    description: "Download our statutory compliance resources to help you stay compliant with HR regulations.",
    link: "/statutory-compliance",
    iconPath: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
    iconBgColor: "bg-orange-50",
    iconColor: "text-orange-600"
  },
  {
    title: "Job Description",
    description: "Download our job description templates to help you create effective job descriptions.",
    link: "/job-description",
    iconPath: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z",
    iconBgColor: "bg-indigo-50",
    iconColor: "text-indigo-600"
  },
  {
    title: "HR Letters",
    description: "Download our HR letters to help you communicate with your team effectively.",
    link: "/hr-letters",
    iconPath: "M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z",
    iconBgColor: "bg-red-50",
    iconColor: "text-red-600"
  }
];

// Add meta tags for SEO
useHead({
  title: resourcePage.seoTitle,
  meta: [
    {
      name: "description",
      content: resourcePage.seoDescription,
    },
    {
      name: "keywords",
      content: resourcePage.seoKeywords,
    },
  ],
});

useSeoMeta({
  articleModifiedTime: new Date().toISOString().split("T")[0],
});
</script>

