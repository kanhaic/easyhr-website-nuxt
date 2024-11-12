<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 px-6 py-4 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">EasyHR Logo</span>
          <img
            src="/images/logo.webp"
            alt="EasyHR"
            format="webp"
            title="EasyHR Logo"
            height="40"
            width="100"
          />
        </a>
      </div>
      <div class="flex items-center gap-4 lg:hidden">
        <a
          href="/login"
          class="text-sm font-semibold leading-6 px-3 py-2 rounded-md text-gray-900 hover:bg-gray-50"
        >
          Login
        </a>
        <a
          href="/signup?utm_source=header"
          class="text-sm font-semibold leading-6 px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200"
        >
          Free Trial
        </a>
        <button
          type="button"
          class="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden gap-x-4 lg:flex lg:gap-x-8">
        <Popover class="relative">
          <PopoverButton
            class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
          >
            Products
            <ChevronDownIcon
              class="h-4 w-4 flex-none text-gray-400 lg:h-5 lg:w-5"
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
              class="absolute -left-8 z-10 mt-5 flex w-screen max-w-max px-4"
            >
              <div
                class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-2xl"
              >
                <div class="p-4">
                  <div class="grid grid-cols-2 gap-x-4 gap-y-1">
                    <div
                      v-for="item in products"
                      :key="item.name"
                      class="group relative flex gap-x-4 rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div
                        class="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-lg"
                        :class="item.iconBgColor ?? 'bg-blue-50'"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          class="w-5 h-5"
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
                          class="font-semibold text-gray-900 text-sm"
                        >
                          {{ item.name }}
                          <span class="absolute inset-0" />
                        </a>
                        <p class="mt-1 text-gray-600 text-xs">
                          {{ item.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="px-4 py-4 flex justify-center border-t border-gray-100 bg-gray-100"
                >
                  <div class="flex-1 flex justify-center">
                    <a
                      :href="callsToAction[0].href"
                      class="flex items-center text-sm font-semibold text-gray-900"
                    >
                      <component
                        :is="callsToAction[0].icon"
                        class="h-5 w-5 flex-none text-gray-400 mr-2"
                        aria-hidden="true"
                      />
                      {{ callsToAction[0].name }}
                    </a>
                  </div>
                  <div class="flex-1 flex justify-center bg-gray-100">
                    <a
                      :href="callsToAction[1].href"
                      class="flex items-center text-sm font-semibold text-gray-900"
                    >
                      <component
                        :is="callsToAction[1].icon"
                        class="h-5 w-5 flex-none text-gray-400 mr-2"
                        aria-hidden="true"
                      />
                      {{ callsToAction[1].name }}
                    </a>
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
              class="h-4 w-4 flex-none text-gray-400 lg:h-5 lg:w-5"
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
                class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-2xl"
              >
                <div
                  class="grid grid-cols-1 gap-x-4 gap-y-1 p-3 lg:grid-cols-2"
                >
                  <div
                    v-for="item in industries"
                    :key="item.name"
                    class="group relative flex gap-x-4 rounded-lg p-3 hover:bg-gray-50"
                  >
                    <div
                      class="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-lg"
                      :class="item.iconBgColor ?? 'bg-gray-50'"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        class="w-5 h-5"
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
                      <a :href="item.href" class="font-semibold text-gray-900 text-sm">
                        {{ item.name }}
                        <span class="absolute inset-0" />
                      </a>
                      <p class="mt-1 text-gray-600 text-xs">{{ item.description }}</p>
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
              class="h-4 w-4 flex-none text-gray-400 lg:h-5 lg:w-5"
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
                class="mx-auto w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-2xl"
              >
                <div
                  class="grid grid-cols-1 gap-x-4 gap-y-1 p-3 lg:grid-cols-2"
                >
                  <div
                    v-for="item in resources"
                    :key="item.name"
                    class="group relative flex gap-x-4 rounded-lg p-3 hover:bg-gray-50"
                  >
                    <div
                      class="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-lg"
                      :class="item.iconBgColor"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                        :class="item.iconColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          :d="item.iconPath"
                        />
                      </svg>
                    </div>
                    <div>
                      <a :href="item.href" class="font-semibold text-gray-900 text-sm">
                        {{ item.name }}
                        <span class="absolute inset-0" />
                      </a>
                      <p class="mt-1 text-gray-600 text-xs">
                        {{ item.description }}
                      </p>
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
              class="h-4 w-4 flex-none text-gray-400 lg:h-5 lg:w-5"
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
              class="absolute right-0 sm:-right-8 top-full z-10 mt-3 w-[480px] rounded-3xl bg-white p-3 shadow-lg ring-1 ring-gray-900/5"
            >
              <div class="relative">
                <div
                  v-for="item in company"
                  :key="item.name"
                  class="group relative flex gap-x-4 rounded-lg p-3 hover:bg-gray-50"
                >
                  <div
                    class="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-lg"
                    :class="item.iconBgColor"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                      :class="item.iconColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        :d="item.iconPath"
                      />
                    </svg>
                  </div>
                  <div>
                    <a
                      :href="item.href"
                      class="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </a>
                    <p class="mt-1 text-xs leading-6 text-gray-600">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end gap-x-4">
        <a
          href="/login"
          class="text-sm font-semibold leading-6 px-4 py-2 rounded-md"
        >
          Login
        </a>
        <a
          href="/signup?utm_source=header"
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
      <div class="fixed inset-0 top-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="p-6">
          <div class="flex items-center justify-between">
            <a href="/" class="-m-1.5 p-1.5">
              <span class="sr-only">EasyHR</span>
              <img class="h-10 w-auto" src="/images/logo.webp" alt="EasyHR Logo" title="EasyHR" height="40" width="139" />
            </a>
            <button
              type="button"
              class="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-md p-2.5 text-gray-700"
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
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 translate-y-1"
                  >
                    <PopoverPanel class="mt-2 space-y-2">
                      <div
                        v-for="item in products"
                        :key="item.name"
                        :href="item.href"
                        class="flex items-center gap-x-4 rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        <div
                          class="flex h-8 w-8 flex-none items-center justify-center rounded-lg"
                          :class="item.iconBgColor"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                            :class="item.iconColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              :d="item.menuIcon"
                            />
                          </svg>
                        </div>
                        <a :href="item.href">{{ item.name }}</a>
                      </div>
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
                      <div
                        v-for="item in industries"
                        :key="item.name"
                        class="flex items-center gap-x-4 rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        <div
                          class="flex h-8 w-8 flex-none items-center justify-center rounded-lg"
                          :class="item.iconBgColor"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                            :class="item.iconColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              :d="item.menuIcon"
                            />
                          </svg>
                        </div>
                        <a :href="item.href">{{ item.name }}</a>
                      </div>
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
                      <div
                        v-for="item in resources"
                        :key="item.name"
                        class="flex items-center gap-x-4 rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        <div
                          class="flex h-8 w-8 flex-none items-center justify-center rounded-lg"
                          :class="item.iconBgColor"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                            :class="item.iconColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              :d="item.iconPath"
                            />
                          </svg>
                        </div>
                        <a :href="item.href">{{ item.name }}</a>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>

                <!-- Add Features Menu -->
                <a
                  href="/features"
                  class="block rounded-lg py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>

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
                      <div
                        v-for="item in company"
                        :key="item.name"
                        class="flex items-center gap-x-4 rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        <div
                          class="flex h-8 w-8 flex-none items-center justify-center rounded-lg"
                          :class="item.iconBgColor"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                            :class="item.iconColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              :d="item.iconPath"
                            />
                          </svg>
                        </div>
                        <a :href="item.href">{{ item.name }}</a>
                      </div>
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
</template>

<script setup>
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  Squares2X2Icon,
  PhoneIcon,
} from "@heroicons/vue/20/solid";
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

const callsToAction = [
  { name: "Features", href: "/features", icon: Squares2X2Icon },
  {
    name: "Contact sales",
    href: "/signup?utm_source=contact-sales",
    icon: PhoneIcon,
  },
];

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

const products = productMenus.map((menu) => ({
  name: menu.fields.menuTitle,
  description: menu.fields.menuDescription,
  href: `/${menu.fields.slug}`,
  menuIcon: menu.fields.menuIcon,
  iconColor: menu.fields.iconColor,
  iconBgColor: menu.fields.iconBgColor,
}));

const resources = [
  {
    name: "Blog",
    href: "/blog",
    description:
      "Read about the latest updates to our product. Be updated with the latest HR news.",
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    iconPath:
      "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z",
  },
  {
    name: "HR Emails",
    href: "/hr-emails",
    description:
      "Use HR Emails to communicate important information to your employees.",
    iconBgColor: "bg-green-100",
    iconColor: "text-green-600",
    iconPath:
      "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75",
  },
  {
    name: "HR Checklist",
    href: "/hr-checklist",
    description: "Access HR Checklist to manage your HR tasks efficiently.",
    iconBgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    iconPath:
      "M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z",
  },
  // {
  //   name: "Case Studies",
  //   href: "/case-studies",
  //   description: "Learn how our customers are using our products to achieve their goals",
  //   iconBgColor: "bg-orange-100",
  //   iconColor: "text-orange-600",
  //   iconPath: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75a2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
  // },
  {
    name: "HR Glossary",
    href: "/hr-glossary",
    description:
      "Learn and stay updated with the latest HR terms and definitions.",
    iconBgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
    iconPath:
      "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
  },
  {
    name: "OKRs",
    href: "/okrs",
    description: "Learn about Objectives and Key Results methodology",
    iconBgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    iconPath:
      "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605",
  },
  {
    name: "Policy Templates",
    href: "/policy-templates",
    description:
      "Learn about HR policy templates. Access ready-to-use HR policy templates.",
    iconBgColor: "bg-teal-100",
    iconColor: "text-teal-600",
    iconPath:
      "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
  },
  // {
  //   name: "Statutory Compliance",
  //   href: "/statutory-compliance",
  //   description: "Stay up-to-date with HR compliance requirements",
  //   iconBgColor: "bg-orange-100",
  //   iconColor: "text-orange-600",
  //   iconPath: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
  // },
  {
    name: "HR Letters",
    href: "/hr-letters",
    description: "Access templates for common HR letters and documents",
    iconBgColor: "bg-red-100",
    iconColor: "text-red-600",
    iconPath:
      "M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z",
  },
  {
    name: "Job Description",
    href: "/job-description",
    description: "Find templates and guidelines for creating job descriptions",
    iconBgColor: "bg-indigo-100",
    iconColor: "text-indigo-600",
    iconPath:
      "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z",
  },
];

const company = [
  {
    name: "About us",
    href: "/company/about",
    description:
      "Learn more about our company values and mission to empower others",
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    iconPath:
      "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
  },
  {
    name: "Careers",
    href: "/careers",
    description:
      "Looking for you next career opportunity? See all of our open positions",
    iconBgColor: "bg-green-100",
    iconColor: "text-green-600",
    iconPath:
      "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z",
  },
  {
    name: "Contact us",
    href: "/company/contact",
    description:
      "Get in touch with our dedicated support team or reach out on our community forums",
    iconBgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    iconPath:
      "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
  },
];

const mobileMenuOpen = ref(false);
</script>
