import { CvPage } from './components/cv/CvPage';
import { GitHubSection } from './components/GitHubSection';
import { ParticleWaveBackground } from './components/ParticleWaveBackground';
import { ThemeToggle } from './components/ThemeToggle';

export default function App() {
  return (
    <>
      <ParticleWaveBackground />
      <div className="page-content">
        <ThemeToggle />
        <CvPage />
        <GitHubSection />
      </div>
    </>
  );
}
