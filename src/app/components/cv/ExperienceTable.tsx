import { profile } from '@/data/profile';

export function ExperienceTable() {
  return (
    <li>
      <h2>
        <strong>Experiences</strong>
      </h2>
      <table className="cv-table">
        <thead>
          <tr>
            <th>Année</th>
            <th>Poste</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {profile.experiences.map((experience) => (
            <tr key={`${experience.year}-${experience.role}`}>
              <td>{experience.year}</td>
              <td>{experience.role}</td>
              <td>
                {experience.description.split('\n').map((line, index) => (
                  <span key={line}>
                    {index > 0 && <br />}
                    {line}
                  </span>
                ))}
                {experience.bullets && experience.bullets.length > 0 && (
                  <ul>
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </li>
  );
}
