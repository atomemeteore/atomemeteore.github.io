import { profile, type LinkItem } from '@/data/profile';

function getLinkHref(link: LinkItem): string | null {
  switch (link.type) {
    case 'email':
      return `mailto:${link.content}`;
    case 'phone':
      return `tel:${link.content.replace(/[\s.]/g, '')}`;
    case 'linkedin':
    case 'github':
      return link.content;
    case 'mobility':
      return null;
  }
}

function getLinkLabel(link: LinkItem): string {
  switch (link.type) {
    case 'email':
      return link.content;
    case 'linkedin':
      return 'LinkedIn';
    case 'github':
      return 'GitHub';
    case 'phone':
      return link.content;
    case 'mobility':
      return link.content;
  }
}

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
        <div className="cv-links">
          {profile.links.map((link) => {
            const href = getLinkHref(link);

            if (!href) {
              return (
                <span key={link.type} className="cv-link-text">
                  {getLinkLabel(link)}
                </span>
              );
            }

            return (
              <a
                key={link.type}
                href={href}
                target={link.type === 'email' || link.type === 'phone' ? undefined : '_blank'}
                rel={link.type === 'email' || link.type === 'phone' ? undefined : 'noreferrer'}
                className="cv-link"
              >
                {getLinkLabel(link)}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
