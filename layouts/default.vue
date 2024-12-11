<template>
  <div class="min-h-screen flex flex-col">
    <Header class="sticky top-0 z-10 bg-white" />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
    <Script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-RKFHSKFF92");
    </Script>
  </div>
</template>
