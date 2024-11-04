<template>
  <div class="bg-contact-image bg-cover bg-center bg-no-repeat py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none bg-white bg-opacity-85 p-8 rounded-lg shadow-lg">
        <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
            <p class="mt-4 leading-7 text-gray-600">
              We'd love to hear from you! Please use the form below to get in touch with us.
            </p>
          </div>
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
            <div class="rounded-2xl p-10">
              <h3 class="text-base font-semibold leading-7 text-gray-900">Support</h3>
              <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                <div>
                  <dt class="sr-only">Email</dt>
                  <dd><a class="font-semibold text-indigo-600" href="mailto:support@easyhrworld.com">support@easyhrworld.com</a></dd>
                </div>
                <div class="mt-1">
                  <dt class="sr-only">Phone number</dt>
                  <dd><a href="tel:+918454936856" class="hover:underline">+91 84549 36856</a></dd>
                </div>
                <div class="mt-1">
                  <dt class="sr-only">Phone number</dt>
                  <dd><a href="tel:+918433545579" class="hover:underline">+91 84335 45579</a></dd>
                </div>
                <div class="mt-1">
                  <dt class="sr-only">Phone number</dt>
                  <dd><a href="tel:+918454926412" class="hover:underline">+91 84549 26412</a></dd>
                </div>
              </dl>
            </div>
            <div class="rounded-2xl p-10">
              <h3 class="text-base font-semibold leading-7 text-gray-900">Sales</h3>
              <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                <div>
                  <dt class="sr-only">Email</dt>
                  <dd><a class="font-semibold text-indigo-600" href="mailto:sales@easyhrworld.com">sales@easyhrworld.com</a></dd>
                </div>
                <div class="mt-1">
                  <dt class="sr-only">Phone number</dt>
                  <dd><a href="tel:+917304124665" class="hover:underline">+91 73041 24665</a></dd>
                </div>
                <div class="mt-1">
                  <dt class="sr-only">Phone number</dt>
                  <dd><a href="tel:+919930205985" class="hover:underline">+91 99302 05985</a></dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900">Locations</h2>
            <p class="mt-4 leading-7 text-gray-600">
              We are headquartered in Mumbai, India.
            </p>
          </div>
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
            <div class="rounded-2xl p-10">
              <h3 class="text-base font-semibold leading-7 text-gray-900">Mumbai</h3>
              <address class="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                <p>C-319,Kailash Esplanade,</p>
                <p>LBS Marg, Ghatkopar (West),</p>
                <p>Mumbai – 400086</p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-contact-image {
  background-image: url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
}
</style>

<script setup>
useSeoMeta({
  // will be inferred as the lastmod value in the sitemap
  // date in YYYY-MM-DD format
  articleModifiedTime: new Date().toISOString().split("T")[0],
});
</script>
