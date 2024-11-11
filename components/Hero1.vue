<template>
  <section v-once class="pt-6">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <p
            class="text-base font-semibold tracking-wider text-blue-600 uppercase"
          >
            {{ topTag }}
          </p>
          <h1
            class="mt-4 text-4xl font-semibold text-black lg:mt-8 sm:text-5xl xl:text-6xl"
          >
            {{ title }}
          </h1>
          <p class="mt-4 text-base text-black lg:mt-8 sm:text-xl">
            {{ subtitle }}
          </p>

          <div class="flex flex-row gap-4 mt-8 lg:mt-16">
            <a
              :href="cta1Link"
              :title="cta1Title"
              class="inline-flex items-center justify-center px-6 py-4 font-semibold text-black transition-all duration-200 bg-indigo-300 rounded-md hover:bg-indigo-400 focus:bg-indigo-400"
              role="button"
              v-if="cta1Link"
            >
              {{ cta1Title }}
              <svg
                class="w-6 h-6 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>

            <a
              v-if="cta2Link"
              :href="cta2Link"
              :title="cta2Title"
              class="inline-flex items-center justify-center px-6 py-4 font-semibold text-indigo-600 transition-all duration-200 bg-transparent border-2 border-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white focus:bg-indigo-600 focus:text-white"
              role="button"
            >
              {{ cta2Title }}
            </a>
          </div>

          <p class="mt-5 text-gray-600" v-if="showLogin">
            Already joined us?
            <a
              href="/login"
              title=""
              class="transition-all duration-200 hover:underline hover:text-gray-400 hover:font-semibold text-blue-600"
              >Log in</a
            >
          </p>
        </div>

        <div class="flex justify-center items-center">
          <NuxtImg
            v-if="heroImageProvider"
            class="rounded-lg"
            :src="heroImage"
            :alt="title"
            :title="title"
            format="webp"
            preload
            width="640"
            height="554"
            :provider="heroImageProvider"
          />
          <img
            v-else
            :src="heroImage"
            :alt="title"
            :title="title"
            class="rounded-lg"
            width="640"
            height="554"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  topTag: {
    type: String,
    default: "Streamline Your HR Processes",
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  cta1Title: {
    type: String,
    default: "Get Started",
  },
  cta1Link: {
    type: String,
  },
  cta2Title: {
    type: String,
    default: "Free Trial",
  },
  cta2Link: {
    type: String,
  },
  heroImage: {
    type: String,
    default: "/images/hero.webp",
  },
  heroImageProvider: {
    type: String,
  },
  showLogin: {
    type: Boolean,
    default: true,
  },
});
</script>
