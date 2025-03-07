<template>
  <div>
    <div class="container mx-auto px-4 py-8 max-w-7xl text-center prose">
      <h1 class="text-3xl font-bold mb-4">{{ feature.fields?.title }}</h1>
      <p class="text-lg text-gray-700 sm:mt-8">
        {{ feature.fields?.description }}
      </p>
    </div>

    <div class="mx-auto max-w-7xl flex py-4 sm:py-6">
      <div class="hidden lg:block w-1/4 flex-shrink-0 pr-4">
        <div class="sticky top-20">
          <div class="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <nav class="space-y-2">
              <a
                v-for="feature in features"
                :key="feature.fields.slug"
                :href="`/features/${feature.fields.slug}`"
                class="py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-md transition duration-150 ease-in-out flex items-center"
                :class="{
                  'bg-gray-100 text-blue-600': feature.fields.slug === slug,
                }"
              >
                <span class="flex items-center">
                  <svg
                    :class="feature.fields?.color"
                    class="w-4 h-4 mr-2"
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
                  {{ feature.fields.name }}
                </span>
              </a>
            </nav>
          </div>
        </div>
      </div>

      <!-- Feature Content -->
      <div class="flex-grow px-4 lg:px-0 lg:w-2/3">
        <div class="container mx-auto px-2 py-4 max-w-4xl prose lg:prose-xl">
          {{ feature.fields?.content }}
        </div>
        <section
          v-for="(featureSet, index) in featureSets"
          :key="index"
          :id="`feature-${index}`"
          class="py-4 sm:py-6 lg:py-8"
        >
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div
              class="grid grid-cols-1 md:items-center gap-y-8 md:grid-cols-2 md:gap-x-16"
            >
              <div
                class="text-center md:text-left prose"
                :class="{ 'md:order-2': index % 2 !== 0 }"
              >
                <h2
                  class="text-2xl font-bold text-gray-900 sm:text-3xl xl:text-4xl"
                >
                  {{ featureSet.title }}
                </h2>
                <div v-html="featureSet.description" class="prose lg:prose-xl"></div>
              </div>

              <div
                :class="{ 'md:order-1': index % 2 !== 0 }"
                class="flex justify-center items-center"
              >
                <NuxtImg
                  v-if="featureSet.image"
                  class="h-64 w-auto"
                  :src="featureSet.image"
                  :alt="featureSet.title"
                  :title="featureSet.title"
                  provider="contentful"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <ContactForm />
  </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;

import * as contentful from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
const config = useRuntimeConfig();

const client = contentful.createClient({
  space: config.public.contentful.spaceId,
  accessToken: config.public.contentful.accessToken,
});

const { data, error } = await useAsyncData(`feature-${slug}`, () =>
  client.getEntries({
    content_type: "feature",
    limit: 1000,
  })
);

const features = (data.value?.items || [])
  .sort((a, b) => {
    const seqA = a.fields.seq || 99;
    const seqB = b.fields.seq || 99;
    return seqA - seqB;
  })
  .map((item) => ({
    fields: {
      name: item.fields.title,
      slug: item.fields.slug,
      icon: item.fields.icon,
      color: item.fields.color,
    },
  }));

const feature = data.value?.items.find(
  (feature) => feature.fields.slug === slug
);

// Compute feature sets
const featureSets = computed(() => {
  const sets = [];
  feature.fields?.featureContent?.forEach((set) => {
    sets.push({
      title: set?.fields?.title,
      description: documentToHtmlString(set?.fields?.content),
      image: set?.fields?.image?.fields?.file?.url,
    });
  });
  return sets;
});

useHead({
  title: feature.fields?.seoTitle,
  meta: [
    {
      name: "description",
      content: feature.fields?.seoDescription,
    },
  ],
});


</script>
