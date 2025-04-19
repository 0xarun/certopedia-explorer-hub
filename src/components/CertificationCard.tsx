
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Certification } from '@/types';
import FavoriteButton from './FavoriteButton';

interface CertificationCardProps {
  certification: Certification;
  onTagClick?: (tag: string) => void;
}

const CertificationCard = ({ certification, onTagClick }: CertificationCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <Link to={`/certification/${certification.id}`}>
        <CardHeader>
          <CardTitle className="text-xl">{certification.title}</CardTitle>
          <CardDescription>{certification.provider}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm text-gray-600">{certification.summary}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {certification.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  onTagClick?.(tag);
                }}
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>{certification.level}</span>
            <span>{certification.price}</span>
          </div>
        </CardContent>
      </Link>
      <CardContent className="pt-0">
        <FavoriteButton certificationId={certification.id} />
      </CardContent>
    </Card>
  );
};

export default CertificationCard;
