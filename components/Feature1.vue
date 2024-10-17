<template>
  <div>
    <section class="py-6 sm:py-8 lg:py-12 ">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <p
            class="text-sm font-semibold tracking-widest text-blue-600 uppercase"
          >
            {{ topTag }}
          </p>

          <h2
            class="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"
          >
            {{ headerFeature }}
          </h2>
        </div>

        <div
          class="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4"
        >
          <div class="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
            <div v-for="(item, index) in items" :key="index" class="flex items-start">
              <svg
                class="flex-shrink-0 w-9 h-9"
                :class="item.iconColor"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  :d="item.iconPath"
                />
              </svg>
              <div class="ml-5">
                <h3 class="text-xl font-semibold text-black">
                  {{ item.title }}
                </h3>
                <p class="mt-3 text-base text-gray-600">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-3">
            <NuxtImg
              class="w-full rounded-lg shadow-xl"
              :src="image.src"
              :alt="image.alt"
              loading="lazy"
              width="600"
              height="400"
              provider="contentful"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface FeatureItem {
  iconColor: string;
  iconPath: string;
  title: string;
  description: string;
}

interface Image {
  src: string;
  alt: string;
}

defineProps({
  topTag: {
    type: String,
    required: true
  },
  headerFeature: {
    type: String,
    required: true
  },
  items: {
    type: Array as () => FeatureItem[],
    required: true
  },
  image: {
    type: Object as () => Image,
    required: true
  }
});
</script>

