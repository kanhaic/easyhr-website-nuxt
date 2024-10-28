<template>
  <div>
    <!-- Hero section with background image -->
    <div class="relative bg-gray-900 py-24 sm:py-32">
      <div class="absolute inset-0 overflow-hidden">
        <NuxtImg
          src="/images/blog-bg.jpg"
          sizes="sm:100vw md:100vw lg:100vw"
          format="webp"
          width="1920"
          height="600"
          preload
          quality="90"
          :modifiers="{
            format: 'webp',
            quality: 90,
            sizes: [{ width: 640 }, { width: 1280 }, { width: 1920 }],
          }"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      </div>
      <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our Blog
          </h2>
          <p class="mt-4 text-xl text-gray-300">
            Insights, thoughts, and stories from our team
          </p>
        </div>
      </div>
    </div>

    <!-- Blog posts grid -->
    <div class="bg-white py-12 sm:py-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          <article
            v-for="post in posts"
            :key="post.id"
            class="flex flex-col items-start justify-between"
          >
            <div class="relative w-full">
              <NuxtImg
                provider="contentful"
                :src="post.imageUrl"
                :alt="post.title"
                class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div
                class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"
              />
            </div>
            <div class="max-w-xl">
              <div class="mt-8 flex items-center gap-x-4 text-xs">
                <time :datetime="post.datetime" class="text-gray-500">{{
                  post.date
                }}</time>
                <a
                  :href="post?.category?.href"
                  class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >{{ post?.category?.title }}</a
                >
              </div>
              <div class="group relative">
                <h3
                  class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
                >
                  <a :href="post.href">
                    <span class="absolute inset-0" />
                    {{ post.title }}
                  </a>
                </h3>
                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {{ post?.description }}
                </p>
              </div>
            </div>
          </article>
        </div>
        <nav
          class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-16"
        >
          <div class="-mt-px flex w-0 flex-1">
            <a
              :href="previousPageUrl"
              class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLongLeftIcon
                class="mr-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Previous
            </a>
          </div>
          <div class="hidden md:-mt-px md:flex">
            <span
              class="inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
            >
              Page {{ currentPage }} of {{ totalPages }}
            </span>
          </div>
          <div class="-mt-px flex w-0 flex-1 justify-end">
            <a
              :href="nextPageUrl"
              :disabled="currentPage === totalPages"
              class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ArrowLongRightIcon
                class="ml-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </a>
          </div>
        </nav>
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script setup>
import * as contentful from "contentful";
import {
  ArrowLongRightIcon,
  ArrowLongLeftIcon,
} from "@heroicons/vue/24/outline";
const route = useRoute();
const page = route.params.page;
const config = useRuntimeConfig();

const client = contentful.createClient({
  space: config.public.contentful.spaceId,
  accessToken: config.public.contentful.accessToken,
});

const currentPage = ref(parseInt(page) || 1);
const pageSize = 6;

const { data, error } = await useAsyncData("posts", () =>
  client.getEntries({
    content_type: "blog",
    limit: pageSize,
    order: "-sys.updatedAt",
    skip: (currentPage.value - 1) * pageSize,
  })
);

const posts = computed(() => {
  if (!data.value || !data.value.items) return [];
  // return data.value.items;

  return data.value.items.map((item) => {
    return {
      id: item.sys.id,
      title: item.fields.title,
      imageUrl: item.fields.featuredImage.fields.file.url,
      date: formatDate(item.sys.updatedAt),
      datetime: item.sys.updatedAt,
      category: {
        title: item.fields.category.split(",")[0],
        href: "#",
        // href: `/blog/category/${
        //   item.fields.category.toLowerCase().split(",")[0]
        // }`,
      },
      href: `/blog/${item.fields.slug}`,
      author: {
        name: item.fields.author.fields.name,
        role: item.fields.author.fields.title,
        href: `#`,
        imageUrl: item.fields.author.fields.profilePicture.fields.file.url,
      },
      description:
        item.fields.content?.content[0]?.content[0]?.value || item.fields.title,
    };
  });
});

const totalPosts = computed(() => data.value?.total || 0);
const totalPages = computed(() => Math.ceil(totalPosts.value / pageSize));

const isFirstPage = computed(() => currentPage.value === 1);
const isLastPage = computed(() => currentPage.value === totalPages.value);

const previousPageUrl = computed(() => {
  if (isFirstPage.value) return "#";
  return currentPage.value === 2
    ? "/blog"
    : `/blog/page/${currentPage.value - 1}`;
});

const nextPageUrl = computed(() => {
  if (isLastPage.value) return "#";
  return `/blog/page/${currentPage.value + 1}`;
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

useSeoMeta({
  articleModifiedTime: new Date().toISOString().split("T")[0],
});
</script>
