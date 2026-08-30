import { CvPage } from './components/cv/CvPage';
import { GitHubSection } from './components/GitHubSection';
import { ThemeToggle } from './components/ThemeToggle';

export default function App() {
  return (
    <>
      <ThemeToggle />
      <CvPage />
      <GitHubSection />
    </>
  );
}
