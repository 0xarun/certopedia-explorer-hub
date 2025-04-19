import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/providers/AuthProvider';
import { supabase } from '@/integrations/supabase/client';
import CertificationList from '@/components/CertificationList';
import { Certification } from '@/types';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { certifications } from '@/data/certifications';
import Navbar from '@/components/Navbar';

const FavoritesPage = () => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  
  const { data: favorites = [], isLoading, error } = useQuery({
    queryKey: ['favorites', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      const { data, error } = await supabase
        .from('favorite_certifications')
        .select('certification_id')
        .eq('user_id', user.id);
      
      if (error) throw error;
      
      return certifications.filter(cert => 
        data?.some(fav => fav.certification_id === cert.id)
      );
    },
    enabled: !!user
  });

  // Filter favorites based on search query
  const filteredFavorites = favorites.filter(cert => 
    cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="container mx-auto py-8">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Please sign in to view your favorite certifications.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="container mx-auto py-8">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Error loading favorites: {error.message}
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">My Favorite Certifications</h1>
        {favorites.length === 0 && !isLoading ? (
          <Alert>
            <AlertDescription>
              You haven't added any certifications to your favorites yet.
            </AlertDescription>
          </Alert>
        ) : (
          <CertificationList 
            certifications={filteredFavorites} 
            onTagClick={() => {}} 
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
