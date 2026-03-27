import { Star, GitFork, Circle, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

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

interface RepositoryCardProps {
  repo: Repository;
}

const languageColors: Record<string, string> = {
  JavaScript: 'bg-yellow-500',
  TypeScript: 'bg-blue-500',
  Python: 'bg-blue-600',
  Java: 'bg-orange-500',
  'C++': 'bg-pink-500',
  C: 'bg-gray-500',
  'C#': 'bg-purple-500',
  Go: 'bg-cyan-500',
  Ruby: 'bg-red-500',
  Rust: 'bg-orange-600',
  PHP: 'bg-indigo-500',
  Swift: 'bg-orange-400',
  Kotlin: 'bg-purple-600',
  HTML: 'bg-red-400',
  CSS: 'bg-blue-400',
};

export function RepositoryCard({ repo }: RepositoryCardProps) {
  const languageColor = languageColors[repo.language] || 'bg-gray-400';
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "aujourd'hui";
    if (diffDays === 1) return 'hier';
    if (diffDays < 30) return `il y a ${diffDays} jours`;
    if (diffDays < 365) return `il y a ${Math.floor(diffDays / 30)} mois`;
    return `il y a ${Math.floor(diffDays / 365)} ans`;
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-start justify-between gap-2">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-primary flex items-center gap-2"
          >
            {repo.name}
            <ExternalLink className="w-4 h-4" />
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {repo.description && (
          <p className="text-sm text-muted-foreground">{repo.description}</p>
        )}
        
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {repo.topics.slice(0, 5).map((topic) => (
              <Badge key={topic} variant="secondary" className="text-xs">
                {topic}
              </Badge>
            ))}
          </div>
        )}
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {repo.language && (
            <div className="flex items-center gap-1">
              <Circle className={`w-3 h-3 fill-current ${languageColor}`} />
              <span>{repo.language}</span>
            </div>
          )}
          
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            <span>{repo.stargazers_count}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <GitFork className="w-4 h-4" />
            <span>{repo.forks_count}</span>
          </div>
          
          <span className="ml-auto text-xs">
            Mis à jour {formatDate(repo.updated_at)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
