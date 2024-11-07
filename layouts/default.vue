<template>
  <div>
    <Header />
    <main>
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
