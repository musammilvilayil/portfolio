import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  BrainCircuit,
  Camera,
  CheckCircle2,
  Cloud,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Plane,
  Send,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";

type Skill = readonly [name: string, label: string, level: number];
type Experience = readonly [year: string, end: string, title: string, project: string, description: string];
type Project = {
  name: string;
  type: string;
  description: string;
  stack: string[];
  highlights: string[];
  status: string;
  featured?: boolean;
  repo?: string;
  live?: string;
  preview: string;
  updatedAt: string;
  icon: LucideIcon;
  className: string;
};

const skills: Skill[] = [
  ["React.js", "Comfortable", 82],
  ["Next.js", "Working knowledge", 72],
  ["TypeScript", "Learning", 62],
  ["Node.js", "Comfortable", 80],
  ["Express.js", "Comfortable", 78],
  ["MongoDB", "Comfortable", 82],
  ["PostgreSQL", "Working knowledge", 66],
  ["Python / FastAPI", "Working knowledge", 64],
  ["Tailwind CSS", "Comfortable", 84],
];

const experience: Experience[] = [
  ["2025", "Present", "Freelance Full-Stack Developer", "Independent Products", "Built practical web products for students and clients using modern JavaScript, databases, cloud services and deployment platforms."],
  ["2026", "", "Full-Stack AI & DevOps Developer", "OpsPilot AI", "Built an evidence-backed incident management platform for GitHub Actions with secure webhook ingestion, structured analysis, confidence scoring and approval-based resolution workflows."],
  ["2026", "", "Full-Stack Developer", "MISMA", "Developed a deployable MERN commerce platform with secure authentication, persistent cart, server-validated checkout, order tracking and protected admin workflows."],
  ["2026", "", "Product Interface Developer", "MEGHAM", "Designed a responsive cloud workspace with file browsing, upload feedback, activity history, administrative views, settings and accessible mobile navigation."],
  ["2025", "", "Full-Stack Developer", "Projexify", "Built a learning-project management platform covering enrollment, mentor assignment, project assets, virtual labs and role-based administration."],
  ["2025", "", "Android & IoT Developer", "SHE-Shield", "Created a safety ecosystem combining an Android application, BLE wearable, emergency communication, GPS tracking and evidence-capture workflows."],
];

const projects: Project[] = [
  {
    name: "OpsPilot AI",
    type: "AI-Powered DevOps Incident Management Platform",
    status: "Flagship project · Production-oriented MVP",
    featured: true,
    description: "OpsPilot receives failed GitHub Actions workflow events, verifies and records each incident, analyses available evidence, and produces a structured root cause, confidence score and developer-approved resolution plan.",
    highlights: [
      "Verified GitHub workflow_run webhooks with HMAC SHA-256",
      "Idempotent delivery processing and PostgreSQL incident history",
      "Evidence-linked failure classification and confidence scoring",
      "Redis and BullMQ background jobs with a safe synchronous fallback",
      "Separate Python FastAPI service for structured incident analysis",
      "Human approval required before any code-changing action",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma", "Redis / BullMQ", "Python / FastAPI", "Docker", "GitHub Actions"],
    repo: "https://github.com/musammilvilayil/OpsPilot-AI-your-flagship",
    preview: "https://opengraph.githubassets.com/1/musammilvilayil/OpsPilot-AI-your-flagship",
    updatedAt: "2026-07-26T09:28:00Z",
    icon: BrainCircuit,
    className: "project-visual opspilot",
  },
  {
    name: "MISMA",
    type: "Baby Wear E-commerce Platform",
    status: "Full-stack MERN product · Deployable storefront",
    description: "A boutique baby-wear commerce product with customer accounts, product discovery, persistent shopping, secure server-validated checkout and a protected administration experience.",
    highlights: [
      "Customer authentication, product browsing and persistent cart",
      "Server-validated checkout with database-based price recalculation",
      "Order tracking with owner-or-admin access control",
      "Protected inventory management and shop-setting workflows",
      "Cloudinary uploads with file size and MIME-type restrictions",
      "Helmet, CORS allow-listing, JSON limits and auth rate limiting",
    ],
    stack: ["React 19", "React Router", "Tailwind CSS", "Radix UI", "Framer Motion", "Node.js", "Express", "MongoDB", "JWT / bcrypt", "Cloudinary"],
    repo: "https://github.com/musammilvilayil/MISMA",
    live: "https://frontend-sandy-omega-90.vercel.app/",
    preview: "https://image.thum.io/get/width/1200/crop/700/noanimate/https://frontend-sandy-omega-90.vercel.app/",
    updatedAt: "2026-07-26T08:07:00Z",
    icon: ShoppingBag,
    className: "project-visual misma",
  },
  {
    name: "MEGHAM",
    type: "Cloud Storage Product Workspace",
    status: "Product interface MVP · Backend integration ready",
    description: "A polished cloud-storage workspace designed around fast navigation, clear storage insights, realistic file-management journeys and administrative product experiences.",
    highlights: [
      "Spatial dashboard with storage insights, quick access and recent files",
      "List and grid file browser with search, starred and shared filters",
      "Upload workflow with progress and success feedback",
      "Recent, shared, starred and trash management views",
      "Activity audit trail plus admin member, health and moderation views",
      "Profile, notification and persistent light/dark appearance settings",
    ],
    stack: ["Next.js", "React", "TypeScript", "Vinext", "Node / Express ready", "MongoDB ready", "Cloudinary ready"],
    repo: "https://github.com/musammilvilayil/Megham",
    live: "https://megham-six.vercel.app",
    preview: "https://image.thum.io/get/width/1200/crop/700/noanimate/https://megham-six.vercel.app",
    updatedAt: "2026-07-24T10:00:00Z",
    icon: Cloud,
    className: "project-visual megham",
  },
  {
    name: "Projexify",
    type: "Learning Project Management Platform",
    status: "Full-stack platform · Collaboration and virtual labs",
    description: "A full-stack platform for managing learning projects, student enrollments, mentor relationships, project assets and collaborative virtual-lab workflows.",
    highlights: [
      "Project catalog with asset uploads and automatic ZIP extraction",
      "Student enrollment, progress tracking and mentor assignment",
      "Virtual-lab file manager with downloads and editing workflows",
      "Real-time collaboration-focused project experience",
      "Bearer-token API security for protected operations",
      "Role-based administration and project-centre management",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Token Auth", "REST API", "Jest"],
    repo: "https://github.com/musammilvilayil/Projexify",
    live: "https://projexify.onrender.com",
    preview: "https://image.thum.io/get/width/1200/crop/700/noanimate/https://projexify.onrender.com",
    updatedAt: "2026-07-24T08:00:00Z",
    icon: Code2,
    className: "project-visual projexify",
  },
  {
    name: "SHE-Shield",
    type: "Android and IoT Women’s Safety Ecosystem",
    status: "Mobile + wearable prototype · Emergency-response system",
    description: "A multi-trigger safety solution combining an Android application and an ESP32 BLE wearable to send emergency alerts, location information and supporting evidence during high-risk situations.",
    highlights: [
      "Manual, shake-detection and BLE-wearable SOS triggers",
      "High-precision GPS, Google Maps link, multipart SMS and emergency call",
      "Automatic background audio evidence with local timestamps",
      "Firebase onboarding and management of up to four trusted contacts",
      "ESP32 wearable with BLE, AES signals, GPS, GSM fallback and OLED UI",
      "Evidence gallery, wearable monitor, safe map and configurable fake call",
    ],
    stack: ["Android / Java", "Firebase", "Google Maps SDK", "MediaRecorder", "BLE / AES", "ESP32", "MPU6050", "NEO-6M GPS", "SIM800L GSM", "OLED"],
    repo: "https://github.com/musammilvilayil/she-sheild",
    preview: "https://opengraph.githubassets.com/1/musammilvilayil/she-sheild",
    updatedAt: "2026-07-23T08:00:00Z",
    icon: ShieldCheck,
    className: "project-visual shield",
  },
];

const projectsByRecentUpdate = [...projects].sort(
  (first, second) => Date.parse(second.updatedAt) - Date.parse(first.updatedAt),
);

const socials = [
  [Github, "https://github.com/musammilvilayil", "GitHub"],
  [Linkedin, "https://www.linkedin.com/in/muhammad-musammil-a-646882280/", "LinkedIn"],
  [Mail, "mailto:musammilvilayil@gmail.com", "Email"],
] as const;

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#home">MM</a>
      <nav>
        <a href="#home">Home</a><a href="#about">About</a><a href="#resume">Resume</a><a href="#portfolio">Portfolio</a><a href="#contact">Contact</a>
      </nav>
      <a className="phone-pill" href="tel:+916282135504"><Phone size={14}/> +91 62821 35504</a>
    </header>
  );
}

function App() {
  return (
    <main>
      <Header />
      <section className="hero" id="home">
        <div className="hero-copy">
          <span className="kicker">Junior Full-Stack Developer</span>
          <h1><span>Muhammad</span>Musammil</h1>
          <p>BCA graduate building reliable web products across full-stack development, AI-assisted systems, cloud workflows and connected safety technology.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#resume"><Download size={17}/> View Resume</a>
            <a className="btn" href="#portfolio">View Products <ExternalLink size={16}/></a>
          </div>
          <div className="socials">
            {socials.map(([Icon, href, label]) => <a key={label} href={href} aria-label={label} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"><Icon size={19}/></a>)}
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-copy">
          <span className="section-label">About me</span>
          <h2>BCA Graduate<br/>Full-Stack <em>Developer</em></h2>
          <p>I’m Muhammad Musammil, a BCA graduate from Kerala. I build modern web products using React, Next.js, Node.js and databases, while developing practical experience with AI services, secure APIs, background jobs, deployments and IoT-connected applications.</p>
          <div className="traits">{["Clean code", "Problem solver", "Fast learner", "Team player"].map(item => <div key={item}><CheckCircle2 size={17}/><span>{item}</span></div>)}</div>
          <div className="about-info">
            <div><MapPin size={17}/><span>Kollam, Kerala, India</span></div>
            <div><Mail size={17}/><span>musammilvilayil@gmail.com</span></div>
            <div><GraduationCap size={17}/><span>BCA, completed April 2026</span></div>
            <div><Phone size={17}/><span>Open to opportunities</span></div>
          </div>
        </div>
        <div className="about-portrait"><div className="portrait-ring"/><img src="/profile.png" alt="Muhammad Musammil wearing a navy suit" width="450" height="600" loading="lazy" decoding="async"/></div>
      </section>

      <section className="resume section" id="resume">
        <div className="section-heading"><span>Resume</span><h2>Skills, experience and education</h2></div>
        <div className="resume-grid">
          <article className="panel skills-panel"><h3>Technical skills</h3>{skills.map(([name,label,level]) => <div className="skill-row" key={name}><div><span>{name}</span><small>{label}</small></div><div className="bar"><i style={{width:`${level}%`}}/></div></div>)}</article>
          <article className="panel timeline-panel"><h3>Product experience</h3><div className="timeline">{experience.map(([year,end,title,project,description]) => <div className="timeline-item" key={project}><div className="year"><b>{year}</b>{end && <span>{end}</span>}</div><div><h4>{title}</h4><strong>{project}</strong><p>{description}</p></div></div>)}</div></article>
          <div className="side-stack">
            <article className="panel"><h3>Education</h3><div className="education"><GraduationCap size={26}/><div><strong>Bachelor of Computer Applications</strong><p>Sree Narayana College of Technology, Kollam</p><span>Completed April 2026</span></div></div></article>
            <article className="panel"><h3>What I can do</h3><ul>{["Full-stack web product development","REST API and webhook integration","Authentication and role-based access","SQL and NoSQL database integration","AI service and background-job workflows","Cloud deployment and Docker basics","Responsive UI development","IoT-connected application concepts"].map(item=><li key={item}><CheckCircle2 size={15}/>{item}</li>)}</ul></article>
            <article className="panel"><h3>Hobbies & interests</h3><div className="interests">{[[Code2,"Coding"],[BookOpen,"Reading"],[Camera,"Photography"],[Plane,"Travel"]].map(([Icon,label])=>{const I=Icon as LucideIcon; return <div key={String(label)}><I size={20}/><span>{String(label)}</span></div>})}</div></article>
          </div>
        </div>
      </section>

      <section className="portfolio section" id="portfolio">
        <div className="section-heading"><span>Products & projects</span><h2>Detailed product work</h2><p className="section-intro">Each product includes its purpose, major workflows, technical architecture and verified repository or live-demo access.</p></div>
        <div className="project-grid">
          {projectsByRecentUpdate.map(({name,type,description,stack,highlights,status,featured,repo,live,preview,icon:Icon,className}) => (
            <article className={`project-card${featured ? " featured-project" : ""}`} key={name}>
              <a className={className} href={live ?? repo} target="_blank" rel="noreferrer" aria-label={`Open ${name}`}>
                <Icon className="project-fallback-icon" size={44}/>
                <img src={preview} alt={`${name} project preview`} loading="lazy" decoding="async"/>
                <span className="preview-label"><ExternalLink size={14}/> Open project</span>
              </a>
              <div className="project-body">
                <span className="project-status">{status}</span>
                <small>{type}</small><h3>{name}</h3><p>{description}</p>
                <ul className="project-highlights">{highlights.map(item => <li key={item}><CheckCircle2 size={14}/><span>{item}</span></li>)}</ul>
                <div className="chips">{stack.map(item=><span key={item}>{item}</span>)}</div>
                <div className="project-links">{repo ? <a href={repo} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a> : null}{live ? <a href={live} target="_blank" rel="noreferrer"><ExternalLink size={16}/> Live Demo</a> : null}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-copy"><span className="section-label">Let’s connect</span><h2>Let’s build something useful.</h2><p>I’m open to junior developer roles, internships, apprenticeships and suitable freelance opportunities.</p><div className="contact-details"><a href="tel:+916282135504"><Phone size={17}/> +91 62821 35504</a><a href="mailto:musammilvilayil@gmail.com"><Mail size={17}/> musammilvilayil@gmail.com</a><span><MapPin size={17}/> Kollam, Kerala, India</span></div></div>
        <form className="contact-form" action="mailto:musammilvilayil@gmail.com" method="post" encType="text/plain"><div><input name="name" placeholder="Your name" required/><input name="email" type="email" placeholder="Your email" required/></div><input name="subject" placeholder="Subject"/><textarea name="message" placeholder="Your message" rows={6} required/><button className="btn primary" type="submit">Send message <Send size={16}/></button></form>
      </section>

      <footer><span>© {new Date().getFullYear()} Muhammad Musammil</span><span>Built with React, TypeScript and Vite.</span></footer>
    </main>
  );
}

export default App;
