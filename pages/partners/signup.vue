<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <!-- Logo and Navigation -->
      <div class="mb-8">
        <a href="/" class="inline-block">
          <NuxtImg
            class="h-10 w-auto"
            src="/images/logo.webp"
            alt="EasyHR Logo"
          />
        </a>
      </div>

      <div class="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
        <!-- Form Section -->
        <div class="lg:col-span-1">
          <div class="bg-white shadow-md border border-gray-100 rounded-lg p-8">
            <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
              Partner with EasyHR
            </h1>
            <p class="mt-4 text-gray-600">
              Join our partner network and grow your business with EasyHR's
              comprehensive HRMS solution.
            </p>

            <form @submit.prevent="handleSubmit" class="mt-8 space-y-6">
              <!-- Name Fields -->
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label
                    for="firstName"
                    class="block text-sm font-medium text-gray-700"
                    >First Name *</label
                  >
                  <input
                    type="text"
                    id="firstName"
                    v-model="form.firstName"
                    required
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label
                    for="lastName"
                    class="block text-sm font-medium text-gray-700"
                    >Last Name *</label
                  >
                  <input
                    type="text"
                    id="lastName"
                    v-model="form.lastName"
                    required
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <!-- Email Field -->
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                  >Work Email *</label
                >
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <!-- Phone Field -->
              <div>
                <label
                  for="phone"
                  class="block text-sm font-medium text-gray-700"
                  >Phone Number *</label
                >
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <!-- Partnership Type -->
              <div>
                <label
                  for="partnerType"
                  class="block text-sm font-medium text-gray-700"
                  >Partnership Type *</label
                >
                <select
                  id="partnerType"
                  v-model="form.partnerType"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="" disabled>Select a partnership type</option>
                  <option value="referral">Referral Partner</option>
                  <option value="reseller">Reseller Partner</option>
                </select>
              </div>

              <!-- Submit Button -->
              <div>
                <button
                  type="submit"
                  class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Information Section -->
        <div class="mt-12 lg:mt-0 lg:col-span-1">
          <div class="space-y-12">
            <!-- Partner Benefits -->
            <div>
              <h2 class="text-xl font-semibold text-gray-900">
                Why Partner with Us?
              </h2>
              <ul class="mt-4 space-y-4">
                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p class="ml-3 text-gray-600">
                    Attractive commission structure with recurring revenue
                  </p>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p class="ml-3 text-gray-600">
                    Comprehensive training and support
                  </p>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p class="ml-3 text-gray-600">
                    Access to marketing resources and sales tools
                  </p>
                </li>
              </ul>
            </div>

            <!-- Logos Grid -->
            <div class="mt-8">
              <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
                Trusted by leading companies
              </h3>
              <div class="grid grid-cols-3">
                <div
                  v-for="logo in logos"
                  :key="logo.alt"
                  class="border border-gray-200 p-4 flex items-center justify-center"
                >
                  <NuxtImg
                    :src="logo.src"
                    :alt="logo.alt"
                    class="max-h-16 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  partnerType: "",
  ipAddress: "",
  city: "",
  state: "",
  country: "",
  timezone: "",
  isp: "",
  userAgent: "",
  platform: "",
  browser: "",
  deviceType: "",
  referrer: "",
  utmSource: "",
  utmMedium: "",
  utmCampaign: "",
  submittedAt: "",
  formType: "partner-signup",
});

const getBrowserInfo = (userAgent) => {
  const browsers = {
    chrome: /chrome/i,
    safari: /safari/i,
    firefox: /firefox/i,
    opera: /opera/i,
    edge: /edge/i,
    ie: /msie|trident/i,
  };

  for (const [browser, regex] of Object.entries(browsers)) {
    if (regex.test(userAgent)) {
      return { browser };
    }
  }
  return { browser: "Unknown" };
};

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "Tablet";
  }
  if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "Mobile";
  }
  return "Desktop";
};

const getUtmParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    source: urlParams.get("utm_source") || "",
    medium: urlParams.get("utm_medium") || "",
    campaign: urlParams.get("utm_campaign") || "",
  };
};

const getUserInfo = async () => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();

    form.value.ipAddress = data.ip;
    form.value.city = data.city;
    form.value.state = data.region;
    form.value.country = data.country_name;
    form.value.timezone = data.timezone;
    form.value.isp = data.org;

    const userAgent = navigator.userAgent;
    const platform = navigator.userAgentData?.platform || "Unknown";
    const browserInfo = getBrowserInfo(userAgent);

    form.value.userAgent = userAgent;
    form.value.platform = platform;
    form.value.browser = browserInfo.browser;
    form.value.deviceType = getDeviceType();
    form.value.referrer = document.referrer || "Direct";

    const utmParams = getUtmParams();
    form.value.utmSource = utmParams.source;
    form.value.utmMedium = utmParams.medium;
    form.value.utmCampaign = utmParams.campaign;
  } catch (error) {
    console.error("Error fetching user info:", error);
  }
};

const handleSubmit = async () => {
  form.value.submittedAt = new Date().toISOString();

  try {
    await getUserInfo();
    await $fetch(
      "https://n8n.craftinghr.com/webhook/78f6a43d-9711-4b06-9431-eac3c7921dcf",
      {
        method: "POST",
        body: form.value,
      }
    );

    form.value.firstName = "";
    form.value.lastName = "";
    form.value.email = "";
    form.value.phone = "";
    form.value.partnerType = "";

    await navigateTo("/partners/thank-you");
  } catch (error) {
    console.error("Submission error:", error);
  }
};

const logos = [
  { src: "/images/logos/9.webp", alt: "Company 9" },
  { src: "/images/logos/2.webp", alt: "Company 2" },
  { src: "/images/logos/3.webp", alt: "Company 3" },
  { src: "/images/logos/4.webp", alt: "Company 4" },
  { src: "/images/logos/5.webp", alt: "Company 5" },
  { src: "/images/logos/6.webp", alt: "Company 6" },
  { src: "/images/logos/7.webp", alt: "Company 7" },
  { src: "/images/logos/8.webp", alt: "Company 8" },
  { src: "/images/logos/1.webp", alt: "Company 1" },
];

useHead({
  title: "Partner Program - EasyHR",
  meta: [
    {
      name: "description",
      content:
        "Join EasyHR's partner program and grow your business with the leading HR management solution.",
    },
  ],
});

useSeoMeta({
  articleModifiedTime: new Date().toISOString().split("T")[0],
});
</script>
