<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Logo -->
      <div class="pt-6">
        <a href="/">
          <NuxtImg
            provider="ipx"
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
                  <input
                    type="tel"
                    id="phone"
                    v-model="form.phone"
                    required
                    placeholder="+91 98765 43210"
                    :class="{ 'border-red-500': errors.phone }"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <p class="mt-1 text-sm text-gray-500">
                    Format: e.g., +91 98765 43210
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
                      href="/login"
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
            <a href="/terms" class="text-blue-700 hover:text-blue-900"
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
                  <img
                    :src="testimonial.fields.profilePicture.fields.file.url"
                    :alt="testimonial.fields.name"
                    class="h-12 w-12 rounded-full"
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
                  provider="ipx"
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

const { data, error } = await useAsyncData("main-landing", () =>
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
  email: "",
  phone: "",
  company: "",
  empcount: "",
});

const errors = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  empcount: "",
});

const validateForm = () => {
  let isValid = true;

  // Reset errors
  Object.keys(errors).forEach((key) => (errors[key] = ""));

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

  if (!form.value.phone.trim()) {
    errors.value.phone = "Phone number is required";
    isValid = false;
  } else if (!/^\+\d{1,4}\s?\d{6,14}$/.test(form.value.phone)) {
    errors.value.phone =
      "Invalid phone number format. Please use +[country code] [number]";
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
    // Form is valid, proceed with submission

    form.value.name = `${form.value.firstName} ${form.value.lastName}`;

    // Here you would typically send the form data to your backend
    await $fetch(
      "https://n8n.craftinghr.com/webhook/0ffe9532-7100-47b1-bdfd-3368c8899efb",
      {
        method: "POST",
        body: form.value,
      }
    );
    // Reset the form after submission
    form.value = {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      empcount: "",
    };
  }
};

const logos = [
  { src: "/images/logos/1.webp", alt: "Company 1" },
  { src: "/images/logos/2.webp", alt: "Company 2" },
  { src: "/images/logos/3.webp", alt: "Company 3" },
  { src: "/images/logos/4.webp", alt: "Company 4" },
  { src: "/images/logos/5.webp", alt: "Company 5" },
  { src: "/images/logos/6.webp", alt: "Company 6" },
  { src: "/images/logos/7.webp", alt: "Company 7" },
  { src: "/images/logos/8.webp", alt: "Company 8" },
  { src: "/images/logos/9.webp", alt: "Company 9" },
  // Add more logos as needed
];
</script>
