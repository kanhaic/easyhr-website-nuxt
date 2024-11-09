<template>
  <section class="relative overflow-hidden bg-cream py-8 sm:py-12 bg-blue-100">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
        <!-- Text Content -->
        <div class="flex-1 md:text-left text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {{ title }}
          </h1>
          <p class="mt-4 text-lg text-gray-600">
            {{ description }}
          </p>
          <div class="mt-6" v-if="cta1Title && cta1Link">
            <a
              :href="cta1Link"
              class="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700"
            >
              {{ cta1Title }}
            </a>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="flex-shrink-0 w-full md:w-1/3">
          <NuxtImg
            :src="image"
            :alt="title"
            class="w-full max-h-72 rounded-lg object-contain"
            provider="contentful"
            preload
            width="320"
            height="180"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  cta1Title: String,
  cta1Link: String,
});
</script>

<style></style>
