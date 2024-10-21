<template>
  <div>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Name</label
        >
        <input
          type="text"
          id="name"
          v-model="form.name"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label for="company" class="block text-sm font-medium text-gray-700"
          >Company</label
        >
        <input
          type="text"
          id="company"
          v-model="form.company"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700"
          >Phone (with country code)</label
        >
        <input
          type="tel"
          id="phone"
          v-model="form.phone"
          required
          pattern="^\+[1-9]\d{1,14}$"
          title="Please enter a valid phone number with country code (e.g., +1234567890)"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        <span class="text-xs text-gray-500 mt-1"
          >Format: +[country code][number] (e.g., +1234567890)</span
        >
      </div>
      <div>
        <label for="teamSize" class="block text-sm font-medium text-gray-700"
          >Team Size</label
        >
        <select
          id="teamSize"
          v-model="form.teamSize"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="1-10" selected>1-10</option>
          <option value="11-50">11-50</option>
          <option value="51-200">51-200</option>
          <option value="201-500">201-500</option>
          <option value="500+">500+</option>
        </select>
      </div>
      <div>
        <button
          type="submit"
          class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Request Demo
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
const form = reactive({
  name: "",
  company: "",
  email: "",
  phone: "",
  teamSize: "",
});

const submitForm = () => {
  // Handle form submission here
  console.log(form);
  // You can add API call or other logic here
};
</script>

<style></style>
