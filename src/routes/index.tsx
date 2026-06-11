import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Server,
  Rocket,
  Cloud,
  Send,
  CheckCircle2,
  Loader2,
  ExternalLink,
  MapPin,
  Sparkles,
} from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { submitContact } from "@/lib/contact.functions";

const SITE_TITLE = "Muhammad Musammil — Full-Stack Engineer";
const SITE_DESC =
  "Full-Stack Engineer. 30+ production systems shipped. MERN, Next.js, FastAPI, Docker. Available for remote contracts with international founders and CTOs.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { property: "og:title", content: SITE_TITLE },
      {
        property: "og:description",
        content: "30+ production MVPs shipped. Building scalable web ecosystems and high-performance backends.",
      },
      { property: "og:image", content: "/cover.jpg" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC },
      { name: "twitter:image", content: "/cover.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Muhammad Musammil",
          jobTitle: "Full-Stack Engineer",
          url: "/",
          sameAs: [
            "https://github.com/musammilvilayil",
            "https://www.linkedin.com/in/muhammad-musammil-a-646882280/",
          ],
        }),
      },
    ],
  }),
  component: PortfolioPage,
});

/* =====================================================================
 * DATA
 * ===================================================================*/

const USER = {
  name: "Muhammad Musammil",
  role: "Full-Stack Engineer",
  location: "Kerala, India · Remote",
  email: "musammilvilayil@gmail.com",
  socials: {
    github: "https://github.com/musammilvilayil",
    linkedin: "https://www.linkedin.com/in/muhammad-musammil-a-646882280/",
    whatsapp: "https://wa.me/916282135504",
  },
};

const METRICS = [
  { value: 30, suffix: "+", label: "Production MVPs", sub: "& systems shipped" },
  { value: 99.9, suffix: "%", label: "API Integration", sub: "uptime & stability" },
  { value: 100, prefix: "<", suffix: "ms", label: "Backend Response", sub: "optimization target" },
];

const STACK_LAYERS = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "JavaScript ES6+"],
  },
  {
    title: "Backend & API",
    items: ["Node.js + Express", "Java + Spring Boot", "Python + FastAPI", "PHP", "REST API Design"],
  },
  {
    title: "Data & DevOps",
    items: ["MongoDB", "PostgreSQL", "MySQL / SQL", "Docker", "Git + GitHub"],
  },
  {
    title: "AI Tooling",
    items: ["Cursor IDE", "Claude AI", "GitHub Copilot", "Blackbox AI", "Postman"],
  },
];

const SERVICES = [
  {
    icon: Code2,
    title: "Full-Stack Web Apps",
    desc: "End-to-end applications built on the MERN stack or Next.js + FastAPI.",
    features: ["SPA / SSR", "REST APIs", "Auth", "CMS integration"],
  },
  {
    icon: Rocket,
    title: "MVP Development",
    desc: "From idea to deployed product in weeks, not months.",
    features: ["Scoped architecture", "Rapid iteration", "Production deploy"],
  },
  {
    icon: Server,
    title: "Backend Systems & APIs",
    desc: "Node.js, Express, FastAPI — documented, tested, scalable.",
    features: ["Rate limiting", "RBAC", "Caching", "OpenAPI docs"],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud Setup",
    desc: "Docker, Vercel, Render, GitHub Actions CI/CD.",
    features: ["Env config", "CDN", "Monitoring basics"],
  },
];

const PROJECTS = [
  {
    title: "Projexify",
    tagline: "AI-Powered Multi-Center Project Marketplace",
    problem:
      "Students across colleges had no unified marketplace to discover, request, and track academic project work — discovery was scattered across WhatsApp and word-of-mouth.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "OpenAI"],
    links: { github: "https://github.com/musammilvilayil", live: null },
  },
  {
    title: "Nexus Hub",
    tagline: "Real-time collaboration platform",
    problem:
      "Small teams needed a single workspace for chat, files, and tasks without enterprise pricing or onboarding friction.",
    tech: ["React", "Express", "Socket.io", "PostgreSQL", "Docker"],
    links: { github: "https://github.com/musammilvilayil", live: null },
  },
  {
    title: "Healthiet",
    tagline: "Personalized nutrition & meal-plan SaaS",
    problem:
      "Independent dietitians lacked a low-friction way to deliver dynamic, AI-assisted meal plans to clients on mobile.",
    tech: ["React", "FastAPI", "PostgreSQL", "Tailwind", "Gemini"],
    links: { github: "https://github.com/musammilvilayil", live: null },
  },
];

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/* =====================================================================
 * SMALL COMPONENTS
 * ===================================================================*/

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="font-mono text-xs uppercase tracking-[0.3em] text-voltage-2 mb-4 flex items-center gap-3"
    >
      <span className="h-px w-8 bg-voltage" />
      {children}
    </motion.div>
  );
}

function AnimatedNumber({ value, prefix, suffix }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(eased * value);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);
  const isFloat = !Number.isInteger(value);
  const text = isFloat ? display.toFixed(1) : Math.round(display).toString();
  return (
    <span ref={ref} className="font-mono">
      {prefix}
      {text}
      {suffix}
    </span>
  );
}

function TerminalGridBg() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 terminal-grid opacity-60"
    />
  );
}

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [6, -6]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(x, [-50, 50], [-6, 6]), { stiffness: 200, damping: 18 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set(e.clientX - r.left - r.width / 2);
        y.set(e.clientY - r.top - r.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =====================================================================
 * SECTIONS
 * ===================================================================*/

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div
          className={`flex items-center justify-between rounded-2xl border border-border bg-ink-2/80 backdrop-blur-xl px-4 py-2.5 transition-all ${
            scrolled ? "voltage-glow" : ""
          }`}
        >
          <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="h-7 w-7 rounded-lg bg-voltage flex items-center justify-center text-white text-sm">
              M
            </span>
            <span>musammil<span className="text-voltage">.dev</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="px-3 py-2 text-sm text-text-2 hover:text-text transition-colors rounded-lg hover:bg-ink-3"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${USER.email}`}
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl bg-voltage text-white hover:bg-voltage-2 transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-success pulse-dot" />
              Let's Talk
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="md:hidden h-9 w-9 rounded-lg border border-border flex items-center justify-center text-text-2"
            >
              <span className="text-lg">{open ? "×" : "≡"}</span>
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-border bg-ink-2 p-2">
            {NAV_ITEMS.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm text-text-2 hover:text-text hover:bg-ink-3 rounded-lg"
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  const headlineWords = ["Building", "Scalable", "Web", "Ecosystems", "&", "High-Performance", "Backends"];
  return (
    <section id="home" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <TerminalGridBg />
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 rounded-full border border-border bg-ink-2 px-4 py-2 text-xs font-mono text-text-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-success opacity-60 pulse-dot" />
            <span className="relative h-2 w-2 rounded-full bg-success" />
          </span>
          Available for remote contracts · 4hr crossover with US/EU time zones
        </motion.div>

        <h1 className="mt-8 font-display font-extrabold text-text leading-[1.02] text-[clamp(42px,7vw,80px)] tracking-[-0.04em] max-w-5xl">
          {headlineWords.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease: "easeOut" }}
              className="inline-block mr-[0.25em]"
            >
              {w === "Backends" ? <span className="text-voltage text-glow">{w}</span> : w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-7 max-w-2xl text-text-2 text-[17px] leading-[1.8]"
        >
          Hi, I'm <span className="text-text font-medium">Muhammad Musammil</span> — a Full-Stack
          Engineer who turns complex product ideas into fast, secure, production-ready
          applications. <span className="text-text">30+ full-stack systems shipped.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-voltage text-white font-medium hover:bg-voltage-2 transition-all hover:-translate-y-0.5 voltage-glow"
          >
            View Engineering Cases
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border-2 bg-ink-2 text-text font-medium hover:border-voltage transition-all"
          >
            Book a Strategy Call
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="mt-8 flex items-center gap-5 text-text-3"
        >
          <a href={USER.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-voltage transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href={USER.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-voltage transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href={USER.socials.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-voltage transition-colors">
            <MessageCircle className="h-5 w-5" />
          </a>
          <span className="text-xs font-mono ml-2 flex items-center gap-1.5">
            <MapPin className="h-3 w-3" /> {USER.location}
          </span>
        </motion.div>

        <MetricsStrip />
      </div>
    </section>
  );
}

function MetricsStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-16 rounded-2xl border border-border bg-ink-2 overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 divider-x">
        {METRICS.map((m) => (
          <div key={m.label} className="p-6 md:p-8">
            <div className="text-text font-mono font-medium text-[clamp(28px,4vw,48px)] leading-none">
              <AnimatedNumber value={m.value} prefix={m.prefix} suffix={m.suffix} />
            </div>
            <div className="mt-3 text-sm text-text font-medium">{m.label}</div>
            <div className="text-xs text-text-3 mt-0.5">{m.sub}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionEyebrow>About</SectionEyebrow>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display font-bold text-text text-[clamp(30px,4vw,48px)] leading-[1.05] tracking-[-0.03em]">
              Engineering for founders who need to ship.
            </h2>
            <div className="mt-8 space-y-5 text-text-2 text-[17px] leading-[1.8] max-w-2xl">
              <p>
                I'm a Full-Stack Engineer specialising in production-grade web systems — MERN
                stack, Node.js backends, Python/FastAPI services, and cloud-deployed
                infrastructure.
              </p>
              <p>
                I work with international founders and product teams to move fast without breaking
                things: clean architecture, documented APIs, and applications that hold up under
                real-world load.
              </p>
              <p>
                Proficient in AI-accelerated development (Cursor, Claude, Copilot) to ship features
                faster while maintaining code quality standards production teams expect.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-ink-2 p-6">
              <div className="flex items-center gap-4">
                <img
                  src="/profile.webp"
                  alt="Muhammad Musammil"
                  className="h-16 w-16 rounded-xl object-cover border border-border"
                />
                <div>
                  <div className="font-display font-bold text-lg">{USER.name}</div>
                  <div className="text-sm text-text-2">{USER.role}</div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                <Info label="Location" value="Kerala, IN" />
                <Info label="Timezone" value="IST (GMT+5:30)" />
                <Info label="Crossover" value="US / EU 4h" />
                <Info label="Status" value={<span className="text-success">Available</span>} />
              </div>
              <a
                href={`mailto:${USER.email}`}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border-2 bg-ink-3 px-4 py-3 text-sm font-medium hover:border-voltage transition-colors"
              >
                <Mail className="h-4 w-4" /> {USER.email}
              </a>
            </div>
          </div>
        </div>

        <StackMatrix />
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-ink-3 p-3">
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-3">{label}</div>
      <div className="mt-1 text-sm text-text">{value}</div>
    </div>
  );
}

function StackMatrix() {
  return (
    <div className="mt-20">
      <SectionEyebrow>Stack</SectionEyebrow>
      <h3 className="font-display font-bold text-2xl md:text-3xl mb-8 tracking-tight">
        Layered by system role
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STACK_LAYERS.map((layer, i) => (
          <motion.div
            key={layer.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-xl border border-border bg-ink-2 p-5 hover:border-border-2 transition-colors"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-voltage-2 mb-4">
              {layer.title}
            </div>
            <ul className="space-y-2.5">
              {layer.items.map((it) => (
                <li key={it} className="flex items-center gap-2.5 text-sm text-text">
                  <span className="h-1.5 w-1.5 rounded-full bg-voltage shrink-0" />
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-ink-2/30 border-y border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionEyebrow>Services</SectionEyebrow>
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <h2 className="font-display font-bold text-[clamp(30px,4vw,48px)] tracking-[-0.03em] max-w-2xl leading-[1.05]">
            What I Build
          </h2>
          <p className="text-text-2 max-w-md text-sm leading-relaxed">
            Four focused offerings. Each scoped to deliver shipped code, not just artifacts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-ink-2 p-7 hover:border-voltage transition-all"
            >
              <div className="flex items-start gap-5">
                <div className="h-12 w-12 rounded-xl bg-voltage-muted flex items-center justify-center shrink-0 group-hover:bg-voltage transition-colors">
                  <s.icon className="h-5 w-5 text-voltage group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-sm text-text-2 leading-relaxed">{s.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.features.map((f) => (
                      <span
                        key={f}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-border text-text-2"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionEyebrow>Selected Work</SectionEyebrow>
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <h2 className="font-display font-bold text-[clamp(30px,4vw,48px)] tracking-[-0.03em] leading-[1.05] max-w-2xl">
            Production systems, shipped.
          </h2>
        </div>
        <div className="space-y-5">
          {PROJECTS.map((p, i) => (
            <TiltCard key={p.title} className="">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group rounded-2xl border border-border bg-ink-2 p-7 md:p-9 hover:border-voltage transition-colors"
              >
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-3">
                    <div className="font-mono text-xs text-text-3">
                      {String(i + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
                    </div>
                    <h3 className="mt-2 font-display font-bold text-2xl tracking-tight">{p.title}</h3>
                    <p className="mt-1 text-sm text-voltage-2">{p.tagline}</p>
                  </div>
                  <div className="md:col-span-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-voltage-2 mb-2">
                      Problem →
                    </div>
                    <p className="text-text-2 text-[15px] leading-[1.7]">{p.problem}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[11px] px-2 py-1 rounded-md bg-ink-3 border border-border text-text-2"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-3 flex md:flex-col gap-2 md:items-end">
                    {p.links.github && (
                      <a
                        href={p.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-text-2 hover:text-voltage transition-colors"
                      >
                        <Github className="h-4 w-4" /> Source
                      </a>
                    )}
                    {p.links.live && (
                      <a
                        href={p.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-text-2 hover:text-voltage transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" /> Live
                      </a>
                    )}
                    <a
                      href="#contact"
                      className="md:mt-auto inline-flex items-center gap-1 text-sm font-medium text-voltage hover:text-voltage-2 transition-colors"
                    >
                      Case study <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProofStrip() {
  const items = [
    { label: "BCA · Sree Narayana College of Technology" },
    { label: "2+ years building production systems" },
    { label: "AI-accelerated dev: Cursor · Claude · Copilot" },
    { label: "Kerala, India · Remote-first" },
  ];
  return (
    <section className="py-16 border-y border-border bg-ink-2/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs font-mono text-text-3 uppercase tracking-[0.25em]">
          {items.map((it, i) => (
            <div key={i} className="flex items-center gap-2">
              <Sparkles className="h-3 w-3 text-voltage-2" />
              {it.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimezoneClocks() {
  const zones = useMemo(
    () => [
      { label: "Kerala", tz: "Asia/Kolkata" },
      { label: "Dubai", tz: "Asia/Dubai" },
      { label: "London", tz: "Europe/London" },
      { label: "New York", tz: "America/New_York" },
    ],
    [],
  );
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
      {zones.map((z) => (
        <div key={z.tz} className="rounded-lg border border-border bg-ink-2 px-4 py-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-3">
            {z.label}
          </div>
          <div className="mt-1 font-mono text-text text-lg">
            {now.toLocaleTimeString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
              timeZone: z.tz,
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function Contact() {
  const submit = useServerFn(submitContact);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    try {
      await submit({ data: form });
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setError(msg);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionEyebrow>Start a Project</SectionEyebrow>
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="font-display font-bold text-[clamp(30px,4vw,48px)] tracking-[-0.03em] leading-[1.05]">
              Let's Build Something Shipped
            </h2>
            <p className="mt-6 text-text-2 text-[17px] leading-[1.8]">
              Available for remote contracts. I maintain a 4-hour live crossover window with US
              and European time zones for daily check-ins and milestone reviews.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a href={`mailto:${USER.email}`} className="flex items-center gap-3 text-text hover:text-voltage transition-colors">
                <Mail className="h-4 w-4 text-voltage" /> {USER.email}
              </a>
              <a href={USER.socials.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-text hover:text-voltage transition-colors">
                <MessageCircle className="h-4 w-4 text-voltage" /> WhatsApp (fastest)
              </a>
              <a href={USER.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-text hover:text-voltage transition-colors">
                <Linkedin className="h-4 w-4 text-voltage" /> LinkedIn
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <TimezoneClocks />
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-ink-2 p-6 md:p-8 space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Name">
                  <input
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-ink-3 border border-border rounded-lg px-4 py-3 text-sm focus:border-voltage outline-none transition-colors"
                    placeholder="Jane Doe"
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-ink-3 border border-border rounded-lg px-4 py-3 text-sm focus:border-voltage outline-none transition-colors"
                    placeholder="jane@company.com"
                  />
                </Field>
              </div>
              <Field label="Subject (optional)">
                <input
                  maxLength={200}
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-ink-3 border border-border rounded-lg px-4 py-3 text-sm focus:border-voltage outline-none transition-colors"
                  placeholder="MVP for fintech dashboard"
                />
              </Field>
              <Field label="Project brief">
                <textarea
                  required
                  rows={5}
                  minLength={10}
                  maxLength={2000}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-ink-3 border border-border rounded-lg px-4 py-3 text-sm focus:border-voltage outline-none transition-colors resize-none"
                  placeholder="Scope, stack you're leaning toward, timeline, anything that helps me reply usefully."
                />
              </Field>
              {status === "error" && (
                <div className="text-sm text-destructive">{error}</div>
              )}
              {status === "success" ? (
                <div className="flex items-center gap-2 text-success text-sm">
                  <CheckCircle2 className="h-4 w-4" /> Message received. I'll reply within 24 hours.
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-voltage text-white font-medium hover:bg-voltage-2 transition-colors disabled:opacity-60 voltage-glow"
                >
                  {status === "loading" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  Send Message
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-3 mb-2 block">
        {label}
      </span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="font-display font-bold text-lg">
              musammil<span className="text-voltage">.dev</span>
            </div>
            <div className="text-sm text-text-3 mt-1">
              Kerala, India · Open to remote contracts
            </div>
          </div>
          <div className="flex items-center gap-5 text-text-3">
            <a href={`mailto:${USER.email}`} aria-label="Email" className="hover:text-voltage transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <a href={USER.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-voltage transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href={USER.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-voltage transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={USER.socials.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-voltage transition-colors">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-xs text-text-3 font-mono">
          <div>© {new Date().getFullYear()} Muhammad Musammil</div>
          <div>v2.0 · Built with care</div>
        </div>
      </div>
    </footer>
  );
}

/* =====================================================================
 * PAGE
 * ===================================================================*/

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-ink text-text">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <SocialProofStrip />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
