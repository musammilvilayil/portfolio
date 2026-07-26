import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "../data/portfolio";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-number">0{index + 1}</div>
      <div className="project-copy">
        <span className="project-label">{project.label}</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tag-list" aria-label={`${project.name} technologies`}>
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <div className="project-links">
        <a href={project.github} target="_blank" rel="noreferrer">
          <Github size={18} aria-hidden="true" />
          Code
        </a>
        {project.live ? (
          <a href={project.live} target="_blank" rel="noreferrer">
            Live
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
