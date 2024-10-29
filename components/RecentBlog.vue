<template>
  <section class="py-6 bg-white sm:py-8 lg:py-10 xl:py-12">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="text-center">
        <h2
          class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
        >
          {{ title }}
        </h2>
      </div>

      <div
        class="grid grid-cols-1 gap-5 mx-auto mt-12 sm:gap-6 lg:grid-cols-2 lg:mt-16 xl:mt-20 xl:max-w-none"
      >
        <div
          v-for="post in posts"
          :key="post.id"
          class="flex flex-col p-6 transition-all duration-200 bg-white border border-gray-200 sm:flex-row sm:items-stretch group rounded-2xl hover:shadow-lg"
        >
          <a
            :href="post.href"
            title=""
            class="flex overflow-hidden rounded-xl shrink-0"
          >
            <NuxtImg
              class="object-cover w-full sm:w-56 transition-all duration-200 transform h-44 group-hover:scale-110 group-hover:rotate-3"
              :src="post.image"
              :alt="post.title"
              width="200"
              height="100"
              provider="contentful"
            />
          </a>

          <div class="flex flex-col flex-1 mt-6 sm:mt-0 sm:ml-8">
            <div class="flex-1">
              <p
                class="text-xs font-semibold tracking-widest text-blue-600 uppercase"
              >
                {{ post.date }}
              </p>
              <h3
                class="mt-4 text-xl font-semibold leading-tight text-gray-900"
              >
                <a :href="post.href" title="" class="">
                  {{ post.title }}
                </a>
              </h3>
            </div>

            <div class="mt-6 lg:mt-auto">
              <a
                :href="post.authorHref"
                title=""
                class="flex items-center text-base font-medium text-gray-600 hover:text-gray-900 truncate"
              >
                <NuxtImg
                  class="object-cover mr-2.5 rounded-full w-7 h-7 shrink-0"
                  :src="post.authorImage"
                  :alt="post.author.fields.name"
                  loading="lazy"
                  width="28"
                  height="28"
                  provider="contentful"
                />
                {{ post.author.fields.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "Latest from our blog",
  },
  posts: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(
        (post) =>
          post.id &&
          post.href &&
          post.image &&
          post.title &&
          post.date &&
          post.author &&
          post.authorHref &&
          post.authorImage
      );
    },
  },
});
</script>
