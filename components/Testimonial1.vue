<template>
  <section class="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="max-w-2xl mx-auto text-center">
        <p class="text-base font-semibold text-blue-600">
          {{ subtitle }}
        </p>
        <h2
          class="mt-6 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl lg:mt-8"
        >
          {{ title }}
        </h2>
      </div>

      <div
        class="grid max-w-3xl grid-cols-1 gap-12 mx-auto mt-16 text-center lg:mt-20 xl:mt-20 xl:grid-cols-2 xl:max-w-none sm:text-left"
      >
        <div v-for="(testimonial, index) in testimonials" :key="index" class="flex flex-col sm:flex-row lg:items-center">
          <NuxtImg
            class="object-cover w-48 h-48 mx-auto sm:mx-0 lg:w-60 lg:h-60 shrink-0 rounded-2xl"
            :src="testimonial.image"
            :alt="testimonial.name"
            :title="testimonial.name"
            loading="lazy"
            width="200"
            height="200"
            format="webp"
            provider="contentful"
          />
          <div class="mt-8 sm:mt-0 sm:ml-10">
            <div class="flex items-center justify-center sm:justify-start">
              <svg v-for="star in 5" :key="star" class="w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <blockquote class="mt-8">
              <p class="text-lg font-medium leading-8 text-gray-900">
                "{{ testimonial.quote }}"
              </p>
            </blockquote>
            <div
              class="flex flex-col flex-wrap items-center justify-center gap-1 mt-5 sm:flex-row sm:justify-start sm:gap-4"
            >
              <p class="text-base font-semibold text-gray-900">{{ testimonial.name }}</p>
              <span class="hidden sm:inline-block">&middot;</span>
              <p class="text-base text-gray-600">{{ testimonial.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  subtitle: {
    type: String,
    default: '3940+ Happy Landingfolio Users'
  },
  title: {
    type: String,
    default: "Don't just take our words"
  },
  testimonials: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(testimonial => 
        'image' in testimonial && 
        'quote' in testimonial && 
        'name' in testimonial && 
        'position' in testimonial
      );
    }
  }
});
</script>
