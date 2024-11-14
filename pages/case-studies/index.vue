<template>
  <div>
    <section
      class="py-12 bg-gradient-to-b from-blue-50 to-white sm:py-16 lg:py-20"
    >
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
          <h1 class="text-3xl font-bold text-indigo-600 sm:text-4xl">
            Case Studies
          </h1>
          <p class="mx-auto mt-5 text-base font-normal leading-7 text-gray-600">
            Case Studies is a collection of stories and examples of how EasyHR
            has been used to solve real-world HR problems.
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
                'flex flex-col flex-1 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200',
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
                  :href="`/case-studies/${resource.fields.slug}`"
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
      </div>
    </section>
    <div>
      <ContactForm />
    </div>
  </div>
</template>

<script setup>
import * as contentful from "contentful";

const config = useRuntimeConfig();

const client = contentful.createClient({
  space: config.public.contentful.spaceId,
  accessToken: config.public.contentful.accessToken,
});

const { data, error } = await useAsyncData("case-studies", () =>
  client.getEntries({
    content_type: "resources",
    "fields.type": "case-studies",
    order: "fields.seq",
  })
);

const resources = computed(() => data.value?.items || []);

const cardColors = [
  "bg-blue-50 hover:bg-blue-100",
  "bg-green-50 hover:bg-green-100",
  "bg-yellow-50 hover:bg-yellow-100",
  "bg-pink-50 hover:bg-pink-100",
  "bg-purple-50 hover:bg-purple-100",
  "bg-indigo-50 hover:bg-indigo-100",
];

useHead({
  title: "Case Studies",
  meta: [
    {
      name: "description",
      content: "Learn about our case studies and how we've helped our clients.",
    },
  ],
});
</script>
