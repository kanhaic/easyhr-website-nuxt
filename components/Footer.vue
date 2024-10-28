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
            <p class="mt-6 text-sm font-normal text-gray-400">
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
            <ul class="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-400">
              <li v-for="city in cities" :key="city">
                <a :href="`/${city.fields.slug}`" class="hover:text-white">{{ city.fields.menuTitle }}</a>
              </li>
            </ul>
          </div>
          <div class="flex flex-col items-start mt-6">
            <h6
              class="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4"
            >
              Countries
            </h6>
            <ul class="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-400">
              <li v-for="country in countries" :key="country">
                <a :href="`/${country.fields.slug}`" class="hover:text-white" >{{ country.fields.menuTitle }}</a>
              </li>
            </ul>
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
                  class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duruation hover:translate-x-1"
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
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duruation hover:translate-x-1"
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
                title=""
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duruation hover:translate-x-1"
              >
                About us
              </a>
            </li>

            <li>
              <a
                href="/pricing"
                title=""
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duruation hover:translate-x-1"
              >
                Pricing
              </a>
            </li>

            <li>
              <a
                href="/features"
                title=""
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duruation hover:translate-x-1"
              >
                Features
              </a>
            </li>

            <li>
              <a
                href="/industries"
                title=""
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duruation hover:translate-x-1"
              >
                Industries
              </a>
            </li>

            <li>
              <a
                href="/blog"
                title=""
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duruation hover:translate-x-1"
              >
                Blog
              </a>
            </li>

            <li>
              <a
                href="/resources"
                title=""
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duruation hover:translate-x-1"
              >
                Resources
              </a>
            </li>

            <li>
              <a
                href="/faqs"
                title="Faqs"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duruation hover:translate-x-1"
              >
                FAQs
              </a>
            </li>

            <li>
              <a
                href="/support"
                title=""
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duruation hover:translate-x-1"
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
                href="#"
                title=""
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duruation hover:translate-x-1"
              >
                Terms of Service
              </a>
            </li>

            <li>
              <a
                href="#"
                title=""
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duruation hover:translate-x-1"
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
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duruation hover:translate-x-1"
              >
                +91-73041-24665
              </a>
            </li>
            <li>
              <a
                href="tel:+919930205985"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duruation hover:translate-x-1"
              >
                +91-99302-05985
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr class="mt-12 border-gray-900 lg:mt-20 xl:mt-24 sm:mt-16" />

      <p class="mt-8 text-sm font-normal text-center text-gray-400">
        © 2024, All Rights Reserved by CraftingHR Software Solutions LLP
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

const productMenus = (data.value?.items.filter(item => item.fields.type === 'product') || []).slice(0, 10)
const cities = (data.value?.items.filter(item => item.fields.type === 'city') || []).slice(0, 10)
const countries = (data.value?.items.filter(item => item.fields.type === 'country') || []).slice(0, 10)
const industries = (data.value?.items.filter(item => item.fields.type === 'industry') || []).slice(0, 10)

// console.log(cities);
</script>


