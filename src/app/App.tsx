import { useState, useEffect } from 'react';
import { Loader2, Github, AlertCircle } from 'lucide-react';
import { GitHubProfile } from './components/github-profile';
import { RepositoryCard } from './components/repository-card';
import { Alert, AlertDescription } from './components/ui/alert';

interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  location: string;
  blog: string;
  company: string;
  followers: number;
  following: number;
  public_repos: number;
}

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

export default function App() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      const githubUsername = 'atomemeteore';
      setLoading(true);
      setError(null);

      try {
        // Fetch user profile
        const userResponse = await fetch(`https://api.github.com/users/${githubUsername}`);
        if (!userResponse.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        const userData = await userResponse.json();
        setUser(userData);

        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`
        );
        if (!reposResponse.ok) {
          throw new Error('Erreur lors de la récupération des repositories');
        }
        const reposData = await reposResponse.json();
        setRepositories(reposData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Chargement du profil...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Alert variant="destructive" className="max-w-md">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Github className="w-12 h-12" />
            <h1 className="text-4xl font-bold">Mon Profil GitHub</h1>
          </div>
        </div>

        {/* User Profile */}
        {user && (
          <div className="space-y-8">
            <GitHubProfile user={user} />

            {/* Repositories Section */}
            {repositories.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Mes Repositories ({repositories.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {repositories.map((repo) => (
                    <RepositoryCard key={repo.id} repo={repo} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}