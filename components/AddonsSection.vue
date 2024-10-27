<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
    <h2 class="text-4xl font-bold tracking-tight text-gray-900">
      {{ title }}
    </h2>
    <p class="mt-4 text-lg text-gray-600">
      {{ subtitle }}
    </p>

    <div
      class="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2"
    >
      <div
        v-for="addon in addons"
        :key="addon.name"
        class="bg-white rounded-lg p-6 shadow border border-gray-200 hover:shadow-md transition-shadow duration-300"
      >
        <div class="flex justify-between items-start">
          <div>
            <h3 class="text-xl font-semibold text-indigo-600">
              {{ addon.name }}
            </h3>
            <p class="mt-2 text-lg font-medium text-gray-900">
              {{ addon.price }}
            </p>
            <p class="mt-2 text-sm text-gray-600">{{ addon.description }}</p>
          </div>
          <NuxtImg
            :src="addon.icon"
            :alt="addon.name"
            class="w-24 h-24 object-contain"
            provider="ipx"
            format="webp"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  addons: {
    type: Array,
    required: true,
  },
});
</script>
