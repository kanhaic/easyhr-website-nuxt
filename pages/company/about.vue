<template>
  <div>
    <section class="pt-10 sm:pt-16 lg:pt-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
          <h2
            class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight"
          >
            Empowering Workforces, Elevating Success
          </h2>
          <p class="mt-6 text-lg text-gray-900">
            At CraftingHR, we simplify human resource management, helping
            businesses streamline operations, boost productivity, and foster
            better workplace engagement. Our innovative software empowers
            organizations of all sizes to manage people, processes, and
            performance seamlessly.
          </p>
        </div>
      </div>

      <div class="container mx-auto 2xl:px-12">
        <NuxtImg
          class="w-full mt-6"
          src="/images/group-of-people.webp"
          alt="Group of people"
          title="Group of people"
        />
      </div>
    </section>

    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2
              class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Our team
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              We're a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              customers.
            </p>
          </div>
          <ul
            role="list"
            class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          >
            <li v-for="person in teamMembers" :key="person.name">
              <NuxtImg
                class="mx-auto h-48 w-48 rounded-full border-2 border-gray-200 shadow-lg object-cover"
                :src="person.fields.profilePicture?.fields.file.url"
                :alt="`${person.fields.name} profile image`"
                title="Profile picture"
                provider="contentful"
              />
              <h3
                class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900"
              >
                {{ person.fields.name }}
              </h3>
              <p class="text-sm leading-6 text-gray-600">
                {{ person.fields.title }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import * as contentful from "contentful";

const config = useRuntimeConfig();

const client = contentful.createClient({
  space: config.public.contentful.spaceId,
  accessToken: config.public.contentful.accessToken,
});

const { data, error } = await useAsyncData("main-landing", () =>
  client.getEntries({
    content_type: "teamMember",
    order: "sys.createdAt",
  })
);
const teamMembers = data.value?.items || [];


</script>
