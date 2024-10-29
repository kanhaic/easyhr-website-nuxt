<template>
  <div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h1 class="text-3xl font-bold text-gray-900 sm:text-4xl">
          HR Glossary
        </h1>
        <p class="mt-4 text-lg text-gray-500">
          Comprehensive glossary of HR terms and definitions
        </p>
      </div>

      <!-- Glossary List -->
      <div class="space-y-8">
        <div v-for="(terms, letter) in groupedTerms" :key="letter" 
             :class="getCardBgColor(letter)"
             class="rounded-lg shadow-sm p-6">
          <!-- Letter Header -->
          <div class="flex items-center mb-6">
            <div :class="getLetterColor(letter)" 
                 class="h-14 w-14 rounded-lg flex items-center justify-center">
              <span class="text-2xl font-bold text-white">{{ letter }}</span>
            </div>
          </div>

          <!-- Terms List -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              v-for="term in terms"
              :key="term.fields.slug"
              :href="`/hr-glossary/${term.fields.slug}`"
              class="group"
            >
              <h3 :class="getTextColor(letter)" 
                  class="text-lg font-medium group-hover:underline">
                {{ term.fields.title }}
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as contentful from "contentful";
const config = useRuntimeConfig();

const client = contentful.createClient({
  space: config.public.contentful.spaceId,
  accessToken: config.public.contentful.accessToken,
});

const { data, error } = await useAsyncData("hr-glossary-list", () =>
  client.getEntries({
    content_type: "resources",
    "fields.type": "hr-glossary",
    limit: 1000,
    order: "fields.title",
  })
);

// console.log(data.value);

// Group terms by first letter
const groupedTerms = computed(() => {
  if (!data.value?.items) return {};

  return data.value.items.reduce((acc, term) => {
    const firstLetter = term.fields.title.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(term);
    return acc;
  }, {});
});

// console.log(groupedTerms.value);

// Color mapping for letters
const letterColors = {
  backgrounds: {
    A: 'bg-blue-500',
    B: 'bg-pink-500',
    C: 'bg-purple-500',
    D: 'bg-indigo-500',
    E: 'bg-green-500',
    F: 'bg-yellow-500',
    G: 'bg-red-500',
    H: 'bg-orange-500',
    I: 'bg-teal-500',
    J: 'bg-cyan-500',
    K: 'bg-lime-500',
    L: 'bg-emerald-500',
    M: 'bg-sky-500',
    N: 'bg-violet-500',
    O: 'bg-fuchsia-500',
    P: 'bg-rose-500',
    Q: 'bg-amber-500',
    R: 'bg-blue-600',
    S: 'bg-pink-600',
    T: 'bg-purple-600',
    U: 'bg-indigo-600',
    V: 'bg-green-600',
    W: 'bg-yellow-600',
    X: 'bg-red-600',
    Y: 'bg-orange-600',
    Z: 'bg-teal-600'
  },
  cardBackgrounds: {
    A: 'bg-blue-50',
    B: 'bg-pink-50',
    C: 'bg-purple-50',
    D: 'bg-indigo-50',
    E: 'bg-green-50',
    F: 'bg-yellow-50',
    G: 'bg-red-50',
    H: 'bg-orange-50',
    I: 'bg-teal-50',
    J: 'bg-cyan-50',
    K: 'bg-lime-50',
    L: 'bg-emerald-50',
    M: 'bg-sky-50',
    N: 'bg-violet-50',
    O: 'bg-fuchsia-50',
    P: 'bg-rose-50',
    Q: 'bg-amber-50',
    R: 'bg-blue-50',
    S: 'bg-pink-50',
    T: 'bg-purple-50',
    U: 'bg-indigo-50',
    V: 'bg-green-50',
    W: 'bg-yellow-50',
    X: 'bg-red-50',
    Y: 'bg-orange-50',
    Z: 'bg-teal-50'
  },
  text: {
    A: 'text-blue-600',
    B: 'text-pink-600',
    C: 'text-purple-600',
    D: 'text-indigo-600',
    E: 'text-green-600',
    F: 'text-yellow-600',
    G: 'text-red-600',
    H: 'text-orange-600',
    I: 'text-teal-600',
    J: 'text-cyan-600',
    K: 'text-lime-600',
    L: 'text-emerald-600',
    M: 'text-sky-600',
    N: 'text-violet-600',
    O: 'text-fuchsia-600',
    P: 'text-rose-600',
    Q: 'text-amber-600',
    R: 'text-blue-700',
    S: 'text-pink-700',
    T: 'text-purple-700',
    U: 'text-indigo-700',
    V: 'text-green-700',
    W: 'text-yellow-700',
    X: 'text-red-700',
    Y: 'text-orange-700',
    Z: 'text-teal-700'
  }
};

// Helper functions for color classes
const getLetterColor = (letter) => {
  return letterColors.backgrounds[letter] || 'bg-gray-500';
};

const getCardBgColor = (letter) => {
  return letterColors.cardBackgrounds[letter] || 'bg-gray-50';
};

const getTextColor = (letter) => {
  return letterColors.text[letter] || 'text-gray-600';
};

// Add meta tags for SEO
useHead({
  title: "HR Glossary - EasyHR",
  meta: [
    {
      name: "description",
      content:
        "Comprehensive glossary of HR terms and definitions. Find explanations for common HR terminology and concepts.",
    },
  ],
});
</script>

<style scoped>
.group {
  @apply transition-all duration-200;
}

.group:hover h3 {
  @apply underline;
}
</style>
