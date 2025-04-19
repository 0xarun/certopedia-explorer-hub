
import { Certification } from '@/types';

export const filterCertifications = (
  certifications: Certification[],
  searchQuery: string,
  selectedProviders: string[],
  selectedTags: string[],
  selectedLevel: string | null,
  priceRange: string | null
): Certification[] => {
  return certifications.filter(cert => {
    // Search query filter
    const searchTerms = searchQuery.toLowerCase().split(' ');
    const matchesSearch = searchQuery === '' || searchTerms.every(term => 
      cert.title.toLowerCase().includes(term) || 
      cert.summary.toLowerCase().includes(term) || 
      cert.provider.toLowerCase().includes(term) || 
      cert.tags.some(tag => tag.toLowerCase().includes(term))
    );
    
    // Provider filter
    const matchesProvider = selectedProviders.length === 0 || selectedProviders.includes(cert.provider);
    
    // Tags filter
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => cert.tags.includes(tag));
    
    // Level filter
    const matchesLevel = selectedLevel === null || cert.level === selectedLevel;
    
    // Price range filter
    let matchesPrice = true;
    if (priceRange !== null) {
      const price = cert.price.toLowerCase();
      
      switch (priceRange) {
        case 'Free':
          matchesPrice = price.includes('free') || price === '$0';
          break;
        case 'Under $100':
          matchesPrice = extractPrice(price) < 100;
          break;
        case '$100 - $500':
          matchesPrice = extractPrice(price) >= 100 && extractPrice(price) <= 500;
          break;
        case '$500+':
          matchesPrice = extractPrice(price) > 500;
          break;
        case 'Subscription':
          matchesPrice = price.includes('subscription') || price.includes('month');
          break;
      }
    }
    
    return matchesSearch && matchesProvider && matchesTags && matchesLevel && matchesPrice;
  });
};

const extractPrice = (priceString: string): number => {
  const match = priceString.match(/\$(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
};

export const countCertificationsByProvider = (certifications: Certification[]): Record<string, number> => {
  return certifications.reduce((counts, cert) => {
    counts[cert.provider] = (counts[cert.provider] || 0) + 1;
    return counts;
  }, {} as Record<string, number>);
};
