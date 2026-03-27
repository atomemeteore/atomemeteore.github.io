import { User, MapPin, Link as LinkIcon, Users, Building } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

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

interface GitHubProfileProps {
  user: GitHubUser;
}

export function GitHubProfile({ user }: GitHubProfileProps) {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <Avatar className="w-32 h-32">
              <AvatarImage src={user.avatar_url} alt={user.name || user.login} />
              <AvatarFallback>
                <User className="w-16 h-16" />
              </AvatarFallback>
            </Avatar>
          </div>
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{user.name || user.login}</h1>
            <p className="text-muted-foreground mb-4">@{user.login}</p>
            
            {user.bio && (
              <p className="mb-4">{user.bio}</p>
            )}
            
            <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
              {user.company && (
                <div className="flex items-center gap-1">
                  <Building className="w-4 h-4" />
                  <span>{user.company}</span>
                </div>
              )}
              
              {user.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{user.location}</span>
                </div>
              )}
              
              {user.blog && (
                <div className="flex items-center gap-1">
                  <LinkIcon className="w-4 h-4" />
                  <a 
                    href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-primary"
                  >
                    {user.blog}
                  </a>
                </div>
              )}
            </div>
            
            <div className="flex gap-6 text-sm">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span><strong>{user.followers}</strong> followers</span>
              </div>
              <div className="flex items-center gap-1">
                <span><strong>{user.following}</strong> following</span>
              </div>
              <div className="flex items-center gap-1">
                <span><strong>{user.public_repos}</strong> repositories</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
