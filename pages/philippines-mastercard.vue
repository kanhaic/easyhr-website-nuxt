<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Logo -->
      <div class="pt-6">
        <a href="/">
          <NuxtImg
            class="h-10 w-auto"
            src="/images/logo.webp"
            alt="EasyHR Logo"
            title="EasyHR Logo"
          />
        </a>
      </div>

      <div class="mt-4 sm:mt-6 lg:mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <!-- Signup Form Card -->
        <div class="max-w-md mx-auto w-full lg:max-w-lg">
          <div class="bg-white shadow-lg overflow-hidden sm:rounded-sm">
            <div class="px-3 py-4 sm:px-8 sm:py-6">
              <h1 class="text-lg font-medium text-gray-900 sm:text-2xl mb-8">
                Get 20% Off with Mastercard
              </h1>
              <p class="text-sm text-gray-600 mb-6">
                Exclusive offer for Mastercard users in the Philippines. Sign up now and get 20% discount on your first year subscription.
              </p>
              <form
                @submit.prevent="handleSubmit"
                class="space-y-4 sm:space-y-6"
              >
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      for="firstName"
                      class="block text-sm font-medium text-gray-700"
                      >First Name</label
                    >
                    <input
                      type="text"
                      id="firstName"
                      v-model="form.firstName"
                      required
                      placeholder="Juan"
                      :class="{ 'border-red-500': errors.firstName }"
                      class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <p
                      v-if="errors.firstName"
                      class="mt-1 text-sm text-red-600"
                    >
                      {{ errors.firstName }}
                    </p>
                  </div>
                  <div>
                    <label
                      for="lastName"
                      class="block text-sm font-medium text-gray-700"
                      >Last Name</label
                    >
                    <input
                      type="text"
                      id="lastName"
                      v-model="form.lastName"
                      required
                      placeholder="Dela Cruz"
                      :class="{ 'border-red-500': errors.lastName }"
                      class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <p v-if="errors.lastName" class="mt-1 text-sm text-red-600">
                      {{ errors.lastName }}
                    </p>
                  </div>
                </div>
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                    >Work Email</label
                  >
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                    placeholder="juan.delacruz@company.com"
                    :class="{ 'border-red-500': errors.email }"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <p v-if="errors.email" class="mt-1 text-sm text-red-600">
                    {{ errors.email }}
                  </p>
                </div>
                <div>
                  <label
                    for="phone"
                    class="block text-sm font-medium text-gray-700"
                    >Phone Number</label
                  >
                  <div
                    class="mt-1 relative flex rounded-md shadow-sm border border-gray-300 focus-within:ring-1 focus-within:ring-indigo-500 focus-within:border-indigo-500"
                  >
                    <!-- Fixed Philippines Country Code -->
                    <div class="flex items-center px-3 py-2 border-r border-gray-300 bg-gray-50 rounded-l-md">
                      <span class="mr-2">{{ selectedCountry.flag }}</span>
                      <span class="text-gray-900">{{
                        selectedCountry.code
                      }}</span>
                    </div>

                    <!-- Phone Input -->
                    <input
                      type="tel"
                      id="phone"
                      v-model="form.phone"
                      required
                      placeholder="917 123 4567"
                      maxlength="11"
                      class="flex-1 block w-full px-3 py-2 border-none focus:outline-none bg-white text-gray-900 rounded-r-md"
                      :class="{ 'border-red-500': errors.phone }"
                      @input="
                        $event.target.value = $event.target.value.replace(
                          /[^\d\s]/g,
                          ''
                        )
                      "
                    />
                  </div>

                  <p class="mt-1 text-sm text-gray-500">
                    Format: e.g., 917 123 4567
                  </p>
                  <p v-if="errors.phone" class="mt-1 text-sm text-red-600">
                    {{ errors.phone }}
                  </p>
                </div>
                <div>
                  <label
                    for="company"
                    class="block text-sm font-medium text-gray-700"
                    >Company</label
                  >
                  <input
                    type="text"
                    id="company"
                    v-model="form.company"
                    required
                    placeholder="Company Name"
                    :class="{ 'border-red-500': errors.company }"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <p v-if="errors.company" class="mt-1 text-sm text-red-600">
                    {{ errors.company }}
                  </p>
                </div>
                <div>
                  <label
                    for="empcount"
                    class="block text-sm font-medium text-gray-700"
                    >Number of Employees</label
                  >
                  <select
                    id="empcount"
                    v-model="form.empcount"
                    required
                    :class="{ 'border-red-500': errors.empcount }"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="" disabled selected>
                      Select company size
                    </option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201 to 500</option>
                    <option value="500+">500+</option>
                  </select>
                  <p v-if="errors.empcount" class="mt-1 text-sm text-red-600">
                    {{ errors.empcount }}
                  </p>
                </div>
                <div>
                  <label
                    for="whereheard"
                    class="block text-sm font-medium text-gray-700"
                    >Where did you hear about us?</label
                  >
                  <select
                    id="whereheard"
                    v-model="form.whereheard"
                    required
                    :class="{ 'border-red-500': errors.whereheard }"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="" disabled selected>Where did you hear about us?</option>
                    <option value="Referral">Referral</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Google">Google</option>
                    <option value="Email">Email</option>
                    <option value="Website">Website</option>
                    <option value="Mastercard Offer">Mastercard Offer</option>
                    <option value="Event">Event</option>
                    <option value="Other">Other</option>
                  </select>
                  <p v-if="errors.whereheard" class="mt-1 text-sm text-red-600">
                    {{ errors.whereheard }}
                  </p>
                </div>
                <div>
                  <button
                    type="submit"
                    class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Claim Your 20% Discount
                  </button>
                </div>
              </form>
            </div>
          </div>
          <p class="mt-4 text-xs text-gray-400 text-center">
            By submitting your information, you agree to EasyHR's
            <a
              href="/terms-of-service"
              class="text-blue-700 hover:text-blue-900"
              >Terms of Service</a
            >
            and
            <a href="/privacy-policy" class="text-blue-700 hover:text-blue-900"
              >Privacy Policy</a
            >.
          </p>
        </div>

        <!-- Offer Information and Benefits -->
        <div class="py-12 sm:py-4 lg:mt-0 lg:max-w-lg">
          <!-- Mastercard Offer Banner -->
          <div class="mb-8">
            <div class="bg-gradient-to-r from-red-500 to-red-600 rounded-lg px-6 py-4 text-white">
              <div class="flex items-center mb-4">
                <svg class="w-8 h-8 mr-3" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="24" rx="4" fill="#000"/>
                  <circle cx="14" cy="12" r="7" fill="#EB001B"/>
                  <circle cx="22" cy="12" r="7" fill="#F79E1B"/>
                  <path d="M18 6.5C16.6193 6.5 15.5 7.61929 15.5 9C15.5 10.3807 16.6193 11.5 18 11.5C19.3807 11.5 20.5 10.3807 20.5 9C20.5 7.61929 19.3807 6.5 18 6.5Z" fill="#FF5F00"/>
                </svg>
                <h3 class="text-xl font-bold">Mastercard Special Offer</h3>
              </div>
              <p class="text-lg mb-2">🎉 20% Discount on First Year</p>
              <p class="text-sm opacity-90">Valid for Mastercard holders in the Philippines</p>
              <p class="text-xs opacity-75 mt-1">Offer valid until 31-Dec-2026</p>
            </div>
          </div>

          <!-- Benefits -->
          <div class="mb-8">
            <h3 class="text-lg leading-6 font-medium text-gray-900 mb-6">
              Why Choose EasyHR?
            </h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div class="ml-3">
                  <h4 class="text-sm font-medium text-gray-900">Complete HR Solution</h4>
                  <p class="text-sm text-gray-600">Payroll, attendance, leave management, and more in one platform</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div class="ml-3">
                  <h4 class="text-sm font-medium text-gray-900">Philippines-Ready</h4>
                  <p class="text-sm text-gray-600">Compliant with Philippine labor laws and tax regulations</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div class="ml-3">
                  <h4 class="text-sm font-medium text-gray-900">Cloud-Based & Secure</h4>
                  <p class="text-sm text-gray-600">Access anywhere, anytime with enterprise-grade security</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div class="ml-3">
                  <h4 class="text-sm font-medium text-gray-900">Mobile App Access</h4>
                  <p class="text-sm text-gray-600">Manage HR tasks on-the-go with our user-friendly mobile app</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div class="ml-3">
                  <h4 class="text-sm font-medium text-gray-900">Automated Reporting</h4>
                  <p class="text-sm text-gray-600">Generate comprehensive HR reports with just a few clicks</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div class="ml-3">
                  <h4 class="text-sm font-medium text-gray-900">12/5 Support</h4>
                  <p class="text-sm text-gray-600">Dedicated customer support for Philippine businesses</p>
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

useHead({
  title: "Philippines Mastercard Offer - 20% Off EasyHR",
  meta: [
    {
      name: "description",
      content: "Exclusive 20% discount offer for Mastercard users in the Philippines. Sign up for EasyHR and get discounted HR management software.",
    },
  ],
});

const form = ref({
  firstName: "",
  lastName: "",
  name: "",
  email: "",
  phone: "",
  company: "",
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
  whereheard: "",
});

const errors = ref({});

// Use email validation composable
const { validateBusinessEmail } = useEmailValidation();

// Fixed to Philippines only
const selectedCountry = ref({
  code: "+63", // Fixed to Philippines
  country: "Philippines",
  flag: "🇵🇭",
});

// Set Philippines as fixed country
const setPhilippinesCountry = () => {
  form.value.countryCode = "+63";
};

onMounted(() => {
  setPhilippinesCountry();
});

// Phone validation utility function for Philippines
const isValidPhoneNumber = (phone) => {
  // Remove all non-digit characters
  const cleanPhone = phone.replace(/\D/g, "");

  // Philippine phone number validation
  // Should be 10 digits, starting with 9 (for mobile) or 02 (for landline, but we'll focus on mobile)
  const isValidLength = cleanPhone.length === 10;
  const hasValidStart = cleanPhone.startsWith("9"); // Mobile numbers start with 9

  if (!isValidLength) {
    return { isValid: false, error: "Phone number must be 10 digits" };
  }
  if (!hasValidStart) {
    return {
      isValid: false,
      error: "Mobile number must start with 9",
    };
  }

  return { isValid: true, error: null };
};

// Validation function
const validateForm = () => {
  let isValid = true;
  errors.value = {}; // Reset errors

  // Phone validation
  if (!form.value.phone) {
    errors.value.phone = "Phone number is required";
    isValid = false;
  } else {
    const validation = isValidPhoneNumber(form.value.phone);
    if (!validation.isValid) {
      errors.value.phone = validation.error;
      isValid = false;
    }
  }

  if (!form.value.firstName.trim()) {
    errors.value.firstName = "First name is required";
    isValid = false;
  }

  if (!form.value.lastName.trim()) {
    errors.value.lastName = "Last name is required";
    isValid = false;
  }

  if (!form.value.email.trim()) {
    errors.value.email = "Email is required";
    isValid = false;
  } else {
    const emailValidation = validateBusinessEmail(form.value.email);
    if (!emailValidation.isValid) {
      errors.value.email = emailValidation.error;
      isValid = false;
    }
  }

  if (!form.value.countryCode) {
    errors.value.countryCode = "Country code is required";
    isValid = false;
  }

  if (!form.value.company.trim()) {
    errors.value.company = "Company name is required";
    isValid = false;
  }

  if (!form.value.empcount) {
    errors.value.empcount = "Please select number of employees";
    isValid = false;
  }

  return isValid;
};

const handleSubmit = async () => {
  if (validateForm()) {
    try {
      // Get user information at submission time
      await getUserInfo();

      // Combine selected country code with phone number for display/processing
      const fullPhoneNumber = `${selectedCountry.value.code}${form.value.phone}`;

      // Create submission data with all fields
      const submissionData = {
        ...form.value,
        fullPhoneNumber, // Add the combined phone number
        submittedAt: new Date().toISOString(),
        campaignSource: "philippines-mastercard-offer",
        discountApplied: "20%",
        utmSource: getUtmParams().source,
        utmMedium: getUtmParams().medium,
        utmCampaign: getUtmParams().campaign,
      };

      await $fetch(
        "https://n8n.craftinghr.com/webhook/0b8e46e4-851b-4ec0-889f-071d411fd8c1",
        {
          method: "POST",
          body: submissionData,
        }
      );

      // Reset only the visible form fields
      form.value.firstName = "";
      form.value.lastName = "";
      form.value.email = "";
      form.value.phone = "";
      form.value.company = "";
      form.value.empcount = "";
      form.value.whereheard = "";

      await navigateTo("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
};


// Function to get detailed user information
const getUserInfo = async () => {
  try {
    // Get IP-based information
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();

    // Update form with location data
    form.value.ipAddress = data.ip;
    form.value.city = data.city;
    form.value.state = data.region;
    form.value.country = data.country_name;
    form.value.timezone = data.timezone;
    form.value.isp = data.org;

    // Get browser information
    const userAgent = navigator.userAgent;
    const platform = navigator.userAgentData?.platform || "Unknown";
    const browserInfo = getBrowserInfo(userAgent);

    // Update form with browser/device data
    form.value.userAgent = userAgent;
    form.value.platform = platform;
    form.value.browser = browserInfo.browser;
    form.value.deviceType = getDeviceType();
    form.value.referrer = document.referrer || "Direct";
  } catch (error) {
    console.error("Error fetching user info:", error);
  }
};

// Helper function to get browser information
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

// Helper function to get device type
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

// Helper function to get UTM parameters
const getUtmParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    source: urlParams.get("utm_source") || "",
    medium: urlParams.get("utm_medium") || "",
    campaign: urlParams.get("utm_campaign") || "",
  };
};

// Watch for phone changes
watch(
  () => form.value.phone,
  (newVal) => {
    if (newVal) {
      // Remove any non-digit characters
      let cleaned = newVal.replace(/\D/g, "");

      // Limit to 10 digits
      cleaned = cleaned.slice(0, 10);

      // Format as: 917 123 4567
      if (cleaned.length > 3) {
        cleaned = cleaned.slice(0, 3) + " " + cleaned.slice(3);
      }
      if (cleaned.length > 7) {
        cleaned = cleaned.slice(0, 7) + " " + cleaned.slice(7);
      }

      // Update the form value if it's different
      if (cleaned !== newVal) {
        form.value.phone = cleaned;
      }
    }
  }
);

watch(
  [() => form.value.firstName, () => form.value.lastName],
  ([newFirstName, newLastName]) => {
    // Trim whitespace and concatenate names
    const first = (newFirstName || "").trim();
    const last = (newLastName || "").trim();

    // Update the name field, adding space only if both parts exist
    form.value.name = [first, last].filter(Boolean).join(" ");
  }
);

</script>

