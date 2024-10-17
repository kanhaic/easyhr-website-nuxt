<template>
  <section class="py-12 bg-gray-50 sm:py-16 lg:py-20">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto text-center xl:max-w-4xl">
        <h2
          class="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj"
        >
          {{ title }}
        </h2>
      </div>

      <div class="relative mt-12 lg:mt-20 lg:max-w-5xl lg:mx-auto">
        <div class="absolute -inset-2">
          <div
            class="w-full h-full mx-auto blur-lg filter"
            :style="{ background: gradientBackground }"
          ></div>
        </div>

        <div
          class="relative grid grid-cols-1 px-16 py-12 overflow-hidden text-center bg-white sm:grid-cols-2 gap-y-12 lg:grid-cols-4 rounded-2xl gap-x-20"
        >
          <div v-for="(stat, index) in stats" :key="index" class="flex flex-col items-center">
            <p
              class="text-5xl font-bold text-gray-900 lg:mt-3 lg:order-2 font-pj"
            >
              {{ stat.value }}
            </p>
            <h3
              class="mt-5 text-sm font-bold tracking-widest text-gray-600 uppercase lg:mt-0 lg:order-1 font-pj"
            >
              {{ stat.label }}
            </h3>
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
    required: true
  },
  gradientBackground: {
    type: String,
    default: `linear-gradient(
      90deg,
      #44ff9a -0.55%,
      #44b0ff 22.86%,
      #8b44ff 48.36%,
      #ff6644 73.33%,
      #ebff70 99.34%
    )`
  },
  stats: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(stat => 'value' in stat && 'label' in stat);
    }
  }
});
</script>
