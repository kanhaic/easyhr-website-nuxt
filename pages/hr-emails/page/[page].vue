<template>
  <div>
    <section
      class="py-12 bg-gradient-to-b from-blue-50 to-white sm:py-16 lg:py-20"
    >
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-indigo-600 sm:text-4xl">
            HR Emails
          </h2>
          <p class="mx-auto mt-5 text-base font-normal leading-7 text-gray-600">
            HR Emails is a collection of emails related to human resources.
          </p>
        </div>

        <div
          class="grid max-w-md grid-cols-1 mx-auto mt-12 gap-y-12 sm:grid-cols-2 md:grid-cols-3 gap-x-8 sm:mt-16 md:max-w-none"
        >
          <div
            v-for="(resource, index) in resources"
            :key="resource.sys.id"
            class="flex flex-col group"
          >
            <div
            :class="[
                'flex flex-col flex-1 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200',
                cardColors[index % cardColors.length],
              ]"
            >
              <p class="text-2xl font-bold text-gray-900">
                {{ resource.fields.title }}
              </p>
              <p class="mt-4 text-sm leading-6 text-gray-600 line-clamp-2">
                {{ resource.fields.subtitle }}
              </p>
              <div class="mt-6 lg:mt-8">
                <a
                  :href="`/hr-emails/${resource.fields.slug}`"
                  class="inline-flex items-center text-xs font-bold tracking-widest text-indigo-600 uppercase group"
                >
                  Continue Reading
                  <svg
                    class="w-4 h-4 ml-2 transition-all duration-200 transform group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Updated pagination -->
        <nav
          class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-16"
        >
          <div class="-mt-px flex w-0 flex-1">
            <a
              :href="previousPageUrl"
              :class="[
                'inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700',
                { 'opacity-50 cursor-not-allowed': isFirstPage },
              ]"
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
              class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500"
            >
              Page {{ currentPage }} of {{ totalPages }}
            </span>
          </div>
          <div class="-mt-px flex w-0 flex-1 justify-end">
            <a
              :href="nextPageUrl"
              :class="[
                'inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700',
                { 'opacity-50 cursor-not-allowed': isLastPage },
              ]"
            >
              Next
              <ArrowLongRightIcon
                class="ml-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </a>
          </div>
        </nav>
      </div>
    </section>
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <ContactForm />
    </div>
  </div>
</template>

<script setup>
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/vue/24/outline";
import * as contentful from "contentful";

const config = useRuntimeConfig();
const route = useRoute();

const client = contentful.createClient({
  space: config.public.contentful.spaceId,
  accessToken: config.public.contentful.accessToken,
});

const currentPage = ref(parseInt(route.params.page) || 1);
const pageSize = 9;

const { data, error } = await useAsyncData("hr-letters", () =>
  client.getEntries({
    content_type: "resources",
    "fields.type": "hr-email",
    limit: pageSize,
    order: "-sys.createdAt",
    skip: (currentPage.value - 1) * pageSize,
  })
);

const resources = computed(() => data.value?.items || []);

const totalItems = computed(() => data.value?.total || 1);
const totalPages = computed(() => Math.ceil(totalItems.value / pageSize));

const isFirstPage = computed(() => currentPage.value === 1);
const isLastPage = computed(() => currentPage.value === totalPages.value);

const previousPageUrl = computed(() => {
  if (isFirstPage.value) return "#";
  return currentPage.value === 2
    ? "/hr-emails"
    : `/hr-emails/page/${currentPage.value - 1}`;
});

const nextPageUrl = computed(() =>
  isLastPage.value ? "#" : `/hr-emails/page/${currentPage.value + 1}`
);

const cardColors = [
  "bg-blue-50 hover:bg-blue-100",
  "bg-green-50 hover:bg-green-100",
  "bg-yellow-50 hover:bg-yellow-100",
  "bg-pink-50 hover:bg-pink-100",
  "bg-purple-50 hover:bg-purple-100",
  "bg-indigo-50 hover:bg-indigo-100",
];

useSeoMeta({
  // will be inferred as the lastmod value in the sitemap
  // date in YYYY-MM-DD format
  articleModifiedTime: new Date().toISOString().split("T")[0],
});
</script>
