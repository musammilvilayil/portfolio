import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react";

const SITE_TITLE = "Muhammad Musammil A — Junior Full-Stack Developer";
const SITE_DESCRIPTION =
  "Portfolio of Muhammad Musammil A, a BCA graduate and junior full-stack developer from Kollam, Kerala, building MERN, Next.js and cloud-integrated web applications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:image", content: "/cover.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: "/cover.jpg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Muhammad Musammil A",
          jobTitle: "Junior Full-Stack Developer",
          address: {
            "@type": "PostalAddress",
            addressRegion: "Kerala",
            addressCountry: "India",
          },
          sameAs: [
            "https://github.com/musammilvilayil",
            "https://www.linkedin.com/in/muhammad-musammil-dev",
          ],
        }),
      },
    ],
  }),
  component: PortfolioPage,
});

const PROFILE = {
  name: "Muhammad Musammil A",
  title: "Junior Full-Stack Developer",
  location: "Kollam, Kerala, India",
  email: "musammilvilayil@gmail.com",
  phone: "+91 62821 35504",
  github: "https://github.com/musammilvilayil",
  linkedin: "https://www.linkedin.com/in/muhammad-musammil-dev",
  whatsapp: "https://wa.me/916282135504",
};

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const SKILL_GROUPS = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "RBAC", "Socket.IO"],
  },
  {
    title: "Data & Cloud",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Cloudinary", "Docker", "GitHub Actions"],
  },
  {
    title: "Additional",
    icon: Cloud,
    skills: ["Python", "Django", "FastAPI", "AWS Fundamentals", "Vercel", "Render"],
  },
];

const PROJECTS = [
  {
    title: "MEGHAM",
    category: "Cloud Storage Platform",
    description:
      "A full-stack cloud workspace for secure file uploads, organisation, sharing and activity tracking, with role-based dashboards and administrative controls.",
    highlights: [
      "Authentication and role-based access control",
      "MongoDB-backed file metadata and Cloudinary storage",
      "File search, sharing, starred items, trash and activity history",
    ],
    stack: ["Next.js", "TypeScript", "MongoDB", "Cloudinary", "JWT"],
    github: "https://github.com/musammilvilayil/Megham",
    live: "https://megham-six.vercel.app",
    icon: Cloud,
  },
  {
    title: "Projexify",
    category: "Multi-Tenant Project Platform",
    description:
      "A project incubation and delivery platform designed for student project workflows, mentoring, role-based operations, communication and payment-enabled services.",
    highlights: [
      "JWT authentication, security middleware and multi-role workflows",
      "Real-time features, uploads, notifications and scheduled tasks",
      "AI integration with payment gateway support",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "Gemini AI"],
    github: "https://github.com/musammilvilayil/Projexify",
    live: null,
    icon: Layers3,
  },
  {
    title: "SHE-Shield",
    category: "Women’s Safety System",
    description:
      "A safety-focused mobile and wearable concept combining emergency communication, location sharing and hardware-assisted alerts for rapid response situations.",
    highlights: [
      "Emergency alert and trusted-contact workflow",
      "Mobile application and wearable-device integration concept",
      "ESP32, BLE and GSM-based safety architecture",
    ],
    stack: ["Mobile App", "Node.js", "MongoDB", "ESP32", "BLE / GSM"],
    github: "https://github.com/musammilvilayil/she-sheild",
    live: null,
    icon: Smartphone,
  },
];

const EXPERIENCE_POINTS = [
  "Built academic and freelance web applications from requirements through deployment.",
  "Worked across frontend interfaces, REST APIs, authentication, databases and cloud file storage.",
  "Communicated with clients and students to understand requirements, revise features and deliver usable solutions.",
  "Used Git and GitHub for version control, project publishing and deployment workflows.",
];

function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-ink text-text">
      <div className="pointer-events-none fixed inset-0 -z-10 terminal-grid opacity-50" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-ink/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="#home" className="flex items-center gap-3 font-display font-bold">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-voltage text-white voltage-glow">
              M
            </span>
            <span>
              musammil<span className="text-voltage-2">.dev</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-text-2 transition hover:bg-ink-3 hover:text-text"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${PROFILE.email}`}
              className="hidden rounded-xl bg-voltage px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-voltage-2 sm:inline-flex"
            >
              Hire Me
            </a>
            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-ink-2 md:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-border bg-ink-2 px-4 py-3 md:hidden">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm text-text-2 hover:bg-ink-3 hover:text-text"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section id="home" className="relative mx-auto max-w-6xl px-4 pb-24 pt-36 md:pb-32 md:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-border-2 bg-ink-2 px-4 py-2 font-mono text-xs text-text-2"
        >
          <span className="h-2 w-2 rounded-full bg-success pulse-dot" />
          Open to junior full-stack and MERN opportunities
        </motion.div>

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1fr_340px]">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="font-mono text-sm uppercase tracking-[0.25em] text-voltage-2"
            >
              Software Engineer · Full-Stack Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.65 }}
              className="mt-5 max-w-4xl font-display text-[clamp(44px,7vw,82px)] font-extrabold leading-[0.98] tracking-[-0.055em]"
            >
              Building scalable, secure and <span className="text-voltage-2 text-glow">useful</span> software.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-7 max-w-2xl text-lg leading-8 text-text-2"
            >
              I’m {PROFILE.name}, a BCA graduate and junior full-stack developer focused on React,
              Next.js, Node.js and MongoDB. I build practical products with authentication, APIs,
              databases, dashboards and cloud integrations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-voltage px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-voltage-2 voltage-glow"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-border-2 bg-ink-2 px-6 py-3.5 font-semibold transition hover:border-voltage"
              >
                Contact Me <Mail className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="mt-8 flex flex-wrap items-center gap-5 text-sm text-text-3"
            >
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-voltage-2">
                <Github className="h-5 w-5" /> GitHub
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-voltage-2">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {PROFILE.location}
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative mx-auto w-full max-w-[340px]"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-voltage/15 blur-3xl" />
            <div className="relative rounded-[2rem] border border-border-2 bg-ink-2 p-4 shadow-2xl">
              <img
                src="/profile.webp"
                alt="Muhammad Musammil A"
                className="aspect-[4/5] w-full rounded-[1.4rem] object-cover object-top"
              />
              <div className="mt-4 rounded-xl border border-border bg-ink-3 p-4">
                <p className="font-display font-bold">{PROFILE.name}</p>
                <p className="mt-1 text-sm text-text-2">{PROFILE.title}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid overflow-hidden rounded-2xl border border-border bg-ink-2 sm:grid-cols-3">
          {[
            { value: "1+ Year", label: "Freelance project experience", icon: BriefcaseBusiness },
            { value: "April 2026", label: "BCA graduation completed", icon: GraduationCap },
            { value: "3", label: "Featured real-world projects", icon: Sparkles },
          ].map((stat) => (
            <div key={stat.label} className="border-b border-border p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
              <stat.icon className="h-5 w-5 text-voltage-2" />
              <p className="mt-4 font-display text-2xl font-bold">{stat.value}</p>
              <p className="mt-1 text-sm text-text-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-border bg-ink-2/55 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
          <div>
            <SectionLabel>About Me</SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
              A developer focused on practical product delivery.
            </h2>
          </div>
          <div className="space-y-5 text-[17px] leading-8 text-text-2">
            <p>
              I completed my Bachelor of Computer Applications in April 2026 at Sree Narayana College
              of Technology, Kollam. My work focuses on full-stack JavaScript development and solving
              real user problems through clear interfaces and reliable backend workflows.
            </p>
            <p>
              Through academic and freelance projects, I have worked with authentication, role-based
              permissions, REST APIs, file uploads, databases, dashboards, real-time communication and
              deployment. I am currently seeking a junior developer, trainee or internship opportunity
              where I can contribute and grow with an engineering team.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 py-24">
        <SectionLabel>Technical Skills</SectionLabel>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-5">
          <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
            Full-stack skills organised by responsibility.
          </h2>
          <p className="max-w-md text-sm leading-7 text-text-2">
            Strongest in the MERN ecosystem, with growing experience in Next.js, TypeScript, SQL,
            cloud deployment and DevOps workflows.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-2xl border border-border bg-ink-2 p-6 transition hover:-translate-y-1 hover:border-voltage"
            >
              <group.icon className="h-6 w-6 text-voltage-2" />
              <h3 className="mt-5 font-display text-xl font-bold">{group.title}</h3>
              <ul className="mt-5 space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5 text-sm text-text-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-voltage" /> {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="projects" className="border-y border-border bg-ink-2/55 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionLabel>Featured Projects</SectionLabel>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
            Products that demonstrate end-to-end development.
          </h2>

          <div className="mt-12 space-y-5">
            {PROJECTS.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl border border-border bg-ink p-7 transition hover:border-voltage md:p-9"
              >
                <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-voltage-muted text-voltage-2">
                      <project.icon className="h-7 w-7" />
                    </div>
                    <p className="mt-5 font-mono text-xs uppercase tracking-[0.22em] text-voltage-2">{project.category}</p>
                    <h3 className="mt-2 font-display text-3xl font-bold">{project.title}</h3>
                  </div>

                  <div>
                    <p className="max-w-3xl text-[17px] leading-8 text-text-2">{project.description}</p>
                    <ul className="mt-6 grid gap-3 md:grid-cols-3">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm leading-6 text-text-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.stack.map((technology) => (
                        <span key={technology} className="rounded-lg border border-border bg-ink-2 px-3 py-1.5 font-mono text-xs text-text-2">
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-border-2 px-4 py-2.5 text-sm font-semibold transition hover:border-voltage"
                      >
                        <Github className="h-4 w-4" /> Source Code
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-voltage px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-voltage-2"
                        >
                          <ExternalLink className="h-4 w-4" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-4 py-24">
        <SectionLabel>Experience & Education</SectionLabel>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="rounded-3xl border border-border bg-ink-2 p-7 md:p-9">
            <BriefcaseBusiness className="h-7 w-7 text-voltage-2" />
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-text-3">2025 — Present</p>
            <h3 className="mt-2 font-display text-2xl font-bold">Freelance Full-Stack Development</h3>
            <p className="mt-2 text-sm text-text-2">Independent project development · Kerala, India</p>
            <ul className="mt-6 space-y-4">
              {EXPERIENCE_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-7 text-text-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-success" /> {point}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-border bg-ink-2 p-7 md:p-9">
            <GraduationCap className="h-7 w-7 text-voltage-2" />
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-text-3">Completed April 2026</p>
            <h3 className="mt-2 font-display text-2xl font-bold">Bachelor of Computer Applications</h3>
            <p className="mt-2 text-sm text-text-2">Sree Narayana College of Technology, Kollam</p>
            <p className="mt-6 leading-8 text-text-2">
              Studied programming, web development, database systems, software engineering and computer
              fundamentals while building academic and client-oriented applications.
            </p>
            <div className="mt-7 rounded-2xl border border-border bg-ink-3 p-5">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-success" />
                <p className="font-semibold">Available to join immediately</p>
              </div>
              <p className="mt-2 text-sm leading-6 text-text-2">
                Open to opportunities in Kochi, Thiruvananthapuram, Bengaluru, Hyderabad and remote teams.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-ink-2/60 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-[2rem] border border-border-2 bg-ink p-8 md:p-12">
            <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <SectionLabel>Contact</SectionLabel>
                <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-6xl">
                  Looking for a committed junior developer?
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-text-2">
                  I’m available for junior full-stack, MERN, frontend, backend, trainee and internship opportunities.
                </p>
              </div>
              <a
                href={`mailto:${PROFILE.email}?subject=Developer Opportunity for Muhammad Musammil`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-voltage px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-voltage-2 voltage-glow"
              >
                Send an Email <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid gap-3 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
              <ContactLink icon={Mail} label="Email" value={PROFILE.email} href={`mailto:${PROFILE.email}`} />
              <ContactLink icon={MessageCircle} label="WhatsApp" value={PROFILE.phone} href={PROFILE.whatsapp} />
              <ContactLink icon={Github} label="GitHub" value="musammilvilayil" href={PROFILE.github} />
              <ContactLink icon={Linkedin} label="LinkedIn" value="muhammad-musammil-dev" href={PROFILE.linkedin} />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-4 py-8 text-center text-sm text-text-3">
        © {new Date().getFullYear()} Muhammad Musammil A · Built with React, TypeScript and Tailwind CSS.
      </footer>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-voltage-2">
      <span className="h-px w-8 bg-voltage" /> {children}
    </div>
  );
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="rounded-2xl border border-border bg-ink-2 p-5 transition hover:border-voltage"
    >
      <Icon className="h-5 w-5 text-voltage-2" />
      <p className="mt-4 text-xs uppercase tracking-[0.18em] text-text-3">{label}</p>
      <p className="mt-1 break-all text-sm text-text-2">{value}</p>
    </a>
  );
}
