import { profile } from '@/data/profile';

export function SkillsTable() {
  return (
    <li>
      <h2>
        <strong>Skills</strong>
      </h2>
      <table className="cv-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Precision</th>
          </tr>
        </thead>
        <tbody>
          {profile.skills.map((skill) => (
            <tr key={`${skill.label}-${skill.content}`}>
              <td>{skill.label}</td>
              <td>{skill.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </li>
  );
}