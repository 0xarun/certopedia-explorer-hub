
import React from 'react';
import { Certification } from '@/types';
import CertificationCard from './CertificationCard';

interface FeaturedCertificationsProps {
  certifications: Certification[];
  onTagClick: (tag: string) => void;
}

const FeaturedCertifications: React.FC<FeaturedCertificationsProps> = ({ 
  certifications,
  onTagClick
}) => {
  const featuredCertifications = certifications.filter(cert => cert.featured);

  if (featuredCertifications.length === 0) {
    return null;
  }

  return (
    <section className="py-8">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">Featured Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCertifications.map(certification => (
            <div key={certification.id} className="animate-fade-in">
              <CertificationCard 
                certification={certification}
                onTagClick={onTagClick}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCertifications;
