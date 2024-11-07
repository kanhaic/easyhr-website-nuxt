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
              class="lg:col-span-4 lg:order-last lg:self-start lg:sticky lg:top-20"
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
          </div>
        </div>
      </div>
    </section>
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

const { data, error } = await useAsyncData("main-landing", () =>
  client.getEntries({
    content_type: "resources",
    "fields.type": "hr-letters",
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
