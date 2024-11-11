<template>
  <div class="container mx-auto px-4 py-8">
    <section class="py-12 bg-white sm:py-16 lg:py-20">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-5xl mx-auto">
          <div class="max-w-2xl">
            <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">
              {{ resource.fields?.title }}
            </h1>
          </div>

          <div
            class="mt-12 sm:mt-16 lg:grid lg:grid-cols-12 lg:gap-x-16 xl:gap-x-24"
          >
            <aside
              class="hidden lg:block lg:col-span-4 lg:order-last lg:self-start lg:sticky lg:top-20"
            >
              <div
                class="overflow-hidden bg-gray-50 border border-gray-200 rounded-lg"
              >
                <div class="px-4 py-5 sm:p-6">
                  <h4
                    class="font-bold tracking-widest text-gray-400 uppercase pb-4"
                  >
                    <NuxtImg
                      src="/images/logo.webp"
                      alt="Company Logo"
                      title="Company Logo"
                      class="w-24 h-auto mb-4"
                    />
                    Request Demo
                  </h4>

                  <DemoRequest />
                </div>
              </div>
            </aside>

            <article
              class="mt-12 prose lg:mt-0 lg:prose-xl lg:col-span-8 prose-p:my-2"
              v-html="renderedBody"
            ></article>

            <div class="mt-8 lg:hidden">
              <div class="overflow-hidden bg-gray-50 border border-gray-200 rounded-lg">
                <div class="px-4 py-5 sm:p-6">
                  <h4 class="font-bold tracking-widest text-gray-400 uppercase pb-4">
                    <NuxtImg src="/images/logo.webp" alt="Company Logo" class="w-24 h-auto mb-4" title="Company Logo" />
                    Request Demo
                  </h4>
                  <DemoRequest />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Related Resources List -->
    <div class="container mx-auto px-4 py-12 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900">
            Related Resources
          </h2>
          <p class="mt-2 text-lg text-gray-600">
            Explore more HR checklists and templates to streamline your processes
          </p>
        </div>
        
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 ">
          <ul class="space-y-4 divide-y divide-gray-100">
            <li 
              v-for="resource in relatedResources" 
              :key="resource.id"
              class="pt-4 first:pt-0"
            >
              <a 
                :href="`/hr-checklist/${resource.slug}`"
                class="group flex items-center hover:bg-gray-50 p-2 -m-2 rounded-lg transition-colors"
              >
                <svg 
                  class="w-5 h-5 mr-3 text-gray-400 group-hover:text-indigo-600 transition-colors" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <div>
                  <h3 class="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {{ resource.title }}
                  </h3>
                  <p class="mt-1 text-sm text-gray-500 group-hover:text-gray-600">
                    {{ resource.description }}
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <ContactForm />
    </div>
  </div>
</template>

<script setup>
import * as contentful from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const config = useRuntimeConfig();
const { params } = useRoute();
const client = contentful.createClient({
  space: config.public.contentful.spaceId,
  accessToken: config.public.contentful.accessToken,
});

const { data, error } = await useAsyncData("hr-checklist", () =>
  client.getEntries({
    content_type: "resources",
    "fields.type": "hr-checklist",
    "fields.slug": params.slug,
    limit: 1,
  })
);

const resource = data.value?.items[0] || {};

const customRenderer = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { url, description } = node.data.target.fields.file;
      return `<NuxtImg format="webp" src="${url}" alt="${
        description || "image"
      }" title="${description || "image"}" class="w-full h-auto my-4" provider="contentful" />`;
    },
  },
};

const renderedBody = documentToHtmlString(
  resource.fields?.content,
  customRenderer
);

useHead({
  title: resource.fields?.seoTitle,
  meta: [
    {
      name: "description",
      content: resource.fields?.seoDescription,
    },
  ],
});


// Fetch related resources
const { data: relatedData } = await useAsyncData(
  "related-resources",
  () => client.getEntries({
    content_type: "resources",
    "fields.type": "hr-checklist",
    "sys.id[ne]": resource.sys?.id, // Exclude current resource
    limit: 5,
    order: "-sys.createdAt" // Get latest resources
  })
);

// Transform related resources data with descriptions
const relatedResources = computed(() => {
  if (!relatedData.value?.items) return [];
  
  return relatedData.value.items.map(item => ({
    id: item.sys.id,
    title: item.fields.title,
    slug: item.fields.slug,
    description: item.fields.description || 
                item.fields.seoDescription || 
                'Download this HR checklist template to improve your HR processes'
  }));
});
</script>

<style>
/* Optional: Add hover effect for cards */
.hover\:shadow-lg:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
