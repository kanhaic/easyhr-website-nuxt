<template>
  <div
    class="min-h-screen  flex flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <!-- Success Icon -->
      <div
        class="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100"
      >
        <svg
          class="h-12 w-12 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <!-- Thank You Message -->
      <div class="mt-8 text-center">
        <h1 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Thank You for Your Interest!
        </h1>
        <p class="mt-4 text-xl text-gray-600">
          We've received your submission successfully.
        </p>
      </div>

      <!-- What's Next Section -->
      <div class="mt-12 bg-white py-8 px-4 shadow-lg border border-gray-200 sm:rounded-lg sm:px-10 ">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">What's Next?</h2>

        <div class="space-y-6">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div
                class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100"
              >
                <svg
                  class="h-6 w-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-medium text-gray-900">
                Review Your Information
              </h3>
              <p class="mt-2 text-gray-600">
                Our team will review your submission and prepare a personalized
                demo.
              </p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div
                class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100"
              >
                <svg
                  class="h-6 w-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-medium text-gray-900">Quick Response</h3>
              <p class="mt-2 text-gray-600">
                We'll contact you within 24 hours to schedule your demo at a
                convenient time.
              </p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div
                class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100"
              >
                <svg
                  class="h-6 w-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2"
                  />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-medium text-gray-900">
                Personalized Demo
              </h3>
              <p class="mt-2 text-gray-600">
                Get a customized walkthrough of our platform tailored to your
                needs.
              </p>
            </div>
          </div>
        </div>

        <!-- Immediate Contact Section -->
        <div class="mt-8 pt-8 border-t border-gray-200">
          <div class="text-start">
            <h2 class="text-xl font-semibold text-gray-900">
              Need to speak to someone right away?
            </h2>
            <p class="mt-4 text-gray-900 font-medium">Please call:</p>
            
            <div class="mt-2 space-y-3">
              <div class="flex flex-col items-start">
                <p class="font-medium text-gray-900">Pravin Prajapati</p>
                <a 
                  href="tel:+917304124665" 
                  class="mt-1 text-indigo-600 hover:text-indigo-500 flex items-start"
                >
                  <svg 
                    class="h-5 w-5 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2" 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +91 73041 24665
                </a>
              </div>
              
              <div class="flex flex-col items-start">
                <p class="font-medium text-gray-900">Shripal Shah</p>
                <a 
                  href="tel:+919930205985" 
                  class="mt-1 text-indigo-600 hover:text-indigo-500 flex items-center"
                >
                  <svg 
                    class="h-5 w-5 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2" 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +91 99302 05985
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Resources -->
      <div class="mt-8 text-center">
        <h2 class="text-lg font-medium text-gray-900">
          Meanwhile, explore our resources
        </h2>
        <div class="mt-4 flex justify-center space-x-4">
          <a
            href="/blog"
            class="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Blog
          </a>
          <span class="text-gray-300">|</span>
          <a
            href="/case-studies"
            class="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Case Studies
          </a>
          <span class="text-gray-300">|</span>
          <a
            href="/resources"
            class="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Resources
          </a>
        </div>
      </div>

      <!-- Return to Home -->
      <div class="mt-8 text-center">
        <a
          href="/"
          class="inline-flex items-center text-indigo-600 hover:text-indigo-500"
        >
          <svg
            class="h-5 w-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Return to Homepage
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// Add meta tags for SEO
useHead({
  title: "Thank You - CraftingHR",
  meta: [
    {
      name: "description",
      content:
        "Thank you for your interest in CraftingHR. Our team will contact you shortly to schedule your personalized demo.",
    },
    { name: "robots", content: "noindex" }, // Prevent indexing of thank you page
  ],
});

// Optional: Add tracking or analytics code here
onMounted(() => {
  // Example: Track page view or conversion
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('event', 'conversion', {'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL'});
  // }
});
</script>

<style scoped>
/* Add any custom styles here */
</style>
