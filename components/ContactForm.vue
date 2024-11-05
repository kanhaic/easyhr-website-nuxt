<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
        Get Started !
      </h2>
      <p class="text-lg text-gray-500 text-center mb-8">
        Schedule a demo with <span class="text-blue-600 font-semibold">EasyHR</span> to experience ease of use and how an enterprise payroll software could be simplified.
      </p>
      <form @submit.prevent="submitForm" class="space-y-6">
        <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 md:grid-cols-5 md:gap-x-8">
          <div class="sm:col-span-1 md:col-span-1">
            <div class="relative">
              <label for="name" class="sr-only">Name</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  v-model="form.name"
                  required
                  placeholder="Name :"
                  class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div class="sm:col-span-1 md:col-span-1">
            <div class="relative">
              <label for="company" class="sr-only">Company Name</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1v2h-1v-2zm1-2V9h-1v2h1zm-5-2v2H7V9h6zM5 5v2H4V5h1zm0 4H4v2h1V9zm0 4H4v2h1v-2zm0 4H4v2h1v-2z" clip-rule="evenodd" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="company"
                  id="company"
                  v-model="form.company"
                  required
                  placeholder="Company :"
                  class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div class="sm:col-span-1 md:col-span-1">
            <div class="relative">
              <label for="email" class="sr-only">Email</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  v-model="form.email"
                  required
                  placeholder="Your email :"
                  class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div class="sm:col-span-1 md:col-span-1">
            <div class="relative">
              <label for="phone" class="sr-only">Phone Number</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  v-model="form.phone"
                  required
                  placeholder="Phone:"
                  class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div class="sm:col-span-2 md:col-span-1">
            <label for="empcount" class="sr-only">Number of Employees</label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </span>
              <select
                id="empcount"
                name="empcount"
                v-model="form.empcount"
                required
                class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="" disabled selected class="text-gray-400">Number of Employees</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="500+">500+</option>
              </select>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <button
            type="submit"
            class="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Schedule a Demo
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const form = ref({
  name: "",
  company: "",
  email: "",
  phone: "",
  empcount: "",
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
  submittedAt: ""
});

const getBrowserInfo = (userAgent) => {
  const browsers = {
    chrome: /chrome/i,
    safari: /safari/i,
    firefox: /firefox/i,
    opera: /opera/i,
    edge: /edge/i,
    ie: /msie|trident/i
  };

  for (const [browser, regex] of Object.entries(browsers)) {
    if (regex.test(userAgent)) {
      return { browser };
    }
  }
  return { browser: 'Unknown' };
};

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'Tablet';
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'Mobile';
  }
  return 'Desktop';
};

const getUtmParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    source: urlParams.get('utm_source') || '',
    medium: urlParams.get('utm_medium') || '',
    campaign: urlParams.get('utm_campaign') || ''
  };
};

const getUserInfo = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();

    form.value.ipAddress = data.ip;
    form.value.city = data.city;
    form.value.state = data.region;
    form.value.country = data.country_name;
    form.value.timezone = data.timezone;
    form.value.isp = data.org;

    const userAgent = navigator.userAgent;
    const platform = navigator.userAgentData?.platform || 'Unknown';
    const browserInfo = getBrowserInfo(userAgent);

    form.value.userAgent = userAgent;
    form.value.platform = platform;
    form.value.browser = browserInfo.browser;
    form.value.deviceType = getDeviceType();
    form.value.referrer = document.referrer || 'Direct';

    const utmParams = getUtmParams();
    form.value.utmSource = utmParams.source;
    form.value.utmMedium = utmParams.medium;
    form.value.utmCampaign = utmParams.campaign;
    form.value.formType = "getting-started";

  } catch (error) {
    console.error('Error fetching user info:', error);
  }
};

const submitForm = async () => {
  form.value.submittedAt = new Date().toISOString();
  
  try {
    await $fetch("https://n8n.craftinghr.com/webhook-test/0ffe9532-7100-47b1-bdfd-3368c8899efb", {
      method: "POST",
      body: form.value,
    });
    
    form.value.name = "";
    form.value.company = "";
    form.value.email = "";
    form.value.phone = "";
    form.value.empcount = "";

    await navigateTo("/thank-you");
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

onMounted(async () => {
  await getUserInfo();
});
</script>
