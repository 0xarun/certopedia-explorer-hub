
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Certification } from '@/types';
import FavoriteButton from './FavoriteButton';

interface CertificationCardProps {
  certification: Certification;
  onTagClick?: (tag: string) => void;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ 
  certification,
  onTagClick
}) => {
  const { id, title, provider, summary, tags, level, price, image } = certification;
  
  const getProviderColor = (provider: string) => {
    const colors: Record<string, string> = {
      'Google': 'bg-blue-100 text-blue-800',
      'AWS': 'bg-orange-100 text-orange-800',
      'IBM': 'bg-indigo-100 text-indigo-800',
      'Microsoft': 'bg-teal-100 text-teal-800',
      'Coursera': 'bg-blue-100 text-blue-800',
      'edX': 'bg-red-100 text-red-800',
      'Udacity': 'bg-violet-100 text-violet-800',
      'Udemy': 'bg-fuchsia-100 text-fuchsia-800',
      'Pluralsight': 'bg-pink-100 text-pink-800',
    };
    
    return colors[provider] || 'bg-gray-100 text-gray-800';
  };
  
  const getLevelColor = (level: string) => {
    const colors: Record<string, string> = {
      'Beginner': 'bg-green-100 text-green-800',
      'Intermediate': 'bg-yellow-100 text-yellow-800',
      'Advanced': 'bg-orange-100 text-orange-800',
      'Expert': 'bg-red-100 text-red-800',
      'All Levels': 'bg-purple-100 text-purple-800',
    };
    
    return colors[level] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Card className="certification-card h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="relative h-48 rounded-t-lg overflow-hidden">
          <img 
            src={image || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400&q=80'} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 left-2">
            <Badge className={getProviderColor(provider)}>{provider}</Badge>
          </div>
          <FavoriteButton certificationId={id} />
        </div>
      </CardHeader>
      
      <CardContent className="pt-4 pb-2 flex-grow">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="outline" className={getLevelColor(level)}>{level}</Badge>
          <span className="text-sm font-medium">{price}</span>
        </div>
        
        <h3 className="text-lg font-bold mb-2 line-clamp-2">{title}</h3>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-3">{summary}</p>
        
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index} 
              className="tag-pill"
              onClick={() => onTagClick && onTagClick(tag)}
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="tag-pill">+{tags.length - 3}</span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-2 pb-4 flex justify-between">
        <Button variant="outline" asChild>
          <Link to={`/certification/${id}`}>View Details</Link>
        </Button>
        <Button variant="default" className="gap-1" asChild>
          <a href={certification.url} target="_blank" rel="noopener noreferrer">
            Visit <ExternalLink size={16} />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CertificationCard;
