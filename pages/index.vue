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
      :title="featureListTitle"
      :description="featureListDescription"
      :features="featureListItems"
    />
    <Testimonial1
      :subtitle="testimonialSubtitle"
      :title="testimonialTitle"
      :testimonials="testimonialItems"
    />
    <Stats1
      :title="statsTitle"
      :gradientBackground="statsGradient"
      :stats="statsItems"
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


console.log(JSON.stringify(landingPage, null, 2));


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

const testimonialSubtitle = "3940+ Happy EasyHR Users";
const testimonialTitle = "What our customers say";
const testimonialItems = [
  {
    image: "https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/4/woman.png",
    quote:
      "We love EasyHR! Our HR team was using it for their projects, so we already knew what kind of efficiency they want.",
    name: "Jane Doe",
    position: "HR Manager, Tech Co.",
  },
  {
    image: "https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/4/man.png",
    quote:
      "EasyHR has streamlined our HR processes and saved us countless hours. It's a game-changer!",
    name: "John Smith",
    position: "CEO, StartUp Inc.",
  },
];
const logos = landingPage.items[0].fields.logos.map((logo) => ({
  src: logo.fields.file.url,
  alt: logo.fields.title,
}));

const featureSection = {
  topTag: "Powerful HR Features",
  headerFeature: "Simplify Your HR Management",
  items: [
    {
      iconColor: "text-blue-500",
      iconPath:
        "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      title: "Employee Management",
      description:
        "Easily manage employee data, profiles, and documents in one centralized system.",
    },
    {
      iconColor: "text-green-500",
      iconPath:
        "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
      title: "Time & Attendance",
      description:
        "Track employee attendance, manage leave requests, and generate reports effortlessly.",
    },
    {
      iconColor: "text-purple-500",
      iconPath:
        "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Performance Management",
      description:
        "Set goals, conduct reviews, and track employee performance with ease.",
    },
    {
      iconColor: "text-yellow-500",
      iconPath:
        "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
      title: "Payroll Processing",
      description:
        "Automate payroll calculations, tax deductions, and generate pay slips efficiently.",
    },
  ],
  image: {
    src: "/images/emp-list.webp",
    alt: "Employee Management Dashboard",
  },
};

const featureListTitle = "Our Amazing Features";
const featureListDescription =
  "Discover the powerful features that make our product stand out.";
const featureListItems = [
  {
    bgColor: "text-blue-100",
    svgWidth: "66",
    svgHeight: "68",
    svgViewBox: "0 0 66 68",
    bgPath:
      "M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z",
    iconColor: "text-blue-600",
    iconPath:
      "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Analytics",
    description:
      "Get a better understanding of your workforce with our advanced analytics tools.",
  },
  {
    bgColor: "text-green-100",
    svgWidth: "66",
    svgHeight: "68",
    svgViewBox: "0 0 66 68",
    bgPath:
      "M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z",
    iconColor: "text-green-600",
    iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Time Tracking",
    description:
      "Accurately track employee hours and manage overtime with ease.",
  },
  {
    bgColor: "text-purple-100",
    svgWidth: "66",
    svgHeight: "68",
    svgViewBox: "0 0 66 68",
    bgPath:
      "M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z",
    iconColor: "text-purple-600",
    iconPath:
      "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-1m-6-6v6m-2-6V9a2 2 0 012-2h2a2 2 0 012 2v2m-6 12h6",
    title: "Performance Reviews",
    description:
      "Streamline the performance review process with customizable templates and automated workflows.",
  },
  {
    bgColor: "text-yellow-100",
    svgWidth: "66",
    svgHeight: "68",
    svgViewBox: "0 0 66 68",
    bgPath:
      "M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z",
    iconColor: "text-yellow-600",
    iconPath:
      "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Payroll Management",
    description:
      "Automate payroll calculations, tax deductions, and generate pay slips efficiently.",
  },
  {
    bgColor: "text-red-100",
    svgWidth: "66",
    svgHeight: "68",
    svgViewBox: "0 0 66 68",
    bgPath:
      "M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z",
    iconColor: "text-red-600",
    iconPath:
      "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Leave Management",
    description:
      "Simplify leave requests, approvals, and tracking for both employees and managers.",
  },
  {
    bgColor: "text-indigo-100",
    svgWidth: "66",
    svgHeight: "68",
    svgViewBox: "0 0 66 68",
    bgPath:
      "M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z",
    iconColor: "text-indigo-600",
    iconPath:
      "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",
    title: "Recruitment",
    description:
      "Streamline your hiring process with applicant tracking and interview scheduling tools.",
  },
  {
    bgColor: "text-pink-100",
    svgWidth: "66",
    svgHeight: "68",
    svgViewBox: "0 0 66 68",
    bgPath:
      "M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z",
    iconColor: "text-pink-600",
    iconPath:
      "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Compliance",
    description:
      "Stay compliant with labor laws and regulations with our built-in compliance tools.",
  },
  {
    bgColor: "text-teal-100",
    svgWidth: "66",
    svgHeight: "68",
    svgViewBox: "0 0 66 68",
    bgPath:
      "M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z",
    iconColor: "text-teal-600",
    iconPath:
      "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    title: "Training & Development",
    description:
      "Manage employee training programs and track skill development across your organization.",
  },
  {
    bgColor: "text-orange-100",
    svgWidth: "66",
    svgHeight: "68",
    svgViewBox: "0 0 66 68",
    bgPath:
      "M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z",
    iconColor: "text-orange-600",
    iconPath:
      "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Employee Self-Service",
    description:
      "Empower employees with self-service portals for accessing information and making requests.",
  },
];

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
