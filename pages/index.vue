<template>
  <div>
    <Hero1
      :topTag="heroSection.topTag"
      :title="heroSection.title"
      :subtitle="heroSection.subtitle"
      :cta1Title="heroSection.cta1Title"
      :cta1Link="heroSection.cta1Link"
      :cta2Title="heroSection.cta2Title"
      :cta2Link="heroSection.cta2Link"
      :heroImage="heroSection.heroImage.fields.file.url"
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
    <Testimonial1
      :subtitle="testimonials.topTag"
      :title="testimonials.title"
      :testimonials="testimonials.items"
    />
    <Stats1
      :title="stats.title"
      :stats="stats.stats"
    />
    <RecentBlog :title="recentBlog.title" :posts="recentBlog.posts" />
    <ContactForm />
  </div>
</template>

<script setup>
import * as contentful from "contentful";

const config = useRuntimeConfig();

const client = contentful.createClient({
  space: config.public.contentful.spaceId,
  accessToken: config.public.contentful.accessToken,
});

const { data, error } = await useAsyncData("main-landing", () =>
  client.getEntries({
    content_type: "landingPage",
    "fields.type": "main",
  })
);

const { data: blogData, error: blogError } = await useAsyncData("blog", () =>
  client.getEntries({
    content_type: "blog",
    order: "-sys.createdAt",
    limit: 4,
  })
);

const blogPosts = blogData.value?.items || [];

const landingPage = data.value || { items: [], includes: { Asset: [] } };

// console.log(JSON.stringify(landingPage.items[0], null, 2));

const heroSection = {
  topTag: landingPage.items[0].fields.topTag,
  title: landingPage.items[0].fields.title,
  subtitle: landingPage.items[0].fields.subtitle,
  cta1Title: landingPage.items[0].fields.cta1Title,
  cta1Link: landingPage.items[0].fields.cta1Link,
  cta2Title: landingPage.items[0].fields.cta2Title,
  cta2Link: landingPage.items[0].fields.cta2Link,
  heroImage: landingPage.items[0].fields.heroImage,
};

const stats = {
  title: landingPage.items[0].fields.statsTitle,
  stats: landingPage.items[0].fields.stats.map((stat) => ({
    value: stat.fields.value,
    label: stat.fields.label,
  })),
};

const recentBlog = {
  title: landingPage.items[0].fields.recentBlogTitle,
  posts: blogPosts.map((post) => ({
    id: post.sys.id,
    href: `/blog/${post.fields.slug}`,
    image: post.fields.featuredImage.fields.file.url,
    title: post.fields.title,
    date: new Date(post.sys.updatedAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    author: post.fields.author,
    authorHref: "#",
    authorImage: post.fields.author.fields.profilePicture.fields.file.url,
  })),
};
const testimonials = {
  topTag: landingPage.items[0].fields.testimonialTagTop,
  title: landingPage.items[0].fields.testimonialTitle,
  items: landingPage.items[0].fields.testimonials.map((testimonial) => ({
    image: testimonial.fields.profilePicture.fields.file.url,
    quote: testimonial.fields.testimonial,
    name: testimonial.fields.name,
    position: testimonial.fields.designation,
  })),
};

const logos = landingPage.items[0].fields.logos.map((logo) => ({
  src: logo.fields.file.url,
  alt: logo.fields.title,
}));

const featureSection = {
  topTag: landingPage.items[0].fields.featureTopTag,
  headerFeature: landingPage.items[0].fields.featureTitle,
  items: landingPage.items[0].fields.mainFeatures.map((feature) => ({
    iconColor: feature.fields.color,
    iconPath: feature.fields.icon,
    title: feature.fields.title,
    description: feature.fields.description,
  })),
  image: {
    src: landingPage.items[0].fields.featureImage.fields.file.url,
    alt: landingPage.items[0].fields.featureImage.fields.title,
  },
};

const featureList = {
  title: landingPage.items[0].fields.featureListTitle,
  description: landingPage.items[0].fields.featureListSubtitle,
  featureListItems:
    landingPage.items[0].fields.featureList?.map((item) => ({
      bgColor: item.fields.bgColor,
      iconColor: item.fields.color,
      iconPath: item.fields.icon,
      title: item.fields.title,
      description: item.fields.description,
    })) || [],
};
</script>
