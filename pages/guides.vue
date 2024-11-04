<template>
  <div class="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <h1 class="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl text-center">
      HR & Payroll Guides
    </h1>
    <p class="mb-8 text-lg text-gray-600 text-center">
      Comprehensive guides and resources for managing your HR and payroll operations
    </p>
    
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="guide in guides"
        :key="guide.sys.id"
        :to="`/${guide.fields.slug}`"
        class="flex flex-col overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1"
      >
        <div class="h-48 overflow-hidden">
          <NuxtImg
            v-if="guide.fields.heroImage?.fields?.file?.url"
            :src="`https:${guide.fields.heroImage.fields.file.url}`"
            :alt="guide.fields.menuTitle"
            class="object-cover w-full h-full"
            loading="lazy"
          />
          <div v-else class="w-full h-full bg-gray-200" />
        </div>
        
        <div class="flex flex-col flex-grow p-4">
          <h2 class="text-xl font-semibold text-gray-900">
            {{ guide.fields.menuTitle }}
          </h2>
          <h3 v-if="guide.fields.subtitle" class="mt-1 text-sm font-medium text-gray-600">
            {{ guide.fields.subtitle }}
          </h3>
          <p v-if="guide.fields.description" class="mt-2 text-sm text-gray-600 line-clamp-2">
            {{ guide.fields.description }}
          </p>
          <div class="flex mt-4 pt-2 border-t border-gray-100">
            <span class="text-sm font-medium text-blue-600 hover:text-blue-700">
              Read More →
            </span>
          </div>
        </div>
      </NuxtLink>
    </div>

    <ContactForm />
  </div>
</template>

<script setup>
import * as contentful from "contentful";

const config = useRuntimeConfig();

const client = contentful.createClient({
  space: config.public.contentful.spaceId,
  accessToken: config.public.contentful.accessToken,
});

const { data } = await useAsyncData('guides', () =>
  client.getEntries({
    content_type: 'landingPage',
    'fields.type': 'guide',
    order: 'fields.seq'
  })
);

const guides = computed(() => data.value?.items || []);

useSeoMeta({
  articleModifiedTime: new Date().toISOString().split('T')[0],
});

useHead({
  title: 'HR & Payroll Guides',
  meta: [
    { name: 'description', content: 'Comprehensive guides and resources for managing your HR and payroll operations' },
    { name: 'keywords', content: 'HR, payroll, guides, resources, HR operations, payroll operations' },

  ],
});
</script>
