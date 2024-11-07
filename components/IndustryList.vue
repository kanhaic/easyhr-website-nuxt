<template>
  <div>
    <section class="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <h2
            class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            {{ title }}
          </h2>
          <p
            class="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8"
          >
            {{ subtitle }}
          </p>
        </div>

        <div
          class="grid grid-cols-1 gap-6 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-3 sm:mt-16 lg:gap-8 max-w-7xl"
        >
          <div v-for="(industry, index) in industries" :key="index" class="bg-gray-100 rounded-2xl">
            <div class="px-6 py-6 sm:p-8">
              <div class="h-36">
                <h4 class="text-xl font-semibold text-gray-900 mb-3">
                  {{ industry.title }}
                </h4>
                <h3 class="pt-4 text-lg text-gray-900">
                  {{ industry.description }}
                </h3>
              </div>
              <div class="h-72 w-full mt-8">
                <img
                  class="object-cover w-full h-full rounded-xl"
                  :src="industry.image"
                  :alt="industry.title"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Industry-Specific HR Solutions'
  },
  subtitle: {
    type: String,
    default: 'Streamline your HR processes with solutions tailored to your industry needs'
  },
  industries: {
    type: Array,
    default: () => [
      {
        title: 'Technology & IT',
        description: 'Take authentic feedbacks from customers of your app. Build a quick list.',
        image: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/features/6/image-1.png'
      },
      {
        title: 'Healthcare & Medical',
        description: 'Make quick fixes based on the feedbacks you\'ve received. With a happy smile.',
        image: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/features/6/image-2.png'
      },
      {
        title: 'Manufacturing',
        description: 'Enjoy more than 10x revenue with real-time conversions. Grow your business.',
        image: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/features/6/image-3.png'
      }
    ]
  }
});
</script>

<style></style>
