<template>
  <div class="bg-white" v-if="faqs.length > 0">
    <div class="mx-auto max-w-7xl px-6 py-4 sm:py-6 lg:px-8">
      <h2 class="text-3xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
      <p class="mt-6 max-w-2xl text-base leading-7 text-gray-600">Can't find the answer you're looking for? Reach out to our <a href="/support" class="font-semibold text-indigo-600 hover:text-indigo-500">customer support</a> team.</p>
      <div class="mt-8">
        <dl class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4 sm:space-y-0 lg:gap-x-10">
          <div v-for="faq in faqs" :key="faq.question" class="pt-6">
            <dt class="text-lg font-medium leading-7 text-gray-900">
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
