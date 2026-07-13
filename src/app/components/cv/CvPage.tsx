import { useState } from 'react';
import { Presentation } from './Presentation';
import { SkillsTable } from './SkillsTable';
import { ExperienceTable } from './ExperienceTable';
import { EducationTable } from './EducationTable';
import { ProjectsSection } from './ProjectsSection';

type Tab = 'skills' | 'experiences' | 'formation' | 'projects';

export function CvPage() {
  const [activeTab, setActiveTab] = useState<Tab>('skills');

  const tabs = [
    { id: 'skills' as Tab, label: 'Skills' },
    { id: 'experiences' as Tab, label: 'Experiences' },
    { id: 'formation' as Tab, label: 'Formation' },
    { id: 'projects' as Tab, label: 'Projects' },
  ];

  return (
    <div id="Presentation" className="cv-container">
      <Presentation />

      <div className="cv-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`cv-tab ${activeTab === tab.id ? 'cv-tab-active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="cv-tab-content">
        <div className={`cv-tab-panel ${activeTab === 'skills' ? 'cv-tab-panel-active' : ''}`}>
          <SkillsTable />
        </div>
        <div className={`cv-tab-panel ${activeTab === 'experiences' ? 'cv-tab-panel-active' : ''}`}>
          <ExperienceTable />
        </div>
        <div className={`cv-tab-panel ${activeTab === 'formation' ? 'cv-tab-panel-active' : ''}`}>
          <EducationTable />
        </div>
        <div className={`cv-tab-panel ${activeTab === 'projects' ? 'cv-tab-panel-active' : ''}`}>
          <ProjectsSection />
        </div>
      </div>
    </div>
  );
}
