import { Presentation } from './Presentation';
import { SkillsSection } from './SkillsSection';
import { ExperienceTable } from './ExperienceTable';
import { EducationTable } from './EducationTable';
import { ProjectsSection } from './ProjectsSection';

export function CvPage() {
  return (
    <div id="Presentation" className="cv-container">
      <Presentation />
      <ul className="cv-sections">
        <SkillsSection />
        <ExperienceTable />
        <EducationTable />
        <ProjectsSection />
      </ul>
    </div>
  );
}
