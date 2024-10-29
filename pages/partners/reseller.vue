<template>
  <div class="bg-white">
    <Hero1 
      title="Reseller Program"
      subtitle="Partner with EasyHR to expand your portfolio and grow your business!"
      heroImage="/images/reseller-icon.png"
      heroImageProvider="ipx"
      cta1-title="Become a Reseller"
      cta1-link="/partners/signup"
    />

    <!-- Who's it for section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-3xl font-bold text-center mb-12">Perfect For</h2>
      <div class="grid gap-8 md:grid-cols-3">
        <div class="text-center p-6 rounded-lg shadow-md bg-blue-50">
          <h3 class="text-xl font-semibold mb-4">Software Resellers</h3>
          <p class="text-gray-600">
            Add a comprehensive HRMS solution to your portfolio and create new revenue streams through attractive margins and recurring revenue.
          </p>
        </div>
        <div class="text-center p-6 rounded-lg shadow-md bg-purple-50">
          <h3 class="text-xl font-semibold mb-4">IT Solution Providers</h3>
          <p class="text-gray-600">
            Expand your service offerings with a cloud-based HR solution that complements your existing technology stack.
          </p>
        </div>
        <div class="text-center p-6 rounded-lg shadow-md bg-green-50">
          <h3 class="text-xl font-semibold mb-4">Business Consultants</h3>
          <p class="text-gray-600">
            Offer your clients a complete HR management solution while building a profitable reseller business.
          </p>
        </div>
      </div>
    </div>

    <!-- How it works section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <h2 class="text-3xl font-bold text-center mb-12">Partnership Journey</h2>
      <div class="grid gap-8 md:grid-cols-3">
        <div class="text-center">
          <div class="bg-white p-6 rounded-lg shadow-md h-full">
            <h3 class="text-xl font-semibold mb-4">1. Apply & Onboard</h3>
            <p class="text-gray-600">
              Complete our reseller application process and receive comprehensive product training and certification.
            </p>
          </div>
        </div>
        <div class="text-center">
          <div class="bg-white p-6 rounded-lg shadow-md h-full">
            <h3 class="text-xl font-semibold mb-4">2. Sell & Deploy</h3>
            <p class="text-gray-600">
              Market and sell EasyHR to your clients with our sales support and implementation assistance.
            </p>
          </div>
        </div>
        <div class="text-center">
          <div class="bg-white p-6 rounded-lg shadow-md h-full">
            <h3 class="text-xl font-semibold mb-4">3. Grow & Earn</h3>
            <p class="text-gray-600">
              Enjoy high profit margins, recurring revenue, and growth incentives as you expand your customer base.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Benefits section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-3xl font-bold text-center mb-12">Reseller Benefits</h2>
      <div class="grid gap-8 md:grid-cols-4">
        <div class="text-center p-6 shadow-md border border-gray-100 rounded-lg">
          <h3 class="text-xl font-semibold mb-4">High Margins</h3>
          <p class="text-gray-600">
            Earn up to 30% margins on licenses with additional implementation revenue opportunities.
          </p>
        </div>
        <div class="text-center p-6 shadow-md border border-gray-100 rounded-lg">
          <h3 class="text-xl font-semibold mb-4">Sales Support</h3>
          <p class="text-gray-600">
            Get dedicated sales training, demo environment, and joint sales assistance.
          </p>
        </div>
        <div class="text-center p-6 shadow-md border border-gray-100 rounded-lg">
          <h3 class="text-xl font-semibold mb-4">Technical Resources</h3>
          <p class="text-gray-600">
            Access implementation tools, API documentation, and technical support.
          </p>
        </div>
        <div class="text-center p-6 shadow-md border border-gray-100 rounded-lg">
          <h3 class="text-xl font-semibold mb-4">Partner Portal</h3>
          <p class="text-gray-600">
            Manage leads, track deals, and access sales & marketing resources.
          </p>
        </div>
      </div>
    </div>

    <!-- Trusted Companies section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <h2 class="text-2xl font-semibold text-center mb-8">Our Technology Partners</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        <div v-for="logo in logos" :key="logo.alt" class="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
          <NuxtImg
            :src="logo.src"
            :alt="logo.alt"
            class="max-h-12 w-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const logos = [
  { src: "/images/logos/1.webp", alt: "Company 1" },
  { src: "/images/logos/2.webp", alt: "Company 2" },
  { src: "/images/logos/3.webp", alt: "Company 3" },
  { src: "/images/logos/4.webp", alt: "Company 4" },
  { src: "/images/logos/5.webp", alt: "Company 5" },
  { src: "/images/logos/6.webp", alt: "Company 6" },
];
</script>