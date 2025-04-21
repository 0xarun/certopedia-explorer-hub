import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Sliders, LayoutGrid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

import Navbar from '@/components/Navbar';
import SearchFilters from '@/components/SearchFilters';
import CertificationList from '@/components/CertificationList';

import { certifications, allTags, providers, levels } from '@/data/certifications';
import { filterCertifications } from '@/utils/filter-utils';

const ExplorePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  
  const [searchQuery, setSearchQuery] = useState(queryParams.get('search') || '');
  const [selectedProviders, setSelectedProviders] = useState<string[]>(
    queryParams.get('provider') ? [queryParams.get('provider') as string] : []
  );
  const [selectedTags, setSelectedTags] = useState<string[]>(
    queryParams.get('tag') ? [queryParams.get('tag') as string] : []
  );
  const [selectedLevel, setSelectedLevel] = useState<string | null>(
    queryParams.get('level') || null
  );
  const [priceRange, setPriceRange] = useState<string | null>(
    queryParams.get('price') || null
  );
  
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<string>('relevance');
  
  // Filter the certifications based on the current filters
  const filteredCertifications = filterCertifications(
    certifications,
    searchQuery,
    selectedProviders,
    selectedTags,
    selectedLevel,
    priceRange
  );
  
  // Sort the filtered certifications
  const sortedCertifications = [...filteredCertifications].sort((a, b) => {
    switch (sortBy) {
      case 'title-asc':
        return a.title.localeCompare(b.title);
      case 'title-desc':
        return b.title.localeCompare(a.title);
      case 'price-asc':
        return a.price.localeCompare(b.price);
      case 'price-desc':
        return b.price.localeCompare(a.price);
      default:
        return 0;
    }
  });
  
  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (searchQuery) params.set('search', searchQuery);
    if (selectedProviders.length === 1) params.set('provider', selectedProviders[0]);
    if (selectedTags.length === 1) params.set('tag', selectedTags[0]);
    if (selectedLevel) params.set('level', selectedLevel);
    if (priceRange) params.set('price', priceRange);
    
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  }, [searchQuery, selectedProviders, selectedTags, selectedLevel, priceRange, navigate, location.pathname]);
  
  // Simulate loading when filter changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [searchQuery, selectedProviders, selectedTags, selectedLevel, priceRange, sortBy]);
  
  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedProviders([]);
    setSelectedTags([]);
    setSelectedLevel(null);
    setPriceRange(null);
    
    toast({
      title: "Filters cleared",
      description: "All filters have been reset",
    });
  };
  
  const handleTagClick = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      
      <main className="flex-grow">
        <div className="bg-gray-50 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">
                {searchQuery ? `Search results for "${searchQuery}"` : "Explore Certifications"}
              </h1>
              
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="md:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Sliders className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                
                <select
                  className="border rounded-md py-1 px-2 text-sm bg-white"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="relevance">Sort by: Relevance</option>
                  <option value="title-asc">Sort by: Title (A-Z)</option>
                  <option value="title-desc">Sort by: Title (Z-A)</option>
                  <option value="price-asc">Sort by: Price (Low to High)</option>
                  <option value="price-desc">Sort by: Price (High to Low)</option>
                </select>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <aside className={`w-full md:w-64 shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
                <SearchFilters 
                  providers={providers}
                  selectedProviders={selectedProviders}
                  setSelectedProviders={setSelectedProviders}
                  
                  tags={allTags}
                  selectedTags={selectedTags}
                  setSelectedTags={setSelectedTags}
                  
                  levels={levels}
                  selectedLevel={selectedLevel}
                  setSelectedLevel={setSelectedLevel}
                  
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  
                  clearAllFilters={clearAllFilters}
                />
              </aside>
              
              <div className="flex-grow">
                <CertificationList 
                  certifications={sortedCertifications}
                  onTagClick={handleTagClick}
                  isLoading={isLoading}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} CertiHunt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ExplorePage;
