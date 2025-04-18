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
              :href="cta2Link"
              :title="cta2Title"
              class="inline-flex items-center justify-center px-6 py-4 font-semibold text-indigo-600 transition-all duration-200 bg-transparent border-2 border-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white focus:bg-indigo-600 focus:text-white"
              role="button"
            >
              {{ cta2Title }}
            </a>
          </div>

          <p class="mt-5 text-gray-600">
            Already joined us?
            <a
              href="#"
              title=""
              class="transition-all duration-200 hover:underline hover:text-gray-400 hover:font-semibold text-blue-600"
              >Log in</a
            >
          </p>
        </div>

        <div
          class="bg-gray-50 p-6 rounded-lg shadow-lg max-w-md mx-auto w-full border border-gray-200"
        >
          <h2 class="text-2xl font-semibold mb-6 text-center">Request Demo</h2>
          <form @submit.prevent="submitForm" class="space-y-2">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-500"
                >Name</label
              >
              <input
                type="text"
                id="name"
                name="name"
                v-model="form.name"
                autocomplete="name"
                placeholder="Your Name"
                required
                class="bg-gray-50 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label
                for="company"
                class="block text-sm font-medium text-gray-500"
                >Company</label
              >
              <input
                type="text"
                id="company"
                name="company"
                autocomplete="organization"
                placeholder="Your Company Name"
                v-model="form.company"
                required
                class="bg-gray-50 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-500"
                >Phone</label
              >
              <input
                type="tel"
                id="phone"
                name="phone"
                v-model="form.phone"
                autocomplete="tel"
                placeholder="+919876543210"
                pattern="^\+[0-9]{1,15}$"
                required
                class="bg-gray-50 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <p class="text-sm text-gray-500">
                Please include the country code, e.g. +919876543210
              </p>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-500"
                >Email</label
              >
              <input
                type="email"
                id="email"
                name="email"
                v-model="form.email"
                autocomplete="email"
                placeholder="example@workemail.com"
                required
                class="bg-gray-50 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label
                for="empcount"
                class="block text-sm font-medium text-gray-500"
                >Team Size</label
              >
              <select
                id="empcount"
                name="empcount"
                v-model="form.empcount"
                class="bg-gray-50 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="" disabled>Select Team Size</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="500+">500+</option>
              </select>
            </div>
            <div class="pt-4">
              <button
                type="submit"
                class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
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
    default: "/signup?utm_source=hero&utm_medium=getting-started",
  },
  cta2Title: {
    type: String,
    default: "Free Trial",
  },
  cta2Link: {
    type: String,
    default: "/signup?utm_source=hero&utm_medium=free-trial",
  },
});

const form = ref({
  name: "",
  company: "",
  phone: "",
  email: "",
  empcount: "",
});

const submitForm = async () => {
  // Handle form submission here
  await $fetch(
    "https://n8n.craftinghr.com/webhook/0b8e46e4-851b-4ec0-889f-071d411fd8c1",
    {
      method: "POST",
      body: form.value,
    }
  );

  form.value = { name: "", company: "", email: "", phone: "", empcount: "" };

  await navigateTo("/thank-you");
};
</script>
