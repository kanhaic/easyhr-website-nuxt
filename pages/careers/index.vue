<template>
  <div class="bg-white py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto flex max-w-2xl flex-col items-start justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row"
      >
        <div class="w-full lg:max-w-lg lg:flex-auto">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            We're always looking for awesome people to join us
          </h2>
          <p class="mt-6 text-xl leading-8 text-gray-600">
            We are always looking for talented individuals to join our team. If
            you are passionate about technology and want to be part of our
            journey, we would love to hear from you.
          </p>
          <NuxtImg
            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
            class="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
            alt="Careers background"
          />
        </div>
        <div class="w-full lg:max-w-xl lg:flex-auto">
          <h3 class="sr-only">Job openings</h3>
          <div
            v-if="!jobOpenings || jobOpenings.length === 0"
            class="text-center py-12"
          >
            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              No Current Openings
            </h3>
            <p class="text-gray-600">
              We don't have any open positions right now, but we're always on
              the lookout for talent. Feel free to check back later or send us
              your resume for future opportunities.
            </p>
            <a
              href="mailto:careers@easyhrworld.com"
              class="mt-4 inline-block text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Submit your resume <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          <div v-else>
            <ul class="-my-8 divide-y divide-gray-100">
              <li
                v-for="opening in jobOpenings"
                :key="opening.id"
                class="py-8 border-b border-gray-100"
              >
                <dl class="relative flex flex-wrap gap-x-3">
                  <dt class="sr-only">Role</dt>
                  <dd
                    class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900"
                  >
                    <a :href="opening.href">
                      {{ opening.role }}
                      <span class="absolute inset-0" aria-hidden="true" />
                    </a>
                  </dd>
                  <dt class="sr-only">Description</dt>
                  <dd
                    class="mt-2 w-full flex-none text-base leading-7 text-gray-600"
                  >
                    {{ opening.description }}
                  </dd>
                  <dt class="sr-only">Salary</dt>
                  <dd
                    class="mt-4 text-base font-semibold leading-7 text-gray-900"
                  >
                    {{ opening.salary }}
                  </dd>
                  <dt class="sr-only">Location</dt>
                  <dd
                    class="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500"
                  >
                    <svg
                      viewBox="0 0 2 2"
                      class="h-0.5 w-0.5 flex-none fill-gray-300"
                      aria-hidden="true"
                    >
                      <circle cx="1" cy="1" r="1" />
                    </svg>
                    {{ opening.location }}
                  </dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
      </div>
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

const { data, error } = await useAsyncData("job-openings-list", () =>
  client.getEntries({
    content_type: "jobOpening",
    order: "-sys.updatedAt",
  })
);

const jobOpenings = data.value?.items.map((item) => ({
  id: item.sys.id,
  role: item.fields.role,
  href: `/careers/${item.sys.id}`,
  description: item.fields.shortDescription,
  salary: item.fields.salary,
  location: item.fields.location,
}));

useSeoMeta({
  articleModifiedTime: new Date().toISOString().split("T")[0],
});

useHead({
  title: "Careers - EasyHR",
  meta: [
    { name: "description", content: "We're always looking for awesome people to join us. If you are passionate about technology and want to be part of our journey, we would love to hear from you." },
    { name: "keywords", content: "careers, EasyHR, HRMS, HRMS solution, HRMS software, HRMS provider, HRMS partner, HRMS reseller, HRMS referral, HRMS commission, HRMS training, HRMS support" },
  ],
});
</script>
