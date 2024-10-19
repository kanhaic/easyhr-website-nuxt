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
      :gradientBackground="statsGradient"
      :stats="stats.stats"
    />
    <RecentBlog :title="blogTitle" :posts="recentPosts" />
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
}

const stats = {
  title: landingPage.items[0].fields.statsTitle,
  stats: landingPage.items[0].fields.stats.map((stat) => ({
    value: stat.fields.value,
    label: stat.fields.label,
  })),
}

const blogTitle = 'Check out our latest articles';
const recentPosts = [
  {
    id: 1,
    href: '#',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    title: 'Top HR Trends to Watch in 2023',
    date: '15 July 2023',
    author: 'Leslie Alexander',
    authorHref: '#',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 2,
    href: '#',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    title: '5 Effective Employee Engagement Strategies',
    date: '22 July 2023',
    author: 'Michael Johnson',
    authorHref: '#',
    authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 3,
    href: '#',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    title: 'Best Practices for Managing Remote Teams',
    date: '29 July 2023',
    author: 'Sarah Lee',
    authorHref: '#',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 4,
    href: '#',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    title: 'The Impact of AI on Human Resources',
    date: '5 August 2023',
    author: 'David Chen',
    authorHref: '#',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  }
];

const testimonials = {
  topTag: landingPage.items[0].fields.testimonialTagTop,
  title: landingPage.items[0].fields.testimonialTitle,
  items: landingPage.items[0].fields.testimonials.map((testimonial) => ({
    image: testimonial.fields.profilePicture.fields.file.url,
    quote: testimonial.fields.testimonial,
    name: testimonial.fields.name,
    position: testimonial.fields.designation,
  }))
}

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
  image:  {
    src: landingPage.items[0].fields.featureImage.fields.file.url,
    alt: landingPage.items[0].fields.featureImage.fields.title,
  },
};

const featureList = {
  title: landingPage.items[0].fields.featureListTitle,
  description: landingPage.items[0].fields.featureListSubtitle,
  featureListItems: landingPage.items[0].fields.featureList?.map((item) => ({
    bgColor: item.fields.bgColor,
    iconColor: item.fields.color,
    iconPath: item.fields.icon,
    title: item.fields.title,
    description: item.fields.description,
  })) || [],
}

const statsTitle =
  "The only platform that creates unique & rare UI Kits with TailwindCSS";
const statsGradient = `linear-gradient(
  90deg,
  #44ff9a -0.55%,
  #44b0ff 22.86%,
  #8b44ff 48.36%,
  #ff6644 73.33%,
  #ebff70 99.34%
)`;
const statsItems = [
  { value: "110+", label: "Blocks" },
  { value: "29", label: "Templates" },
  { value: "3400+", label: "Customers" },
  { value: "2844", label: "Support Tickets" },
];
</script>
