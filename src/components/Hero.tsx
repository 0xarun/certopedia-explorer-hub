import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearch: () => void;
}

const Hero: React.FC<HeroProps> = ({ searchQuery, setSearchQuery, onSearch }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <section className="py-16 bg-gradient-to-r from-certopedia-indigo to-certopedia-purple text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Your Perfect Certification Path
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Search and compare thousands of professional certifications from leading providers worldwide
        </p>
        
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
        >
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="search"
              placeholder="Search by skill, topic, or provider..."
              className="pl-10 py-6 bg-white text-black w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button 
            type="submit" 
            size="lg" 
            className="w-full sm:w-auto bg-certopedia-teal hover:bg-certopedia-teal/90"
          >
            Find Certifications
          </Button>
        </form>
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <p className="text-gray-200">Popular:</p>
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 hover:bg-white/20" onClick={() => setSearchQuery("Data Science")}>
            Data Science
          </Button>
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 hover:bg-white/20" onClick={() => setSearchQuery("Cloud")}>
            Cloud
          </Button>
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 hover:bg-white/20" onClick={() => setSearchQuery("Security")}>
            Security
          </Button>
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 hover:bg-white/20" onClick={() => setSearchQuery("AI")}>
            AI
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
