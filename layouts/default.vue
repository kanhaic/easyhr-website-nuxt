<template>
  <div class="min-h-screen flex flex-col">
    <Header class="sticky top-0 z-10 bg-white" />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>
