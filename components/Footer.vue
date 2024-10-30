<template>
  <footer class="pt-12 pb-8 bg-black lg:pt-20 xl:pt-24 sm:pt-16">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-4 xl:gap-x-16 gap-x-8"
      >
        <div class="col-span-2 md:col-span-4 lg:col-span-2">
          <div class="flex flex-col items-center">
            <a
              href="/"
              title=""
              class="inline-flex items-center justify-start w-full"
            >
              <NuxtImg
                class="w-auto h-9"
                src="/images/logo.webp"
                alt="EasyHR Logo"
              />
            </a>
            <p class="mt-6 text-sm font-normal text-gray-200">
              EasyHR is a user-friendly and intuitive HR software designed for
              SMEs and enterprises. It streamlines the management of HRIS
              records, leave and attendance, payroll, expenses, and travel,
              making HR operations effortless.
            </p>
          </div>
          <div class="flex flex-col items-start mt-6">
            <h6
              class="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4"
            >
              Cities
            </h6>
            <ul class="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-50">
              <li v-for="city in cities" :key="city">
                <a :href="`/${city.fields.slug}`" class="hover:text-white">{{
                  city.fields.menuTitle
                }}</a>
              </li>
            </ul>
          </div>
          <div class="flex flex-col items-start mt-6">
            <h6
              class="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4"
            >
              Countries
            </h6>
            <ul class="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-50">
              <li v-for="country in countries" :key="country">
                <a :href="`/${country.fields.slug}`" class="hover:text-white">{{
                  country.fields.menuTitle
                }}</a>
              </li>
            </ul>
          </div>
          <div class="flex flex-col items-start mt-6">
            <h6
              class="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4"
            >
              Follow Us
            </h6>
            <div class="flex space-x-4">
              <!-- Facebook -->
              <a
                href="https://www.facebook.com/easyhrworld"
                target="_blank"
                rel="noopener"
                class="text-gray-400 hover:text-white transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              
              <!-- Twitter/X -->
              <a
                href="https://twitter.com/easyhrworld"
                target="_blank"
                rel="noopener"
                class="text-gray-400 hover:text-white transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <!-- LinkedIn -->
              <a
                href="https://www.linkedin.com/company/easy-hr-world"
                target="_blank"
                rel="noopener"
                class="text-gray-400 hover:text-white transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <!-- GitHub -->
              <a
                href="https://github.com/easyhrworld"
                target="_blank"
                rel="noopener"
                class="text-gray-400 hover:text-white transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h6
              class="text-xs font-semibold tracking-widest text-gray-400 uppercase"
            >
              Products
            </h6>

            <ul class="mt-8 space-y-5">
              <li v-for="menu in productMenus" :key="menu.sys.id">
                <a
                  :href="`/${menu.fields.slug}`"
                  :title="menu.fields.menuTitle"
                  class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
                >
                  {{ menu.fields.menuTitle }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h6
            class="text-xs font-semibold tracking-widest text-gray-400 uppercase"
          >
            Industries
          </h6>

          <ul class="mt-8 space-y-5">
            <li v-for="industry in industries" :key="industry">
              <a
                :href="`/${industry.fields.slug}`"
                title=""
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                {{ industry.fields.menuTitle }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6
            class="text-xs font-semibold tracking-widest text-gray-400 uppercase"
          >
            Company
          </h6>

          <ul class="mt-8 space-y-5">
            <li>
              <a
                href="/company/about"
                title="About us"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                About us
              </a>
            </li>

            <li>
              <a
                href="/pricing"
                title="Pricing"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                Pricing
              </a>
            </li>

            <li>
              <a
                href="/features"
                title="Features"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                Features
              </a>
            </li>

            <li>
              <a
                href="/industries"
                title="Industries"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                Industries
              </a>
            </li>

            <li>
              <a
                href="/blog"
                title="Blog"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                Blog
              </a>
            </li>

            <li>
              <a
                href="/resources"
                title="Resources"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                Resources
              </a>
            </li>

            <li>
              <a
                href="/partners"
                title="Partner with us"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                Partner with us
              </a>
            </li>

            <li>
              <a
                href="/faqs"
                title="Faqs"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                FAQs
              </a>
            </li>

            <li>
              <a
                href="/support"
                title="Support"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                Support
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6
            class="text-xs font-semibold tracking-widest text-gray-400 uppercase"
          >
            Legals
          </h6>

          <ul class="mt-8 space-y-5">
            <li>
              <a
                href="/terms-of-service"
                title="Terms of Service"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                Terms of Service
              </a>
            </li>

            <li>
              <a
                href="/privacy-policy"
                title="Privacy Policy"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                Privacy Policy
              </a>
            </li>
          </ul>

          <h6
            class="text-xs font-semibold tracking-widest text-gray-400 uppercase mt-8"
          >
            Sales
          </h6>

          <ul class="mt-4 space-y-3">
            <li>
              <a
                href="tel:+917304124665"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                +91-73041-24665
              </a>
            </li>
            <li>
              <a
                href="tel:+919930205985"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                +91-99302-05985
              </a>
            </li>
          </ul>

          <h6
            class="text-xs font-semibold tracking-widest text-gray-400 uppercase mt-8"
          >
            Mobile Apps
          </h6>

          <ul class="mt-4 space-y-4">
            <li class="flex justify-start">
              <a
                href="https://play.google.com/store/apps/details?id=com.streetlightsoftware.easyhr"
                target="_blank"
                rel="noopener"
                class="inline-block hover:opacity-90 transition-opacity"
              >
                <NuxtImg
                  src="/images/google-play-badge.png"
                  alt="Get it on Google Play"
                  class="w-[140px] h-auto"
                  loading="lazy"
                />
              </a>
            </li>
            <li class="flex justify-start">
              <a
                href="https://apps.apple.com/in/app/easy-hr/id779522863"
                target="_blank"
                rel="noopener"
                class="inline-block hover:opacity-90 transition-opacity"
              >
                <NuxtImg
                  src="/images/app-store-badge.png"
                  alt="Download on the App Store"
                  class="w-[140px] h-auto"
                  loading="lazy"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr class="mt-12 border-gray-900 lg:mt-20 xl:mt-24 sm:mt-16" />

      <p class="mt-8 text-sm font-normal text-center text-gray-400">
        © {{ new Date().getFullYear() }}, All Rights Reserved by
        <a href="https://craftinghr.com" class="hover:text-white"
          >CraftingHR Software Solutions LLP</a
        >
      </p>
    </div>
  </footer>
</template>

<script setup>
import * as contentful from "contentful";
const config = useRuntimeConfig();

const client = contentful.createClient({
  space: config.public.contentful.spaceId,
  accessToken: config.public.contentful.accessToken,
});

const { data, error } = await useAsyncData(`product-menus`, () =>
  client.getEntries({
    content_type: "landingPage",
  })
);

const productMenus = (
  data.value?.items.filter((item) => item.fields.type === "product") || []
).slice(0, 10);
const cities = (
  data.value?.items.filter((item) => item.fields.type === "city") || []
).slice(0, 10);
const countries = (
  data.value?.items.filter((item) => item.fields.type === "country") || []
).slice(0, 10);
const industries = (
  data.value?.items.filter((item) => item.fields.type === "industry") || []
).slice(0, 10);

// console.log(cities);
</script>
