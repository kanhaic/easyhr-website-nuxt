<template>
  <section class="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div
        class="flex flex-col max-w-6xl gap-12 mx-auto lg:items-center lg:justify-between lg:flex-row"
      >
        <div class="lg:max-w-md xl:max-w-xl">
          <h2
            class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            {{ title }}
          </h2>
          <p
            v-if="subtitle"
            class="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8"
          >
            {{ subtitle }}
          </p>
        </div>

        <div class="grid grid-cols-2">
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            class="pt-4 pb-8 px-8 sm:px-12 sm:pb-12"
            :class="{
              'border-l border-gray-200': index % 2 === 1,
              'border-t border-gray-200': index > 1,
              'border-l border-t border-gray-200': index === 3,
            }"
          >
            <p class="text-5xl font-semibold tracking-tight text-gray-900">
              {{ stat.value }}
            </p>
            <h3 class="mt-3 text-base font-semibold text-blue-600">
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
    required: true,
  },
  subtitle: {
    type: String,
    default:
      "Explore the Numbers That Define Our Impact – From Satisfied Customers to Streamlined HR Processes, See How We Empower Businesses Globally to Achieve More with Less.",
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
