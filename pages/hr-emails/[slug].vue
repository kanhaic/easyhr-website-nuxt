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
              class="lg:col-span-4 lg:order-last lg:self-start lg:sticky lg:top-8"
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
                      class="w-24 h-auto mb-4"
                      provider="ipx"
                    />
                    Request Demo
                  </h4>

                  <DemoRequest />
                </div>
              </div>
            </aside>

            <article
              class="mt-12 prose lg:mt-0 lg:prose-lg lg:col-span-8 prose-blockquote:lg:text-xl prose-blockquote:lg:leading-9 prose-blockquote:not-italic prose-blockquote:border-none prose-blockquote:text-lg prose-blockquote:leading-8 prose-blockquote:p-0 prose-blockquote:lg:p-0 prose-blockquote:font-medium prose-blockquote:text-gray-900"
              v-html="renderedBody"
            ></article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import * as contentful from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
const { params } = useRoute();
const config = useRuntimeConfig();

const client = contentful.createClient({
  space: config.public.contentful.spaceId,
  accessToken: config.public.contentful.accessToken,
});

const { data, error } = await useAsyncData("hr-checklist", () =>
  client.getEntries({
    content_type: "resources",
    "fields.type": "hr-email",
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
        description || ""
      }" class="w-full h-auto my-4" provider="contentful" />`;
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
    {
      name: "keywords",
      content: resource.fields?.seoKeywords,
    },
  ],
});

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};
useSeoMeta({
  articleModifiedTime: new Date().toISOString().split("T")[0],
});
useHead({
  title: resource.fields?.seoTitle,
  meta: [
    {
      name: "description",
      content: resource.fields?.seoDescription,
    },
    {
      name: "keywords",
      content: resource.fields?.seoKeywords,
    },
  ],
});
</script>
