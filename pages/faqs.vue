<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2
          class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
        >
          Frequently asked questions
        </h2>
        <p class="mt-6 text-base leading-7 text-gray-600">
          Have a different question and can’t find the answer you’re looking
          for? Reach out to our support team by
          <a
            href="/support"
            class="font-semibold text-indigo-600 hover:text-indigo-500"
            >sending us an email</a
          >
          and we’ll get back to you as soon as we can.
        </p>
      </div>
      <div class="mt-20">
        <dl
          class="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10"
        >
          <div v-for="faq in faqs" :key="faq.question">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              {{ faq.question }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              {{ faq.answer }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
    
    <div class="flex justify-center">
      <LogoSection :logos="logos" />
    </div>

    <div class="flex justify-center">
      <Testimonial1 
        :subtitle="testimonials.topTag"
        :title="testimonials.title"
        :testimonials="testimonials.items"
      />
    </div>

    <div class="flex justify-center">
      <ContactForm />
    </div>
  </div>
</template>

<script setup>
import * as contentful from "contentful";

const config = useRuntimeConfig();

const client = contentful.createClient({
  space: config.public.contentful.spaceId,
  accessToken: config.public.contentful.accessToken,
});

const { data: pageData, error: pageError } = await useAsyncData(
  "faq-page",
  () =>
    client.getEntries({
      content_type: "landingPage",
      "fields.slug": "faqs",
      limit: 1,
    })
);

const { data: faqData, error: faqError } = await useAsyncData("faqs", () =>
  client.getEntries({
    content_type: "faqs",
  })
);

const faqPage = pageData.value?.items[0]?.fields;

const faqs = faqData.value?.items.map((item) => item.fields);

const logos = faqPage.logos.map((logo) => ({
  src: logo.fields.file.url,
  alt: logo.fields.title,
}));

const testimonials = {
  topTag: faqPage.testimonialTagTop,
  title: faqPage.testimonialTitle,
  items: faqPage.testimonials.map((testimonial) => ({
    image: testimonial.fields.profilePicture.fields.file.url,
    quote: testimonial.fields.testimonial,
    name: testimonial.fields.name,
    position: testimonial.fields.designation,
  })),
};

useHead({
  title: faqPage.seoTitle,
  meta: [
    {
      name: "description",
      content: faqPage.seoDescription,
    },
    { name: "keywords", content: faqPage.seoKeywords },
  ],
});

useSeoMeta({
  // will be inferred as the lastmod value in the sitemap
  // date in YYYY-MM-DD format
  articleModifiedTime: new Date().toISOString().split("T")[0],
});
</script>
