import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, LogOut, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/providers/AuthProvider';
import LoginButtons from './LoginButtons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SearchSuggestions from './SearchSuggestions';
import { certifications } from '@/data/certifications';

const Navbar = () => {
  const { user, signOut } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<Array<{id: string; title: string; provider: string}>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim()) {
        setIsLoading(true);
        const filtered = certifications
          .filter(cert => 
            cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            cert.provider.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .slice(0, 5)
          .map(cert => ({
            id: cert.id,
            title: cert.title,
            provider: cert.provider
          }));
        setSuggestions(filtered);
        setIsLoading(false);
      } else {
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/explore?search=${encodeURIComponent(searchQuery.trim())}`);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionSelect = (title: string) => {
    setSearchQuery(title);
    setShowSuggestions(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-certopedia-purple to-certopedia-blue bg-clip-text text-transparent">CertiHunt</span>
        </Link>
        
        <div className="relative w-full max-w-md" ref={searchRef}>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <form onSubmit={handleSearch} className="relative">
            <Input 
              type="search" 
              placeholder="Search certifications, skills, providers..." 
              className="pl-10 w-full" 
              value={searchQuery} 
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }} 
            />
            {searchQuery && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setSearchQuery('');
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </form>
          {showSuggestions && (
            <SearchSuggestions
              suggestions={suggestions}
              onSelect={handleSuggestionSelect}
              isLoading={isLoading}
            />
          )}
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link to="/providers">Providers</Link>
          </Button>
          <Button asChild>
            <Link to="/explore">Explore All</Link>
          </Button>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer hover:opacity-80">
                  <AvatarImage src={user.user_metadata.avatar_url} />
                  <AvatarFallback>{user.email?.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/favorites" className="flex items-center">
                    Favorites
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={signOut} className="flex items-center">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <LoginButtons />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
