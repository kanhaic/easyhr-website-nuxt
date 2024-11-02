<template>
<div class="w-full min-h-screen flex flex-col md:flex-row">
  <!-- First column -->
  <div class="w-full md:w-1/3 bg-[#FCD34D] min-h-[50vh] md:h-screen">
    <div class="h-full p-6 md:p-6 flex flex-col justify-between">
      <!-- Logo -->
      <div class="flex justify-center items-center my-8">
        <NuxtImg 
          src="/images/logo.webp"
          alt="Company Logo" 
          class="w-32 h-auto"
        />
      </div>
      <div class="space-y-4 text-center">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          {{ title }}
        </h1>
        <p class="text-base md:text-base lg:text-lg text-white">
          {{ subtitle }}
        </p>
      </div>
      <div class="flex-1 flex items-center justify-center overflow-hidden py-8">
        <img 
          :src="image"
          alt="Kid sitting and learning" 
          class="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  </div>

  <!-- Second column -->
  <div class="w-full md:w-1/3 flex flex-col">
    <div class="h-[33vh] md:flex-1 bg-[#06B6D4] p-6 flex items-center justify-center">
      <span class="text-3xl md:text-4xl text-white font-bold">{{ box1 }}</span>
    </div>
    <div class="h-[33vh] md:flex-1 bg-[#A855F7] p-6 flex items-center justify-center">
      <span class="text-3xl md:text-4xl text-white font-bold">{{ box2 }}</span>
    </div>
    <div class="h-[33vh] md:flex-1 bg-[#7E22CE] p-6 flex items-center justify-center">
      <span class="text-3xl md:text-4xl text-white font-bold">{{ box3 }}</span>
    </div>
  </div>

  <!-- Third column -->
  <div class="w-full md:w-1/3 flex flex-col">
    <div class="h-[33vh] md:flex-1 bg-[#FB7185] p-6 flex items-center justify-center">
      <span class="text-3xl md:text-4xl text-white font-bold">{{ box4 }}</span>
    </div>
    <div class="h-[33vh] md:flex-1 bg-[#F59E0B] p-6 flex items-center justify-center">
      <span class="text-3xl md:text-4xl text-white font-bold">{{ box5 }}</span>
    </div>
    <div class="h-[33vh] md:flex-1 bg-[#FCD34D] p-6 flex items-center justify-center">
      <span class="text-3xl md:text-4xl text-white font-bold">{{ box6 }}</span>
    </div>
  </div>
</div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Welcome to Our World'
  },
  subtitle: {
    type: String,
    default: 'Where Learning is Fun'
  },
  image: {
    type: String,
    default: '/images/sitting-kid.png'
  },
  box1: {
    type: String,
    default: 'Box 1'
  },
  box2: {
    type: String,
    default: 'Box 2'
  },
  box3: {
    type: String,
    default: 'Box 3'
  },
  box4: {
    type: String,
    default: 'Box 4'
  },
  box5: {
    type: String,
    default: 'Box 5'
  },
  box6: {
    type: String,
    default: 'Box 6'
  }
})
</script>
