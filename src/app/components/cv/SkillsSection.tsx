import { profile, type SkillItem } from '@/data/profile';

function SkillEntry({ item }: { item: SkillItem }) {
  if (item.type === 'text') {
    return <li>{item.content}</li>;
  }

  if (item.type === 'labeled') {
    return (
      <li>
        <strong>{item.label}</strong> : {item.content}
      </li>
    );
  }

  return (
    <li>
      <strong>{item.title}</strong>
      <ul>
        {item.items.map((subitem) => (
          <li key={subitem}>{subitem}</li>
        ))}
      </ul>
    </li>
  );
}

export function SkillsSection() {
  return (
    <li>
      <h2>
        <strong>Skills</strong>
      </h2>
      <ul>
        {profile.skills.map((skill) => (
          <SkillEntry
            key={skill.type === 'group' ? skill.title : skill.type === 'labeled' ? skill.label : skill.content}
            item={skill}
          />
        ))}
      </ul>
    </li>
  );
}
