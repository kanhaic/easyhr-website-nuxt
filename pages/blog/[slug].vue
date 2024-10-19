<template>
  <main class="bg-white px-6 py-4 lg:py-8 lg:px-8">
    <div class="mx-auto max-w-4xl text-base leading-7 text-gray-700">
      <article
        class="prose lg:prose-xl prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-h5:text-base prose-h6:text-sm prose-p:text-base prose-a:text-blue-500 prose-a:underline prose-a:font-medium"
      >
        <div class="mb-8">
          <NuxtImg
            format="webp"
            :src="blogPost.fields.featuredImage.fields.file.url"
            alt="Blog Post Image"
            width="1200"
            height="630"
            provider="contentful"
          />
          <h1 class="text-4xl font-bold">{{ blogPost.fields.title }}</h1>
          <p class="text-base text-gray-500">{{ blogPost.fields.description }}</p>
        </div>
        <div
          v-html="renderedBody"
          class="prose lg:prose-xl prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-h5:text-base prose-h6:text-sm prose-p:text-base prose-a:text-blue-500 prose-a:underline prose-a:font-medium"
        ></div>
      </article>
    </div>
    <ContactForm />
  </main>
</template>
<script setup>
import * as contentful from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const config = useRuntimeConfig();
const route = useRoute();
prerenderRoutes("/blog");
const slug = route.params.slug;

const client = contentful.createClient({
  space: config.public.contentful.spaceId,
  accessToken: config.public.contentful.accessToken,
});

const { data, error } = await useAsyncData("blog-slug-" + slug, () =>
  client.getEntries({
    content_type: "blog",
    "fields.slug": slug,
    limit: 1,
  })
);

const blogPost = data.value.items[0];

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

const renderedBody = documentToHtmlString(blogPost.fields.content, customRenderer);

useHead({
  title: blogPost.fields.title,
  meta: [
    {
      name: "description",
      content: blogPost.fields.description,
    },
    {
      name: "keywords",
      content: blogPost.fields.keywords,
    },
  ],
});
</script>
