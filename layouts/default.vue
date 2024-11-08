<template>
  <div class="min-h-screen flex flex-col">
    <div class="sticky top-0 z-10 bg-white">
      <Header />
    </div>
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
useHead({
  script: [
    {
      src: "https://embed.small.chat/T179A90J0GVC000RNZ.js",
      async: true,
      defer: true,
      type: "text/javascript",
      tagPosition: "bodyClose",
      tagPriority: "low",
    },
  ],
});
</script>
