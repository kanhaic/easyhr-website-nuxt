<template>
  <div class="bg-white py-6 sm:py-12">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <h1 class="text-base font-semibold leading-7 text-indigo-600">
          {{ pricingPage.fields.topTag }}
        </h1>
        <h2
          class="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl"
        >
          {{ pricingPage.fields.title }}
        </h2>
      </div>
      <p
        class="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8"
      >
        {{ pricingPage.fields.subtitle }}
      </p>

      <!-- xs to lg -->
      <div class="mx-auto mt-12 max-w-md space-y-8 block lg:hidden">
        <section
          v-for="tier in tiers"
          :key="tier.id"
          :class="[
            tier.mostPopular
              ? 'rounded-xl bg-gray-100 ring-1 ring-inset ring-gray-200'
              : 'bg-white',
            'p-6 shadow-sm border border-gray-200 rounded-lg opacity-100',
          ]"
        >
          <div class="flex flex-col gap-y-4 sticky top-[72px] z-10 opacity-100 bg-white ">
            <h3
              :id="tier.id"
              class="text-lg font-semibold leading-6 text-gray-900"
            >
              {{ tier.name }}
            </h3>
            <p class="mt-2 flex items-baseline gap-x-1 text-gray-900">
              <span v-if="isPriceLoading" class="inline-block w-24 h-8 bg-gray-200 animate-pulse rounded"></span>
              <span v-else class="text-3xl font-semibold">{{ tier.priceMonthly }}</span>
              <span class="text-sm font-semibold">/month</span>
            </p>
            <p class="mt-2 text-sm text-gray-500">{{ tier.description }}</p>
            <p class="mt-2 text-sm text-gray-500">
              {{ tier.additionalUsersPrice }}
            </p>
            <a
              :href="tier.href"
              :aria-describedby="tier.id"
              :class="[
                tier.mostPopular
                  ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                  : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
              ]"
              >Start free trial</a
            >
          </div>
          <div class="mt-8 space-y-6">
            <div
              v-for="section in sections"
              :key="section.name"
              class="border-t border-gray-200 pt-6"
            >
              <h4 class="text-sm font-semibold leading-6 text-gray-900 mb-4">
                {{ section.name }}
              </h4>
              <dl class="space-y-4 text-sm leading-6">
                <div
                  v-for="feature in section.features"
                  :key="feature.name"
                  class="grid grid-cols-2 gap-4 py-3 border-b border-gray-100 last:border-b-0"
                >
                  <div class="pr-4 border-r border-gray-100">
                    <dt
                      class="font-medium text-gray-900 flex items-center justify-between cursor-pointer"
                      @click="toggleDescription(section.name, feature.name)"
                    >
                      {{ feature.name }}
                      <ChevronDownIcon
                        class="h-5 w-5 text-gray-500"
                        :class="{
                          'transform rotate-180':
                            openDescriptions[`${section.name}-${feature.name}`],
                        }"
                      />
                    </dt>
                    <transition
                      enter-active-class="transition ease-out duration-200"
                      enter-from-class="opacity-0 -translate-y-1"
                      enter-to-class="opacity-100 translate-y-0"
                      leave-active-class="transition ease-in duration-150"
                      leave-from-class="opacity-100 translate-y-0"
                      leave-to-class="opacity-0 -translate-y-1"
                    >
                      <dd
                        v-show="
                          openDescriptions[`${section.name}-${feature.name}`]
                        "
                        class="mt-1 text-gray-500"
                      >
                        {{ feature.description }}
                      </dd>
                    </transition>
                  </div>
                  <div class="flex items-center justify-center">
                    <template
                      v-if="typeof feature.tiers[tier.name] === 'boolean'"
                    >
                      <CheckIcon
                        v-if="feature.tiers[tier.name]"
                        class="h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      <XMarkIcon
                        v-else
                        class="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </template>
                    <span v-else class="text-gray-900">{{
                      feature.tiers[tier.name]
                    }}</span>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </div>

      <!-- lg+ -->
      <div class="isolate mt-20 hidden lg:block">
        <div class="relative mx-auto max-w-7xl">
          <table
            class="w-full table-fixed border-separate border-spacing-0 min-w-[900px]"
          >
            <caption class="sr-only">
              Pricing plan comparison
            </caption>
            <colgroup>
              <col class="w-[240px]" />
              <col class="w-[220px]" />
              <col class="w-[220px]" />
              <col class="w-[220px]" />
            </colgroup>
            <thead class="sticky top-0 z-10 bg-white ">
              <tr>
                <td />
                <th
                  v-for="tier in tiers"
                  :key="tier.id"
                  scope="col"
                  class="px-4 md:px-6 lg:px-8 pt-6 xl:px-10 xl:pt-8"
                >
                  <div class="text-xl font-semibold leading-7 text-gray-900">
                    {{ tier.name }}
                  </div>
                </th>
              </tr>
              <tr>
                <th scope="row"><span class="sr-only">Price</span></th>
                <td
                  v-for="tier in tiers"
                  :key="tier.id"
                  class="px-4 md:px-6 lg:px-8 pt-2 xl:px-10"
                >
                  <div class="flex items-baseline gap-x-1 text-gray-900">
                    <span v-if="isPriceLoading" class="inline-block w-32 h-10 bg-gray-200 animate-pulse rounded"></span>
                    <span v-else class="text-4xl font-semibold">{{ tier.priceMonthly }}</span>
                    <span class="text-sm font-semibold leading-6">/month</span>
                  </div>
                  <div class="text-sm leading-6 text-gray-500">
                    {{ tier.description }}
                  </div>
                  <div class="text-sm leading-6 text-gray-500">
                    {{ tier.additionalUsersPrice }}
                  </div>
                  <a
                    :href="tier.href"
                    :class="[
                      tier.mostPopular
                        ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                        : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                      'mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                    ]"
                    >Start free trial</a
                  >
                </td>
              </tr>
            </thead>
            <tbody>
              <template
                v-for="(section, sectionIdx) in sections"
                :key="section.name"
              >
                <tr>
                  <th
                    scope="colgroup"
                    colspan="4"
                    :class="[
                      sectionIdx === 0 ? 'pt-8' : 'pt-16',
                      'pb-4 text-sm font-semibold leading-6 text-gray-900',
                    ]"
                  >
                    {{ section.name }}
                    <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/10" />
                  </th>
                </tr>
                <tr v-for="feature in section.features" :key="feature.name">
                  <th
                    scope="row"
                    class="py-4 text-sm font-normal leading-6 text-gray-900"
                  >
                    <div
                      class="flex items-center justify-between cursor-pointer"
                      @click="toggleDescription(section.name, feature.name)"
                    >
                      <span>{{ feature.name }}</span>
                      <ChevronDownIcon
                        class="h-5 w-5 text-gray-500"
                        :class="{
                          'transform rotate-180':
                            openDescriptions[`${section.name}-${feature.name}`],
                        }"
                      />
                    </div>
                    <transition
                      enter-active-class="transition ease-out duration-200"
                      enter-from-class="opacity-0 -translate-y-1"
                      enter-to-class="opacity-100 translate-y-0"
                      leave-active-class="transition ease-in duration-150"
                      leave-from-class="opacity-100 translate-y-0"
                      leave-to-class="opacity-0 -translate-y-1"
                    >
                      <div
                        v-show="
                          openDescriptions[`${section.name}-${feature.name}`]
                        "
                        class="text-sm leading-6 text-gray-500 mt-1"
                      >
                        {{ feature.description }}
                      </div>
                    </transition>
                    <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5" />
                  </th>
                  <td
                    v-for="tier in tiers"
                    :key="tier.id"
                    class="px-6 py-4 xl:px-8"
                  >
                    <div
                      v-if="typeof feature.tiers[tier.name] === 'string'"
                      class="text-center text-sm leading-6 text-gray-500"
                    >
                      {{ feature.tiers[tier.name] }}
                    </div>
                    <template v-else>
                      <CheckIcon
                        v-if="feature.tiers[tier.name] === true"
                        class="mx-auto h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      <XMarkIcon
                        v-else
                        class="mx-auto h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span class="sr-only"
                        >{{
                          feature.tiers[tier.name] === true
                            ? "Included"
                            : "Not included"
                        }}
                        in {{ tier.name }}</span
                      >
                    </template>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Add ons -->
    <AddonsSection
      title="Add-ons"
      subtitle="Optional features to enhance your HR experience"
      :addons="addons"
    />

    <!-- FAQ -->
    <FaqSection :faqs="faqs" />

    <!-- Logos -->
    <LogoSection :logos="logos" class="mt-24" />

    <!-- Testimonials -->
    <Testimonial1
      :subtitle="testimonials.topTag"
      :title="testimonials.title"
      :testimonials="testimonials.items"
    />
  </div>

  <ContactForm />
</template>

<script setup>
import { CheckIcon, XMarkIcon, ChevronDownIcon } from "@heroicons/vue/20/solid";
import * as contentful from "contentful";

const config = useRuntimeConfig();

const client = contentful.createClient({
  space: config.public.contentful.spaceId,
  accessToken: config.public.contentful.accessToken,
});

const { data, error } = await useAsyncData("pricing-page", () =>
  client.getEntries({
    content_type: "landingPage",
    "fields.type": "pricing",
    limit: 1,
  })
);

const { data: faqData, error: faqError } = await useAsyncData("faqs", () =>
  client.getEntries({
    content_type: "faqs",
    "fields.showInPricing": true,
    limit: 100,
  })
);

const faqs = faqData.value?.items.map((item) => item.fields);

const pricingPage = data.value?.items[0];

const logos = pricingPage.fields.logos.map((logo) => ({
  src: logo.fields.file.url,
  alt: logo.fields.title,
  provider: "contentful",
}));

const isPriceLoading = ref(true)

const userCountry = ref('IN') // Default to India

// Function to detect user's country
const detectCountry = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/')
    const data = await response.json()
    userCountry.value = data.country_code
  } catch (error) {
    console.error('Error detecting country:', error)
    userCountry.value = 'IN' // Fallback to India if detection fails
  }
  finally {
    isPriceLoading.value = false
  } 
}

// Call the detection function
onMounted(async () => {
  await detectCountry()
})

// Create pricing configurations for different regions
const getPricing = computed(() => {
  const isIndia = userCountry.value === 'IN'
  
  return [
    {
      name: "Starter",
      id: "tier-starter",
      href: "/signup?plan=starter&utm_source=pricing",
      priceMonthly: isIndia ? "₹ 2499" : "$ 124",
      description: "Upto 25 users.",
      additionalUsersPrice: isIndia 
        ? "Additional User @ ₹90 per user/month"
        : "Additional User @ $3 per user/month",
      mostPopular: false,
    },
    {
      name: "Growth",
      id: "tier-growth",
      href: "/signup?plan=growth&utm_source=pricing",
      priceMonthly: isIndia ? "₹ 3125" : "$ 149",
      description: "Upto 25 users.",
      additionalUsersPrice: isIndia 
        ? "Additional User @ ₹115 per user/month"
        : "Additional User @ $5 per user/month",
      mostPopular: true,
    },
    {
      name: "Enterprise",
      id: "tier-enterprise",
      href: "/signup?plan=enterprise&utm_source=pricing",
      priceMonthly: isIndia ? "₹ 3750" : "$ 184",
      description: "Upto 25 users.",
      additionalUsersPrice: isIndia 
        ? "Additional User @ ₹135 per user/month"
        : "Additional User @ $8 per user/month",
      mostPopular: false,
    },
  ]
})

// Update addons pricing
const getAddons = computed(() => {
  const isIndia = userCountry.value === 'IN'
  
  return [
    {
      name: "Performance Management System",
      price: isIndia ? "Starts at ₹50/employee/month" : "Starts at $2/employee/month",
      description: "360° Reportee-Manager Feedback and Reviews",
      icon: "/images/performance-management-icon.webp",
    },
    {
      name: "GeoTracking",
      price: isIndia ? "Starts at ₹50/employee/month" : "Starts at $2/employee/month",
      description: "Track employee location and movement.",
      icon: "/images/location-icon.webp",
    },
    {
      name: "GeoMark+",
      price: isIndia ? "₹50/user/month" : "$2/user/month",
      description: "Map-Based Attendance Marking with location Tagging",
      icon: "/images/location-icon.webp",
    },
    {
      name: "Selfie Attendance",
      price: isIndia ? "₹20/user/month" : "$2/user/month",
      description: "Selfie-based attendance marking",
      icon: "/images/selfie-attendance-icon.webp",
    },
  ]
})

// Replace the static tiers and addons with computed properties
const tiers = computed(() => getPricing.value)
const addons = computed(() => getAddons.value)

const sections = [
  {
    name: "Core HR",
    features: [
      {
        name: "Org Structure Management",
        tiers: { Starter: true, Growth: true, Enterprise: true },
        description: "Manage complex hierarchical organizational structures.",
      },
      {
        name: "Document & Letters",
        tiers: { Starter: true, Growth: true, Enterprise: true },
        description: "Generate letters and documents for employees and HR.",
      },
      {
        name: "Employee Onboarding",
        tiers: { Starter: "Basic", Growth: "Advanced", Enterprise: "Advanced" },
        description: "Automate onboarding processes with task assignments.",
      },
      {
        name: "Analytics",
        tiers: { Starter: false, Growth: true, Enterprise: true },
        description: "Track attendance, turnover rates, and demographics.",
      },
      {
        name: "Reminders & Alerts",
        tiers: { Starter: false, Growth: true, Enterprise: true },
        description:
          "Set reminders and alerts for important events such as Birthdays, Anniversaries, and more.",
      },
      {
        name: "Company Policies & Notifications",
        tiers: { Starter: true, Growth: true, Enterprise: true },
        description: "Set company policies and notifications for employees.",
      },
      {
        name: "Custom Roles & Privileges",
        tiers: { Starter: false, Growth: true, Enterprise: true },
        description:
          "Customize roles and assign permissions for enhanced security.",
      },
      {
        name: "Reports",
        tiers: { Starter: "Basic", Growth: "Advanced", Enterprise: "Advanced" },
        description: "Generate reports and visualize insights with dashboards.",
      },
    ],
  },
  {
    name: "Time & Attendance",
    features: [
      {
        name: "Biometric Attendance",
        tiers: { Starter: true, Growth: true, Enterprise: true },
        description:
          "Use biometric devices for accurate attendance tracking. *Biometric devices are not included in the plan. *Biometric integration is charged separately.",
      },
      {
        name: "Mobile Attendance",
        tiers: { Starter: true, Growth: true, Enterprise: true },
        description: "Use mobile attendance for accurate attendance tracking.",
      },
      {
        name: "Leave Management",
        tiers: { Starter: true, Growth: true, Enterprise: true },
        description:
          "Maintain transparent leave records integrated with payroll.",
      },
      {
        name: "Travel & Travel Desk",
        tiers: { Starter: false, Growth: true, Enterprise: true },
        description: "Manage travel requests, bookings, and expenses.",
      },
      {
        name: "Overtime Automation",
        tiers: { Starter: false, Growth: true, Enterprise: true },
        description: "Automatically log and store overtime (OT) data.",
      },
      {
        name: "GPS / Selfie Attendance",
        tiers: { Starter: false, Growth: true, Enterprise: true },
        description: "Enable GPS-based and selfie-based attendance tracking.",
      },
      {
        name: "Geofencing",
        tiers: { Starter: false, Growth: false, Enterprise: true },
        description: "Enable geofencing for attendance tracking.",
      },
      {
        name: "Shift Management",
        tiers: { Starter: "Basic", Growth: "Advanced", Enterprise: "Advanced" },
        description: "Manage regular and flexible shifts with detailed boards.",
      },
      {
        name: "Project & Timesheet",
        tiers: { Starter: false, Growth: false, Enterprise: true },
        description: "Manage projects and timesheets for employees.",
      },
    ],
  },
  {
    name: "Payroll & Compliance",
    features: [
      {
        name: "Payroll Automation",
        tiers: { Starter: true, Growth: true, Enterprise: true },
        description: "Simplify payroll by integrating expenses and bonuses.",
      },
      {
        name: "Salary Payout Bank File",
        tiers: { Starter: true, Growth: true, Enterprise: true },
        description: "Disburse salaries directly from EasyHR.",
      },
      {
        name: "Statutory Compliance",
        tiers: { Starter: true, Growth: true, Enterprise: true },
        description: "Ensure compliance with PF, ESI, TDS, and other reports.",
      },
      {
        name: "Access Audit",
        tiers: { Starter: false, Growth: false, Enterprise: true },
        description: "Track and audit access to sensitive data.",
      },
    ],
  },
  {
    name: "Claims & Expenses",
    features: [
      {
        name: "Claims & Expenses",
        tiers: { Starter: false, Growth: true, Enterprise: true },
        description: "Manage claims and expenses for employees.",
      },
      {
        name: "Loans & Salary Advances",
        tiers: { Starter: false, Growth: true, Enterprise: true },
        description: "Facilitate easy disbursal and recovery of loans.",
      },
      {
        name: "Budget Management",
        tiers: { Starter: false, Growth: true, Enterprise: true },
        description: "Manage budgets and track expenses.",
      },
      {
        name: "Reimbursements",
        tiers: { Starter: false, Growth: true, Enterprise: true },
        description: "Manage reimbursements for employees.",
      },
    ],
  },
  {
    name: "Asset Management",
    features: [
      {
        name: "Asset Management",
        tiers: { Starter: false, Growth: false, Enterprise: true },
        description:
          "Track assets, assign devices, returns and manage depreciation.",
      },
      {
        name: "Device Management",
        tiers: { Starter: false, Growth: false, Enterprise: true },
        description: "Assign devices to employees and manage returns.",
      },
    ],
  },
  {
    name: "Recruitment Management System",
    features: [
      {
        name: "Resume Bank",
        tiers: { Starter: false, Growth: false, Enterprise: true },
        description: "Store and manage resumes in one place.",
      },
      {
        name: "AI-Powered Candidate Matching",
        tiers: { Starter: false, Growth: false, Enterprise: true },
        description: "Automate your recruitment process with AI-powered tools.",
      },
      {
        name: "Automated Interview Scheduling",
        tiers: { Starter: false, Growth: false, Enterprise: true },
        description: "Automate your interview scheduling process.",
      },
      {
        name: "Automated Interview Feedback",
        tiers: { Starter: false, Growth: false, Enterprise: true },
        description: "Automate your interview feedback process.",
      },
    ],
  },
  {
    name: "Employee Self Service",
    features: [
      {
        name: "Mobile App",
        tiers: { Starter: true, Growth: true, Enterprise: true },
        description: "Manage attendance, finances, and approvals on the go.",
      },
      {
        name: "Email & Empcode Login",
        tiers: { Starter: true, Growth: true, Enterprise: true },
        description: "Make login simpler and secure with OTPs.",
      },
      {
        name: "Mobile App",
        tiers: { Starter: true, Growth: true, Enterprise: true },
        description: "Manage attendance, finances, and approvals on the go.",
      },
      {
        name: "Single Sign-On (SSO)",
        tiers: { Starter: false, Growth: false, Enterprise: true },
        description: "Simplify access with a single login across platforms.",
      },
      {
        name: "Self Service Portal",
        tiers: { Starter: false, Growth: false, Enterprise: true },
        description: "Manage your profile, leave, expenses, and more.",
      },
      {
        name: "Induction",
        tiers: { Starter: false, Growth: false, Enterprise: true },
        description: "Automate induction processes with task assignments.",
      },
      {
        name: "Separation",
        tiers: { Starter: false, Growth: false, Enterprise: true },
        description: "Automate separation processes with task assignments.",
      },
      {
        name: "Exit Interview",
        tiers: { Starter: false, Growth: false, Enterprise: true },
        description: "Automate exit interview processes with task assignments.",
      },
      {
        name: "Resignation Management",
        tiers: { Starter: false, Growth: true, Enterprise: true },
        description: "Manage resignation requests and processes.",
      },
    ],
  },
  {
    name: "Engagement",
    features: [
      {
        name: "Rewards & Recognition",
        tiers: { Starter: true, Growth: true, Enterprise: true },
        description:
          "Encourage collaboration by publicly recognizing achievements.",
      },
      {
        name: "Surveys",
        tiers: { Starter: false, Growth: false, Enterprise: true },
        description: "Collect feedback through in-depth employee surveys.",
      },
      {
        name: "Helpdesk",
        tiers: { Starter: false, Growth: false, Enterprise: true },
        description: "Provide a dedicated helpdesk for employee queries.",
      },
    ],
  },
  {
    name: "Miscellaneous",
    features: [
      {
        name: "Incident Management",
        tiers: { Starter: false, Growth: false, Enterprise: true },
        description: "Manage incidents and track resolutions.",
      },
      {
        name: "Custom Fields",
        tiers: { Starter: false, Growth: false, Enterprise: true },
        description: "Add custom fields to the employee profile.",
      },
      {
        name: "Dashboard",
        tiers: { Starter: true, Growth: true, Enterprise: true },
        description: "Customize the dashboard with widgets and reports.",
      },
    ],
  },
];

const openDescriptions = ref({});

const toggleDescription = (sectionName, featureName) => {
  const key = `${sectionName}-${featureName}`;
  openDescriptions.value[key] = !openDescriptions.value[key];
};

const testimonials = {
  topTag: pricingPage.fields.testimonialTagTop,
  title: pricingPage.fields.testimonialTitle,
  items: pricingPage.fields.testimonials.map((testimonial) => ({
    image: testimonial.fields.profilePicture.fields.file.url,
    quote: testimonial.fields.testimonial,
    name: testimonial.fields.name,
    position: testimonial.fields.designation,
  })),
};

useSeoMeta({
  // will be inferred as the lastmod value in the sitemap
  // date in YYYY-MM-DD format
  articleModifiedTime: new Date().toISOString().split("T")[0],
});
</script>


