<template>
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-2xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold mb-4">Delete Your Account</h1>
        <p class="text-xl text-gray-500">
          We're sorry to see you go. This action cannot be undone.
        </p>
      </div>

      <!-- Warning Card -->
      <div class="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
        <div class="flex items-start">
          <ExclamationTriangleIcon class="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h3 class="text-lg font-semibold text-red-800 mb-2">Important Notice</h3>
            <ul class="text-red-700 space-y-1">
              <li>• All your data will be permanently deleted</li>
              <li>• This action cannot be reversed</li>
              <li>• You will lose access to all services</li>
              <li>• Your account and all associated data will be removed within 30 days</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Deletion Form -->
      <div class="bg-white rounded-lg shadow-md p-8">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Email Input -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="your@email.com"
            />
          </div>

          <!-- Reason Dropdown -->
          <div>
            <label for="reason" class="block text-sm font-medium text-gray-700 mb-2">
              Reason for deletion
            </label>
            <select
              id="reason"
              v-model="form.reason"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Please select a reason</option>
              <option value="no-longer-needed">No longer need the service</option>
              <option value="found-alternative">Found an alternative service</option>
              <option value="too-expensive">Too expensive</option>
              <option value="missing-features">Missing features</option>
              <option value="technical-issues">Technical issues</option>
              <option value="privacy-concerns">Privacy concerns</option>
              <option value="other">Other</option>
            </select>
          </div>

          <!-- Additional Comments -->
          <div>
            <label for="comments" class="block text-sm font-medium text-gray-700 mb-2">
              Additional comments (optional)
            </label>
            <textarea
              id="comments"
              v-model="form.comments"
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tell us more about your experience..."
            ></textarea>
          </div>

          <!-- Confirmation Checkbox -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <label class="flex items-start">
              <input
                v-model="form.confirmed"
                type="checkbox"
                required
                class="mt-1 mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span class="text-sm text-gray-700">
                I understand that deleting my account is permanent and cannot be undone. 
                All my data will be permanently removed and I will lose access to all services.
              </span>
            </label>
          </div>

          <!-- Submit Button -->
          <div class="flex gap-4">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {{ isSubmitting ? 'Processing...' : 'Delete My Account' }}
            </button>
            <NuxtLink
              to="/"
              class="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 text-center transition-colors"
            >
              Cancel
            </NuxtLink>
          </div>
        </form>
      </div>

      <!-- Success Message -->
      <div v-if="showSuccess" class="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
        <div class="flex items-center">
          <CheckCircleIcon class="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
          <div>
            <h3 class="text-lg font-semibold text-green-800 mb-1">Deletion Request Received</h3>
            <p class="text-green-700">
              Your account deletion request has been received. You will receive a confirmation email shortly, and your account will be permanently deleted within 30 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ExclamationTriangleIcon, CheckCircleIcon } from "@heroicons/vue/24/outline";

// Page metadata
useHead({
  title: "Delete Account - EasyHR",
  meta: [
    {
      name: "description",
      content: "Permanently delete your EasyHR account and all associated data.",
    },
  ],
});

// Form data
const form = ref({
  email: "",
  reason: "",
  comments: "",
  confirmed: false,
});

const isSubmitting = ref(false);
const showSuccess = ref(false);

// Handle form submission
const handleSubmit = async () => {
  if (!form.value.confirmed) {
    return;
  }

  isSubmitting.value = true;

  try {
    // In a real implementation, this would send the request to your backend
    // For now, we'll simulate the API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Show success message
    showSuccess.value = true;
    
    // Reset form
    form.value = {
      email: "",
      reason: "",
      comments: "",
      confirmed: false,
    };
  } catch (error) {
    console.error("Error submitting deletion request:", error);
    // Handle error appropriately
  } finally {
    isSubmitting.value = false;
  }
};
</script>
