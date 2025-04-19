
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, LogOut } from 'lucide-react';
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

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  setSearchQuery
}) => {
  const { user, signOut } = useAuth();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-certopedia-purple to-certopedia-blue bg-clip-text text-transparent">CertiHunt</span>
        </Link>
        
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <Input 
            type="search" 
            placeholder="Search certifications, skills, providers..." 
            className="pl-10 w-full" 
            value={searchQuery} 
            onChange={e => setSearchQuery(e.target.value)} 
          />
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
