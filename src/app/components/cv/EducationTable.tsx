import { profile } from '@/data/profile';

export function EducationTable() {
  return (
    <li>
      <h2>
        <strong>Formation</strong>
      </h2>
      <div className="cv-table-wrap">
        <table className="cv-table">
        <thead>
          <tr>
            <th>Année</th>
            <th>Diplôme</th>
          </tr>
        </thead>
        <tbody>
          {profile.education.map((entry) => (
            <tr key={`${entry.year}-${entry.degree}`}>
              <td>{entry.year}</td>
              <td>{entry.degree}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </li>
  );
}
