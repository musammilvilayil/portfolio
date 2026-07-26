import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
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
} from "lucide-react";

type Skill = readonly [name: string, label: string, level: number];
type Experience = readonly [year: string, end: string, title: string, project: string, description: string];
type Project = {
  name: string;
  type: string;
  description: string;
  stack: string[];
  repo: string;
  live?: string;
  icon: LucideIcon;
  className: string;
};

const skills: Skill[] = [
  ["React.js", "Comfortable", 82],
  ["Next.js", "Working knowledge", 70],
  ["TypeScript", "Learning", 58],
  ["Node.js", "Comfortable", 80],
  ["Express.js", "Comfortable", 78],
  ["MongoDB", "Comfortable", 82],
  ["PostgreSQL", "Working knowledge", 62],
  ["Tailwind CSS", "Comfortable", 84],
];

const experience: Experience[] = [
  ["2025", "Present", "Freelance Full-Stack Developer", "Independent Projects", "Built practical web products for students and clients using the MERN stack and modern development tools."],
  ["2026", "", "Full-Stack Developer", "MEGHAM", "Cloud storage workspace with authentication, file uploads, folders, sharing and role-based dashboards."],
  ["2025", "", "Full-Stack Developer", "Projexify", "Project workflow platform focused on tasks, collaboration, progress tracking and useful management features."],
  ["2025", "", "Application Developer", "SHE-Shield", "Women’s safety solution built around emergency alerts, trusted contacts and connected-device concepts."],
];

const projects: Project[] = [
  {
    name: "MEGHAM",
    type: "Cloud Storage Platform",
    description: "Secure file uploads, metadata management, folders, sharing, search and role-based access.",
    stack: ["React", "Node.js", "MongoDB", "Cloudinary"],
    repo: "https://github.com/musammilvilayil/Megham",
    live: "https://megham-six.vercel.app",
    icon: Cloud,
    className: "project-visual megham",
  },
  {
    name: "Projexify",
    type: "Project Management Platform",
    description: "A full-stack workflow product for tasks, teams, progress tracking and collaboration.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    repo: "https://github.com/musammilvilayil/Projexify",
    icon: Code2,
    className: "project-visual projexify",
  },
  {
    name: "SHE-Shield",
    type: "Safety Technology",
    description: "Emergency alerts, trusted contacts, location support and connected safety-device concepts.",
    stack: ["JavaScript", "Node.js", "MongoDB", "ESP32"],
    repo: "https://github.com/musammilvilayil/she-sheild",
    icon: ShieldCheck,
    className: "project-visual shield",
  },
];

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
          <p>BCA graduate building reliable, user-focused web applications and practical full-stack products.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#resume"><Download size={17}/> View Resume</a>
            <a className="btn" href="#portfolio">View Projects <ExternalLink size={16}/></a>
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
          <p>I’m Muhammad Musammil, a BCA graduate from Kerala. I build modern web applications using React, Next.js, Node.js and MongoDB, with a focus on clear interfaces and practical backend workflows.</p>
          <div className="traits">{["Clean code", "Problem solver", "Fast learner", "Team player"].map(item => <div key={item}><CheckCircle2 size={17}/><span>{item}</span></div>)}</div>
          <div className="about-info">
            <div><MapPin size={17}/><span>Kollam, Kerala, India</span></div>
            <div><Mail size={17}/><span>musammilvilayil@gmail.com</span></div>
            <div><GraduationCap size={17}/><span>BCA, completed April 2026</span></div>
            <div><Phone size={17}/><span>Open to opportunities</span></div>
          </div>
        </div>
        <div className="about-portrait"><div className="portrait-ring"/><img src="/profile.png" alt="Muhammad Musammil wearing a navy suit" width="1200" height="1500" loading="lazy" decoding="async"/></div>
      </section>

      <section className="resume section" id="resume">
        <div className="section-heading"><span>Resume</span><h2>Skills, experience and education</h2></div>
        <div className="resume-grid">
          <article className="panel skills-panel"><h3>Technical skills</h3>{skills.map(([name,label,level]) => <div className="skill-row" key={name}><div><span>{name}</span><small>{label}</small></div><div className="bar"><i style={{width:`${level}%`}}/></div></div>)}</article>
          <article className="panel timeline-panel"><h3>Experience</h3><div className="timeline">{experience.map(([year,end,title,project,description]) => <div className="timeline-item" key={project}><div className="year"><b>{year}</b>{end && <span>{end}</span>}</div><div><h4>{title}</h4><strong>{project}</strong><p>{description}</p></div></div>)}</div></article>
          <div className="side-stack">
            <article className="panel"><h3>Education</h3><div className="education"><GraduationCap size={26}/><div><strong>Bachelor of Computer Applications</strong><p>Sree Narayana College of Technology, Kollam</p><span>Completed April 2026</span></div></div></article>
            <article className="panel"><h3>What I can do</h3><ul>{["Web application development","REST API integration","UI development","Authentication workflows","Database integration","Deployment basics"].map(item=><li key={item}><CheckCircle2 size={15}/>{item}</li>)}</ul></article>
            <article className="panel"><h3>Hobbies & interests</h3><div className="interests">{[[Code2,"Coding"],[BookOpen,"Reading"],[Camera,"Photography"],[Plane,"Travel"]].map(([Icon,label])=>{const I=Icon as LucideIcon; return <div key={String(label)}><I size={20}/><span>{String(label)}</span></div>})}</div></article>
          </div>
        </div>
      </section>

      <section className="portfolio section" id="portfolio">
        <div className="section-heading"><span>Portfolio</span><h2>Selected product work</h2></div>
        <div className="project-grid">
          {projects.map(({name,type,description,stack,repo,live,icon:Icon,className}) => <article className="project-card" key={name}><div className={className}><Icon size={44}/></div><div className="project-body"><small>{type}</small><h3>{name}</h3><p>{description}</p><div className="chips">{stack.map(item=><span key={item}>{item}</span>)}</div><div className="project-links"><a href={repo} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>{live ? <a href={live} target="_blank" rel="noreferrer"><ExternalLink size={16}/> Live Demo</a> : null}</div></div></article>)}
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
