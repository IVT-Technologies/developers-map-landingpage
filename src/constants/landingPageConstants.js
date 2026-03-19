export const NAV_ITEMS = ["Home", "Features", "User Roles", "How It Works", "Pricing"];

export const LOGIN_URL = "https://app.developersmap.ai/login";
export const SIGNUP_URL = "https://app.developersmap.ai/signup";

export const NAV_LINK_HREFS = {
  Home: "/#home",
  Features: "/#features",
  "User Roles": "/#user-roles",
  "How It Works": "/#how-it-works",
  Pricing: "/#pricing",
};

export const HERO_BACKGROUND_IMAGE = "/heroSection.png";

export const FEATURES = [
  {
    title: "Interactive Map Interface",
    description:
      "Engage properties on an interactive map with advanced filtering, clustering, and detailed project details.",
    icon: "/features/feature1.svg",
  },
  {
    title: "Auto-Generated Brochures",
    description:
      "Create professional multilingual property brochures instantly with customizable templates and full details.",
    icon: "/features/feature2.svg",
  },
  {
    title: "Multi-Role Management",
    description:
      "Support for seven user roles including CEO, Platform Admin, Developer Admin, Agency Admin, and Agent control.",
    icon: "/features/feature3.svg",
  },
  {
    title: "Developer & Agency Tools",
    description:
      "Comprehensive dashboards for agencies to manage projects, units, teams, and sales communication.",
    icon: "/features/feature4.svg",
  },
  {
    title: "Resale Marketplace",
    description:
      "Enable approved resale listings with direct owner controls and transparent client contact options.",
    icon: "/features/feature5.svg",
  },
  {
    title: "Secure Authentication",
    description:
      "Advanced security with 2FA support, role-based access control, and flexible subscription management.",
    icon: "/features/feature6.svg",
  },
  {
    title: "Multilingual Support",
    description:
      "Native support for English, Russian, Chinese, and Arabic with smart translation workflows.",
    icon: "/features/feature7.svg",
  },
  {
    title: "Real-Time Updates",
    description:
      "Instant notifications for registration approvals, role updates, brochure expirations, and tracking events.",
    icon: "/features/feature8.svg",
  },
];

export const ROLE_CARDS = [
  {
    title: "Developers",
    description:
      "Handle assigned projects and units with limited administrative permissions under developer supervision.",
    badges: ["Admins Management", "Project Editing", "Document Upload", "Unit Management"],
    icon: "/roles/role1.svg",
    accent: "border-l-[#F59E0B]",
    iconBg: "bg-[#F5A524]",
  },
  {
    title: "Agencies",
    description:
      "Oversee agency operations, manage agent teams, and control resale unit listings within local limits.",
    badges: ["Agent Management", "Resale Units", "Team Catalogs"],
    icon: "/roles/role2.svg",
    accent: "border-l-[#22C55E]",
    iconBg: "bg-[#22C55E]",
  },
  {
    title: "Individual Agent",
    description:
      "Independent agents with full profile control, resale listings, and personalized brochure generation.",
    badges: ["Profile Control", "Independent Sales", "Direct Brochures"],
    icon: "/roles/role3.svg",
    accent: "border-l-[#6366F1]",
    iconBg: "bg-[#6366F1]",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    icon: "/howitworks/h1.svg",
    title: "Register & Get Approved",
    description:
      "Submit your registration with company details. Admin review and approval grant account activation and verification.",
  },
  {
    icon: "/howitworks/h2.svg",
    title: "Complete Your Profile",
    description:
      "Set up permissions, dashboards, and management units for a personalized experience.",
  },
  {
    icon: "/howitworks/h3.svg",
    title: "Explore & Manage",
    description:
      "Browse projects on interactive maps, manage your projects, or list resale units based on your role.",
  },
  {
    icon: "/howitworks/h4.svg",
    title: "Generate Brochures",
    description:
      "Create multilingual brochures instantly with your branding and comprehensive property details.",
  },
];

export const PROPERTY_MANAGEMENT_ITEMS = [
  "Interactive map with project pins and clustering",
  "Advanced filtering by country, city, price, size, and more",
  "Comprehensive project information in 6 tabs",
  "Developer and resale unit management",
  "Payment plan visualization and tracking",
  "Document management and downloads",
  "Multi-currency and measurement support",
  "Role-based dashboards and permissions",
];

export const SUBSCRIPTION_PLANS = [
  {
    title: "Monthly",
    subtitle: "Perfect for getting started",
    contact: "Contact Sales",
    period: "per month",
    cta: "Get Started",
    features: [
      "Full platform access",
      "Multilingual support",
      "Brochure generation",
      "Map interface access",
      "Email support",
      "Monthly billing",
    ],
    cardClass: "border-[#E2E8F0]",
    buttonClass: "border border-[#38BDF8] bg-white text-[#334155] hover:bg-[#F8FAFC]",
  },
  {
    title: "6 Months",
    subtitle: "Best value for growing teams",
    contact: "Contact Sales",
    period: "prepaid",
    cta: "Get Started",
    badge: "Popular",
    features: [
      "All monthly features",
      "Priority support",
      "6 months prepayment discount",
      "Advanced analytics",
      "Team training session",
      "Dedicated account manager",
    ],
    cardClass: "border-2 border-[#6366F1] shadow-[0_12px_30px_rgba(99,102,241,0.14)]",
    badgeClass: "bg-[#6366F1]",
    buttonClass: "bg-[#6366F1] text-white hover:bg-[#5558EA]",
    featured: true,
  },
  {
    title: "1 Year",
    subtitle: "Maximum savings for enterprises",
    contact: "Contact Sales",
    period: "prepaid",
    cta: "Get Started",
    badge: "Best Value",
    features: [
      "All 6 month features",
      "Maximum discount",
      "24/7 priority support",
      "Custom integrations",
      "Quarterly business reviews",
      "Early access to new features",
    ],
    cardClass: "border-2 border-[#22C55E] shadow-[0_10px_25px_rgba(34,197,94,0.12)]",
    badgeClass: "bg-[#22C55E]",
    buttonClass: "bg-[#22C55E] text-white hover:bg-[#16A34A]",
  },
];

export const CTA_BACKGROUND_IMAGE = "/startjourney.png";

export const FOOTER_COLUMNS = [
  {
    title: "Platform",
    links: ["Features", "User Roles", "Pricing", "How It Works"],
  },
   {
    title: "Legal",
    links: ["Privacy Policy", "Terms & Conditions"],
  },
  {
    title: "Support",
    links: ["Contact Support"],
  },
  {
    title: "Company",
    links: ["About Us"],
  },
 
];

export const FOOTER_LANGUAGES = ["English", "Russian", "中文", "العربية"];

export const FOOTER_CONTACT_ITEMS = [
  { icon: "/location.svg", text: "Global Operations", alt: "Location icon" },
  { icon: "/email.svg", text: "info@developersmap.net", alt: "Email icon" },
  { icon: "/phone.svg", text: "+1 (555) 123-4567", alt: "Phone icon" },
];

export const FOOTER_SOCIAL_ICONS = [
  { icon: "/socialIcons/facebook.svg", alt: "Facebook" },
  { icon: "/socialIcons/twitter.svg", alt: "Twitter" },
  { icon: "/socialIcons/linkdln.svg", alt: "LinkedIn" },
  { icon: "/socialIcons/instagram.svg", alt: "Instagram" },
];

export const HOME_METADATA = {
  title: "Real Estate Brochure Platform",
  description:
    "Developers Map is a multilingual real estate brochure and property management platform for developers, agencies, and agents.",
  keywords: [
    "real estate landing page",
    "property management platform",
    "multilingual brochures",
    "real estate software",
  ],
  alternates: {
    canonical: "/",
  },
};

export const ABOUT_US_METADATA = {
  title: "About Us",
  description:
    "Learn about Developers Map and our mission to simplify multilingual real estate brochure generation and project management.",
  alternates: {
    canonical: "/about-us",
  },
};

export const ABOUT_US_CONTENT = {
  heading: "About Developers Map",
  paragraphs: [
    "Developers Map is a modern real estate platform focused on multilingual brochure generation and practical property operations. We help teams present projects beautifully, manage data confidently, and collaborate smoothly across roles.",
    "From project discovery to final brochure delivery, our goal is simple: make every workflow faster, clearer, and easier for growing real estate businesses.",
  ],
  image: {
    src: "/house3.jpg",
    alt: "Modern property building",
    width: 900,
    height: 700,
  },
};

export const ABOUT_US_HIGHLIGHTS = [
  {
    title: "Our Mission",
    text: "To empower developers, agencies, and agents with one multilingual platform that simplifies marketing, operations, and sales collaboration.",
  },
  {
    title: "What We Build",
    text: "We build tools for interactive listing discovery, brochure automation, role-based workflows, and reliable communication across teams.",
  },
  {
    title: "Why Developers Map",
    text: "Our product combines performance, clarity, and scalability so real estate teams can move faster without losing control.",
  },
];
