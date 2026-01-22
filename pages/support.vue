<template>
  <div class="container mx-auto px-4 py-12">
    <div class="flex flex-col md:flex-row gap-x-12 gap-y-6">
      <!-- Left side with image and title -->
      <div class="md:w-1/3 flex justify-end items-start">
        <div class="w-64 h-64 relative">
          <NuxtImg
            src="/images/customer-support.webp"
            alt="Support Team"
            title="Support Team"
            class="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <!-- Right side cards -->
      <div class="md:w-2/3 space-y-6">
        <div class="space-y-4 max-w-2xl">
          <h1 class="text-4xl font-bold mb-4">Multi-Channel Support Options</h1>
          <p class="text-xl text-gray-500 mb-6">
            We offer multiple channels to support you. Please choose the most
          </p>
        </div>
        <!-- Email Card -->
        <div class="bg-white rounded-lg shadow-md p-10 flex items-start max-w-lg">
          <div
            class="flex items-center justify-center bg-blue-100 rounded-full p-3 mr-4"
          >
            <EnvelopeIcon class="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h2 class="text-xl font-semibold mb-4 flex items-center">
              <span class="text-2xl font-semibold">Email</span>
            </h2>
            <p class="mb-4">Get in touch with our support team via email.</p>
            <a
              :href="`mailto:support@${config.public.domain}`"
              class="text-blue-600 hover:underline"
              >support@{{ config.public.domain }}</a
            >
          </div>
        </div>

        <!-- Live Chat Card -->
        <div class="bg-white rounded-lg shadow-md p-10 flex items-start max-w-lg">
          <div
            class="flex items-center justify-center bg-blue-100 rounded-full p-3 mr-4"
          >
            <ChatBubbleBottomCenterTextIcon class="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h2 class="text-xl font-semibold mb-4 flex items-center">
              <span class="text-2xl font-semibold">Live Chat</span>
            </h2>
            <p class="mb-4">Chat with our support representatives in real-time.</p>
          </div>
        </div>

        <!-- Phone Call Card -->
        <div class="bg-white rounded-lg shadow-md p-10 flex items-start max-w-lg">
          <div
            class="flex items-center justify-center bg-blue-100 rounded-full p-3 mr-4"
          >
            <PhoneIcon class="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h2 class="text-xl font-semibold mb-4 flex items-center">
              <span class="text-2xl font-semibold">Phone Call</span>
            </h2>
            <p class="mb-4">Speak directly with our support team over the phone.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  PhoneIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
} from "@heroicons/vue/24/outline";

const config = useRuntimeConfig();
</script>

