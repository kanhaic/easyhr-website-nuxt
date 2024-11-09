<template>
  <div>
    <div v-if="pageType === 'city' || pageType === 'country'">
      <Hero1
        :topTag="heroSection.topTag"
        :title="heroSection.title"
        :subtitle="heroSection.subtitle"
        :cta1Title="heroSection.cta1Title"
        :cta1Link="heroSection.cta1Link"
        :cta2Title="heroSection.cta2Title"
        :cta2Link="heroSection.cta2Link"
        :heroImage="heroSection.heroImage"
        heroImageProvider="contentful"
      />

      <LogoSection :logos="logos" />

      <div class="py-6 sm:py-8 lg:py-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="lg:flex lg:gap-x-8">
            <!-- Main content area (2/3 width) -->
            <div class="lg:w-2/3">
              <div v-if="content">
                <div
                  v-html="renderedBody"
                  class="mt-2 prose lg:prose-xl prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-a:text-blue-500 prose-a:underline prose-a:font-medium"
                ></div>
              </div>
            </div>
            <!-- Sidebar with demo request form (1/3 width) -->
            <div class="lg:w-1/3 mt-12">
              <div class="sticky top-20">
                <div class="bg-gray-100 rounded-lg p-6">
                  <h3 class="text-xl font-semibold mb-4">Request a Demo</h3>
                  <DemoRequest />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeatureList
        :features="featureList.featureListItems"
        :title="featureList.title"
        :description="featureList.description"
      />

      <!-- ContentSet Content -->
      <div class="mx-auto max-w-7xl">
        <div class="px-4 sm:px-6 lg:px-8">
          <section
            v-for="(contentSet, index) in contentSets"
            :key="index"
            :id="`content-${index}`"
            class="py-4 sm:py-6 lg:py-8"
          >
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div
                class="grid grid-cols-1 md:items-center gap-y-8 md:grid-cols-2 md:gap-x-16"
              >
                <div
                  class="text-center md:text-left prose"
                  :class="{ 'md:order-2': index % 2 !== 0 }"
                >
                  <h2
                    class="text-2xl font-bold text-gray-900 sm:text-3xl xl:text-4xl"
                  >
                    {{ contentSet.title }}
                  </h2>
                  <div
                    v-html="contentSet.description"
                    class="prose lg:prose-lg prose-ul:text-left prose-ul:list-disc"
                  ></div>
                </div>

                <div
                  :class="{ 'md:order-1': index % 2 !== 0 }"
                  class="flex justify-center items-center"
                >
                  <NuxtImg
                    v-if="contentSet.image"
                    class="w-auto"
                    :src="contentSet.image"
                    :alt="contentSet.title"
                    provider="contentful"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Testimonial1
        :subtitle="testimonials.topTag"
        :title="testimonials.title"
        :testimonials="testimonials.items"
      />

      <ContactForm />
    </div>

    <!-- guide -->
    <div v-else-if="pageType === 'guide'">
      <div
        class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white"
      >
        <!-- Header -->
        <div class="text-center">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            {{ heroSection.title }}
          </h1>
          <p class="mt-4 text-lg text-gray-600">
            {{ heroSection.subtitle }}
          </p>
        </div>

        <!-- Share buttons -->
        <div class="mt-6 flex justify-center space-x-6">
          <a
            :href="shareUrls.twitter"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">Share on Twitter</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </a>
          <a
            :href="shareUrls.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">Share on LinkedIn</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>
          <a
            :href="shareUrls.facebook"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">Share on Facebook</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              />
            </svg>
          </a>
          <a
            :href="shareUrls.whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">Share on WhatsApp</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
          </a>
          <button
            @click="copyLink"
            class="text-gray-400 hover:text-gray-500 relative"
            :class="{ 'text-green-500': isCopied }"
          >
            <span class="sr-only">Copy link</span>
            <svg
              v-if="!isCopied"
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
              />
            </svg>
            <svg
              v-else
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span
              v-if="isCopied"
              class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap"
            >
              Link copied!
            </span>
          </button>
        </div>

        <!-- Hero Image -->
        <div class="mt-8 sm:mt-12 max-w-2xl mx-auto">
          <NuxtImg
            :src="heroSection.heroImage"
            :alt="heroSection.title"
            class="w-full h-auto rounded-md"
            provider="contentful"
            preload
            width="320"
            height="180"
          />
        </div>

        <!-- Content -->
        <article class="mt-8 sm:mt-12 prose lg:prose-lg prose-indigo mx-auto">
          <div v-html="renderedBody"></div>
        </article>
      </div>
    </div>

    <!-- industry -->
    <div v-else-if="pageType === 'industry'">
      <Hero1
        :topTag="heroSection.topTag"
        :title="heroSection.title"
        :subtitle="heroSection.subtitle"
        :cta1Title="heroSection.cta1Title"
        :cta1Link="heroSection.cta1Link"
        :cta2Title="heroSection.cta2Title"
        :cta2Link="heroSection.cta2Link"
        :heroImage="heroSection.heroImage"
        heroImageProvider="contentful"
      />
      <LogoSection :logos="logos" />
      <Feature1
        :topTag="featureSection.topTag"
        :headerFeature="featureSection.headerFeature"
        :items="featureSection.items"
        :image="featureSection.image"
      />

      <!-- ContentSet Content -->
      <div class="mx-auto max-w-7xl">
        <div class="px-4 sm:px-6 lg:px-8">
          <section
            v-for="(contentSet, index) in contentSets"
            :key="index"
            :id="`content-${index}`"
            class="py-4 sm:py-6 lg:py-8"
          >
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div
                class="grid grid-cols-1 md:items-center gap-y-8 md:grid-cols-2 md:gap-x-16"
              >
                <div
                  class="text-center md:text-left prose"
                  :class="{ 'md:order-2': index % 2 !== 0 }"
                >
                  <h2
                    class="text-2xl font-bold text-gray-900 sm:text-3xl xl:text-4xl"
                  >
                    {{ contentSet.title }}
                  </h2>
                  <div
                    v-html="contentSet.description"
                    class="prose lg:prose-lg prose-ul:text-left prose-ul:list-disc"
                  ></div>
                </div>

                <div
                  :class="{ 'md:order-1': index % 2 !== 0 }"
                  class="flex justify-center items-center"
                >
                  <NuxtImg
                    v-if="contentSet.image"
                    class="w-auto"
                    :src="contentSet.image"
                    :alt="contentSet.title"
                    provider="contentful"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <!-- Content -->
      <div class="mx-auto max-w-7xl" v-if="content">
        <div class="px-4 sm:px-6 lg:px-8">
          <div
            v-html="renderedBody"
            class="prose lg:prose-lg prose-ul:text-left prose-ul:list-disc"
          ></div>
        </div>
      </div>
      <Testimonial1
        :subtitle="testimonials.topTag"
        :title="testimonials.title"
        :testimonials="testimonials.items"
      />
      <Stats1 :title="stats?.title" :stats="stats?.stats" />
      <RecentBlog :title="recentBlog?.title" :posts="recentBlog?.posts" />
      <ContactForm />
    </div>

    <!-- Article -->
    <div v-else-if="pageType === 'article'">
      <!-- Header -->
      <SmallHero
        :title="heroSection.title"
        :description="heroSection.subtitle"
        :cta1Title="heroSection.cta1Title"
        :cta1Link="heroSection.cta1Link"
        :image="heroSection.heroImage"
      />

      <!-- Content -->
      <div class="max-w-5xl mx-auto">
        <article class="px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 pb-6">
          <div 
            v-html="renderedBody" 
            class="prose lg:prose-lg prose-indigo max-w-none prose-headings:font-medium prose-p:my-2 prose-li:my-1 prose-headings:text-gray-900 prose-p:text-gray-600 prose-img:mx-auto"
          ></div>
        </article>
      </div>
    </div>

    <!-- default -->
    <div v-else>
      <Hero1
        :topTag="heroSection.topTag"
        :title="heroSection.title"
        :subtitle="heroSection.subtitle"
        :cta1Title="heroSection.cta1Title"
        :cta1Link="heroSection.cta1Link"
        :cta2Title="heroSection.cta2Title"
        :cta2Link="heroSection.cta2Link"
        :heroImage="heroSection.heroImage"
        heroImageProvider="contentful"
      />
      <LogoSection :logos="logos" />
      <Feature1
        :topTag="featureSection.topTag"
        :headerFeature="featureSection.headerFeature"
        :items="featureSection.items"
        :image="featureSection.image"
      />
      <FeatureList
        :title="featureList.title"
        :description="featureList.description"
        :features="featureList.featureListItems"
      />
      <div
        class="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8"
        v-if="content"
      >
        <div v-html="renderedBody" class="prose lg:prose-xl"></div>
      </div>
      <Testimonial1
        :subtitle="testimonials.topTag"
        :title="testimonials.title"
        :testimonials="testimonials.items"
      />
      <Stats1 :title="stats?.title" :stats="stats?.stats" />
      <RecentBlog :title="recentBlog?.title" :posts="recentBlog?.posts" />
      <ContactForm />
    </div>
  </div>
</template>

<script setup>
import * as contentful from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import FeatureList from "~/components/FeatureList.vue";
const route = useRoute();
const config = useRuntimeConfig();
const slug = route.params.slug;

const client = contentful.createClient({
  space: config.public.contentful.spaceId,
  accessToken: config.public.contentful.accessToken,
});

const { data, error } = await useAsyncData(`landing-${slug}`, () =>
  client.getEntries({
    content_type: "landingPage",
    "fields.slug": slug,
    limit: 1,
  })
);

const { data: blogData, error: blogError } = await useAsyncData("blog", () =>
  client.getEntries({
    content_type: "blog",
    order: "-sys.createdAt",
    limit: 4,
  })
);

if (!data.value || data.value.items.length === 0) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

const landingPage = data.value || { items: [], includes: { Asset: [] } };

const blogPosts = blogData.value?.items || [];

const pageType = landingPage.items[0]?.fields.type;

const heroSection = {
  topTag: landingPage.items[0]?.fields.topTag,
  title: landingPage.items[0]?.fields.title,
  subtitle: landingPage.items[0]?.fields.subtitle,
  cta1Title: landingPage.items[0]?.fields.cta1Label,
  cta1Link: landingPage.items[0]?.fields.cta1Url,
  cta2Title: landingPage.items[0]?.fields.cta2Label,
  cta2Link: landingPage.items[0]?.fields.cta2Url,
  heroImage: landingPage.items[0]?.fields.heroImage.fields.file.url,
};

const stats = {
  title: landingPage.items[0]?.fields?.statsTitle,
  stats: landingPage.items[0]?.fields?.stats?.map((stat) => ({
    value: stat?.fields.value,
    label: stat?.fields.label,
  })),
};

const recentBlog = {
  title: landingPage.items[0]?.fields.recentBlogTitle,
  posts: blogPosts?.map((post) => ({
    id: post.sys.id,
    href: `/blog/${post?.fields.slug}`,
    image: post?.fields.featuredImage?.fields?.file.url,
    title: post?.fields.title,
    date: new Date(post.sys.updatedAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    author: post?.fields.author,
    authorHref: "#",
    authorImage: post?.fields.author?.fields?.profilePicture?.fields?.file.url,
  })),
};
const testimonials = {
  topTag: landingPage.items[0]?.fields.testimonialTagTop,
  title: landingPage.items[0]?.fields.testimonialTitle,
  items: landingPage.items[0]?.fields.testimonials?.map((testimonial) => ({
    image: testimonial?.fields.profilePicture?.fields?.file.url,
    quote: testimonial?.fields.testimonial,
    name: testimonial?.fields.name,
    position: testimonial?.fields.designation,
  })),
};

const logos = landingPage.items[0]?.fields.logos?.map((logo) => ({
  src: logo?.fields.file.url,
  alt: logo?.fields.title,
  provider: "contentful",
}));

const featureSection = {
  topTag: landingPage.items[0]?.fields.featureTopTag,
  headerFeature: landingPage.items[0]?.fields.featureTitle,
  items: landingPage.items[0]?.fields.mainFeatures?.map((feature) => ({
    iconColor: feature?.fields?.color,
    iconPath: feature?.fields?.icon,
    title: feature?.fields?.title,
    description: feature?.fields?.description,
    slug: feature?.fields?.slug,
  })),
  image: {
    src: landingPage.items[0]?.fields.featureImage?.fields?.file.url,
    alt: landingPage.items[0]?.fields.featureImage?.fields?.title,
  },
};

const featureList = {
  title: landingPage.items[0]?.fields.featureListTitle,
  description: landingPage.items[0]?.fields.featureListSubtitle,
  featureListItems:
    landingPage.items[0]?.fields.featureList?.map((item) => ({
      bgColor: item?.fields?.bgColor,
      iconColor: item?.fields?.color,
      iconPath: item?.fields?.icon,
      title: item?.fields?.title,
      description: item?.fields?.description,
      slug: item?.fields?.slug,
    })) || [],
};

const content = landingPage.items[0]?.fields.content;

const customRenderer = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      if (!node.data?.target?.fields?.file) {
        return "";
      }
      const { url, description } = node.data.target.fields.file;
      if (!url) {
        return "";
      }
      return `<img src="https:${url}" alt="${
        description || "image"
      }" class="w-full h-auto lg:w-3/4" />`;
    },
    [BLOCKS.TABLE]: (node, next) => {
      const tableContent = next(node.content);
      return `<div class="overflow-x-auto"><table class="border border-gray-200">${tableContent}</table></div>`;
    },
    [BLOCKS.TABLE_ROW]: (node, next) => `<tr>${next(node.content)}</tr>`,
    [BLOCKS.TABLE_HEADER_CELL]: (node, next) =>
      `<th class="border border-gray-200 p-2">${next(node.content)}</th>`,
    [BLOCKS.TABLE_CELL]: (node, next) => `<td class="border border-gray-200 p-2">${next(node.content)}</td>`,
  },
};

const renderedBody = documentToHtmlString(content, customRenderer);

const contentSets = computed(() => {
  const sets = [];
  landingPage.items[0]?.fields?.featureContent?.forEach((set) => {
    sets.push({
      title: set?.fields?.title,
      description: documentToHtmlString(set?.fields?.content),
      image: set?.fields?.image?.fields?.file?.url,
    });
  });
  return sets;
});

useHead({
  title: landingPage.items[0]?.fields?.seoTitle,
  meta: [
    {
      name: "description",
      content: landingPage.items[0]?.fields?.seoDescription,
    },
    { name: "keywords", content: landingPage.items[0]?.fields?.seoKeywords },
  ],
});

const shareUrls = computed(() => {
  const baseUrl = config.public.siteUrl || "https://www.easyhrworld.com";
  const currentUrl = `${baseUrl}${route.fullPath}`;
  const title = heroSection.title;

  return {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title
    )}&url=${encodeURIComponent(currentUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      currentUrl
    )}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentUrl
    )}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(
      `${title} ${currentUrl}`
    )}`,
  };
});

// Add copy link functionality
const isCopied = ref(false);
const copyLink = () => {
  const url = `${config.public.siteUrl}${route.fullPath}`;
  navigator.clipboard.writeText(url);
  isCopied.value = true;
  setTimeout(() => {
    isCopied.value = false;
  }, 2000);
};
</script>
