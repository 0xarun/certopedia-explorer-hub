
import React from 'react';
import { Heart } from 'lucide-react';
import { useAuth } from '@/providers/AuthProvider';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

interface FavoriteButtonProps {
  certificationId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ certificationId }) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: isFavorited } = useQuery({
    queryKey: ['favorite', certificationId, user?.id],
    queryFn: async () => {
      if (!user) return false;
      const { data } = await supabase
        .from('favorite_certifications')
        .select()
        .eq('certification_id', certificationId)
        .eq('user_id', user.id)
        .single();
      return !!data;
    },
    enabled: !!user
  });

  const { mutate: toggleFavorite } = useMutation({
    mutationFn: async () => {
      if (!user) throw new Error('Must be logged in');
      
      if (isFavorited) {
        await supabase
          .from('favorite_certifications')
          .delete()
          .eq('certification_id', certificationId)
          .eq('user_id', user.id);
      } else {
        await supabase
          .from('favorite_certifications')
          .insert({ certification_id: certificationId, user_id: user.id });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorite'] });
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
      toast({
        description: isFavorited ? 'Removed from favorites' : 'Added to favorites',
      });
    }
  });

  return (
    <Button
      variant="ghost"
      size="icon"
      className={`absolute top-2 right-2 z-10 transition-transform hover:scale-110 ${
        isFavorited ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
      }`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite();
      }}
    >
      <Heart 
        className={`${isFavorited ? 'fill-current' : ''}`} 
        size={20}
      />
    </Button>
  );
};

export default FavoriteButton;
