export type Project = {
  name: string;
  label: string;
  description: string;
  stack: string[];
  github: string;
  live?: string;
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Responsive UI"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "JWT", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Workflow",
    items: ["Git & GitHub", "Docker", "Vite", "Cloudinary", "Deployment", "AI-assisted development"],
  },
];

export const timeline = [
  {
    period: "2025 — Present",
    title: "Freelance Full-Stack Developer",
    place: "Independent",
    description:
      "Built and refined web products for academic and client use, focusing on responsive interfaces, API integration and practical deployment.",
  },
  {
    period: "April 2026",
    title: "Bachelor of Computer Applications",
    place: "Sree Narayana College of Technology",
    description:
      "Completed BCA with project work in full-stack development, cloud-storage workflows and application security concepts.",
  },
];

export const capabilities = [
  "Responsive web applications",
  "REST API design and integration",
  "Authentication and role-based access",
  "Database-backed product workflows",
  "Deployment troubleshooting",
  "Clean, recruiter-friendly interfaces",
];

export const projects: Project[] = [
  {
    name: "MEGHAM",
    label: "Cloud workspace",
    description:
      "A polished cloud-storage experience with file organization, search, sharing, trash recovery and role-aware dashboard flows.",
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/musammilvilayil/Megham",
    live: "https://megham-six.vercel.app",
  },
  {
    name: "Projexify",
    label: "Project platform",
    description:
      "A full-stack platform designed to organize project delivery, users and reusable academic product workflows.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/musammilvilayil/Projexify",
  },
  {
    name: "SHE-Shield",
    label: "Safety system",
    description:
      "A women’s-safety application concept connecting emergency actions, location sharing and wearable-device workflows.",
    stack: ["Mobile", "IoT", "ESP32", "Location services"],
    github: "https://github.com/musammilvilayil/she-sheild",
  },
];
