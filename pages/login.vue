<template>
  <div class="flex min-h-screen">
    <div
      class="w-full lg:w-1/2 flex flex-col justify-center px-0 py-8 sm:px-2 lg:px-20 xl:px-24"
    >
      <div class="flex-1 px-2 max-w-md mx-auto lg:max-w-lg py-4 lg:py-12">
        <a href="/" class="flex justify-center lg:justify-start">
          <img class="w-24" src="/images/logo.webp" alt="EasyHR Logo" title="EasyHR Logo" />
        </a>

        <h1
          class="mt-10 text-3xl font-bold text-center text-gray-900 lg:mt-20 xl:mt-32 sm:text-4xl xl:text-5xl font-pj lg:text-left"
        >
          {{ loginPage.fields.title }}
        </h1>

        <form @submit.prevent="handleLogin" class="mt-10">
          <div class="space-y-4">
            <div>
              <label 
                for="account" 
                class="lg:hidden block text-sm font-semibold text-gray-800 mb-2 px-1
                  sm:mb-1 sm:font-medium sm:text-gray-700"
              >
                Company Account URL:
              </label>
              <div class="relative mt-1">
                <div class="flex">
                  <span
                    class="hidden sm:inline-flex items-center px-3 text-gray-500 border-y border-l border-gray-200 rounded-l-xl bg-gray-50"
                  >
                    https://
                  </span>
                  <input
                    ref="accountInput"
                    type="text"
                    name="account"
                    id="account"
                    placeholder="your-company"
                    v-model="account"
                    required
                    autocomplete="organization"
                    :class="`
                      block w-full py-4 px-4 
                      text-base font-normal 
                      text-gray-900 placeholder-gray-500 
                      transition-all duration-200 
                      border ${!account ? 'border-gray-200' : 'border-gray-300'} 
                      caret-gray-900 
                      bg-gray-50 
                      focus:outline-none focus:bg-white focus:border-gray-300 focus:ring-1 focus:ring-gray-300
                      ${!account ? 'rounded-xl sm:rounded-none' : 'rounded-xl sm:rounded-none'}
                    `"
                  />
                  <span
                    class="hidden sm:inline-flex items-center px-3 text-gray-500 border-y border-r border-gray-200 rounded-r-xl bg-gray-50"
                  >
                    .easyhrworld.com
                  </span>
                </div>
                <p class="lg:hidden mt-3 text-xs text-gray-600 px-1 leading-relaxed
                  sm:mt-2 sm:text-gray-500">
                  <span class="font-medium text-gray-700 sm:font-normal sm:text-gray-500">Ex:</span> 
                  If your URL is <span class="font-medium text-gray-700">https://<span class="underline">acme</span>.easyhrworld.com</span>, enter "<span class="font-medium text-gray-700">acme</span>"
                </p>
              </div>
            </div>
          </div>

          <div class="relative mt-8">
            <div class="absolute -inset-2">
              <div
                class="w-full h-full mx-auto opacity-30 blur-lg filter"
                style="
                  background: linear-gradient(
                    90deg,
                    #44ff9a -0.55%,
                    #44b0ff 22.86%,
                    #8b44ff 48.36%,
                    #ff6644 73.33%,
                    #ebff70 99.34%
                  );
                "
              ></div>
            </div>

            <button
              type="submit"
              :disabled="isLoading"
              class="relative flex items-center justify-center w-full px-4 py-3 text-base font-bold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isLoading" class="mr-2">
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </span>
              {{ isLoading ? 'Processing...' : 'Continue' }}
            </button>
          </div>

          <p class="mt-4 text-sm text-center text-gray-600">
            By continuing, you agree to our
            <NuxtLink
              to="/terms-of-service"
              class="font-medium text-gray-900 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Terms of Service
            </NuxtLink>
            <span class="mx-2">and</span>
            <NuxtLink
              to="/privacy-policy"
              class="font-medium text-gray-900 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Privacy Policy
            </NuxtLink>
          </p>
        </form>

        <p
          class="mt-10 text-base font-normal text-center text-gray-900 lg:mt-20 xl:mt-32 font-pj lg:text-left"
        >
          Don't have an account?
          <a
            href="/signup"
            title="Create a new account"
            class="font-bold rounded focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:underline"
            >Sign up now</a
          >
        </p>
      </div>
    </div>
    
    <div class="hidden lg:block lg:w-1/2">
      <div class="relative w-full bg-gray-900 h-full overflow-hidden">
        <div class="absolute inset-0">
          <img
            class="object-cover object-top w-full h-full scale-150 -rotate-90 opacity-10"
            src="/images/background-pattern.png"
            alt="Background pattern"
            title="Background pattern"
            width="1920"
            height="1080"
          />
        </div>

        <div class="relative max-w-sm mx-auto h-full flex flex-col justify-center">
          <div
            class="inline-flex items-center justify-center w-20 h-20 bg-gray-800 rounded-xl"
          >
            <svg
              class="w-auto h-5 text-white"
              viewBox="0 0 33 23"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M32.0011 4.7203L30.9745 0C23.5828 0.33861 18.459 3.41404 18.459 12.4583V22.8687H31.3725V9.78438H26.4818C26.4819 6.88236 28.3027 5.17551 32.0011 4.7203Z"
              />
              <path
                d="M13.5421 4.7203L12.5155 0C5.12386 0.33861 0 3.41413 0 12.4584V22.8687H12.914V9.78438H8.02029C8.02029 6.88236 9.84111 5.17551 13.5421 4.7203Z"
              />
            </svg>
          </div>

          <blockquote class="mt-14">
            <p
              class="text-2xl font-medium leading-relaxed text-white lg:text-3xl font-pj"
            >
              {{ testimonial?.fields?.testimonial }}
            </p>
          </blockquote>

          <div class="flex items-center mt-12">
            <NuxtImg
              class="flex-shrink-0 object-cover rounded-full w-14 h-14"
              :src="testimonial?.fields?.profilePicture?.fields?.file?.url"
              :alt="testimonial?.fields?.name"
              title="Profile picture"
              provider="contentful"
              width="56"
              height="56"
            />
            <div class="ml-4">
              <p class="text-xl font-bold text-white font-pj">
                {{ testimonial?.fields?.name }}
              </p>
              <p class="mt-px text-lg font-normal text-gray-400 font-pj">
                {{ testimonial?.fields?.designation }}
              </p>
            </div>
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

const { data, error } = await useAsyncData("main-landing", () =>
  client.getEntries({
    content_type: "landingPage",
    "fields.type": "main",
    "fields.slug": "login",
    limit: 1,
  })
);

const loginPage = data.value?.items?.[0] || {};
const testimonial = loginPage?.fields?.testimonials?.[0] || {};

const account = ref("");
const isLoading = ref(false);
const accountInput = ref(null);

onMounted(() => {
  accountInput.value?.focus();
});

definePageMeta({
  layout: false,
});


const handleLogin = async () => {
  if (!account.value) return;
  
  try {
    isLoading.value = true;
    // Add your login logic here
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
    navigateTo(`https://${account.value}.easyhrworld.com`, { external: true });
  } catch (error) {
    console.error('Login error:', error);
  } finally {
    isLoading.value = false;
  }
};

useSeoMeta({
  title: 'Login to EasyHR - Access Your HR Management Portal',
  description: 'Log in to your EasyHR account to access your HR management portal. Manage employees, payroll, and HR processes efficiently.',
  ogTitle: 'Login to EasyHR - Access Your HR Management Portal',
  ogDescription: 'Access your HR management portal to streamline your HR operations with EasyHR.',
});

useHead({
  htmlAttrs: {
    class: "h-full bg-white",
  },
  bodyAttrs: {
    class: "h-full",
  },
});
</script>
