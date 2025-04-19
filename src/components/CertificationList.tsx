
import React from 'react';
import { Certification } from '@/types';
import CertificationCard from './CertificationCard';

interface CertificationListProps {
  certifications: Certification[];
  onTagClick: (tag: string) => void;
  isLoading?: boolean;
}

const CertificationList: React.FC<CertificationListProps> = ({ 
  certifications,
  onTagClick,
  isLoading = false
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-96 rounded-lg bg-gray-100 animate-pulse"></div>
        ))}
      </div>
    );
  }

  if (certifications.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium text-gray-700 mb-2">No certifications found</h3>
        <p className="text-gray-500">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certifications.map(certification => (
        <div key={certification.id} className="animate-fade-in">
          <CertificationCard 
            certification={certification}
            onTagClick={onTagClick}
          />
        </div>
      ))}
    </div>
  );
};

export default CertificationList;
