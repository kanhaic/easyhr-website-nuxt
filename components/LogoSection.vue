<template>
  <section class="py-2 sm:py-4 lg:py-6">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h2 class="text-2xl font-bold text-center text-gray-900 mb-8">{{ title }}</h2>
      <div
        class="grid items-center grid-cols-2 gap-10 sm:gap-y-16 sm:grid-cols-3 xl:grid-cols-6"
      >
        <div v-for="(logo, index) in logos" :key="index">
          <NuxtImg
            loading="lazy"
            sizes="sm:169px md:300px"
            densities="x1 x2"
            :src="logo.src"
            :alt="logo.alt"
            format="webp"
            width="300"
            height="200"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Logo {
  src: string;
  alt: string;
}

defineProps({
  title: {
    type: String,
    default: 'Trusted by Leading Companies'
  },
  logos: {
    type: Array as () => Logo[],
    required: true
  }
});
</script>

