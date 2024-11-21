<template>
  <section class="pt-6">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
        <div class="min-h-[calc(100vh-4rem)] lg:min-h-fit flex flex-col justify-center">
          <p
            class="text-xl sm:text-base font-semibold tracking-wider text-blue-600 uppercase"
          >
            {{ topTag }}
          </p>
          <h1 class="mt-4 text-5xl font-semibold text-black lg:mt-8 xl:text-6xl">
            {{ title }}
          </h1>
          <p class="mt-4 text-xl text-black lg:mt-8 sm:text-xl">
            {{ subtitle }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-16">
            <a
              v-if="cta1Link"
              :href="cta1Link"
              :title="cta1Title"
              class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-5 text-lg font-semibold text-black transition-all duration-200 bg-indigo-300 rounded-md hover:bg-indigo-400 focus:bg-indigo-400 sm:px-6 sm:py-4 sm:text-base"
              role="button"
            >
              {{ cta1Title }}
              <svg
                class="w-7 h-7 ml-2 sm:w-6 sm:h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
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
              class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-5 text-lg font-semibold text-indigo-600 transition-all duration-200 bg-transparent border-2 border-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white focus:bg-indigo-600 focus:text-white sm:px-6 sm:py-4 sm:text-base"
              role="button"
            >
              {{ cta2Title }}
            </a>
          </div>

          <p v-if="showLogin" class="mt-6 text-lg text-gray-600 sm:text-base sm:mt-5">
            Already joined us?
            <a
              href="/login"
              title="Log in"
              class="transition-all duration-200 hover:underline font-medium hover:text-blue-900 hover:font-semibold text-blue-800"
              >Log in</a
            >
          </p>
        </div>

        <div class="justify-center items-center hidden lg:block">
          <NuxtImg
            v-if="heroImageProvider"
            :src="heroImage"
            :alt="title"
            format="webp"
            quality="75"
            loading="eager"
            fetchpriority="high"
            sizes="sm:320px md:480px lg:720px"
            class="rounded-lg w-full h-auto aspect-[4/3]"
            :provider="heroImageProvider"
          />
          <img
            v-else
            :src="heroImage"
            :alt="title"
            :title="title"
            class="rounded-lg w-full h-auto"
            loading="eager"
            fetchpriority="high"
            sizes="sm:320px md:480px lg:720px"
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

// Add image preloading
onMounted(() => {
  const imagePreloader = new Image();
  imagePreloader.src = props.heroImage;
});
</script>
