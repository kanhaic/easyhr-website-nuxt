<template>
  <div class="min-h-screen flex flex-col">
    <Header class="sticky top-0 z-10 bg-white" />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
    <SmallChat />
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
