
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/providers/AuthProvider';
import { supabase } from '@/integrations/supabase/client';
import CertificationList from '@/components/CertificationList';
import { Certification } from '@/types';

const FavoritesPage = () => {
  const { user } = useAuth();
  
  const { data: favorites = [], isLoading } = useQuery({
    queryKey: ['favorites', user?.id],
    queryFn: async () => {
      const { data } = await supabase
        .from('favorite_certifications')
        .select('certification_id')
        .eq('user_id', user?.id);
      
      // Get certification details from your data
      const certData = await import('@/data/certifications');
      const certs = certData.default;
      return certs.filter(cert => 
        data?.some(fav => fav.certification_id === cert.id)
      );
    },
    enabled: !!user
  });

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">My Favorite Certifications</h1>
      <CertificationList 
        certifications={favorites} 
        onTagClick={() => {}} 
        isLoading={isLoading}
      />
    </div>
  );
};

export default FavoritesPage;
