<template>
  <div>
    <h1 class="text-3xl font-bold text-indigo-600 sm:text-4xl">{{ landingPage.items[0]?.fields?.menuTitle }}</h1>
    <div v-html="renderedBody"></div>
  </div>
</template>

<script setup>
import * as contentful from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const config = useRuntimeConfig();

const client = contentful.createClient({
  space: config.public.contentful.spaceId,
  accessToken: config.public.contentful.accessToken,
});

const { data, error } = await useAsyncData("linkback-landing", () =>
  client.getEntries({
    content_type: "landingPage",
    "fields.type": "main",
    "fields.slug": "linkback",
    limit: 1,
  })
);

const landingPage = data.value || { items: [], includes: { Asset: [] } };

const content = landingPage.items[0]?.fields?.content;

const customRenderer = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { url, description } = node.data.target.fields.file;
      return `<NuxtImg format="webp" src="${url}" alt="${
        description || ""
      }" title="${description || ""}" loading="lazy" class="w-full h-auto my-4" provider="contentful" />`;
    },
  },
};

const renderedBody = documentToHtmlString(content, customRenderer);

useHead({
  title: landingPage.items[0]?.fields?.menuTitle,
  meta: [
    {
      name: "robots",
      content: "noindex, nofollow"
    }
  ]
});
</script>