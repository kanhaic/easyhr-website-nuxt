<template>
  <div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">EasyHR</span>
            <NuxtImg src="/images/logo.webp" alt="EasyHR Logo" width="158" height="79" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" v-show="!mobileMenuOpen" />
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
                        class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                      >
                        <component
                          :is="item.icon"
                          class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
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
                  <!-- <div class="bg-gray-50 px-8 py-6">
                    <div class="flex items-center gap-x-3">
                      <h3 class="text-sm font-semibold leading-6 text-gray-900">
                        Enterprise
                      </h3>
                      <p
                        class="rounded-full bg-indigo-600/10 px-2.5 py-1.5 text-xs font-semibold text-indigo-600"
                      >
                        New
                      </p>
                    </div>
                    <p class="mt-2 text-sm leading-6 text-gray-600">
                      Empower your entire team with even more advanced tools.
                    </p>
                  </div> -->
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
                class="absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5"
              >
                <div
                  v-for="item in resources"
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

          <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
            >Pricing</a
          >
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
            >Blog</a
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
          <a href="#" class="text-sm font-semibold leading-6 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200">
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
                <NuxtImg src="/images/logo.webp" alt="EasyHR Logo" width="158" height="79" />
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
                  <a
                    v-for="item in solutions"
                    :key="item.name"
                    :href="item.href"
                    class="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <div
                      class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                    >
                      <component
                        :is="item.icon"
                        class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    {{ item.name }}
                  </a>
                </div>
                <div class="space-y-2 py-6">
                  <a
                    href="#"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >Features</a
                  >
                  <a
                    href="#"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >Marketplace</a
                  >

                  <a
                    v-for="item in company"
                    :key="item.name"
                    :href="item.href"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >{{ item.name }}</a
                  >
                </div>
                <div class="py-6">
                  <a
                    href="#"
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >Log in</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="sticky bottom-0 grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 text-center"
          >
            <a
              v-for="item in callsToAction"
              :key="item.name"
              :href="item.href"
              class="p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
              >{{ item.name }}</a
            >
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  PresentationChartBarIcon,
  Bars3Icon,
  UsersIcon,
  ClockIcon,
  UserPlusIcon,
  BanknotesIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftEllipsisIcon,
  DocumentChartBarIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/vue/20/solid";

const solutions = [
  {
    name: "HR Software",
    description: "HR software that helps you manage your workforce",
    href: "#",
    icon: UsersIcon,
  },
  {
    name: "Payroll Software",
    description: "Automate your payroll and focus on your business",
    href: "#",
    icon: BanknotesIcon,
  },
  {
    name: "Time & Attendance",
    description: "Track your employees' time and attendance easily",
    href: "#",
    icon: ClockIcon,
  },
  {
    name: "Performance Management",
    description: "Manage your employees' performance with ease",
    href: "#",
    icon: PresentationChartBarIcon,
  },
  {
    name: "Hiring & Onboarding",
    description: "Delight your new hires with a seamless onboarding experience",
    href: "#",
    icon: UserPlusIcon,
  },
  {
    name: "Travel & Expense",
    description: "Manage your employees' travel and expenses easily",
    href: "#",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Helpdesk",
    description: "Resolve your employees' issues quickly and efficiently",
    href: "#",
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    name: "Reports",
    description: "Edit, manage and create newly informed decisions",
    href: "#",
    icon: DocumentChartBarIcon,
  },
];

const resources = [
  {
    name: "Blog",
    href: "#",
    description: "Read about the latest updates to our product",
  },
  {
    name: "Support",
    href: "#",
    description:
      "Get all of your questions answered in our forums or contact support",
  },
  {
    name: "Help center",
    href: "#",
    description:
      "Get all of your questions answered in our forums or contact support",
  },
  {
    name: "Guides",
    href: "#",
    description: "Learn how to maximize our platform to get the most out of it",
  },
  {
    name: "Events",
    href: "#",
    description:
      "See what meet-ups and other events we might be planning near you",
  },
  {
    name: "Security",
    href: "#",
    description:
      "Understand how we take your privacy seriously and keep your data secure",
  },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];
const company = [
  {
    name: "About us",
    href: "#",
    description:
      "Learn more about our company values and mission to empower others",
  },
  {
    name: "Careers",
    href: "#",
    description:
      "Looking for you next career opportunity? See all of our open positions",
  },
  {
    name: "Support",
    href: "#",
    description:
      "Get in touch with our dedicated support team or reach out on our community forums",
  },
];

const mobileMenuOpen = ref(false);
</script>
