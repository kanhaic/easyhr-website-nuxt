<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-4">Features</h1>
    <p>This is a placeholder for the Features page. Content coming soon!</p>
  </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;
const feature = {};

useHead({
  title: feature.fields?.seoTitle,
  meta: [
    {
      name: "description",
      content: feature.fields?.seoDescription,
    },
    {
      name: "keywords",
      content: feature.fields?.seoKeywords,
    },
  ],
});

useSeoMeta({
  // will be inferred as the lastmod value in the sitemap
  // date in YYYY-MM-DD format
  articleModifiedTime: new Date().toISOString().split("T")[0],
});
</script>
