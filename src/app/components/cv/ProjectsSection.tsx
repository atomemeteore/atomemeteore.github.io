import { profile } from '@/data/profile';

export function ProjectsSection() {
  return (
    <li>
      <h2>
        <strong>Personal Bioinformatics Projects</strong>
      </h2>
      <ul className="cv-projects">
        {profile.projects.map((project) => (
          <li key={project.url}>
            {project.title} :{' '}
            <a href={project.url} target="_blank" rel="noreferrer">
              GitHub Repository
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}
