<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
      <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
      <p class="mt-6 max-w-2xl text-base leading-7 text-gray-600">Can't find the answer you're looking for? Reach out to our <a href="/support" class="font-semibold text-indigo-600 hover:text-indigo-500">customer support</a> team.</p>
      <div class="mt-20">
        <dl class="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
          <div v-for="faq in faqs" :key="faq.question" class="pt-6">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              {{ faq.question }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">{{ faq.answer }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  faqs: {
    type: Array,
    required: true,
  },
});
</script>
