<template>
  <div class="bg-white">
    <header
      class="fixed inset-x-0 top-0 z-50 bg-white shadow-sm lg:static lg:shadow-none"
    >
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-4 lg:p-6"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">EasyHR</span>
            <NuxtImg
              src="/images/logo.webp"
              alt="EasyHR Logo"
              sizes="sm:158px 79px"
            />
          </a>
        </div>
        <div class="flex items-center gap-4 lg:hidden">
          <a
            href="#"
            class="text-sm font-semibold leading-6 px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200"
          >
            Free Trial
          </a>
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup class="hidden lg:flex lg:gap-x-12">
          <Popover class="relative">
            <PopoverButton
              class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
            >
              Products
              <ChevronDownIcon
                class="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel
                class="absolute left-1/4 z-10 mt-5 flex w-screen max-w-max -translate-x-1/4 px-4"
              >
                <div
                  class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl"
                >
                  <div
                    class="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2"
                  >
                    <div
                      v-for="item in solutions"
                      :key="item.name"
                      class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                    >
                      <div
                        class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg"
                        :class="item.iconBgColor ?? 'bg-gray-50'"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          class="w-6 h-6"
                          :class="item.iconColor ?? 'text-gray-600'"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            :d="item.menuIcon"
                          />
                        </svg>
                      </div>
                      <div>
                        <a
                          :href="item.href"
                          class="font-semibold text-gray-900"
                        >
                          {{ item.name }}
                          <span class="absolute inset-0" />
                        </a>
                        <p class="mt-1 text-gray-600">{{ item.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <Popover class="relative">
            <PopoverButton
              class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
            >
              Industries
              <ChevronDownIcon
                class="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel
                class="absolute left-1/4 z-10 mt-5 flex w-screen max-w-max -translate-x-1/4 px-4"
              >
                <div
                  class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl"
                >
                  <div
                    class="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2"
                  >
                    <div
                      v-for="item in industries"
                      :key="item.name"
                      class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                    >
                      <div
                        class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg"
                        :class="item.iconBgColor ?? 'bg-gray-50'"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          class="w-6 h-6"
                          :class="item.iconColor ?? 'text-gray-600'"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            :d="item.menuIcon"
                          />
                        </svg>
                      </div>
                      <div>
                        <a
                          :href="item.href"
                          class="font-semibold text-gray-900"
                        >
                          {{ item.name }}
                          <span class="absolute inset-0" />
                        </a>
                        <p class="mt-1 text-gray-600">{{ item.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <Popover class="relative">
            <PopoverButton
              class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
            >
              Resources
              <ChevronDownIcon
                class="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel
                class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4"
              >
                <div
                  class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl"
                >
                  <div class="p-4">
                    <div class="grid grid-cols-2 gap-x-6 gap-y-1">
                      <div
                        v-for="(item, index) in resources"
                        :key="index"
                        class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                      >
                        <div>
                          <a
                            :href="item.href"
                            class="font-semibold text-gray-900"
                          >
                            {{ item.name }}
                            <span class="absolute inset-0" />
                          </a>
                          <p class="mt-1 text-gray-600">
                            {{ item.description }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <a
            href="/pricing"
            class="text-sm font-semibold leading-6 text-gray-900"
            >Pricing</a
          >
          <Popover class="relative">
            <PopoverButton
              class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
            >
              Company
              <ChevronDownIcon
                class="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel
                class="absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5"
              >
                <div
                  v-for="item in company"
                  :key="item.name"
                  class="relative rounded-lg p-4 hover:bg-gray-50"
                >
                  <a
                    :href="item.href"
                    class="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    {{ item.name }}
                    <span class="absolute inset-0" />
                  </a>
                  <p class="mt-1 text-sm leading-6 text-gray-600">
                    {{ item.description }}
                  </p>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </PopoverGroup>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            class="text-sm font-semibold leading-6 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200"
          >
            Free Trial
          </a>
        </div>
      </nav>
      <Dialog
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-10" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="p-6">
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <NuxtImg
                  src="/images/logo.webp"
                  alt="EasyHR Logo"
                  sizes="158px 79px"
                />
              </a>
              <button
                type="button"
                class="-m-2.5 rounded-md p-2.5 text-gray-700"
                @click="mobileMenuOpen = false"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <Popover class="relative">
                    <PopoverButton
                      class="flex w-full items-center justify-between rounded-lg py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Products
                      <ChevronDownIcon
                        class="h-5 w-5 flex-none"
                        aria-hidden="true"
                      />
                    </PopoverButton>

                    <transition
                      enter-active-class="transition ease-out duration-200"
                      enter-from-class="opacity-0 translate-y-1"
                      enter-to-class="opacity-100 translate-y-0"
                      leave-active-class="transition ease-in duration-150"
                      leave-from-class="opacity-100 translate-y-0"
                      leave-to-class="opacity-0 translate-y-1"
                    >
                      <PopoverPanel class="mt-2 space-y-2">
                        <a
                          v-for="item in solutions"
                          :key="item.name"
                          :href="item.href"
                          class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {{ item.name }}
                        </a>
                      </PopoverPanel>
                    </transition>
                  </Popover>

                  <Popover class="relative">
                    <PopoverButton
                      class="flex w-full items-center justify-between rounded-lg py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Industries
                      <ChevronDownIcon
                        class="h-5 w-5 flex-none"
                        aria-hidden="true"
                      />
                    </PopoverButton>

                    <transition
                      enter-active-class="transition ease-out duration-200"
                      enter-from-class="opacity-0 translate-y-1"
                      enter-to-class="opacity-100 translate-y-0"
                      leave-active-class="transition ease-in duration-150"
                      leave-from-class="opacity-100 translate-y-0"
                      leave-to-class="opacity-0 translate-y-1"
                    >
                      <PopoverPanel class="mt-2 space-y-2">
                        <a
                          v-for="item in industries"
                          :key="item.name"
                          :href="item.href"
                          class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {{ item.name }}
                        </a>
                      </PopoverPanel>
                    </transition>
                  </Popover>

                  <Popover class="relative">
                    <PopoverButton
                      class="flex w-full items-center justify-between rounded-lg py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Resources
                      <ChevronDownIcon
                        class="h-5 w-5 flex-none"
                        aria-hidden="true"
                      />
                    </PopoverButton>

                    <transition
                      enter-active-class="transition ease-out duration-200"
                      enter-from-class="opacity-0 translate-y-1"
                      enter-to-class="opacity-100 translate-y-0"
                      leave-active-class="transition ease-in duration-150"
                      leave-from-class="opacity-100 translate-y-0"
                      leave-to-class="opacity-0 translate-y-1"
                    >
                      <PopoverPanel class="mt-2 space-y-2">
                        <a
                          v-for="item in resources"
                          :key="item.name"
                          :href="item.href"
                          class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {{ item.name }}
                        </a>
                      </PopoverPanel>
                    </transition>
                  </Popover>

                  <a
                    href="/pricing"
                    class="block rounded-lg py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >Pricing</a
                  >
                  <Popover class="relative">
                    <PopoverButton
                      class="flex w-full items-center justify-between rounded-lg py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Company
                      <ChevronDownIcon
                        class="h-5 w-5 flex-none"
                        aria-hidden="true"
                      />
                    </PopoverButton>

                    <transition
                      enter-active-class="transition ease-out duration-200"
                      enter-from-class="opacity-0 translate-y-1"
                      enter-to-class="opacity-100 translate-y-0"
                      leave-active-class="transition ease-in duration-150"
                      leave-from-class="opacity-100 translate-y-0"
                      leave-to-class="opacity-0 translate-y-1"
                    >
                      <PopoverPanel class="mt-2 space-y-2">
                        <a
                          v-for="item in company"
                          :key="item.name"
                          :href="item.href"
                          class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {{ item.name }}
                        </a>
                      </PopoverPanel>
                    </transition>
                  </Popover>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </div>
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
    order: "sys.createdAt",
  })
);

const productMenus = (
  data.value?.items.filter((item) => item.fields.type === "product") || []
)
  .slice(0, 10)
  .sort((a, b) => (a.fields.seq || 99) - (b.fields.seq || 99));

const industryMenus = (
  data.value?.items.filter((item) => item.fields.type === "industry") || []
  )
  .slice(0, 10)
  .sort((a, b) => (a.fields.seq || 99) - (b.fields.seq || 99));

const industries = industryMenus.map((menu) => ({
  name: menu.fields.menuTitle,
  description: menu.fields.menuDescription,
  href: `/${menu.fields.slug}`,
  menuIcon: menu.fields.menuIcon,
  iconColor: menu.fields.iconColor,
  iconBgColor: menu.fields.iconBgColor,
}));

const solutions = productMenus.map((menu) => ({
  name: menu.fields.menuTitle,
  description: menu.fields.menuDescription,
  href: `/${menu.fields.slug}`,
  menuIcon: menu.fields.menuIcon,
  iconColor: menu.fields.iconColor,
  iconBgColor: menu.fields.iconBgColor,
}));

import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
} from "@heroicons/vue/20/solid";


const resources = [
  {
    name: "Blog",
    href: "/blog",
    description:
      "Read about the latest updates to our product. Be updated with the latest HR news.",
  },
  {
    name: "HR Emails",
    href: "/hr-emails",
    description:
      "Use HR Emails to communicate important information to your employees.",
  },
  {
    name: "HR Checklist",
    href: "/hr-checklist",
    description: "Access HR Checklist to manage your HR tasks efficiently.",
  },
  {
    name: "Case Studies",
    href: "/case-studies",
    description:
      "Learn how our customers are using our products to achieve their goals",
  },
  {
    name: "HR Glossary",
    href: "/hr-glossary",
    description:
      "Learn and stay updated with the latest HR terms and definitions.",
  },
  {
    name: "OKRs",
    href: "/okrs",
    description: "Learn about Objectives and Key Results methodology",
  },
  {
    name: "Policy Templates",
    href: "/policy-templates",
    description:
      "Learn about HR policy templates. Access ready-to-use HR policy templates.",
  },
  {
    name: "Statutory Compliance",
    href: "/statutory-compliance",
    description: "Stay up-to-date with HR compliance requirements",
  },
  {
    name: "HR Letters",
    href: "/hr-letters",
    description: "Access templates for common HR letters and documents",
  },
  {
    name: "Job Description",
    href: "/job-description",
    description: "Find templates and guidelines for creating job descriptions",
  },
];

const company = [
  {
    name: "About us",
    href: "/company/about",
    description:
      "Learn more about our company values and mission to empower others",
  },
  {
    name: "Careers",
    href: "/careers",
    description:
      "Looking for you next career opportunity? See all of our open positions",
  },
  {
    name: "Contact us",
    href: "/company/contact",
    description:
      "Get in touch with our dedicated support team or reach out on our community forums",
  },
];

const mobileMenuOpen = ref(false);
</script>

<style scoped>
@media (max-width: 1023px) {
  header {
    position: sticky;
    top: 0;
  }
}
</style>
