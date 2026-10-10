// ─── ALL PORTFOLIO CONTENT ─── Single source of truth ───

export const meta = {
  title: "Nithish Reddy | UI/UX & Product Designer",
  description:
    "Portfolio of Nithish Reddy — UI/UX & Product Designer who builds AI-native products people actually understand.",
  ogImage: "/og-image.png",
  favicon: "/favicon.svg",
};

export const nav = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export const hero = {
  badge: "OPEN TO FULL-TIME & INTERNSHIPS · BANGALORE, CHENNAI & BEYOND",
  name: "NITHISH REDDY",
  subtitle: "UI/UX & PRODUCT DESIGNER | AI-NATIVE",
  chips: ["Figma", "UX Research", "AI Tools", "Front-End"],
  cta: [
    { label: "View Projects", to: "/projects", type: "primary" },
    { label: "Download Resume", href: "/resume.pdf", type: "secondary" },
  ],
  photo: "/me.png",
};

export const about = {
  sectionNum: "01",
  eyebrow: "ABOUT / GENERAL",
  heading: "WHO I AM",
  text: `I design products people actually understand, then I use AI to build them faster. I'm a final-year AI & Data Science student who took WorrkFree from user flows to a live deployment, owning every decision in between. I've torn down Swiggy's ordering journey to find where users drop off, shipped client designs at a startup, and I move fast without cutting corners. I'm looking for a full-time role where I can own real product work from day one.`,
  highlights: [
    "design products people actually understand",
    "use AI to build them faster",
    "live deployment",
    "full-time role",
  ],
  tags: [
    "UI/UX Design",
    "Product Thinking",
    "AI Workflows",
    "Ships Fast",
  ],
};

export const skills = {
  sectionNum: "02",
  eyebrow: "TOOLS / STACK",
  heading: "TECHNICAL SKILLS",
  groups: [
    {
      label: "Design & Research",
      items: [
        "Figma",
        "Canva",
        "Wireframing",
        "User Flow Mapping",
        "Prototyping",
        "UX/Product Teardown",
        "User Research (Basics)",
      ],
    },
    {
      label: "Front-End",
      items: ["HTML", "CSS", "JavaScript", "Responsive/Mobile-First UI"],
    },
    {
      label: "AI & Automation",
      items: [
        "Google Gemini",
        "Claude API",
        "ChatGPT API",
        "Prompt Engineering",
        "Make.com",
        "Zapier",
        "n8n",
      ],
    },
    {
      label: "Product & Tools",
      items: ["JIRA (Familiar)", "GitHub", "Agile/Scrum"],
    },
    {
      label: "Data",
      items: ["Python (Basics)", "SQL (Basics)", "Pandas", "Scikit-learn"],
    },
    {
      label: "Currently Learning",
      items: ["Scrum (SFC in progress)", "React", "Python", "deeper SQL"],
    },
  ],
};

export const numbers = {
  sectionNum: "03",
  eyebrow: "IMPACT / METRICS",
  heading: "BY THE NUMBERS",
  stats: [
    { value: 6, suffix: "+", label: "Projects Built" },
    { value: 10, suffix: "+", label: "Client Design Assets" },
    { value: 3, suffix: "", label: "Hackathons" },
    { value: 1, suffix: "", label: "Startup Internship" },
  ],
};

export const projects = [
  {
    slug: "worrkfree",
    title: "WorrkFree",
    date: "Apr – Jul 2026",
    category: "Product",
    iconType: "layout-dashboard",
    isFeatured: true,
    hasCaseStudy: true,
    cardSummary:
      "AI-powered agile project management platform with sprint planning, Kanban board, and real-time collaboration.",
    description:
      "AI-powered agile project management platform. Jira-inspired workspace with sprint planning, Kanban board, backlog, and real-time collaboration. Gemini auto-generates issue descriptions, acceptance criteria, story points, and full sprint plans from a single goal prompt. Designed end to end and deployed live.",
    overview:
      "AI-powered agile project management platform. Jira-inspired workspace with sprint planning, Kanban board, backlog, and real-time collaboration. Gemini auto-generates issue descriptions, acceptance criteria, story points, and full sprint plans from a single goal prompt. Designed end to end and deployed live.",
    role: "Owned end-to-end product design: user flows, feature scope, and interface decisions on what to build and why. Took it from concept to live deployment, handling the full build and production setup independently.",
    features: [
      "Jira-inspired workspace with sprint planning, Kanban board, and backlog",
      "Real-time team collaboration",
      "Gemini auto-generates issue descriptions, acceptance criteria, story points, and full sprint plans from a single goal prompt",
      "Designed end to end and deployed live",
    ],
    learnings: "",
    tech: ["Gemini API", "Figma"],
    links: {
      live: "https://worrkfree-app.onrender.com/",
    },
  },
  {
    slug: "swiggy-teardown",
    title: "Swiggy Product Teardown",
    date: "May 2026",
    category: "Design",
    iconType: "search",
    isFeatured: false,
    hasCaseStudy: true,
    cardSummary:
      "Structured PM-style teardown of Swiggy's ordering journey, mapping UX gaps and drop-off points in Figma.",
    description:
      "Structured PM-style teardown of Swiggy's ordering journey, mapping UX gaps and drop-off points in Figma. Proposed a 'Health Mode' feature for an unaddressed fitness-conscious segment.",
    overview:
      "Structured PM-style teardown of Swiggy's ordering journey, mapping UX gaps and drop-off points in Figma. Proposed a 'Health Mode' feature for an unaddressed fitness-conscious segment.",
    role: "Conducted a structured PM-style teardown of Swiggy's core features and mapped end-to-end user flows in Figma to pinpoint friction in the ordering journey.",
    features: [
      "Structured PM-style teardown of Swiggy's ordering journey",
      "Mapped UX gaps and drop-off points in Figma",
      "Proposed a 'Health Mode' feature for an unaddressed fitness-conscious segment",
    ],
    learnings: "",
    tech: ["Figma", "UX Research", "Product Thinking"],
    links: {
      readTeardown:
        "https://docs.google.com/document/d/1xzbwBORRNtfu1fvRB0JrdYacEKo-hj8KaKL7OM7-3xs/edit?usp=sharing",
    },
  },
  {
    slug: "trust-dashboard",
    title: "Trust Dashboard",
    subtitle: "Hushh Hackathon",
    date: "Mar 2026",
    category: "Design",
    iconType: "shield-check",
    isFeatured: false,
    hasCaseStudy: true,
    cardSummary:
      "Data privacy dashboard showing how user data is accessed across apps and devices, with real-time alerts.",
    description:
      "Data privacy dashboard showing how user data is accessed across apps and devices, with real-time alerts for suspicious data sharing. Prototype delivered under live hackathon conditions.",
    overview:
      "Data privacy dashboard showing how user data is accessed across apps and devices, with real-time alerts for suspicious data sharing. Prototype delivered under live hackathon conditions.",
    role: "Designed the data privacy dashboard UI and the real-time alert UX for suspicious data sharing, and delivered a working prototype end to end under live hackathon time constraints.",
    features: [
      "Data privacy dashboard showing how user data is accessed across apps and devices",
      "Real-time alerts for suspicious data sharing",
      "Prototype delivered under live hackathon conditions",
    ],
    learnings: "",
    tech: ["Figma", "Privacy UX"],
    links: {
      github: "https://github.com/reddynithish1/trust-dashboard-hushh",
    },
  },
  {
    slug: "sentiment-analysis",
    title: "Sentiment Analysis System",
    date: "Jan 2026",
    category: "AI",
    iconType: "bar-chart-3",
    isFeatured: false,
    hasCaseStudy: false,
    cardSummary:
      "NLP model classifying social media reviews as positive, negative, or neutral with ML models.",
    description:
      "NLP model classifying social media reviews as positive, negative, or neutral. Cleaned and preprocessed real social media datasets and applied ML classification models.",
    overview:
      "NLP model classifying social media reviews as positive, negative, or neutral. Cleaned and preprocessed real social media datasets and applied ML classification models.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    links: {
      github: "https://github.com/reddynithish1",
    },
  },
  {
    slug: "ai-chatbot",
    title: "AI Chatbot Application",
    date: "2025",
    category: "AI",
    iconType: "message-square",
    isFeatured: false,
    hasCaseStudy: false,
    cardSummary:
      "Domain-specific chatbot integrating Claude and ChatGPT APIs with structured prompt engineering.",
    description:
      "Domain-specific chatbot integrating Claude and ChatGPT APIs with prompt engineering, focused on response accuracy through structured prompting and context management.",
    overview:
      "Domain-specific chatbot integrating Claude and ChatGPT APIs with prompt engineering, focused on response accuracy through structured prompting and context management.",
    tech: ["Claude API", "ChatGPT API", "Prompt Engineering"],
    links: {
      github: "https://github.com/reddynithish1",
    },
  },
  {
    slug: "social-media-app",
    title: "Front-End Social Media App",
    date: "2024",
    category: "Code",
    iconType: "code-2",
    isFeatured: false,
    hasCaseStudy: false,
    cardSummary:
      "Fully responsive social media interface built with mobile-first design principles.",
    description:
      "Fully responsive social media interface built with mobile-first design principles.",
    overview:
      "Fully responsive social media interface built with mobile-first design principles.",
    tech: ["HTML", "CSS", "JavaScript", "Mobile-First"],
    links: {
      github: "https://github.com/reddynithish1",
    },
  },
];

export const journey = {
  sectionNum: "05",
  eyebrow: "PATH / BACKGROUND",
  heading: "EXPERIENCE & EDUCATION",
  timeline: [
    {
      type: "work",
      title: "Graphic Designer Intern",
      org: "SocialMM",
      orgNote: "digital marketing startup",
      date: "Dec 2025 – Jan 2026",
      bullets: [
        "Delivered 10+ client assets (logos, banners, social creatives) in Figma and Canva",
        "Completed 3+ client projects end to end",
        "Recognised by the Co-Founder for fast learning and reliable delivery",
      ],
    },
    {
      type: "education",
      title: "B.Tech, Artificial Intelligence & Data Science",
      org: "Dhanalakshmi Srinivasan University",
      date: "2023 – 2027",
      bullets: ["CGPA 7.5"],
    },
    {
      type: "cert",
      title: "Certifications",
      items: [
        "SQL (Basic) — HackerRank, May 2026",
        "Scrum Fundamentals Certified (SFC) — SCRUMstudy, in progress",
      ],
    },
    {
      type: "activity",
      title: "Activities & Events",
      items: [
        "Hushh Hackathon",
        "Hack-O-Verse 2024",
        "Smartathon",
        "AICTE National Idea Research",
        "Startup Pitch Event",
        "ML / Python / Web Dev workshops",
      ],
    },
  ],
};

export const contact = {
  sectionNum: "06",
  eyebrow: "CONNECT / REACH OUT",
  heading: "LET'S BUILD SOMETHING",
  subtitle:
    "Have an open role, an exciting project, or want to discuss AI product design? Reach out directly.",
  email: "reddynithishkanji1@gmail.com",
  links: [
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/reddynithish",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      url: "https://github.com/reddynithish1",
      icon: "github",
    },
  ],
};

export const footer = {
  text: "Nithish Reddy © 2026",
};
