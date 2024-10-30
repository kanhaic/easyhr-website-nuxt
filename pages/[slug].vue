<template>
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

    <div class="py-12 sm:py-16 lg:py-20 xl:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="lg:flex lg:gap-x-8">
          <!-- Main content area (2/3 width) -->
          <div class="lg:w-2/3">
            <div v-if="content">
              <div
                v-html="renderedBody"
                class="mt-2 prose lg:prose-xl prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-h5:text-base prose-h6:text-sm prose-p:text-base prose-a:text-blue-500 prose-a:underline prose-a:font-medium"
              ></div>
            </div>
          </div>
          <!-- Sidebar with demo request form (1/3 width) -->
          <div class="lg:w-1/3 mt-8 lg:mt-0">
            <div class="sticky top-8">
              <div class="bg-gray-100 rounded-lg p-6">
                <h3 class="text-xl font-semibold mb-4">Request a Demo</h3>
                <DemoRequest />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Testimonial1
      :subtitle="testimonials.topTag"
      :title="testimonials.title"
      :testimonials="testimonials.items"
    />
  </div>

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
    <Stats1 :title="stats.title" :stats="stats.stats" />
    <RecentBlog :title="recentBlog.title" :posts="recentBlog.posts" />
    <ContactForm />
  </div>

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
    <Stats1 :title="stats.title" :stats="stats.stats" />
    <RecentBlog :title="recentBlog.title" :posts="recentBlog.posts" />
    <ContactForm />
  </div>
</template>

<script setup>
import * as contentful from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
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
  title: landingPage.items[0]?.fields.statsTitle,
  stats: landingPage.items[0]?.fields.stats.map((stat) => ({
    value: stat?.fields.value,
    label: stat?.fields.label,
  })),
};

const recentBlog = {
  title: landingPage.items[0]?.fields.recentBlogTitle,
  posts: blogPosts.map((post) => ({
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
  items: landingPage.items[0]?.fields.testimonials.map((testimonial) => ({
    image: testimonial?.fields.profilePicture?.fields?.file.url,
    quote: testimonial?.fields.testimonial,
    name: testimonial?.fields.name,
    position: testimonial?.fields.designation,
  })),
};

const logos = landingPage.items[0]?.fields.logos.map((logo) => ({
  src: logo?.fields.file.url,
  alt: logo?.fields.title,
  provider: "contentful",
}));

const featureSection = {
  topTag: landingPage.items[0]?.fields.featureTopTag,
  headerFeature: landingPage.items[0]?.fields.featureTitle,
  items: landingPage.items[0]?.fields.mainFeatures.map((feature) => ({
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
      const { url, description } = node.data.target?.fields?.file;
      return `<NuxtImg format="webp" src="${url}" alt="${
        description || ""
      }" class="w-full h-auto my-4" provider="contentful" />`;
    },
  },
};

const renderedBody = documentToHtmlString(content, customRenderer);

const contentSets = computed(() => {
  const sets = [];
  for (let i = 1; i <= 10; i++) {
    const title = landingPage.items[0]?.fields?.[`title${i}`];
    const description = documentToHtmlString(
      landingPage.items[0]?.fields?.[`content${i}`]
    );
    const image = landingPage.items[0]?.fields?.[`image${i}`]?.fields?.file?.url;

    if (title || description || image) {
      sets.push({ title, description, image });
    }
  }
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

useSeoMeta({
  // will be inferred as the lastmod value in the sitemap
  // date in YYYY-MM-DD format
  articleModifiedTime: new Date().toISOString().split("T")[0],
});
</script>
