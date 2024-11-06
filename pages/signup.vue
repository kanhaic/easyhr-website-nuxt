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
          />
        </a>
      </div>

      <div class="mt-4 sm:mt-6 lg:mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <!-- Signup Form Card -->
        <div class="max-w-md mx-auto w-full lg:max-w-lg">
          <div class="bg-white shadow-lg overflow-hidden sm:rounded-sm">
            <div class="px-3 py-4 sm:px-8 sm:py-6">
              <h2 class="text-lg font-medium text-gray-900 sm:text-2xl mb-8">
                Get a Free Trial
              </h2>
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
                      placeholder="Rahul"
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
                      placeholder="Sharma"
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
                    placeholder="rahul.sharma@company.com"
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
                    <!-- Country Code Button -->
                    <button
                      type="button"
                      ref="countryButton"
                      @click="toggleDropdown"
                      class="flex items-center px-3 py-2 border-r border-gray-300 bg-gray-50 rounded-l-md"
                    >
                      <span class="mr-2">{{ selectedCountry.flag }}</span>
                      <span class="text-gray-900">{{
                        selectedCountry.code
                      }}</span>
                    </button>

                    <!-- Phone Input -->
                    <input
                      type="tel"
                      id="phone"
                      v-model="form.phone"
                      required
                      placeholder="98765 43210"
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

                  <!-- Country Search Dropdown -->
                  <div
                    v-if="showCountryDropdown"
                    ref="countryDropdown"
                    class="absolute mt-1 w-72 bg-white rounded-md shadow-lg z-50 country-dropdown"
                  >
                    <div class="p-2 border-b">
                      <div class="relative">
                        <input
                          type="text"
                          v-model="countrySearch"
                          placeholder="Search"
                          class="w-full px-3 py-2 rounded-md pl-8 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <div
                          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                        >
                          <svg
                            class="h-4 w-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div class="max-h-60 overflow-auto">
                      <div
                        v-for="country in filteredCountries"
                        :key="country.code"
                        @click="selectCountry(country)"
                        class="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                      >
                        <span class="mr-3">{{ country.flag }}</span>
                        <span class="flex-1">{{ country.country }}</span>
                        <span class="text-gray-500">{{ country.code }}</span>
                      </div>
                    </div>
                  </div>

                  <p class="mt-1 text-sm text-gray-500">
                    Format: e.g., 98765 43210
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
                    >Number of empcount</label
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
                  <button
                    type="submit"
                    class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Get Started
                  </button>
                </div>
                <div class="mt-4 text-center">
                  <p class="text-sm text-gray-600">
                    Already have an account?
                    <a
                      href="#"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Login here
                    </a>
                  </p>
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

        <!-- Testimonials and Logos -->
        <div class="py-12 sm:py-4 lg:mt-0 lg:max-w-lg">
          <!-- Testimonials -->
          <div class="mb-8">
            <h3 class="text-lg leading-6 font-medium text-gray-900 mb-6">
              What our customers say
            </h3>
            <div class="space-y-8">
              <div
                v-for="testimonial in testimonials"
                :key="testimonial.fields.name"
                class="flex space-x-4"
              >
                <div class="flex-shrink-0">
                  <NuxtImg
                    :src="testimonial.fields.profilePicture.fields.file.url"
                    :alt="testimonial.fields.name"
                    class="h-12 w-12 rounded-full"
                    provider="contentful"
                  />
                </div>
                <div>
                  <p class="text-sm text-gray-600 mb-2">
                    {{ testimonial.fields.testimonial }}
                  </p>
                  <div class="text-sm font-medium text-gray-900">
                    {{ testimonial.fields.name }}
                  </div>
                  <div class="text-sm text-gray-500">
                    {{ testimonial.fields.designation }}
                  </div>
                </div>
              </div>
            </div>
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
</template>

<script setup>
import * as contentful from "contentful";

const config = useRuntimeConfig();

const client = contentful.createClient({
  space: config.public.contentful.spaceId,
  accessToken: config.public.contentful.accessToken,
});

const { data, error } = await useAsyncData("testimonials", () =>
  client.getEntries({
    content_type: "testimonials",
    limit: 2,
    order: "sys.createdAt",
  })
);

const testimonials = data.value?.items || [];

definePageMeta({
  layout: false,
});

useHead({
  title: "Sign Up",
  meta: [
    {
      name: "description",
      content: "Sign up for EasyHR",
    },
    { name: "keywords", content: "sign up, easyhr, hr software" },
  ],
});

useSeoMeta({
  articleModifiedTime: new Date().toISOString().split("T")[0],
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
});

const errors = ref({});

const countries = ref([
  // Most Common First
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+1", country: "United States", flag: "🇺🇸" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
  { code: "+86", country: "China", flag: "🇨🇳" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },

  // Asia & Pacific
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+82", country: "South Korea", flag: "🇰🇷" },
  { code: "+852", country: "Hong Kong", flag: "🇭🇰" },
  { code: "+886", country: "Taiwan", flag: "🇹🇼" },
  { code: "+84", country: "Vietnam", flag: "🇻🇳" },
  { code: "+62", country: "Indonesia", flag: "🇮🇩" },
  { code: "+60", country: "Malaysia", flag: "🇲🇾" },
  { code: "+63", country: "Philippines", flag: "🇵🇭" },
  { code: "+66", country: "Thailand", flag: "🇹🇭" },
  { code: "+855", country: "Cambodia", flag: "🇰🇭" },
  { code: "+856", country: "Laos", flag: "🇱🇦" },
  { code: "+95", country: "Myanmar", flag: "🇲🇲" },
  { code: "+880", country: "Bangladesh", flag: "🇧🇩" },
  { code: "+977", country: "Nepal", flag: "🇳🇵" },
  { code: "+94", country: "Sri Lanka", flag: "🇱🇰" },
  { code: "+92", country: "Pakistan", flag: "🇵🇰" },
  { code: "+93", country: "Afghanistan", flag: "🇦🇫" },
  { code: "+64", country: "New Zealand", flag: "🇳🇿" },
  { code: "+675", country: "Papua New Guinea", flag: "🇵🇬" },
  { code: "+679", country: "Fiji", flag: "🇫🇯" },

  // Middle East
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+973", country: "Bahrain", flag: "🇧🇭" },
  { code: "+98", country: "Iran", flag: "🇮🇷" },
  { code: "+964", country: "Iraq", flag: "🇮🇶" },
  { code: "+962", country: "Jordan", flag: "🇯🇴" },
  { code: "+965", country: "Kuwait", flag: "🇰🇼" },
  { code: "+961", country: "Lebanon", flag: "🇱🇧" },
  { code: "+968", country: "Oman", flag: "🇴🇲" },
  { code: "+970", country: "Palestine", flag: "🇵🇸" },
  { code: "+974", country: "Qatar", flag: "🇶🇦" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+963", country: "Syria", flag: "🇸🇾" },
  { code: "+967", country: "Yemen", flag: "🇾🇪" },

  // Europe
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+39", country: "Italy", flag: "🇮🇹" },
  { code: "+34", country: "Spain", flag: "🇪🇸" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱" },
  { code: "+46", country: "Sweden", flag: "🇸🇪" },
  { code: "+47", country: "Norway", flag: "🇳🇴" },
  { code: "+45", country: "Denmark", flag: "🇩🇰" },
  { code: "+358", country: "Finland", flag: "🇫🇮" },
  { code: "+48", country: "Poland", flag: "🇵🇱" },
  { code: "+43", country: "Austria", flag: "🇦🇹" },
  { code: "+41", country: "Switzerland", flag: "🇨🇭" },
  { code: "+32", country: "Belgium", flag: "🇧🇪" },
  { code: "+351", country: "Portugal", flag: "🇵🇹" },
  { code: "+353", country: "Ireland", flag: "🇮🇪" },
  { code: "+30", country: "Greece", flag: "🇬🇷" },
  { code: "+420", country: "Czech Republic", flag: "🇨🇿" },
  { code: "+36", country: "Hungary", flag: "🇭🇺" },
  { code: "+7", country: "Russia", flag: "🇷🇺" },
  { code: "+380", country: "Ukraine", flag: "🇺🇦" },
  { code: "+40", country: "Romania", flag: "🇷🇴" },
  { code: "+359", country: "Bulgaria", flag: "🇧🇬" },
  { code: "+385", country: "Croatia", flag: "🇭🇷" },
  { code: "+381", country: "Serbia", flag: "🇷🇸" },
  { code: "+421", country: "Slovakia", flag: "🇸🇰" },
  { code: "+386", country: "Slovenia", flag: "🇸🇮" },
  { code: "+375", country: "Belarus", flag: "🇧🇾" },
  { code: "+372", country: "Estonia", flag: "🇪" },
  { code: "+371", country: "Latvia", flag: "🇱🇻" },
  { code: "+370", country: "Lithuania", flag: "🇱🇹" },
  { code: "+352", country: "Luxembourg", flag: "🇱🇺" },
  { code: "+356", country: "Malta", flag: "🇲🇹" },
  { code: "+354", country: "Iceland", flag: "🇮🇸" },

  // Africa
  { code: "+20", country: "Egypt", flag: "🇪🇬" },
  { code: "+27", country: "South Africa", flag: "🇿🇦" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬" },
  { code: "+254", country: "Kenya", flag: "🇰🇪" },
  { code: "+255", country: "Tanzania", flag: "🇹🇿" },
  { code: "+256", country: "Uganda", flag: "🇺🇬" },
  { code: "+251", country: "Ethiopia", flag: "🇪🇹" },
  { code: "+212", country: "Morocco", flag: "🇲🇦" },
  { code: "+213", country: "Algeria", flag: "🇩🇿" },
  { code: "+216", country: "Tunisia", flag: "🇹🇳" },
  { code: "+218", country: "Libya", flag: "🇱🇾" },
  { code: "+220", country: "Gambia", flag: "🇬🇲" },
  { code: "+221", country: "Senegal", flag: "🇸🇳" },
  { code: "+233", country: "Ghana", flag: "🇬🇭" },
  { code: "+237", country: "Cameroon", flag: "🇨🇲" },
  { code: "+244", country: "Angola", flag: "🇴" },
  { code: "+250", country: "Rwanda", flag: "🇷🇼" },
  { code: "+258", country: "Mozambique", flag: "🇲🇿" },
  { code: "+260", country: "Zambia", flag: "🇿🇲" },
  { code: "+263", country: "Zimbabwe", flag: "🇿🇼" },
  { code: "+264", country: "Namibia", flag: "🇳🇦" },
  { code: "+265", country: "Malawi", flag: "🇲🇼" },
  { code: "+267", country: "Botswana", flag: "🇧🇼" },
  { code: "+268", country: "Eswatini", flag: "🇸🇿" },

  // Americas
  { code: "+1", country: "Canada", flag: "🇨🇦" },
  { code: "+52", country: "Mexico", flag: "🇲🇽" },
  { code: "+55", country: "Brazil", flag: "🇧🇷" },
  { code: "+54", country: "Argentina", flag: "🇦🇷" },
  { code: "+56", country: "Chile", flag: "🇨🇱" },
  { code: "+57", country: "Colombia", flag: "🇨🇴" },
  { code: "+51", country: "Peru", flag: "🇵🇪" },
  { code: "+58", country: "Venezuela", flag: "🇻🇪" },
  { code: "+591", country: "Bolivia", flag: "🇧🇴" },
  { code: "+593", country: "Ecuador", flag: "🇪🇨" },
  { code: "+595", country: "Paraguay", flag: "🇵🇾" },
  { code: "+598", country: "Uruguay", flag: "🇺🇾" },
  { code: "+502", country: "Guatemala", flag: "🇬🇹" },
  { code: "+503", country: "El Salvador", flag: "🇸🇻" },
  { code: "+504", country: "Honduras", flag: "🇭🇳" },
  { code: "+505", country: "Nicaragua", flag: "🇳🇮" },
  { code: "+506", country: "Costa Rica", flag: "🇨🇷" },
  { code: "+507", country: "Panama", flag: "🇵🇦" },
  { code: "+1", country: "Jamaica", flag: "🇯🇲" },
  { code: "+1", country: "Trinidad and Tobago", flag: "🇹🇹" },
  { code: "+1", country: "Dominican Republic", flag: "🇩🇴" },
  { code: "+53", country: "Cuba", flag: "🇨🇺" },
]);

const countrySearch = ref("");
const showCountryDropdown = ref(false);
const selectedCountry = ref({
  code: "+91", // Default to India initially
  country: "India",
  flag: "🇮🇳",
});

const getUserCountry = async () => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();

    // Get the country calling code from the API response
    const countryCode = `+${data.country_calling_code.replace("+", "")}`;

    // Find the matching country in our list
    const country = countries.value.find((c) => c.code === countryCode);
    if (country) {
      selectedCountry.value = country;
      form.value.countryCode = country.code;
    }
  } catch (error) {
    console.error("Error fetching location:", error);
    // Fallback to India if location detection fails
    const defaultCountry = countries.value.find((c) => c.code === "+91");
    selectedCountry.value = defaultCountry;
    form.value.countryCode = "+91";
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  getUserCountry();
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

// Phone validation utility function
const isValidPhoneNumber = (phone) => {
  // Remove all non-digit characters
  const cleanPhone = phone.replace(/\D/g, "");

  // Basic validation rules
  const isValidLength = cleanPhone.length === 10;
  const hasValidStart = /^[6-9]/.test(cleanPhone); // Indian numbers start with 6-9
  const isNotRepeating = !/^(\d)\1+$/.test(cleanPhone); // Prevent 1111111111
  const isNotSequential = !/^(0123456789|1234567890|9876543210)$/.test(
    cleanPhone
  ); // Prevent sequential numbers

  if (!isValidLength)
    return { isValid: false, error: "Phone number must be 10 digits" };
  if (!hasValidStart)
    return {
      isValid: false,
      error: "Phone number must start with 6, 7, 8, or 9",
    };
  if (!isNotRepeating)
    return { isValid: false, error: "Invalid phone number (repeating digits)" };
  if (!isNotSequential)
    return {
      isValid: false,
      error: "Invalid phone number (sequential digits)",
    };

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
  } else if (!/^\S+@\S+\.\S+$/.test(form.value.email)) {
    errors.email = "Invalid email format";
    isValid = false;
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
    errors.value.empcount = "Please select number of empcount";
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

      await navigateTo("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
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
  // Add more logos as needed
];

const filteredCountries = computed(() => {
  const search = countrySearch.value.toLowerCase();
  return countries.value.filter(
    (country) =>
      country.country.toLowerCase().includes(search) ||
      country.code.includes(search)
  );
});

const selectCountry = (country) => {
  selectedCountry.value = country;
  form.value.countryCode = country.code;
  showCountryDropdown.value = false;
  countrySearch.value = "";
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

      // Format as: 98765 43210
      if (cleaned.length > 5) {
        cleaned = cleaned.slice(0, 5) + " " + cleaned.slice(5);
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

// Add refs for the dropdown and button
const countryDropdown = ref(null);
const countryButton = ref(null);

// Update the click outside handler
const handleClickOutside = (event) => {
  if (
    !countryButton.value?.contains(event.target) &&
    !countryDropdown.value?.contains(event.target)
  ) {
    showCountryDropdown.value = false;
  }
};

// Add toggle function
const toggleDropdown = () => {
  showCountryDropdown.value = !showCountryDropdown.value;
};
</script>

<style scoped>
.country-dropdown {
  scrollbar-width: thin;
  scrollbar-color: #4f46e5 #f3f4f6;
}

.country-dropdown::-webkit-scrollbar {
  width: 6px;
}

.country-dropdown::-webkit-scrollbar-track {
  background: #f3f4f6;
}

.country-dropdown::-webkit-scrollbar-thumb {
  background-color: #4f46e5;
  border-radius: 3px;
}
</style>
