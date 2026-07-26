import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Camera,
  Cloud,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  Maximize2,
  Phone,
  Plane,
  ShieldCheck,
} from "lucide-react";

type NavSection = "home" | "about" | "resume" | "portfolio";

type Skill = {
  name: string;
  level: number;
  badge?: string;
};

type TimelineItem = {
  period: string;
  title: string;
  project: string;
  description: string;
};

type Interest = {
  label: string;
  icon: LucideIcon;
};

const technicalSkills: Skill[] = [
  { name: "React.js", level: 82, badge: "⚛" },
  { name: "Next.js", level: 76, badge: "N" },
  { name: "Node.js", level: 78, badge: "JS" },
  { name: "MongoDB", level: 80, badge: "M" },
  { name: "Tailwind CSS", level: 84, badge: "≈" },
  { name: "TypeScript", level: 72, badge: "TS" },
];

const languages: Skill[] = [
  { name: "Malayalam", level: 96 },
  { name: "English", level: 68 },
];

const personalSkills: Skill[] = [
  { name: "Creativity", level: 86 },
  { name: "Team Work", level: 80 },
  { name: "Communication", level: 72 },
  { name: "Organization", level: 78 },
];

const experience: TimelineItem[] = [
  {
    period: "2025\nPresent",
    title: "Freelance Full-Stack Developer",
    project: "Independent Projects",
    description:
      "Built and refined practical web products for students and clients using modern JavaScript stacks.",
  },
  {
    period: "2026",
    title: "Full-Stack Developer",
    project: "MEGHAM",
    description:
      "Cloud storage workspace with authentication, file uploads, sharing, folders and role-based dashboards.",
  },
  {
    period: "2025",
    title: "Full-Stack Developer",
    project: "Projexify",
    description:
      "Project-management platform designed around tasks, teams, progress tracking and useful workflows.",
  },
  {
    period: "2025",
    title: "Application Developer",
    project: "SHE-Shield",
    description:
      "Women’s safety solution combining emergency alerts, location support and connected-device concepts.",
  },
];

const canDo = [
  "Responsive web apps",
  "REST API integration",
  "Modern UI development",
  "Authentication workflows",
  "Database integration",
  "Static and cloud deployment",
];

const developerSkills = [
  "Problem solving",
  "Clean interface design",
  "Debugging and iteration",
  "API integration",
  "Responsive design",
];

const interests: Interest[] = [
  { label: "Coding", icon: Code2 },
  { label: "Reading", icon: BookOpen },
  { label: "Photography", icon: Camera },
  { label: "Travel", icon: Plane },
];

const projects = [
  {
    name: "MEGHAM",
    type: "Cloud Storage Platform",
    description:
      "A cloud workspace for secure file uploads, metadata management, folders, sharing, search and role-based access.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    repository: "https://github.com/musammilvilayil/Megham",
    live: "https://megham-six.vercel.app",
    icon: Cloud,
  },
  {
    name: "Projexify",
    type: "Project Management Platform",
    description:
      "A full-stack project workflow product focused on task coordination, collaboration and progress visibility.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    repository: "https://github.com/musammilvilayil/Projexify",
    icon: Code2,
  },
  {
    name: "SHE-Shield",
    type: "Safety Technology",
    description:
      "A women’s safety project designed around emergency alerts, trusted contacts, location sharing and connected hardware concepts.",
    stack: ["JavaScript", "Node.js", "MongoDB", "ESP32"],
    repository: "https://github.com/musammilvilayil/she-sheild",
    icon: ShieldCheck,
  },
];

function SectionNav({ active }: { active: NavSection }) {
  const links: Array<{ label: string; href: string; id: NavSection }> = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Resume", href: "#resume", id: "resume" },
    { label: "Portfolio", href: "#portfolio", id: "portfolio" },
  ];

  return (
    <header className="panel-nav">
      <nav aria-label={`${active} section navigation`}>
        {links.map((link) => (
          <a
            className={active === link.id ? "is-active" : undefined}
            href={link.href}
            key={link.id}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a className="phone-link" href="tel:+916282135504">
        <Phone aria-hidden="true" size={14} />
        <span>+91 62821 35504</span>
      </a>
    </header>
  );
}

function ExpandMark() {
  return (
    <a className="expand-mark" href="#home" aria-label="Back to the top">
      <Maximize2 aria-hidden="true" size={20} />
    </a>
  );
}

function SkillMeter({ skill }: { skill: Skill }) {
  return (
    <div className="skill-meter">
      <div className="skill-name">
        {skill.badge ? <span className="skill-badge">{skill.badge}</span> : null}
        <span>{skill.name}</span>
      </div>
      <div className="meter-track" aria-label={`${skill.name} skill level`}>
        <span className="meter-fill" style={{ width: `${skill.level}%` }} />
        <span className="meter-dot" style={{ left: `calc(${skill.level}% - 5px)` }} />
      </div>
    </div>
  );
}

function ColumnTitle({ children }: { children: string }) {
  return <h3 className="column-title">{children}</h3>;
}

function App() {
  return (
    <main className="portfolio-site">
      <section className="screen-panel hero-panel" id="home">
        <div className="panel-overlay" />
        <SectionNav active="home" />

        <div className="hero-copy">
          <p className="hero-first-name">Muhammad</p>
          <h1>Musammil</h1>
          <p className="hero-role">Junior Full-Stack Developer</p>
          <div className="hero-buttons">
            <a href="#resume">Resume</a>
            <a href="#portfolio">Portfolio</a>
          </div>
        </div>

        <div className="hero-socials" aria-label="Social links">
          <a href="https://github.com/musammilvilayil" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-musammil-a-646882280/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a href="#contact" aria-label="Instagram profile placeholder">
            <Instagram size={22} />
          </a>
          <a href="mailto:musammilvilayil@gmail.com" aria-label="Email">
            <Mail size={22} />
          </a>
        </div>
        <ExpandMark />
      </section>

      <section className="screen-panel about-panel" id="about">
        <SectionNav active="about" />
        <div className="about-copy">
          <h2 className="section-title">About</h2>
          <a className="about-email" href="mailto:musammilvilayil@gmail.com">
            musammilvilayil@gmail.com
          </a>
          <p>
            BCA graduate and Junior Full-Stack Developer from Kerala, India. I build modern web applications with React, Next.js, Node.js and MongoDB, with a focus on useful interfaces, practical backend workflows and clean implementation.
          </p>
          <p>
            My portfolio work includes cloud storage, project-management and safety-focused products. I enjoy turning real-world ideas into reliable digital experiences while continuously improving my development fundamentals.
          </p>
          <div className="location-mark" aria-label="Location">
            <span />
            <p>Kollam, Kerala<br />India</p>
            <span />
          </div>
        </div>

        <div className="portrait-stage" aria-label="Portrait of Muhammad Musammil">
          <div className="portrait-halo" />
          <img src="/profile.webp" alt="Muhammad Musammil wearing a navy suit" loading="eager" decoding="async" />
        </div>
        <ExpandMark />
      </section>

      <section className="screen-panel resume-panel" id="resume">
        <div className="resume-texture" />
        <SectionNav active="resume" />

        <div className="resume-layout">
          <div className="resume-column skills-column">
            <ColumnTitle>Technical skills</ColumnTitle>
            <div className="meter-list">
              {technicalSkills.map((skill) => <SkillMeter key={skill.name} skill={skill} />)}
            </div>

            <ColumnTitle>Languages</ColumnTitle>
            <div className="meter-list compact">
              {languages.map((skill) => <SkillMeter key={skill.name} skill={skill} />)}
            </div>

            <ColumnTitle>Personal skills</ColumnTitle>
            <div className="meter-list compact">
              {personalSkills.map((skill) => <SkillMeter key={skill.name} skill={skill} />)}
            </div>
          </div>

          <div className="resume-column timeline-column">
            <ColumnTitle>Experience</ColumnTitle>
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-entry" key={`${item.period}-${item.project}`}>
                  <div className="timeline-year">{item.period.split("\n").map((part) => <span key={part}>{part}</span>)}</div>
                  <div className="timeline-copy">
                    <h4>{item.title}</h4>
                    <strong>{item.project}</strong>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <ColumnTitle>Education</ColumnTitle>
            <div className="education-card">
              <span className="education-icon"><GraduationCap size={26} /></span>
              <div>
                <h4>BCA / Bachelor of Computer Applications</h4>
                <p>Sree Narayana College of Technology, Kollam</p>
                <span>Completed April 2026</span>
              </div>
            </div>
          </div>

          <div className="resume-column abilities-column">
            <ColumnTitle>What can I do?</ColumnTitle>
            <ul className="bullet-list">
              {canDo.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <ColumnTitle>Developer skills</ColumnTitle>
            <ul className="bullet-list">
              {developerSkills.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <ColumnTitle>Hobbies & interests</ColumnTitle>
            <div className="interest-grid">
              {interests.map(({ label, icon: Icon }) => (
                <div className="interest-item" key={label}>
                  <span><Icon size={22} /></span>
                  <p>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ExpandMark />
      </section>

      <section className="screen-panel projects-panel" id="portfolio">
        <SectionNav active="portfolio" />
        <div className="projects-heading">
          <p>Selected work</p>
          <h2>Portfolio</h2>
          <span>Products built around real problems, practical workflows and clear user experiences.</span>
        </div>

        <div className="project-grid">
          {projects.map(({ name, type, description, stack, repository, live, icon: Icon }) => (
            <article className="project-card" key={name}>
              <div className="project-icon"><Icon size={28} /></div>
              <p className="project-type">{type}</p>
              <h3>{name}</h3>
              <p className="project-description">{description}</p>
              <div className="project-stack">
                {stack.map((item) => <span key={item}>{item}</span>)}
              </div>
              <div className="project-actions">
                <a href={repository} target="_blank" rel="noreferrer">
                  <Github size={16} /> Repository
                </a>
                {live ? (
                  <a href={live} target="_blank" rel="noreferrer">
                    <ExternalLink size={16} /> Live project
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="contact-strip" id="contact">
          <div>
            <p>Open to junior roles, internships and suitable freelance opportunities.</p>
            <h2>Let’s build something useful.</h2>
          </div>
          <div className="contact-links">
            <a href="mailto:musammilvilayil@gmail.com"><Mail size={18} /> Email me</a>
            <a href="tel:+916282135504"><Phone size={18} /> Call me</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
