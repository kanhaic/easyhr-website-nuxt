<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <Hero1
      :top-tag="heroSection.topTag"
      :title="heroSection.title"
      :subtitle="heroSection.subtitle"
      :hero-image="heroSection.heroImage"
      :cta1-title="heroSection.cta1Title"
      :cta1-link="heroSection.cta1Link"
    />

    <!-- Choose Program Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Choose Your Partnership Program
        </h2>
        <p class="mt-4 text-lg leading-6 text-gray-500">
          Select the partnership model that best aligns with your business goals
          and expertise.
        </p>
      </div>
    </div>

    <!-- Partner Types Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div class="grid gap-8 lg:grid-cols-2">
        <!-- Referral Partners -->
        <div
          class="flex flex-col rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div class="flex-1 bg-yellow-50 p-8 border border-yellow-100">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <NuxtImg
                  src="/images/referal-icon.png"
                  alt="Referral Partners"
                  class="w-12 h-12"
                  width="48"
                  height="48"
                />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">
                Referral Partners
              </h3>
            </div>
            <p class="mt-4 text-lg text-gray-500">
              Join our referral program and earn attractive commissions by
              recommending EasyHR to your network. Perfect for consultants,
              influencers, and industry professionals.
            </p>
            <div class="mt-6">
              <NuxtLink
                to="/partner-program/referral"
                class="inline-flex items-center text-cyan-600 hover:text-cyan-500"
              >
                Learn more
                <svg
                  class="ml-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Reseller Partners -->
        <div
          class="flex flex-col rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div class="flex-1 bg-cyan-50 p-8 border border-cyan-100">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <NuxtImg
                  src="/images/reseller-icon.png"
                  alt="Reseller Partners"
                  class="w-12 h-12"
                  width="48"
                  height="48"
                />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">
                Reseller Partners
              </h3>
            </div>
            <p class="mt-4 text-lg text-gray-500">
              Become an authorized reseller of EasyHR and grow your business by
              offering our comprehensive HRMS solution to your clients.
            </p>
            <div class="mt-6">
              <NuxtLink
                to="/partner-program/reseller"
                class="inline-flex items-center text-cyan-600 hover:text-cyan-500"
              >
                Learn more
                <svg
                  class="ml-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Why Partner With Us Section -->
      <div class="mt-32">
        <h2 class="text-3xl font-bold text-center text-gray-900">
          Why partner with EasyHR?
        </h2>
        <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <!-- Premium HRMS Card -->
          <div
            class="text-center p-6 rounded-xl shadow-md border border-gray-100 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div class="mx-auto h-12 w-12 text-indigo-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </div>
            <h3 class="mt-6 text-lg font-medium text-gray-900">Premium HRMS</h3>
            <p class="mt-2 text-base text-gray-500">
              A world-class product loved by companies of all sizes.
            </p>
          </div>

          <!-- Attractive Commissions Card -->
          <div
            class="text-center p-6 rounded-xl shadow-md border border-gray-100 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div class="mx-auto h-12 w-12 text-indigo-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="mt-6 text-lg font-medium text-gray-900">
              Attractive Commissions
            </h3>
            <p class="mt-2 text-base text-gray-500">
              Earn competitive commissions on every successful referral.
            </p>
          </div>

          <!-- Partner Training Card -->
          <div
            class="text-center p-6 rounded-xl shadow-md border border-gray-100 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div class="mx-auto h-12 w-12 text-indigo-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </div>
            <h3 class="mt-6 text-lg font-medium text-gray-900">
              Partner Training
            </h3>
            <p class="mt-2 text-base text-gray-500">
              Comprehensive training and support to ensure your success.
            </p>
          </div>

          <!-- Dedicated Support Card -->
          <div
            class="text-center p-6 rounded-xl shadow-md border border-gray-100 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div class="mx-auto h-12 w-12 text-indigo-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
            </div>
            <h3 class="mt-6 text-lg font-medium text-gray-900">
              Dedicated Support
            </h3>
            <p class="mt-2 text-base text-gray-500">
              Get priority support and resources to grow your business.
            </p>
          </div>
        </div>
      </div>

      <!-- Add Logos -->
      <LogoSection :logos="logos" class="mt-8 sm:mt-16 lg:mt-32" />

      <!-- CTA Section -->
      <div class="mt-32 text-center">
        <h2 class="text-3xl font-bold text-gray-900">Ready to grow with us?</h2>
        <p class="mt-4 text-lg text-gray-500">
          Join our partner network and be part of our success story.
        </p>
        <div class="mt-8">
          <a
            href="/partner-program"
            class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700"
          >
            Become a Partner
          </a>
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

const { data, error } = await useAsyncData("partners-landing", () =>
  client.getEntries({
    content_type: "landingPage",
    "fields.type": "main",
    "fields.slug": "partners",
    limit: 1,
  })
);

const landingPage = data.value?.items[0].fields || {};

// console.log(landingPage);

const heroSection = {
  topTag: landingPage?.topTag,
  title: landingPage?.title,
  subtitle: landingPage?.subtitle,
  heroImage: landingPage?.heroImage?.fields?.file?.url,
  cta1Title: landingPage?.cta1Title,
  cta1Link: landingPage?.cta1Link,
};

const logos = landingPage?.logos?.map((logo) => ({
  src: logo.fields.file.url,
  alt: logo.fields.title,
  provider: "contentful",
}));

useHead({
  title: landingPage?.seoTitle || "Partner Program - EasyHR",
  meta: [
    {
      name: "description",
      content:
        landingPage?.seoDescription ||
        "Join EasyHR's partner program to earn attractive commissions and grow your business.",
    },
    {
      name: "keywords",
      content:
        landingPage?.seoKeywords ||
        "partner program, referral program, reseller program, EasyHR, HRMS, HRMS solution, HRMS software, HRMS provider, HRMS partner, HRMS reseller, HRMS referral, HRMS commission, HRMS training, HRMS support",
    },
  ],
});
</script>
