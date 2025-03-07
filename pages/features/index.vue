<template>
  <div>
    <!-- Hero section with background image -->
    <HeroWithForm
      :topTag="landingPage?.fields?.topTag"
      :title="landingPage?.fields?.title"
      :subtitle="landingPage?.fields?.subtitle"
      :cta1Title="landingPage?.fields?.cta1Title"
      :cta1Link="landingPage?.fields?.cta1Link"
      :cta2Title="landingPage?.fields?.cta2Title"
      :cta2Link="landingPage?.fields?.cta2Link"
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
            v-for="feature in sortedFeatures"
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

const { data: features, error: featuresError } = await useAsyncData(
  "features-list",
  () =>
    client.getEntries({
      content_type: "feature",
      limit: 1000,
    })
);

const { data, error } = await useAsyncData(
  "features-landing",
  () =>
    client.getEntries({
      content_type: "landingPage",
      "fields.slug": "features",
      limit: 1,
    })
);

const sortedFeatures = (features.value?.items || []).sort((a, b) => {
  const seqA = a.fields.seq || 99;
  const seqB = b.fields.seq || 99;
  return seqA - seqB;
});

const landingPage = data.value?.items[0];

const logos = landingPage?.fields?.logos?.map((logo) => ({
  src: logo?.fields.file.url,
  alt: logo?.fields.title,
  provider: "contentful",
}));

useHead({
  title: landingPage?.fields?.seoTitle,
  meta: [
    {
      name: "description",
      content: landingPage?.fields?.seoDescription,
    },
  ],
});
</script>
