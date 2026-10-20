// All portfolio content lives here so the site can be updated from the resume in one place.
import Podverse from "../component/Podverse.png"
import Pharma from "../component/Pharma.png"
import Poketrade from "../component/Poketrade.png"
import GTMovie from "../component/GTMovieStore.png"
import MealWiseLogo from "../component/MealWise.png"

export const profile = {
  name: "Aryan Patel",
  role: "Software Engineer",
  tagline: "CS @ Georgia Tech · Prev SWE Intern @ Capital One",
  intro:
    "Third-year computer science student building full-stack and AI-powered software, most recently agentic systems on Capital One's GenAI Platform team.",
  about: [
    "I'm a third-year Computer Science student at Georgia Tech concentrating in Intelligence and Modeling & Simulation. This past summer I was a Software Engineer Intern on Capital One's GenAI Platform team, and I'm currently researching reinforcement learning for autonomous vehicle lane-change control.",
    "I pick up new technologies quickly and do my best work alongside others. I'm always looking for the next opportunity to learn and build something meaningful.",
    "Away from the keyboard you'll find me playing or watching basketball, tennis, and football, reading a good book, or spending time with friends and family.",
  ],
  resumeUrl: "/Aryan_Patel_Resume.pdf",
  email: "arypat2005@gmail.com",
  github: "https://github.com/ARYPAT2005",
  linkedin: "https://www.linkedin.com/in/aryan-patel-76b87a279/",
}

export const education = {
  school: "Georgia Institute of Technology",
  location: "Atlanta, GA",
  degree: "B.S. in Computer Science",
  gpa: "3.94 / 4.0",
  graduation: "Dec 2027",
  concentrations: ["Intelligence", "Modeling & Simulation"],
  honors: ["Dean's List"],
  coursework: [
    "Data Structures & Algorithms",
    "Artificial Intelligence",
    "Computer Organization & Programming",
    "Object-Oriented Programming",
    "Objects & Design",
    "Linear Algebra",
    "Discrete Mathematics",
  ],
}

export type Experience = {
  title: string
  company: string
  location: string
  period: string
  type: string
  bullets: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    title: "Undergraduate Researcher",
    company: "Georgia Institute of Technology",
    location: "Atlanta, GA",
    period: "Aug 2025 – Present",
    type: "Research",
    bullets: [
      "Researching reinforcement learning for autonomous vehicle lane-change control.",
      "Member of the Autonomous and Connected Transportation Driving Simulator team led by Dr. Srinivas Peeta.",
    ],
    technologies: ["Python", "Reinforcement Learning", "Autonomous Vehicles", "Simulation"],
  },
  {
    title: "Software Engineer Intern",
    company: "Capital One",
    location: "McLean, VA",
    period: "Jun 2026 – Aug 2026",
    type: "Internship",
    bullets: [
      "Worked on the GenAI Platform Services team, building with three fellow interns an architecture AI agent that speeds up the design and implementation pipeline for engineers.",
      "Integrated a hybrid-search RAG pipeline across internal design docs and technical specifications, removing the manual work of digging through hundreds of specs.",
      "Benchmarked multi-agent orchestration patterns and built an evaluation suite that systematically scores agent outputs against target outcomes.",
    ],
    technologies: ["GenAI", "RAG", "Multi-Agent Systems", "CI/CD", "Jira"],
  },
  {
    title: "Academic Tutor",
    company: "Knack",
    location: "Atlanta, GA · Hybrid",
    period: "Jul 2025 – Dec 2025",
    type: "Part-time",
    bullets: [
      "Led 1-on-1 tutoring sessions in Object-Oriented Programming, Data Structures, and Discrete Mathematics.",
      "Reinforced core concepts such as inheritance, polymorphism, trees, graphs, combinatorics, and proofs.",
    ],
    technologies: ["Java", "Data Structures", "Discrete Math", "OOP"],
  },
  {
    title: "Software Engineer Intern",
    company: "Biotechnology Skills Development Program",
    location: "Atlanta, GA · Hybrid",
    period: "Mar 2025 – Dec 2025",
    type: "Internship",
    bullets: [
      "Developed the Molecular Evolution Core Lab (MECL) website with the MERN stack to grow the lab's online presence and showcase its research and services.",
      "Built a responsive contact page that lets 20+ clients easily request information.",
      "Implemented and maintained automated Jest tests, improving backend reliability by 25% and reducing bug reports by 40%.",
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Jest"],
  },
]

export type Project = {
  title: string
  summary: string
  bullets: string[]
  technologies: string[]
  image?: string
  // Logos sit on a painted sky instead of filling the frame like screenshots
  logo?: boolean
  github?: string
  live?: string
  demo?: string
  devpost?: string
}

export const projects: Project[] = [
  {
    title: "Recall",
    summary: "A full-text search engine written from scratch in Rust, with every optimization measured by a custom benchmark harness.",
    bullets: [
      "Built tokenization, inverted indexes, multi-term retrieval, and BM25 top-K ranking from scratch.",
      "Parallelized indexing and search across 4 document shards for up to 2.5× faster indexing and 3× faster heavy queries, with rankings identical to the single index.",
      "Implemented galloping search across uneven posting lists, cutting query latency by 6.9×.",
      "Added delta and varint compression to posting lists, reducing peak memory from 127 MB to 53 MB.",
    ],
    technologies: ["Rust", "Multithreading", "BM25", "Inverted Index", "Benchmarking"],
    github: "https://github.com/ARYPAT2005/recall",
  },
  {
    title: "MealWise",
    summary: "An AI-powered meal recommendation system built at a hackathon with a team of four.",
    bullets: [
      "Suggests meals based on each user's preferences, dietary restrictions, and schedule using OpenAI.",
      "Smart grocery shopping workflow that helps users find local stores carrying the ingredients for selected meals.",
      "Organizes weekly meal suggestions to reduce meal-planning time and food waste.",
    ],
    technologies: ["React", "Node.js", "OpenAI API", "DynamoDB"],
    image: MealWiseLogo,
    logo: true,
    github: "https://github.com/JoshuaJ10/MealWise",
    devpost: "https://devpost.com/software/mealwise",
  },
  {
    title: "AWS Podverse",
    summary: "A full-stack podcast platform built from scratch on AWS.",
    bullets: [
      "Used AWS Lambda for serverless compute to absorb variable traffic and cut latency by 50%.",
      "Combined EC2 hosting with Cognito authentication to reach 99.9% platform uptime.",
      "Modeled podcast metadata and user data in DynamoDB and partitioned S3 storage for cost-efficient media delivery.",
    ],
    technologies: ["AWS Lambda", "EC2", "S3", "DynamoDB", "Cognito", "Next.js"],
    image: Podverse,
    github: "https://github.com/ARYPAT2005/AWS-Podcast",
    live: "https://www.podverse.site/",
    demo: "https://drive.google.com/file/d/16cHtIUIzxmvZmcALNuontJ094vGkDHXr/view?usp=sharing",
  },
  {
    title: "Pharma",
    summary: "An AI study companion and flashcard generator for pharmacy students.",
    bullets: [
      "Integrated OpenAI GPT-4o to power a chatbot with real-time, personalized answers.",
      "Built a RESTful Express.js API to manage flashcards and user data in MongoDB.",
      "Secured sessions with JWT authentication, including token refresh and expiry handling.",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Vite"],
    image: Pharma,
    github: "https://github.com/ARYPAT2005/Pharma",
    demo: "https://drive.google.com/file/d/1Pl7ypX87DTAzxwuOtCqxqZR0HkAth2gG/view",
  },
  {
    title: "PokéTrade",
    summary: "A Pokémon card collecting and trading platform built with a team of four.",
    bullets: [
      "Users manage collections, trade directly or via a marketplace, and battle with AI powered by GPT-4o.",
      "Ran sprint planning, stand-ups, and retrospectives with a real-world client using Scrum.",
      "Shipped custom card creation with the DALL·E API, boosting user engagement.",
    ],
    technologies: ["TypeScript", "Django", "React", "OpenAI API", "DALL·E"],
    image: Poketrade,
    github: "https://github.com/ARYPAT2005/Poketrade",
    live: "https://poketrade-s9qx.onrender.com/",
  },
  {
    title: "GT Movie Store",
    summary: "A movie storefront for browsing, reviewing, and ordering films.",
    bullets: [
      "Browse a catalog with names, prices, descriptions, and posters for every film.",
      "Place orders and create, edit, or delete reviews.",
    ],
    technologies: ["Django", "Python"],
    image: GTMovie,
    github: "https://github.com/ARYPAT2005/GTMovieStore",
    demo: "https://drive.google.com/file/d/1Nynd9JZ-M_CRMlcHUQ9WMl2jTWZsuIte/view",
  },
]

export const skillGroups: { label: string; skills: string[] }[] = [
  { label: "Languages", skills: ["Python", "Java", "TypeScript", "JavaScript", "C", "Rust", "HTML/CSS"] },
  {
    label: "AI & Machine Learning",
    skills: ["RAG Pipelines", "Multi-Agent Systems", "Reinforcement Learning"],
  },
  {
    label: "Frameworks & Tools",
    skills: ["React", "Next.js", "Node.js", "Express.js", "Django", "Docker", "Vite", "Tailwind", "Storybook", "Jest", "Git", "CI/CD", "Jira"],
  },
  {
    label: "Cloud & Databases",
    skills: ["AWS EC2", "AWS Lambda", "AWS S3", "DynamoDB", "Cognito", "MongoDB"],
  },
]
