
export const site = {
  name: "Hansung Noah Kang",
  subtitle: "Computer Science graduate, NYC metro area.",
  description:
    "Hansung Noah Kang is a Computer Science graduate from Boston College, based in the NYC metro area and looking for software engineering roles.",
  year: 2026,
};

export const links = {
  email: "kang.noah04@gmail.com",
  github: "https://github.com/nk2417",
  linkedin: "https://www.linkedin.com/in/hansungkang/",
};

export type ProjectLink = { label: "GitHub" | "Live"; href: string };

export type Project = {
  title: string;
  dates: string;
  description: string;
  bullets: string[];
  tags: string[];
  meta: string[];
  links: ProjectLink[];
  stats?: { value: string; label: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "TA Connect",
    dates: "Jan 2026 to Present",
    featured: true,
    description:
      "A full-stack Django platform that replaced the Boston College CS department's email and spreadsheet TA hiring process. In production since spring 2026.",
    stats: [
      { value: "110+", label: "users" },
      { value: "150+", label: "applications" },
      { value: "65", label: "TA positions" },
      { value: "50", label: "courses" },
    ],
    bullets: [
      "Built the V2 interface for students, professors, and admins, plus the application and offer flow that limits each student to one TA role and auto-closes full courses.",
      "Added custom course questions, an in-app course editor, and an admin onboarding tracker with Excel export and reminder emails.",
    ],
    tags: ["Python", "Django", "PostgreSQL", "Google OAuth"],
    meta: [
      "Independent study advised by Prof. Maíra Marques Samary",
      "Team of 3",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/mairasamary/bc-tasystem-2024/tree/fall_2026_improvements",
      },
    ],
  },
  {
    title: "Song Hit Prediction from Lyrics",
    dates: "Jan 2026 to May 2026",
    description:
      "Predicts whether a song becomes a Billboard Hot 100 hit using only its lyrics, across 36,000+ songs from the 1960s to the 2020s.",
    bullets: [
      "Proposed the project and built the Bag-of-Words pipeline plus the Naive Bayes and Decision Tree models.",
      "Reached 87% accuracy and 0.65 F1 on hits with Naive Bayes, about 3x a random baseline.",
    ],
    tags: ["Python", "scikit-learn", "Pandas", "Google Colab"],
    meta: ["NLP course", "Team of 4"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/nk2417/Song-Hit-Prediction-from-Lyrics",
      },
    ],
  },
  {
    title: "Inouma",
    dates: "Aug 2025 to Dec 2025",
    description:
      "A Django web app for The Hatchery, Boston College's student makerspace, where students reserve machines and book trainings and staff manage equipment and shift schedules.",
    bullets: [
      "Built user profiles and role management, and fixed the machine booking and training flows with certification tracking.",
      "Built a one-command demo setup that fills a fresh database with test users, trainings, certifications, and sessions, plus a cleanup script to reset it.",
    ],
    tags: ["Python", "Django", "PostgreSQL"],
    meta: ["Software Engineering course", "Team of 5"],
    links: [
      { label: "GitHub", href: "https://github.com/CSCI3356-Fall2025/Inouma" },
    ],
  },
  {
    title: "TruthLens",
    dates: "Aug 2025 to Dec 2025",
    description:
      "A study of how well fake news classifiers hold up on unfamiliar news, trained on 44,000+ articles and tested on PolitiFact and GossipCop.",
    bullets: [
      "Built and tuned SVM models across three datasets, with the best feature strategy beating the Logistic Regression baseline by 1.8%.",
      "Designed mixed-dataset training for three classical models, improving SVM cross-domain accuracy by up to 10 points.",
    ],
    tags: ["Python", "scikit-learn", "Pandas"],
    meta: ["Machine Learning course", "Team of 3"],
    links: [{ label: "GitHub", href: "https://github.com/nk2417/TruthLens" }],
  },
];

export type Job = {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  dates: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    role: "Web Developer",
    company: "Lourdes Center",
    companyUrl: "http://lourdescenter.org/",
    location: "Boston, MA",
    dates: "Jan 2026 to May 2026",
    bullets: [
      "Rebuilt the site for older visitors with larger text and simpler navigation, growing online customers.",
      "Launched PayPal ordering with a JavaScript cart, now handling 75 to 125 orders weekly.",
    ],
  },
  {
    role: "Technology Consultant",
    company: "Boston College Information Technology Services",
    companyUrl: "https://www.bc.edu/content/bc-web/offices/its/about/departments.html#support",
    location: "Chestnut Hill, MA",
    dates: "Aug 2023 to May 2026",
    bullets: [
      "Managed software deployment and OS updates for 450+ devices across five campus libraries using Jamf and Altiris.",
      "Monitored a 10,000+ ticket database in TeamDynamix, triaging requests and dispatching on-site support.",
    ],
  },
  {
    role: "Security Analyst Intern",
    company: "Boston College Information Technology Assurance",
    companyUrl: "https://www.bc.edu/content/bc-web/offices/its/about/departments.html#assurance",
    location: "Chestnut Hill, MA",
    dates: "Jan 2024 to May 2025",
    bullets: [
      "Maintained a Django tool for searching campus firewall logs in OpenSearch.",
      "Rewrote its query layer with the OpenSearch client, reducing injection risk and adding structured error handling.",
    ],
  },
  {
    role: "Equity Research Intern",
    company: "Bizantine Capital Management",
    companyUrl: "https://www.bizantine.capital/",
    location: "New York, NY",
    dates: "Jun 2024 to Aug 2024",
    bullets: [
      "Built DCF and comparable company models for 15+ tech companies and forecasted ServiceNow revenue within 3% of reported results.",
    ],
  },
];

export const about = {
  greeting: "Hi, I'm Noah.",
  paragraphs: [
    "Computer Science graduate from Boston College's Morrissey College of Arts and Sciences, with a B.A. in Computer Science and a minor in Finance. Based in the NYC metro area, and currently looking for software engineering roles.",
    "Outside of work I'm on the golf course, in the gym, or out on a run. Away from that, I'm always looking for new R&B to listen to.",
  ],
  headshotAlt: "Portrait of Hansung Noah Kang",
};

export const currently = {
  squat: { label: "Current goal: squat", current: 335, goal: 405 },
  golf: { label: "Golf", items: ["Best 18: 86", "Best 9: 40", "Goal: break 85"] },
  running: {
    label: "Running",
    races: [
      { name: "Cambridge Half", done: true },
      { name: "Brooklyn Half", done: false },
    ],
  },
  song: {
    label: "On repeat",
    title: "SECRET (feat. Raf Sandou)",
    artist: "DIMO REX",
    embedUrl: "https://open.spotify.com/embed/track/0g7lx8BVxUjmUwu6k6gTl8?theme=0",
  },
};

export const aboutPhotos = [
  {
    file: "golf.jpg",
    caption: "On the course",
    alt: "Noah lining up a drive on a tee box, with a fairway and clubhouse behind him under a cloudy sky",
    focus: "50% 50%",
    zoom: 1,
  },
  {
    file: "range.jpg",
    caption: "At the range",
    alt: "Noah hitting from a driving range mat at night, with golf balls scattered across the grass",
    focus: "28% 80%",
    zoom: 1.25,
  },
  {
    file: "hawaii.jpg",
    caption: "Out exploring",
    alt: "Noah stepping into a sticker-covered, graffitied shipping container in a rainforest",
    focus: "100% 100%",
    zoom: 1,
  },
];

export const subtitles = {
  about: "A bit about me, outside the resume.",
  projects: "Products and projects I've helped build.",
  experience: "A running timeline of where I've worked.",
};

export const contact = {
  intro: "I'm always happy to talk about my work or hear about yours. The best way to reach me is email.",
};

export const nav = [
  { href: "/about/", label: "About" },
  { href: "/projects/", label: "Projects" },
  { href: "/experience/", label: "Experience" },
  { href: "/contact/", label: "Contact" },
];
