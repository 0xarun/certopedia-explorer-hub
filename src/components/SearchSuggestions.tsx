import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

interface SearchSuggestionsProps {
  suggestions: Array<{
    id: string;
    title: string;
    provider: string;
  }>;
  onSelect: (suggestion: string) => void;
  isLoading?: boolean;
}

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  suggestions,
  onSelect,
  isLoading = false
}) => {
  if (isLoading) {
    return (
      <div className="absolute z-50 w-full bg-white border rounded-lg shadow-lg mt-1">
        <div className="p-2 text-gray-500">Loading suggestions...</div>
      </div>
    );
  }

  if (suggestions.length === 0) {
    return null;
  }

  return (
    <div className="absolute z-50 w-full bg-white border rounded-lg shadow-lg mt-1">
      {suggestions.map((suggestion) => (
        <Link
          key={suggestion.id}
          to={`/certification/${suggestion.id}`}
          className="flex items-center gap-2 p-2 hover:bg-gray-50 cursor-pointer"
          onClick={() => onSelect(suggestion.title)}
        >
          <Search className="h-4 w-4 text-gray-400" />
          <div>
            <div className="font-medium">{suggestion.title}</div>
            <div className="text-sm text-gray-500">{suggestion.provider}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchSuggestions; 