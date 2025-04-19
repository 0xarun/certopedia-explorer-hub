
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useAuth } from "@/providers/AuthProvider";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface FavoriteButtonProps {
  certificationId: string;
}

export default function FavoriteButton({ certificationId }: FavoriteButtonProps) {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: isFavorited } = useQuery({
    queryKey: ['favorite', certificationId],
    queryFn: async () => {
      if (!user) return false;
      const { data } = await supabase
        .from('favorite_certifications')
        .select('*')
        .eq('certification_id', certificationId)
        .eq('user_id', user.id)
        .single();
      return !!data;
    },
    enabled: !!user,
  });

  const toggleFavorite = useMutation({
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
          .insert([{ certification_id: certificationId, user_id: user.id }]);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorite', certificationId] });
      toast({
        title: isFavorited ? "Removed from favorites" : "Added to favorites",
        duration: 2000,
      });
    },
  });

  if (!user) return null;

  return (
    <Button 
      variant={isFavorited ? "default" : "outline"} 
      size="sm"
      onClick={() => toggleFavorite.mutate()}
      disabled={toggleFavorite.isPending}
    >
      <Heart className={`h-4 w-4 mr-2 ${isFavorited ? 'fill-current' : ''}`} />
      {isFavorited ? 'Favorited' : 'Add to Favorites'}
    </Button>
  );
}
