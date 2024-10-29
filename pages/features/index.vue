<template>
  <div>
    <!-- Hero section with background image -->
    <HeroWithForm
      topTag="Get Started with EasyHR"
      title="Simplify Your HR Management"
      subtitle="Join thousands of companies using EasyHR to streamline their HR processes."
      cta1Title="Learn More"
      cta1Link="/signup?utm_source=features&utm_medium=learn-more"
      cta2Title="Contact Sales"
      cta2Link="/signup?utm_source=features&utm_medium=contact-sales"
    />

    <LogoSection :logos="logos" />

    <!-- Features section -->
    <section class="py-12sm:py-16 lg:py-20">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-md mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900">
            Simplify Your HR Management
          </h2>
          <p class="mt-4 text-base font-medium text-gray-500">
            Our platform is designed to streamline your HR processes, making it
            easier to manage your workforce.
          </p>
        </div>

        <div
          class="grid grid-cols-1 gap-4 px-6 mt-12 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 sm:px-0"
        >
          <div
            v-for="feature in features"
            class="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 hover:shadow-md hover:-translate-y-1 rounded-lg shadow-md h-full px-3 py-4"
          >
            <div
              class="relative flex items-center justify-center mx-auto mb-4 h-28"
            >
              <svg
                :class="feature.fields?.bgColor"
                width="99"
                height="102"
                viewBox="0 0 66 68"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z"
                />
              </svg>
              <svg
                :class="feature.fields?.color"
                class="absolute w-12 h-12"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  :d="feature.fields?.icon"
                />
              </svg>
            </div>
            
            <div class="p-4 flex-grow">
              <p class="text-base font-bold text-gray-900">
                <a
                  :href="`/features/${feature.fields?.slug}`"
                  :title="feature.fields?.title"
                >
                  {{ feature.fields?.title }}
                </a>
              </p>
              <p class="mt-1 text-sm font-medium text-gray-500">
                {{ feature.fields?.description }}
              </p>
            </div>
            <div class="p-4 border-t border-gray-100 mt-auto">
              <div class="flex justify-end">
                <a
                  :href="`/features/${feature.fields?.slug}`"
                  :title="feature.fields?.title"
                  class="px-4 py-2 text-sm font-bold text-indigo-600 transition-all duration-200 bg-transparent rounded"
                  role="button"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <ContactForm />
</template>

<script setup>
import * as contentful from "contentful";

const config = useRuntimeConfig();

const client = contentful.createClient({
  space: config.public.contentful.spaceId,
  accessToken: config.public.contentful.accessToken,
});

const { data, error } = await useAsyncData("main-landing", () =>
  client.getEntries({
    content_type: "feature",
    limit: 100,
  })
);

const features = (data.value?.items || []).sort((a, b) => {
  const seqA = a.fields.seq || 99;
  const seqB = b.fields.seq || 99;
  return seqA - seqB;
});

const logos = [
  {
    src: "/images/logos/1.webp",
    alt: "Logo 1",
  },
  {
    src: "/images/logos/2.webp",
    alt: "Logo 2",
  },
  {
    src: "/images/logos/3.webp",
    alt: "Logo 3",
  },
  {
    src: "/images/logos/4.webp",
    alt: "Logo 4",
  },
  {
    src: "/images/logos/5.webp",
    alt: "Logo 5",
  },
  {
    src: "/images/logos/6.webp",
    alt: "Logo 6",
  },
];

useHead({
  title: "Features | EasyHR",
  meta: [
    {
      name: "description",
      content: "Feature List for EasyHR",
    },
    {
      name: "keywords",
      content: "EasyHR, features, HR software, HRIS, payroll, attendance, leave",
    },
  ],
});

useSeoMeta({
  // will be inferred as the lastmod value in the sitemap
  // date in YYYY-MM-DD format
  articleModifiedTime: new Date().toISOString().split("T")[0],
});
</script>
