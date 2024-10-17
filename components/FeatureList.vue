<template>
  <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{{ title }}</h2>
        <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">{{ description }}</p>
      </div>

      <div class="grid grid-cols-1 gap-6 mt-12 lg:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(feature, index) in features" :key="index">
          <div class="relative flex items-center justify-center mx-auto">
            <svg
              :class="feature.bgColor"
              :width="feature.svgWidth"
              :height="feature.svgHeight"
              :viewBox="feature.svgViewBox"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path :d="feature.bgPath" />
            </svg>
            <svg
              :class="feature.iconColor"
              class="absolute w-9 h-9"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                :d="feature.iconPath"
              />
            </svg>
          </div>
          <h3 class="mt-8 text-lg font-semibold text-black">
            {{ feature.title }}
          </h3>
          <p class="mt-4 text-base text-gray-600">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Feature {
  bgColor: string;
  svgWidth: string;
  svgHeight: string;
  svgViewBox: string;
  bgPath: string;
  iconColor: string;
  iconPath: string;
  title: string;
  description: string;
}

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  features: {
    type: Array as () => Feature[],
    required: true
  }
});
</script>

