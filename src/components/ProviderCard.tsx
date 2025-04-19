
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getProviderLogo } from '@/utils/provider-utils';

interface ProviderCardProps {
  provider: string;
  count: number;
}

const ProviderCard: React.FC<ProviderCardProps> = ({ provider, count }) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 flex items-center justify-center">
            <img 
              src={getProviderLogo(provider)} 
              alt={provider} 
              className="max-w-full max-h-full"
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">{provider}</h3>
        <div className="flex justify-center">
          <Badge variant="secondary">{count} certifications</Badge>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Button variant="outline" asChild>
          <Link to={`/explore?provider=${provider}`}>
            View Certifications
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProviderCard;
