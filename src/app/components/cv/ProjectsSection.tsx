import { profile } from '@/data/profile';



export function ProjectsSection() {
  return (
    <li>
      <h2>
        <strong>Projects</strong>
      </h2>
      <table className="cv-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Precision</th>
          </tr>
        </thead>
        <tbody>
          {profile.projects.map((project) => (
            <tr key={`${project.title}-${project.description}`}>
              <td><a href={project.url} target="_blank" rel="noreferrer">{project.title}</a></td>
              <td>{project.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </li>
  );
}