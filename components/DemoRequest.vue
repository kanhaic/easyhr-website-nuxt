<template>
  <div>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Name</label
        >
        <input
          type="text"
          id="name"
          v-model="form.name"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label for="company" class="block text-sm font-medium text-gray-700"
          >Company</label
        >
        <input
          type="text"
          id="company"
          v-model="form.company"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700"
          >Phone (with country code)</label
        >
        <input
          type="tel"
          id="phone"
          v-model="form.phone"
          required
          pattern="^\+[1-9]\d{1,14}$"
          title="Please enter a valid phone number with country code (e.g., +1234567890)"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        <span class="text-xs text-gray-500 mt-1"
          >Format: +[country code][number] (e.g., +1234567890)</span
        >
      </div>
      <div>
        <label for="empcount" class="block text-sm font-medium text-gray-700"
          >Team Size</label
        >
        <select
          id="empcount"
          v-model="form.empcount"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="" disabled selected>Team Size</option>
          <option value="1-10">1-10</option>
          <option value="11-50">11-50</option>
          <option value="51-200">51-200</option>
          <option value="201-500">201-500</option>
          <option value="500+">500+</option>
        </select>
      </div>
      <div>
        <button
          type="submit"
          class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Request Demo
        </button>
      </div>
    </form>
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
  submittedAt: "",
  formType: "demo-request"
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

  } catch (error) {
    console.error('Error fetching user info:', error);
  }
};

const submitForm = async () => {
  form.value.submittedAt = new Date().toISOString();

  
  try {
    await getUserInfo();
    await $fetch(
      "https://n8n.craftinghr.com/webhook/0ffe9532-7100-47b1-bdfd-3368c8899efb",
      {
        method: "POST",
        body: form.value,
      }
    );
    
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
</script>
