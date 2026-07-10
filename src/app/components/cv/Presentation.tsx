import { profile } from '@/data/profile';

export function Presentation() {
  return (
    <div className="cv-intro">
      <img
        className="cv-photo"
        src={profile.photo}
        alt={profile.name}
      />
      <div className="cv-intro-card">
        <h1>{profile.greeting}</h1>
        {profile.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
