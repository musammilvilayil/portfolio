import {
  ArrowDown,
  Cloud,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Header } from "./components/Header";
import { ProjectCard } from "./components/ProjectCard";
import { SectionHeading } from "./components/SectionHeading";
import { capabilities, projects, skillGroups, timeline } from "./data/portfolio";

const profileImage = "https://avatars.githubusercontent.com/u/140297924?v=4";

function App() {
  return (
    <div className="site-shell">
      <Header />

      <main>
        <section className="hero section" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow hero-glow--one" aria-hidden="true" />
          <div className="hero-glow hero-glow--two" aria-hidden="true" />

          <div className="hero-content container">
            <div className="hero-copy">
              <span className="eyebrow">Junior Full-Stack Developer</span>
              <h1>
                Muhammad
                <span>Musammil</span>
              </h1>
              <p>
                I build reliable web products with thoughtful interfaces, practical backend systems and a strong focus on real-world usability.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href="#portfolio">
                  View portfolio
                </a>
                <a className="button button--ghost" href="#resume">
                  Resume
                </a>
              </div>
            </div>

            <div className="hero-terminal" aria-label="Developer profile summary">
              <div className="terminal-bar">
                <span />
                <span />
                <span />
                <strong>portfolio.ts</strong>
              </div>
              <div className="terminal-body">
                <p><b>const</b> developer = &#123;</p>
                <p className="indent">location: <i>"Kollam, Kerala"</i>,</p>
                <p className="indent">focus: <i>"Full-stack products"</i>,</p>
                <p className="indent">status: <i>"Open to opportunities"</i>,</p>
                <p>&#125;;</p>
              </div>
              <div className="terminal-stack">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>

          <div className="hero-footer container">
            <div className="social-row">
              <a href="https://github.com/musammilvilayil" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-musammil-a-646882280/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:musammilvilayil@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <a className="scroll-link" href="#about">
              Scroll to explore <ArrowDown size={17} />
            </a>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="container about-layout">
            <div>
              <SectionHeading
                eyebrow="About"
                title="Developer mindset. Product focus."
                body="A BCA graduate from Kerala who enjoys turning practical ideas into clean, usable digital products."
              />
              <div className="about-copy">
                <p>
                  My strongest work sits at the meeting point of interface design and full-stack implementation. I care about clarity, useful features and making each project easy to understand for both users and recruiters.
                </p>
                <p>
                  I am currently strengthening my development fundamentals while building portfolio projects around cloud storage, safety technology and project-management workflows.
                </p>
              </div>
              <div className="about-details">
                <div><MapPin size={18} /><span>Kollam, Kerala, India</span></div>
                <div><Mail size={18} /><a href="mailto:musammilvilayil@gmail.com">musammilvilayil@gmail.com</a></div>
              </div>
            </div>

            <div className="portrait-panel">
              <div className="portrait-frame">
                <img src={profileImage} alt="Muhammad Musammil" />
              </div>
              <div className="portrait-note">
                <strong>Available for</strong>
                <span>Junior developer roles, internships and freelance work.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="resume section" id="resume">
          <div className="container">
            <SectionHeading
              eyebrow="Resume"
              title="Skills, experience and capabilities"
              body="A focused snapshot of the technologies I use and the work I am prepared to contribute to."
            />

            <div className="resume-grid">
              <div className="resume-column">
                <h3>Technical skills</h3>
                {skillGroups.map((group) => (
                  <div className="skill-group" key={group.title}>
                    <h4>{group.title}</h4>
                    <div className="tag-list">
                      {group.items.map((item) => <span key={item}>{item}</span>)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="resume-column resume-column--timeline">
                <h3>Experience & education</h3>
                {timeline.map((item) => (
                  <article className="timeline-item" key={`${item.period}-${item.title}`}>
                    <span>{item.period}</span>
                    <h4>{item.title}</h4>
                    <strong>{item.place}</strong>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>

              <div className="resume-column">
                <h3>What I can do</h3>
                <ul className="capability-list">
                  {capabilities.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="icon-grid" aria-label="Development focus areas">
                  <div><Code2 size={23} /><span>Frontend</span></div>
                  <div><Database size={23} /><span>Backend</span></div>
                  <div><Cloud size={23} /><span>Cloud</span></div>
                  <div><ShieldCheck size={23} /><span>Security</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio section" id="portfolio">
          <div className="container">
            <SectionHeading
              eyebrow="Portfolio"
              title="Selected product work"
              body="Projects chosen to show product thinking, interface quality and full-stack problem solving."
            />
            <div className="project-list">
              {projects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="container contact-card">
            <div>
              <span className="eyebrow">Contact</span>
              <h2>Let’s build something useful.</h2>
              <p>I am open to junior developer roles, internships, apprenticeships and suitable freelance opportunities.</p>
            </div>
            <div className="contact-actions">
              <a className="button button--primary" href="mailto:musammilvilayil@gmail.com">
                <Mail size={18} /> Email me
              </a>
              <a className="button button--ghost" href="tel:+916282135504">
                <Phone size={18} /> Call me
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer container">
        <span>© {new Date().getFullYear()} Muhammad Musammil</span>
        <span>Built with React, TypeScript and Vite.</span>
      </footer>
    </div>
  );
}

export default App;
