import { useEffect, useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Cloud,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

type Project = {
  name: string;
  index: string;
  type: string;
  description: string;
  stack: string[];
  highlights: string[];
  status: string;
  repo: string;
  live?: string;
  preview: string;
  icon: typeof Code2;
  accent: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    name: "OpsPilot AI",
    index: "01",
    type: "AI + DevOps Incident Intelligence",
    status: "Production-oriented MVP",
    featured: true,
    description:
      "An incident-management platform that turns failed GitHub Actions events into structured evidence, root-cause analysis, confidence scoring and approval-based resolution workflows.",
    highlights: [
      "Verified GitHub workflow webhooks",
      "Evidence-linked failure analysis",
      "PostgreSQL incident history",
      "Redis + BullMQ background jobs",
      "Python FastAPI analysis service",
      "Human approval before code-changing actions",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Redis", "FastAPI", "Docker"],
    repo: "https://github.com/musammilvilayil/OpsPilot-AI-your-flagship",
    live: "https://opspilot-web-ztwr.onrender.com",
    preview: "https://image.thum.io/get/width/1400/crop/820/noanimate/https://opspilot-web-ztwr.onrender.com",
    icon: BrainCircuit,
    accent: "#82cfff",
  },
  {
    name: "Malhar",
    index: "02",
    type: "Cinematic Web Experience",
    status: "Live frontend experience",
    featured: true,
    description:
      "A story-led institutional website with cinematic visual pacing, responsive horizontal journeys, motion-rich galleries and an editorial presentation built for both desktop and mobile.",
    highlights: [
      "GSAP-inspired horizontal story sections",
      "Responsive auto-sliding mobile journeys",
      "Cinematic overlays and image choreography",
      "Motion-focused campus gallery",
      "Performance-conscious responsive behavior",
      "Live deployment on Vercel",
    ],
    stack: ["React", "TypeScript", "Vite", "Motion", "Responsive UI", "Vercel"],
    repo: "https://github.com/musammilvilayil/malhar",
    live: "https://malhar2.vercel.app",
    preview: "https://image.thum.io/get/width/1400/crop/820/noanimate/https://malhar2.vercel.app",
    icon: Sparkles,
    accent: "#66e8ca",
  },
  {
    name: "MEGHAM",
    index: "03",
    type: "Cloud Storage Product Workspace",
    status: "Cloud product MVP",
    featured: true,
    description:
      "A cloud-storage workspace designed around fast file journeys, storage insights, sharing, moderation, activity history and role-aware administration.",
    highlights: [
      "File browser with search and filters",
      "Upload feedback and storage insights",
      "Shared, starred and trash workflows",
      "Activity and audit experiences",
      "Admin member and moderation views",
      "Persistent appearance settings",
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "Cloudinary"],
    repo: "https://github.com/musammilvilayil/Megham",
    live: "https://megham-six.vercel.app",
    preview: "https://image.thum.io/get/width/1400/crop/820/noanimate/https://megham-six.vercel.app",
    icon: Cloud,
    accent: "#a6d8ff",
  },
  {
    name: "Projexify",
    index: "04",
    type: "Learning Project Management Platform",
    status: "Full-stack collaboration platform",
    description:
      "A platform for managing learning projects, student enrollments, mentor relationships, project assets and collaborative virtual-lab workflows.",
    highlights: [
      "Project catalog and asset workflows",
      "Enrollment and progress tracking",
      "Mentor assignment",
      "Virtual-lab file management",
      "Protected REST APIs",
      "Role-based administration",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "REST API", "Jest"],
    repo: "https://github.com/musammilvilayil/Projexify",
    live: "https://projexify.onrender.com",
    preview: "https://image.thum.io/get/width/1400/crop/820/noanimate/https://projexify.onrender.com",
    icon: Code2,
    accent: "#86bfff",
  },
  {
    name: "SHE-Shield",
    index: "05",
    type: "Android + IoT Safety Ecosystem",
    status: "Mobile + wearable prototype",
    description:
      "A multi-trigger safety solution combining an Android app and ESP32 BLE wearable for emergency alerts, location sharing, evidence capture and fallback communication.",
    highlights: [
      "Manual, shake and wearable SOS",
      "GPS and emergency calling",
      "Background evidence capture",
      "Trusted-contact management",
      "ESP32 BLE wearable integration",
      "GSM fallback communication",
    ],
    stack: ["Android", "Java", "Firebase", "BLE", "ESP32", "GPS", "GSM"],
    repo: "https://github.com/musammilvilayil/she-sheild",
    preview: "https://opengraph.githubassets.com/1/musammilvilayil/she-sheild",
    icon: ShieldCheck,
    accent: "#7ef0d0",
  },
  {
    name: "MISMA",
    index: "06",
    type: "MERN Commerce Platform",
    status: "Deployable full-stack storefront",
    description:
      "A boutique baby-wear commerce product with accounts, product discovery, persistent shopping, secure server-validated checkout and protected administration.",
    highlights: [
      "Customer auth and persistent cart",
      "Server-validated checkout",
      "Owner-or-admin order access",
      "Inventory management",
      "Cloudinary upload restrictions",
      "CORS, rate limiting and security headers",
    ],
    stack: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    repo: "https://github.com/musammilvilayil/MISMA",
    live: "https://frontend-sandy-omega-90.vercel.app/",
    preview: "https://image.thum.io/get/width/1400/crop/820/noanimate/https://frontend-sandy-omega-90.vercel.app/",
    icon: Layers3,
    accent: "#b9d8ff",
  },
];

const skillGroups = [
  {
    label: "Core",
    items: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    label: "Working with",
    items: ["Next.js", "TypeScript", "PostgreSQL", "FastAPI", "Docker", "GitHub Actions"],
  },
  {
    label: "Growing into",
    items: ["Cloud", "DevOps", "Cybersecurity", "AI Systems", "Redis", "System Design"],
  },
];

const journey = [
  {
    year: "2025 — Present",
    title: "Freelance Full-Stack Developer",
    body: "Building practical web and application products for student and client use-cases while strengthening product thinking, delivery and communication.",
  },
  {
    year: "2026",
    title: "AI + DevOps Systems",
    body: "Expanded into incident intelligence, secure webhooks, background jobs, evidence-backed AI analysis and approval-led automation through OpsPilot AI.",
  },
  {
    year: "2026",
    title: "BCA Graduate",
    body: "Completed Bachelor of Computer Applications at Sree Narayana College of Technology, Kollam, and focused on full-stack engineering opportunities.",
  },
];

const socials = [
  { label: "GitHub", href: "https://github.com/musammilvilayil", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-musammil-a-646882280/", icon: Linkedin },
  { label: "Email", href: "mailto:musammilvilayil@gmail.com", icon: Mail },
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    ["Work", "#work"],
    ["Expertise", "#expertise"],
    ["Journey", "#journey"],
    ["About", "#about"],
  ];

  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="Muhammad Musammil home">
        <span>MM</span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
      <a className="header-cta" href="mailto:musammilvilayil@gmail.com">
        <span className="availability-dot" /> Available for opportunities
      </a>
      <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={open}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      {open && (
        <motion.div className="mobile-nav" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          {nav.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="mailto:musammilvilayil@gmail.com" onClick={() => setOpen(false)}>Contact</a>
        </motion.div>
      )}
    </header>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="aurora aurora-one" aria-hidden="true" />
      <div className="aurora aurora-two" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />

      <div className="hero-shell">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="eyebrow"><Zap size={14} /> Full-Stack Developer · AI · Cloud</div>
          <h1>
            I build products that go
            <span className="gradient-word"> beyond the interface.</span>
          </h1>
          <p className="hero-lede">
            Muhammad Musammil — a product-minded developer from Kerala building useful, secure and visually refined digital systems across web, AI workflows, cloud products and connected technology.
          </p>
          <div className="hero-actions">
            <a className="button button-primary magnetic" href="#work">
              Explore selected work <ArrowDownRight size={17} />
            </a>
            <a className="button button-ghost" href="mailto:musammilvilayil@gmail.com">
              Start a conversation <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="hero-socials">
            {socials.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                <Icon size={16} /> {label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, rotateY: -8 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="orb-stage" aria-hidden="true">
            <div className="orb-core" />
            <div className="orb-ring orb-ring-a" />
            <div className="orb-ring orb-ring-b" />
            <div className="orb-ring orb-ring-c" />
          </div>
          <div className="system-card system-card-top">
            <span>FOCUS / 2026</span>
            <strong>Full-stack systems</strong>
            <small>Interfaces · APIs · AI · Cloud</small>
          </div>
          <div className="system-card system-card-bottom">
            <span>BUILD STATUS</span>
            <strong><i /> Open to opportunities</strong>
            <small>Kollam, Kerala, India</small>
          </div>
        </motion.div>
      </div>

      <div className="hero-marquee" aria-label="Capabilities">
        <div>
          <span>PRODUCT ENGINEERING</span><b>✦</b><span>FULL-STACK</span><b>✦</b><span>AI WORKFLOWS</span><b>✦</b><span>CLOUD</span><b>✦</b><span>DEVOPS</span><b>✦</b><span>RESPONSIVE UI</span><b>✦</b>
          <span>PRODUCT ENGINEERING</span><b>✦</b><span>FULL-STACK</span><b>✦</b><span>AI WORKFLOWS</span><b>✦</b><span>CLOUD</span><b>✦</b><span>DEVOPS</span><b>✦</b><span>RESPONSIVE UI</span><b>✦</b>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, order }: { project: Project; order: number }) {
  const [previewFailed, setPreviewFailed] = useState(false);
  const Icon = project.icon;

  return (
    <Reveal className={`project-card${project.featured ? " project-featured" : ""}`} delay={Math.min(order * 0.04, 0.16)}>
      <div className="project-index">{project.index}</div>
      <div className="project-copy">
        <div className="project-meta">
          <span>{project.type}</span>
          <span className="project-status"><i /> {project.status}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-highlights">
          {project.highlights.slice(0, project.featured ? 6 : 4).map((highlight) => (
            <span key={highlight}><Check size={13} /> {highlight}</span>
          ))}
        </div>
        <div className="project-stack">
          {project.stack.map((item) => <span key={item}>{item}</span>)}
        </div>
        <div className="project-actions">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">Live project <ExternalLink size={14} /></a>
          )}
          <a href={project.repo} target="_blank" rel="noreferrer">Repository <Github size={14} /></a>
        </div>
      </div>
      <a className="project-preview" href={project.live ?? project.repo} target="_blank" rel="noreferrer" style={{ "--project-accent": project.accent } as React.CSSProperties}>
        {!previewFailed ? (
          <img src={project.preview} alt={`${project.name} project preview`} loading="lazy" decoding="async" onError={() => setPreviewFailed(true)} />
        ) : (
          <div className="preview-fallback"><Icon size={52} /><span>{project.name}</span></div>
        )}
        <span className="preview-shine" />
        <span className="preview-open">Open <ArrowUpRight size={15} /></span>
      </a>
    </Reveal>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.25 });

  useEffect(() => {
    const root = document.documentElement;
    const updatePointer = (event: PointerEvent) => {
      root.style.setProperty("--mouse-x", `${event.clientX}px`);
      root.style.setProperty("--mouse-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", updatePointer, { passive: true });
    return () => window.removeEventListener("pointermove", updatePointer);
  }, []);

  const featured = useMemo(() => projects.filter((project) => project.featured), []);
  const more = useMemo(() => projects.filter((project) => !project.featured), []);

  return (
    <main>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Header />
      <Hero />

      <section className="section work-section" id="work">
        <Reveal className="section-heading split-heading">
          <div>
            <span className="section-kicker">Selected work</span>
            <h2>Products with a reason to exist.</h2>
          </div>
          <p>
            Less “template portfolio”, more evidence of how I think: product intent, architecture, workflows, security, UI and deployment — all in one place.
          </p>
        </Reveal>

        <div className="featured-work">
          {featured.map((project, index) => <ProjectCard key={project.name} project={project} order={index} />)}
        </div>

        <Reveal className="more-work-heading">
          <span>More product work</span>
          <div />
        </Reveal>
        <div className="more-work-grid">
          {more.map((project, index) => <ProjectCard key={project.name} project={project} order={index} />)}
        </div>
      </section>

      <section className="section expertise-section" id="expertise">
        <Reveal className="section-heading compact-heading">
          <span className="section-kicker">Expertise</span>
          <h2>A practical stack, grouped by how I use it.</h2>
        </Reveal>
        <div className="expertise-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.label} className="skill-panel" delay={index * 0.07}>
              <span className="skill-number">0{index + 1}</span>
              <h3>{group.label}</h3>
              <div className="skill-chips">
                {group.items.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="capability-strip">
          <div><Code2 size={18} /><span>Frontend systems</span></div>
          <div><Layers3 size={18} /><span>Backend + APIs</span></div>
          <div><BrainCircuit size={18} /><span>AI workflows</span></div>
          <div><Cloud size={18} /><span>Cloud + deployment</span></div>
          <div><ShieldCheck size={18} /><span>Security-minded builds</span></div>
        </Reveal>
      </section>

      <section className="section journey-section" id="journey">
        <Reveal className="section-heading split-heading">
          <div>
            <span className="section-kicker">Journey</span>
            <h2>Learning by shipping.</h2>
          </div>
          <p>
            My strongest growth has come from turning ideas into usable products, then improving the architecture, UX, security and delivery around them.
          </p>
        </Reveal>

        <div className="journey-list">
          {journey.map((item, index) => (
            <Reveal key={item.title} className="journey-row" delay={index * 0.06}>
              <span className="journey-index">0{index + 1}</span>
              <span className="journey-year">{item.year}</span>
              <div><h3>{item.title}</h3><p>{item.body}</p></div>
              <ArrowUpRight size={20} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <Reveal className="about-visual">
          <div className="portrait-shell">
            <img src="/profile.webp" alt="Muhammad Musammil" width="520" height="680" loading="lazy" decoding="async" />
            <div className="portrait-glow" />
            <div className="portrait-badge"><Sparkles size={15} /> Building what’s next</div>
          </div>
        </Reveal>

        <Reveal className="about-copy" delay={0.08}>
          <span className="section-kicker">About</span>
          <h2>Developer mindset. Product curiosity. Continuous growth.</h2>
          <p>
            I’m Muhammad Musammil, a BCA graduate from Kollam, Kerala. I enjoy taking an idea from a rough requirement to a working product — shaping the interface, APIs, data model, deployment and the small details that make the experience feel intentional.
          </p>
          <p>
            My current direction is full-stack engineering with deeper focus on AI-assisted systems, cloud and DevOps, while continuing to strengthen security fundamentals.
          </p>
          <div className="about-facts">
            <div><MapPin size={17} /><span>Kollam, Kerala, India</span></div>
            <div><GraduationCap size={17} /><span>BCA · Completed April 2026</span></div>
            <div><BriefcaseBusiness size={17} /><span>Open to junior developer opportunities</span></div>
          </div>
        </Reveal>
      </section>

      <section className="section contact-section" id="contact">
        <Reveal className="contact-card">
          <div>
            <span className="section-kicker">Let’s build something useful</span>
            <h2>Have a role, product or idea in mind?</h2>
            <p>I’m open to full-stack roles, junior software opportunities, product collaborations and meaningful freelance work.</p>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:musammilvilayil@gmail.com">Email me <Mail size={16} /></a>
            <a className="button button-ghost" href="https://github.com/musammilvilayil" target="_blank" rel="noreferrer">View GitHub <Github size={16} /></a>
          </div>
        </Reveal>
      </section>

      <footer>
        <span>© 2026 Muhammad Musammil</span>
        <span>Built with intent, motion and a little glow.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}

export default App;
