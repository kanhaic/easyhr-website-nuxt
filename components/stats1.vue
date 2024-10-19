<template>
  <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto text-center">
        <h2
          class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"
        >
          {{ title }}
        </h2>
      </div>

      <div
        class="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-12 "
        :class="stats.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'"
      >
        <div v-for="stat in stats" :key="stat.label">
          <h3 class="font-bold text-7xl">
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"
            >
              {{ stat.value }}
            </span>
          </h3>
          <p class="mt-4 text-xl font-medium text-gray-900">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
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
    )`,
  },
  stats: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every((stat) => "value" in stat && "label" in stat);
    },
  },
});
</script>
