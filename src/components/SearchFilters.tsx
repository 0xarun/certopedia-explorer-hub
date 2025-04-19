
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SearchFiltersProps {
  providers: string[];
  selectedProviders: string[];
  setSelectedProviders: (providers: string[]) => void;
  
  tags: string[];
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  
  levels: string[];
  selectedLevel: string | null;
  setSelectedLevel: (level: string | null) => void;
  
  priceRange: string | null;
  setPriceRange: (range: string | null) => void;
  
  clearAllFilters: () => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  providers,
  selectedProviders,
  setSelectedProviders,
  
  tags,
  selectedTags,
  setSelectedTags,
  
  levels,
  selectedLevel,
  setSelectedLevel,
  
  priceRange,
  setPriceRange,
  
  clearAllFilters
}) => {
  const handleProviderChange = (provider: string) => {
    setSelectedProviders(
      selectedProviders.includes(provider)
        ? selectedProviders.filter(p => p !== provider)
        : [...selectedProviders, provider]
    );
  };
  
  const handleTagChange = (tag: string) => {
    setSelectedTags(
      selectedTags.includes(tag)
        ? selectedTags.filter(t => t !== tag)
        : [...selectedTags, tag]
    );
  };
  
  const anyFilterActive = selectedProviders.length > 0 || selectedTags.length > 0 || selectedLevel !== null || priceRange !== null;
  
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Filters</h3>
        {anyFilterActive && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearAllFilters}
            className="text-sm text-red-500 hover:text-red-700"
          >
            Clear All
          </Button>
        )}
      </div>
      
      <Accordion type="multiple" defaultValue={["providers", "tags", "level", "price"]}>
        <AccordionItem value="providers">
          <AccordionTrigger className="py-2">
            Providers {selectedProviders.length > 0 && `(${selectedProviders.length})`}
          </AccordionTrigger>
          <AccordionContent>
            <ScrollArea className="h-40">
              <div className="space-y-2">
                {providers.map(provider => (
                  <div key={provider} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`provider-${provider}`} 
                      checked={selectedProviders.includes(provider)}
                      onCheckedChange={() => handleProviderChange(provider)}
                    />
                    <Label 
                      htmlFor={`provider-${provider}`}
                      className="cursor-pointer text-sm flex-grow"
                    >
                      {provider}
                    </Label>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="tags">
          <AccordionTrigger className="py-2">
            Topics {selectedTags.length > 0 && `(${selectedTags.length})`}
          </AccordionTrigger>
          <AccordionContent>
            <ScrollArea className="h-48">
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <div 
                    key={tag}
                    className={`tag-pill ${selectedTags.includes(tag) ? 'bg-primary text-white' : ''}`}
                    onClick={() => handleTagChange(tag)}
                  >
                    {tag}
                    {selectedTags.includes(tag) && (
                      <X className="ml-1 h-3 w-3" />
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="level">
          <AccordionTrigger className="py-2">
            Level {selectedLevel && `(${selectedLevel})`}
          </AccordionTrigger>
          <AccordionContent>
            <RadioGroup value={selectedLevel || ""} onValueChange={(value) => setSelectedLevel(value || null)}>
              {levels.map(level => (
                <div key={level} className="flex items-center space-x-2 py-1">
                  <RadioGroupItem value={level} id={`level-${level}`} />
                  <Label htmlFor={`level-${level}`} className="cursor-pointer text-sm">
                    {level}
                  </Label>
                </div>
              ))}
              {selectedLevel && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSelectedLevel(null)}
                  className="mt-2 text-sm text-red-500 hover:text-red-700 p-0"
                >
                  Clear selection
                </Button>
              )}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="price">
          <AccordionTrigger className="py-2">
            Price Range {priceRange && `(${priceRange})`}
          </AccordionTrigger>
          <AccordionContent>
            <RadioGroup value={priceRange || ""} onValueChange={(value) => setPriceRange(value || null)}>
              <div className="flex items-center space-x-2 py-1">
                <RadioGroupItem value="Free" id="price-free" />
                <Label htmlFor="price-free" className="cursor-pointer text-sm">Free</Label>
              </div>
              <div className="flex items-center space-x-2 py-1">
                <RadioGroupItem value="Under $100" id="price-under-100" />
                <Label htmlFor="price-under-100" className="cursor-pointer text-sm">Under $100</Label>
              </div>
              <div className="flex items-center space-x-2 py-1">
                <RadioGroupItem value="$100 - $500" id="price-100-500" />
                <Label htmlFor="price-100-500" className="cursor-pointer text-sm">$100 - $500</Label>
              </div>
              <div className="flex items-center space-x-2 py-1">
                <RadioGroupItem value="$500+" id="price-500-plus" />
                <Label htmlFor="price-500-plus" className="cursor-pointer text-sm">$500+</Label>
              </div>
              <div className="flex items-center space-x-2 py-1">
                <RadioGroupItem value="Subscription" id="price-subscription" />
                <Label htmlFor="price-subscription" className="cursor-pointer text-sm">Subscription based</Label>
              </div>
              {priceRange && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setPriceRange(null)}
                  className="mt-2 text-sm text-red-500 hover:text-red-700 p-0"
                >
                  Clear selection
                </Button>
              )}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SearchFilters;
