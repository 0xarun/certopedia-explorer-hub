
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

import Navbar from '@/components/Navbar';
import ProviderCard from '@/components/ProviderCard';
import { certifications } from '@/data/certifications';
import { countCertificationsByProvider } from '@/utils/filter-utils';

const ProvidersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [providerSearchQuery, setProviderSearchQuery] = useState('');
  
  const providerCounts = countCertificationsByProvider(certifications);
  
  const filteredProviders = Object.keys(providerCounts)
    .filter(provider => provider.toLowerCase().includes(providerSearchQuery.toLowerCase()))
    .sort((a, b) => providerCounts[b] - providerCounts[a]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Certification Providers</h1>
          
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                type="search"
                placeholder="Search providers..."
                className="pl-10 w-full"
                value={providerSearchQuery}
                onChange={(e) => setProviderSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProviders.map(provider => (
              <ProviderCard 
                key={provider}
                provider={provider}
                count={providerCounts[provider]}
              />
            ))}
          </div>
          
          {filteredProviders.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700 mb-2">No providers found</h3>
              <p className="text-gray-500">Try adjusting your search</p>
            </div>
          )}
        </div>
      </main>
      
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Certopedia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProvidersPage;
