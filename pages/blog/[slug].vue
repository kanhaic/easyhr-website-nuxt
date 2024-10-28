<template>
  <div class="bg-white">
    <main class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div
        class="grid grid-cols-1 gap-y-8 sm:gap-x-3 lg:grid-cols-7 lg:gap-x-12"
      >
        <!-- Main content -->
        <div class="col-span-1 sm:col-span-5 lg:col-span-4">
          <article
            class="prose lg:prose-xl prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-h5:text-base prose-h6:text-sm prose-p:text-base prose-a:text-blue-500 prose-a:underline prose-a:font-medium"
          >
            <div class="mb-8">
              <NuxtImg
                format="webp"
                :src="blogPost.fields?.featuredImage?.fields?.file?.url"
                alt="Blog Post Image"
                width="1200"
                height="630"
                sizes="100vw"
                preload
                provider="contentful"
              />
              <h1 class="text-4xl font-bold">{{ blogPost.fields?.title }}</h1>
              <p class="text-base text-gray-500">
                {{ blogPost.fields?.description }}
              </p>
            </div>
            <div
              v-html="renderedBody"
              class="prose lg:prose-xl prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-h5:text-base prose-h6:text-sm prose-p:text-base prose-a:text-blue-500 prose-a:underline prose-a:font-medium"
            ></div>
          </article>
        </div>

        <!-- Sidebar -->
        <div class="col-span-1 sm:col-span-2 lg:col-span-3">
          <NewletterSignup />

          <p class="text-xl font-bold text-gray-900">Recent Posts</p>

          <div class="mt-6 space-y-5">
            <div
              v-for="post in recentPosts"
              :key="post.sys.id"
              class="relative overflow-hidden transition-all duration-200 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:bg-gray-50 hover:-translate-y-1"
            >
              <div class="p-4">
                <div class="flex items-start lg:items-center">
                  <NuxtImg
                    class="object-cover w-20 h-20 rounded-lg shrink-0"
                    :src="post.fields.featuredImage.fields.file.url"
                    :alt="post.fields.title"
                    provider="contentful"
                    width="100"
                    height="100"
                  />
                  <div class="ml-5">
                    <p class="text-sm font-medium text-gray-900">
                      {{ formatDate(post.sys.createdAt) }}
                    </p>
                    <p class="text-lg leading-7 font-bold text-gray-900 mt-2.5">
                      <NuxtLink :to="`/blog/${post.fields.slug}`">
                        {{ post.fields.title }}
                        <span
                          class="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                      </NuxtLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- About the Author -->
          <div class="mt-8 bg-gray-100 p-4 rounded-lg">
            <h3 class="text-lg font-bold text-gray-900 mb-2">
              About the Author
            </h3>
            <div class="flex items-center">
              <NuxtImg
                provider="contentful"
                :src="
                  blogPost.fields?.author?.fields?.profilePicture?.fields?.file
                    ?.url
                "
                :alt="blogPost.fields?.author?.fields?.name"
                class="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <p class="font-medium">
                  {{ blogPost.fields?.author?.fields?.name }}
                </p>
                <p class="text-sm text-gray-600">
                  {{ blogPost.fields?.author.fields?.title }}
                </p>
              </div>
            </div>
          </div>

          <!-- Social Media Links -->
          <div class="mt-8">
            <SocialMediaLinks />
          </div>
        </div>
      </div>
      <ContactForm />
    </main>
  </div>
</template>

<script setup>
import * as contentful from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import SocialMediaLinks from "~/components/SocialMediaLinks.vue";

const config = useRuntimeConfig();
const route = useRoute();
prerenderRoutes("/blog");
const slug = decodeURIComponent(route.params.slug);

const client = contentful.createClient({
  space: config.public.contentful.spaceId,
  accessToken: config.public.contentful.accessToken,
});

const { data, error } = await useAsyncData("blog-slug-" + slug, () =>
  client.getEntries({
    content_type: "blog",
    "fields.slug": slug,
    limit: 1,
    include: 2, // This will include linked entries up to 2 levels deep
  })
);

let blogPost = {};
if (data.value?.items?.length) {
  blogPost = data.value.items[0];
}

// Fetch recent posts for sidebar
const { data: recentPostsData } = await useAsyncData("recent-posts", () =>
  client.getEntries({
    content_type: "blog",
    order: "-sys.createdAt",
    limit: 4,
  })
);

const recentPosts = recentPostsData.value.items;

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
  blogPost.fields?.content,
  customRenderer
);

useHead({
  title: blogPost.fields?.title,
  meta: [
    {
      name: "description",
      content: blogPost.fields?.description,
    },
    {
      name: "keywords",
      content: blogPost.fields?.keywords,
    },
  ],
});

// Helper function to format date
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};
useSeoMeta({
  articleModifiedTime: new Date().toISOString().split("T")[0],
});
</script>
