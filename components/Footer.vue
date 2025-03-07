<template>
  <footer class="pt-8 pb-8 bg-black sm:pt-12 lg:pt-16 xl:pt-18">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <!-- Logo and Description Section at Top -->
      <div class="mb-12">
        <div class="flex flex-col md:flex-row justify-between items-start">
          <!-- Logo and Description -->
          <div class="flex flex-col md:flex-row md:items-center md:space-x-8 max-w-3xl">
            <a href="/" title="EasyHR Logo" class="flex-shrink-0">
              <img src="/images/logo.webp" alt="EasyHR Logo" title="EasyHR Logo" loading="lazy" height="40" width="140" />
            </a>
            <p class="mt-4 md:mt-0 text-sm font-normal text-gray-200">
              EasyHR is a user-friendly and intuitive HR software designed for
              SMEs and enterprises. It streamlines the management of HRIS records,
              leave and attendance, payroll, expenses, and travel, making HR
              operations effortless.
            </p>
          </div>

          <!-- WhatsApp Link -->
          <div class="mt-6 md:mt-0 md:ml-8">
            <a 
              href="https://wa.me/917304124665?text=I%20am%20interested%20in%20EasyHR" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center space-x-3 text-white hover:text-gray-200 transition-colors"
            >
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span class="text-lg font-semibold">Message us on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <hr class="mt-4 border-gray-900 lg:my-5 xl:my-6 sm:my-4" />

      <!-- Main Footer Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-4 xl:gap-x-16 gap-x-8">
        <!-- Products (First Column) -->
        <div>
          <h6 class="text-xs font-semibold tracking-widest text-gray-400 uppercase">
            Products
          </h6>
          <ul class="mt-8 space-y-5">
            <li v-for="menu in productMenus" :key="menu.sys.id">
              <a :href="`/${menu.fields.slug}`" class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5">
                {{ menu.fields.menuTitle }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Industries (Second Column) -->
        <div>
          <h6 class="text-xs font-semibold tracking-widest text-gray-400 uppercase">
            Industries
          </h6>
          <ul class="mt-8 space-y-5">
            <li v-for="menu in industries" :key="menu.sys.id">
              <a :href="`/${menu.fields.slug}`" class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5">
                {{ menu.fields.menuTitle }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Payroll & HR Administration Guides-->
        <div class="col-span-2">
          <h6 class="text-xs font-semibold tracking-widest text-gray-400 uppercase">
            Payroll & HR Administration Guides
          </h6>
          <ul class="mt-8 space-y-5">
            <li v-for="guide in guides" :key="guide.fields.slug">
              <a 
                :href="`/${guide.fields.slug}`" 
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                {{ guide.fields.menuTitle }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h6 class="text-xs font-semibold tracking-widest text-gray-400 uppercase">
            Company
          </h6>
          <ul class="mt-8 space-y-5">
            <li>
              <a
                href="/company/about"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/features"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/industries"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                Industries
              </a>
            </li>
            <li>
              <a
                href="/blog"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/resources"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="/guides"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                Guides
              </a>
            </li>
            <li>
              <a
                href="/partners"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                Partner with us
              </a>
            </li>
            <li>
              <a
                href="/faqs"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="/support"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="https://status.easyhrworld.com"
                class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
              >
                Status Page
              </a>
            </li>
          </ul>
        </div>

        <!-- Combined Legals, Sales, and Connect -->
        <div>
          <!-- Legals -->
          <div class="mb-8">
            <h6
              class="text-xs font-semibold tracking-widest text-gray-400 uppercase"
            >
              Legals
            </h6>
            <ul class="mt-4 space-y-3">
              <li>
                <a
                  href="/terms-of-service"
                  class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  class="flex text-sm font-normal transition-all transform text-gray-50 hover:text-white duration hover:translate-x-0.5"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <!-- Sales -->
          <div class="mb-8">
            <h6
              class="text-xs font-semibold tracking-widest text-gray-400 uppercase"
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
          </div>

          <!-- Connect With Us -->
          <div>
            <h6
              class="text-xs font-semibold tracking-widest text-gray-400 uppercase"
            >
              Connect With Us
            </h6>
            <div class="mt-4 flex space-x-4">
              <!-- Facebook -->
              <a
                href="https://www.facebook.com/easyhrworld"
                target="_blank"
                rel="noopener"
                title="Facebook"
                class="text-gray-400 hover:text-white transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                  />
                </svg>
              </a>

              <!-- Twitter/X -->
              <a
                href="https://twitter.com/easyhrworld"
                target="_blank"
                rel="noopener"
                title="Twitter"
                class="text-gray-400 hover:text-white transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  />
                </svg>
              </a>

              <!-- LinkedIn -->
              <a
                href="https://www.linkedin.com/company/easy-hr-world"
                target="_blank"
                rel="noopener"
                title="LinkedIn"
                class="text-gray-400 hover:text-white transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>

              <!-- Instagram -->
              <a
                href="https://www.instagram.com/easyhr_world"
                target="_blank"
                rel="noopener"
                title="Instagram"
                class="text-gray-400 hover:text-white transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>

              <!-- YouTube -->
              <a
                href="https://www.youtube.com/@easyhrworld"
                target="_blank"
                rel="noopener"
                title="YouTube"
                class="text-gray-400 hover:text-white transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <!-- App Store Badges -->
          <div class="mt-6">
            <h6
              class="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3"
            >
              Mobile Apps
            </h6>
            <div class="space-y-3">
              <a
                href="https://apps.apple.com/in/app/easy-hr/id779522863"
                target="_blank"
                rel="noopener"
                class="block"
              >
                <NuxtImg
                  src="/images/app-store-badge.png"
                  alt="Download on the App Store"
                  width="140"
                  height="40"
                  title="Download on the App Store"
                  loading="lazy"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.streetlightsoftware.easyhr"
                target="_blank"
                rel="noopener"
                class="block"
              >
                <NuxtImg
                  src="/images/google-play-badge.png"
                  alt="Get it on Google Play"
                  width="140"
                  height="40"
                  title="Get it on Google Play"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Cities and Countries Section at Bottom -->
      <div class="mt-12 pt-8 border-t border-gray-800">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Cities -->
          <div>
            <h6
              class="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4"
            >
              Cities
            </h6>
            <ul class="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-50">
              <li v-for="city in cities" :key="city">
                <a :href="`/${city.fields.slug}`" class="hover:text-white">
                  {{ city.fields.menuTitle }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Countries -->
          <div>
            <h6
              class="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4"
            >
              Countries
            </h6>
            <ul class="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-50">
              <li v-for="country in countries" :key="country">
                <a :href="`/${country.fields.slug}`" class="hover:text-white">
                  {{ country.fields.menuTitle }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <hr class="mt-4 border-gray-900 lg:mt-5 xl:mt-6 sm:mt-4" />
      <p class="mt-8 text-sm font-normal text-center text-gray-400">
        © {{ new Date().getFullYear() }}, All Rights Reserved by
        <a href="https://craftinghr.com" class="hover:text-white">
          CraftingHR Software Solutions LLP
        </a>
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
    limit: 1000,
  })
);

console.log("data", data.value);


const productMenus = (
  data.value?.items.filter((item) => item.fields.type === "product") || []
).slice(0, 10).sort((a, b) => (a.fields.seq ?? 99) - (b.fields.seq ?? 99));
const cities = (
  data.value?.items.filter((item) => item.fields.type === "city") || []
).slice(0, 10).sort((a, b) => (a.fields.seq ?? 99) - (b.fields.seq ?? 99));
const countries = (
  data.value?.items.filter((item) => item.fields.type === "country") || []
).slice(0, 10).sort((a, b) => (a.fields.seq ?? 99) - (b.fields.seq ?? 99));
const industries = (
  data.value?.items.filter((item) => item.fields.type === "industry") || []
).slice(0, 10).sort((a, b) => (a.fields.seq ?? 99) - (b.fields.seq ?? 99));
const guides = (
  data.value?.items.filter((item) => item.fields.type === "guide") || []
).slice(0, 10).sort((a, b) => (a.fields.seq ?? 99) - (b.fields.seq ?? 99));

</script>
