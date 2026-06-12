import { jsxs, jsx } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect, useRef, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "motion/react";
import { ArrowRight, ArrowUpRight, Github, Linkedin, MessageCircle, MapPin, Mail, Code2, Rocket, Server, Cloud, ExternalLink, Sparkles, CheckCircle2, Loader2, Send } from "lucide-react";
import { useRouter, isRedirect } from "@tanstack/react-router";
import { T as TSS_SERVER_FUNCTION, g as getServerFnById, a as createServerFn } from "./server-CUh8A8of.js";
import { z } from "zod";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "@tanstack/react-router/ssr/server";
function useServerFn(serverFn) {
  const router = useRouter();
  return React.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router.stores.location.get();
        return router.navigate(router.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2e3)
});
const submitContact = createServerFn({
  method: "POST"
}).inputValidator((data) => ContactSchema.parse(data)).handler(createSsrRpc("1ac20e83585a55e943670fa4670b07889b610801a7a21f28dc367c19f92e50fd"));
const USER = {
  name: "Muhammad Musammil",
  role: "Full-Stack Engineer",
  location: "Kerala, India · Remote",
  email: "musammilvilayil@gmail.com",
  socials: {
    github: "https://github.com/musammilvilayil",
    linkedin: "https://www.linkedin.com/in/muhammad-musammil-a-646882280/",
    whatsapp: "https://wa.me/916282135504"
  }
};
const METRICS = [{
  value: 30,
  suffix: "+",
  label: "Production MVPs",
  sub: "& systems shipped"
}, {
  value: 99.9,
  suffix: "%",
  label: "API Integration",
  sub: "uptime & stability"
}, {
  value: 100,
  prefix: "<",
  suffix: "ms",
  label: "Backend Response",
  sub: "optimization target"
}];
const STACK_LAYERS = [{
  title: "Frontend",
  items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "JavaScript ES6+"]
}, {
  title: "Backend & API",
  items: ["Node.js + Express", "Java + Spring Boot", "Python + FastAPI", "PHP", "REST API Design"]
}, {
  title: "Data & DevOps",
  items: ["MongoDB", "PostgreSQL", "MySQL / SQL", "Docker", "Git + GitHub"]
}, {
  title: "AI Tooling",
  items: ["Cursor IDE", "Claude AI", "GitHub Copilot", "Blackbox AI", "Postman"]
}];
const SERVICES = [{
  icon: Code2,
  title: "Full-Stack Web Apps",
  desc: "End-to-end applications built on the MERN stack or Next.js + FastAPI.",
  features: ["SPA / SSR", "REST APIs", "Auth", "CMS integration"]
}, {
  icon: Rocket,
  title: "MVP Development",
  desc: "From idea to deployed product in weeks, not months.",
  features: ["Scoped architecture", "Rapid iteration", "Production deploy"]
}, {
  icon: Server,
  title: "Backend Systems & APIs",
  desc: "Node.js, Express, FastAPI — documented, tested, scalable.",
  features: ["Rate limiting", "RBAC", "Caching", "OpenAPI docs"]
}, {
  icon: Cloud,
  title: "DevOps & Cloud Setup",
  desc: "Docker, Vercel, Render, GitHub Actions CI/CD.",
  features: ["Env config", "CDN", "Monitoring basics"]
}];
const PROJECTS = [{
  title: "Projexify",
  tagline: "AI-Powered Multi-Center Project Marketplace",
  problem: "Students across colleges had no unified marketplace to discover, request, and track academic project work — discovery was scattered across WhatsApp and word-of-mouth.",
  tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "OpenAI"],
  links: {
    github: "https://github.com/musammilvilayil",
    live: null
  }
}, {
  title: "Nexus Hub",
  tagline: "Real-time collaboration platform",
  problem: "Small teams needed a single workspace for chat, files, and tasks without enterprise pricing or onboarding friction.",
  tech: ["React", "Express", "Socket.io", "PostgreSQL", "Docker"],
  links: {
    github: "https://github.com/musammilvilayil",
    live: null
  }
}, {
  title: "Healthiet",
  tagline: "Personalized nutrition & meal-plan SaaS",
  problem: "Independent dietitians lacked a low-friction way to deliver dynamic, AI-assisted meal plans to clients on mobile.",
  tech: ["React", "FastAPI", "PostgreSQL", "Tailwind", "Gemini"],
  links: {
    github: "https://github.com/musammilvilayil",
    live: null
  }
}];
const NAV_ITEMS = [{
  label: "Home",
  href: "#home"
}, {
  label: "About",
  href: "#about"
}, {
  label: "Services",
  href: "#services"
}, {
  label: "Work",
  href: "#projects"
}, {
  label: "Contact",
  href: "#contact"
}];
function SectionEyebrow({
  children
}) {
  return /* @__PURE__ */ jsxs(motion.div, { initial: {
    opacity: 0,
    x: -20
  }, whileInView: {
    opacity: 1,
    x: 0
  }, viewport: {
    once: true,
    margin: "-80px"
  }, transition: {
    duration: 0.5
  }, className: "font-mono text-xs uppercase tracking-[0.3em] text-voltage-2 mb-4 flex items-center gap-3", children: [
    /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-voltage" }),
    children
  ] });
}
function AnimatedNumber({
  value,
  prefix,
  suffix
}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-50px"
  });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(eased * value);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);
  const isFloat = !Number.isInteger(value);
  const text = isFloat ? display.toFixed(1) : Math.round(display).toString();
  return /* @__PURE__ */ jsxs("span", { ref, className: "font-mono", children: [
    prefix,
    text,
    suffix
  ] });
}
function TerminalGridBg() {
  return /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 -z-10 terminal-grid opacity-60" });
}
function TiltCard({
  children,
  className = ""
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [6, -6]), {
    stiffness: 200,
    damping: 18
  });
  const ry = useSpring(useTransform(x, [-50, 50], [-6, 6]), {
    stiffness: 200,
    damping: 18
  });
  return /* @__PURE__ */ jsx(motion.div, { ref, onMouseMove: (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top - r.height / 2);
  }, onMouseLeave: () => {
    x.set(0);
    y.set(0);
  }, style: {
    rotateX: rx,
    rotateY: ry,
    transformPerspective: 1e3
  }, className, children });
}
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx("header", { className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: `flex items-center justify-between rounded-2xl border border-border bg-ink-2/80 backdrop-blur-xl px-4 py-2.5 transition-all ${scrolled ? "voltage-glow" : ""}`, children: [
      /* @__PURE__ */ jsxs("a", { href: "#home", className: "flex items-center gap-2 font-display font-bold text-lg", children: [
        /* @__PURE__ */ jsx("span", { className: "h-7 w-7 rounded-lg bg-voltage flex items-center justify-center text-white text-sm", children: "M" }),
        /* @__PURE__ */ jsxs("span", { children: [
          "musammil",
          /* @__PURE__ */ jsx("span", { className: "text-voltage", children: ".dev" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-1", children: NAV_ITEMS.map((n) => /* @__PURE__ */ jsx("a", { href: n.href, className: "px-3 py-2 text-sm text-text-2 hover:text-text transition-colors rounded-lg hover:bg-ink-3", children: n.label }, n.href)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxs("a", { href: `mailto:${USER.email}`, className: "hidden sm:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl bg-voltage text-white hover:bg-voltage-2 transition-colors", children: [
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-success pulse-dot" }),
          "Let's Talk"
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: () => setOpen((v) => !v), "aria-label": "Toggle menu", className: "md:hidden h-9 w-9 rounded-lg border border-border flex items-center justify-center text-text-2", children: /* @__PURE__ */ jsx("span", { className: "text-lg", children: open ? "×" : "≡" }) })
      ] })
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "md:hidden mt-2 rounded-2xl border border-border bg-ink-2 p-2", children: NAV_ITEMS.map((n) => /* @__PURE__ */ jsx("a", { href: n.href, onClick: () => setOpen(false), className: "block px-4 py-3 text-sm text-text-2 hover:text-text hover:bg-ink-3 rounded-lg", children: n.label }, n.href)) })
  ] }) });
}
function Hero() {
  const headlineWords = ["Building", "Scalable", "Web", "Ecosystems", "&", "High-Performance", "Backends"];
  return /* @__PURE__ */ jsxs("section", { id: "home", className: "relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden", children: [
    /* @__PURE__ */ jsx(TerminalGridBg, {}),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl", children: [
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.5
      }, className: "inline-flex items-center gap-3 rounded-full border border-border bg-ink-2 px-4 py-2 text-xs font-mono text-text-2", children: [
        /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
          /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-success opacity-60 pulse-dot" }),
          /* @__PURE__ */ jsx("span", { className: "relative h-2 w-2 rounded-full bg-success" })
        ] }),
        "Available for remote contracts · 4hr crossover with US/EU time zones"
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "mt-8 font-display font-extrabold text-text leading-[1.02] text-[clamp(42px,7vw,80px)] tracking-[-0.04em] max-w-5xl", children: headlineWords.map((w, i) => /* @__PURE__ */ jsx(motion.span, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.15 + i * 0.07,
        duration: 0.6,
        ease: "easeOut"
      }, className: "inline-block mr-[0.25em]", children: w === "Backends" ? /* @__PURE__ */ jsx("span", { className: "text-voltage text-glow", children: w }) : w }, i)) }),
      /* @__PURE__ */ jsxs(motion.p, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 0.9,
        duration: 0.6
      }, className: "mt-7 max-w-2xl text-text-2 text-[17px] leading-[1.8]", children: [
        "Hi, I'm ",
        /* @__PURE__ */ jsx("span", { className: "text-text font-medium", children: "Muhammad Musammil" }),
        " — a Full-Stack Engineer who turns complex product ideas into fast, secure, production-ready applications. ",
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "30+ full-stack systems shipped." })
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 10
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 1.1,
        duration: 0.5
      }, className: "mt-8 flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxs("a", { href: "#projects", className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-voltage text-white font-medium hover:bg-voltage-2 transition-all hover:-translate-y-0.5 voltage-glow", children: [
          "View Engineering Cases",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#contact", className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border-2 bg-ink-2 text-text font-medium hover:border-voltage transition-all", children: [
          "Book a Strategy Call",
          /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 1.3,
        duration: 0.5
      }, className: "mt-8 flex items-center gap-5 text-text-3", children: [
        /* @__PURE__ */ jsx("a", { href: USER.socials.github, target: "_blank", rel: "noreferrer", "aria-label": "GitHub", className: "hover:text-voltage transition-colors", children: /* @__PURE__ */ jsx(Github, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("a", { href: USER.socials.linkedin, target: "_blank", rel: "noreferrer", "aria-label": "LinkedIn", className: "hover:text-voltage transition-colors", children: /* @__PURE__ */ jsx(Linkedin, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("a", { href: USER.socials.whatsapp, target: "_blank", rel: "noreferrer", "aria-label": "WhatsApp", className: "hover:text-voltage transition-colors", children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxs("span", { className: "text-xs font-mono ml-2 flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "h-3 w-3" }),
          " ",
          USER.location
        ] })
      ] }),
      /* @__PURE__ */ jsx(MetricsStrip, {})
    ] })
  ] });
}
function MetricsStrip() {
  return /* @__PURE__ */ jsx(motion.div, { initial: {
    opacity: 0,
    y: 20
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true
  }, transition: {
    duration: 0.6,
    delay: 0.2
  }, className: "mt-16 rounded-2xl border border-border bg-ink-2 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 divider-x", children: METRICS.map((m) => /* @__PURE__ */ jsxs("div", { className: "p-6 md:p-8", children: [
    /* @__PURE__ */ jsx("div", { className: "text-text font-mono font-medium text-[clamp(28px,4vw,48px)] leading-none", children: /* @__PURE__ */ jsx(AnimatedNumber, { value: m.value, prefix: m.prefix, suffix: m.suffix }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-3 text-sm text-text font-medium", children: m.label }),
    /* @__PURE__ */ jsx("div", { className: "text-xs text-text-3 mt-0.5", children: m.sub })
  ] }, m.label)) }) });
}
function About() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl", children: [
    /* @__PURE__ */ jsx(SectionEyebrow, { children: "About" }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-12 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display font-bold text-text text-[clamp(30px,4vw,48px)] leading-[1.05] tracking-[-0.03em]", children: "Engineering for founders who need to ship." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-5 text-text-2 text-[17px] leading-[1.8] max-w-2xl", children: [
          /* @__PURE__ */ jsx("p", { children: "I'm a Full-Stack Engineer specialising in production-grade web systems — MERN stack, Node.js backends, Python/FastAPI services, and cloud-deployed infrastructure." }),
          /* @__PURE__ */ jsx("p", { children: "I work with international founders and product teams to move fast without breaking things: clean architecture, documented APIs, and applications that hold up under real-world load." }),
          /* @__PURE__ */ jsx("p", { children: "Proficient in AI-accelerated development (Cursor, Claude, Copilot) to ship features faster while maintaining code quality standards production teams expect." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-ink-2 p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("img", { src: "/profile.webp", alt: "Muhammad Musammil", className: "h-16 w-16 rounded-xl object-cover border border-border" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-lg", children: USER.name }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-text-2", children: USER.role })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 grid grid-cols-2 gap-3 text-xs", children: [
          /* @__PURE__ */ jsx(Info, { label: "Location", value: "Kerala, IN" }),
          /* @__PURE__ */ jsx(Info, { label: "Timezone", value: "IST (GMT+5:30)" }),
          /* @__PURE__ */ jsx(Info, { label: "Crossover", value: "US / EU 4h" }),
          /* @__PURE__ */ jsx(Info, { label: "Status", value: /* @__PURE__ */ jsx("span", { className: "text-success", children: "Available" }) })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: `mailto:${USER.email}`, className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border-2 bg-ink-3 px-4 py-3 text-sm font-medium hover:border-voltage transition-colors", children: [
          /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
          " ",
          USER.email
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(StackMatrix, {})
  ] }) });
}
function Info({
  label,
  value
}) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-border bg-ink-3 p-3", children: [
    /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-text-3", children: label }),
    /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm text-text", children: value })
  ] });
}
function StackMatrix() {
  return /* @__PURE__ */ jsxs("div", { className: "mt-20", children: [
    /* @__PURE__ */ jsx(SectionEyebrow, { children: "Stack" }),
    /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-2xl md:text-3xl mb-8 tracking-tight", children: "Layered by system role" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: STACK_LAYERS.map((layer, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 16
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      duration: 0.5,
      delay: i * 0.08
    }, className: "rounded-xl border border-border bg-ink-2 p-5 hover:border-border-2 transition-colors", children: [
      /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.25em] text-voltage-2 mb-4", children: layer.title }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: layer.items.map((it) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2.5 text-sm text-text", children: [
        /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-voltage shrink-0" }),
        it
      ] }, it)) })
    ] }, layer.title)) })
  ] });
}
function Services() {
  return /* @__PURE__ */ jsx("section", { id: "services", className: "py-24 md:py-32 bg-ink-2/30 border-y border-border", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl", children: [
    /* @__PURE__ */ jsx(SectionEyebrow, { children: "Services" }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between flex-wrap gap-4 mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display font-bold text-[clamp(30px,4vw,48px)] tracking-[-0.03em] max-w-2xl leading-[1.05]", children: "What I Build" }),
      /* @__PURE__ */ jsx("p", { className: "text-text-2 max-w-md text-sm leading-relaxed", children: "Four focused offerings. Each scoped to deliver shipped code, not just artifacts." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: SERVICES.map((s, i) => /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0,
      y: 18
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      duration: 0.5,
      delay: i * 0.08
    }, className: "group rounded-2xl border border-border bg-ink-2 p-7 hover:border-voltage transition-all", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-5", children: [
      /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-xl bg-voltage-muted flex items-center justify-center shrink-0 group-hover:bg-voltage transition-colors", children: /* @__PURE__ */ jsx(s.icon, { className: "h-5 w-5 text-voltage group-hover:text-white transition-colors" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-xl tracking-tight", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-text-2 leading-relaxed", children: s.desc }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: s.features.map((f) => /* @__PURE__ */ jsx("span", { className: "font-mono text-[11px] px-2.5 py-1 rounded-md border border-border text-text-2", children: f }, f)) })
      ] })
    ] }) }, s.title)) })
  ] }) });
}
function Projects() {
  return /* @__PURE__ */ jsx("section", { id: "projects", className: "py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl", children: [
    /* @__PURE__ */ jsx(SectionEyebrow, { children: "Selected Work" }),
    /* @__PURE__ */ jsx("div", { className: "flex items-end justify-between flex-wrap gap-4 mb-12", children: /* @__PURE__ */ jsx("h2", { className: "font-display font-bold text-[clamp(30px,4vw,48px)] tracking-[-0.03em] leading-[1.05] max-w-2xl", children: "Production systems, shipped." }) }),
    /* @__PURE__ */ jsx("div", { className: "space-y-5", children: PROJECTS.map((p, i) => /* @__PURE__ */ jsx(TiltCard, { className: "", children: /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      duration: 0.5,
      delay: i * 0.06
    }, className: "group rounded-2xl border border-border bg-ink-2 p-7 md:p-9 hover:border-voltage transition-colors", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-6 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "font-mono text-xs text-text-3", children: [
          String(i + 1).padStart(2, "0"),
          " / ",
          String(PROJECTS.length).padStart(2, "0")
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display font-bold text-2xl tracking-tight", children: p.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-voltage-2", children: p.tagline })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-6", children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-voltage-2 mb-2", children: "Problem →" }),
        /* @__PURE__ */ jsx("p", { className: "text-text-2 text-[15px] leading-[1.7]", children: p.problem }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: p.tech.map((t) => /* @__PURE__ */ jsx("span", { className: "font-mono text-[11px] px-2 py-1 rounded-md bg-ink-3 border border-border text-text-2", children: t }, t)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-3 flex md:flex-col gap-2 md:items-end", children: [
        p.links.github && /* @__PURE__ */ jsxs("a", { href: p.links.github, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 text-sm text-text-2 hover:text-voltage transition-colors", children: [
          /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }),
          " Source"
        ] }),
        p.links.live && /* @__PURE__ */ jsxs("a", { href: p.links.live, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 text-sm text-text-2 hover:text-voltage transition-colors", children: [
          /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" }),
          " Live"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#contact", className: "md:mt-auto inline-flex items-center gap-1 text-sm font-medium text-voltage hover:text-voltage-2 transition-colors", children: [
          "Case study ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })
        ] })
      ] })
    ] }) }) }, p.title)) })
  ] }) });
}
function SocialProofStrip() {
  const items = [{
    label: "BCA · Sree Narayana College of Technology"
  }, {
    label: "2+ years building production systems"
  }, {
    label: "AI-accelerated dev: Cursor · Claude · Copilot"
  }, {
    label: "Kerala, India · Remote-first"
  }];
  return /* @__PURE__ */ jsx("section", { className: "py-16 border-y border-border bg-ink-2/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 max-w-6xl", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs font-mono text-text-3 uppercase tracking-[0.25em]", children: items.map((it, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3 text-voltage-2" }),
    it.label
  ] }, i)) }) }) });
}
function TimezoneClocks() {
  const zones = useMemo(() => [{
    label: "Kerala",
    tz: "Asia/Kolkata"
  }, {
    label: "Dubai",
    tz: "Asia/Dubai"
  }, {
    label: "London",
    tz: "Europe/London"
  }, {
    label: "New York",
    tz: "America/New_York"
  }], []);
  const [now, setNow] = useState(() => /* @__PURE__ */ new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(/* @__PURE__ */ new Date()), 6e4);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-8", children: zones.map((z2) => /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-border bg-ink-2 px-4 py-3", children: [
    /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-text-3", children: z2.label }),
    /* @__PURE__ */ jsx("div", { className: "mt-1 font-mono text-text text-lg", children: now.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: z2.tz
    }) })
  ] }, z2.tz)) });
}
function Contact() {
  const submit = useServerFn(submitContact);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    try {
      await submit({
        data: form
      });
      setStatus("success");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setError(msg);
      setStatus("error");
    }
  };
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl", children: [
    /* @__PURE__ */ jsx(SectionEyebrow, { children: "Start a Project" }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display font-bold text-[clamp(30px,4vw,48px)] tracking-[-0.03em] leading-[1.05]", children: "Let's Build Something Shipped" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-text-2 text-[17px] leading-[1.8]", children: "Available for remote contracts. I maintain a 4-hour live crossover window with US and European time zones for daily check-ins and milestone reviews." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxs("a", { href: `mailto:${USER.email}`, className: "flex items-center gap-3 text-text hover:text-voltage transition-colors", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-voltage" }),
            " ",
            USER.email
          ] }),
          /* @__PURE__ */ jsxs("a", { href: USER.socials.whatsapp, target: "_blank", rel: "noreferrer", className: "flex items-center gap-3 text-text hover:text-voltage transition-colors", children: [
            /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4 text-voltage" }),
            " WhatsApp (fastest)"
          ] }),
          /* @__PURE__ */ jsxs("a", { href: USER.socials.linkedin, target: "_blank", rel: "noreferrer", className: "flex items-center gap-3 text-text hover:text-voltage transition-colors", children: [
            /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4 text-voltage" }),
            " LinkedIn"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsx(TimezoneClocks, {}),
        /* @__PURE__ */ jsxs("form", { onSubmit, className: "rounded-2xl border border-border bg-ink-2 p-6 md:p-8 space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsx(Field, { label: "Name", children: /* @__PURE__ */ jsx("input", { required: true, maxLength: 100, value: form.name, onChange: (e) => setForm({
              ...form,
              name: e.target.value
            }), className: "w-full bg-ink-3 border border-border rounded-lg px-4 py-3 text-sm focus:border-voltage outline-none transition-colors", placeholder: "Jane Doe" }) }),
            /* @__PURE__ */ jsx(Field, { label: "Email", children: /* @__PURE__ */ jsx("input", { required: true, type: "email", maxLength: 255, value: form.email, onChange: (e) => setForm({
              ...form,
              email: e.target.value
            }), className: "w-full bg-ink-3 border border-border rounded-lg px-4 py-3 text-sm focus:border-voltage outline-none transition-colors", placeholder: "jane@company.com" }) })
          ] }),
          /* @__PURE__ */ jsx(Field, { label: "Subject (optional)", children: /* @__PURE__ */ jsx("input", { maxLength: 200, value: form.subject, onChange: (e) => setForm({
            ...form,
            subject: e.target.value
          }), className: "w-full bg-ink-3 border border-border rounded-lg px-4 py-3 text-sm focus:border-voltage outline-none transition-colors", placeholder: "MVP for fintech dashboard" }) }),
          /* @__PURE__ */ jsx(Field, { label: "Project brief", children: /* @__PURE__ */ jsx("textarea", { required: true, rows: 5, minLength: 10, maxLength: 2e3, value: form.message, onChange: (e) => setForm({
            ...form,
            message: e.target.value
          }), className: "w-full bg-ink-3 border border-border rounded-lg px-4 py-3 text-sm focus:border-voltage outline-none transition-colors resize-none", placeholder: "Scope, stack you're leaning toward, timeline, anything that helps me reply usefully." }) }),
          status === "error" && /* @__PURE__ */ jsx("div", { className: "text-sm text-destructive", children: error }),
          status === "success" ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-success text-sm", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }),
            " Message received. I'll reply within 24 hours."
          ] }) : /* @__PURE__ */ jsxs("button", { type: "submit", disabled: status === "loading", className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-voltage text-white font-medium hover:bg-voltage-2 transition-colors disabled:opacity-60 voltage-glow", children: [
            status === "loading" ? /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" }),
            "Send Message"
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx("span", { className: "font-mono text-[11px] uppercase tracking-[0.2em] text-text-3 mb-2 block", children: label }),
    children
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "font-display font-bold text-lg", children: [
          "musammil",
          /* @__PURE__ */ jsx("span", { className: "text-voltage", children: ".dev" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-text-3 mt-1", children: "Kerala, India · Open to remote contracts" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5 text-text-3", children: [
        /* @__PURE__ */ jsx("a", { href: `mailto:${USER.email}`, "aria-label": "Email", className: "hover:text-voltage transition-colors", children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("a", { href: USER.socials.github, target: "_blank", rel: "noreferrer", "aria-label": "GitHub", className: "hover:text-voltage transition-colors", children: /* @__PURE__ */ jsx(Github, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("a", { href: USER.socials.linkedin, target: "_blank", rel: "noreferrer", "aria-label": "LinkedIn", className: "hover:text-voltage transition-colors", children: /* @__PURE__ */ jsx(Linkedin, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("a", { href: USER.socials.whatsapp, target: "_blank", rel: "noreferrer", "aria-label": "WhatsApp", className: "hover:text-voltage transition-colors", children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-6 border-t border-border flex items-center justify-between text-xs text-text-3 font-mono", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Muhammad Musammil"
      ] }),
      /* @__PURE__ */ jsx("div", { children: "v2.0 · Built with care" })
    ] })
  ] }) });
}
function PortfolioPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-ink text-text", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Services, {}),
      /* @__PURE__ */ jsx(Projects, {}),
      /* @__PURE__ */ jsx(SocialProofStrip, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  PortfolioPage as component
};
