<template>
  <section class="py-8 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="text-2xl font-bold text-center text-gray-900 mb-8">
        {{ title }}
      </div>
      <div
        class="grid items-center grid-cols-2 gap-10 sm:gap-y-16 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6"
      >
        <div v-for="(logo, index) in logos" :key="index">
          <NuxtImg
            :fetchpriority="fetchpriority"
            :loading="fetchpriority === 'lazy' ? 'lazy' : 'eager'"
            :src="logo.src"
            :alt="logo.alt"
            :title="logo.alt"
            :provider="logo.provider"
            width="150"
            height="100"
            format="webp"
            class="w-32 lg:w-48 xl:w-auto h-auto"
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
  provider: string;
}

defineProps({
  title: {
    type: String,
    default: "Trusted by Leading Companies",
  },
  logos: {
    type: Array as () => Logo[],
    required: true,
  },
  fetchpriority: {
    type: String,
    default: "lazy",
  },
});
</script>
