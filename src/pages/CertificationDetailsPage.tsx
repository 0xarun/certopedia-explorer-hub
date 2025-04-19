
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, ExternalLink, CalendarIcon, DollarSignIcon, Award, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

import Navbar from '@/components/Navbar';
import CertificationList from '@/components/CertificationList';
import { certifications } from '@/data/certifications';
import { Certification } from '@/types';
import { getProviderLogo } from '@/utils/provider-utils';

const CertificationDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [certification, setCertification] = useState<Certification | null>(null);
  const [relatedCertifications, setRelatedCertifications] = useState<Certification[]>([]);
  
  useEffect(() => {
    const foundCertification = certifications.find(cert => cert.id === id);
    
    if (foundCertification) {
      setCertification(foundCertification);
      
      // Find related certifications (same provider or similar tags)
      const related = certifications
        .filter(cert => cert.id !== id)
        .filter(cert => 
          cert.provider === foundCertification.provider || 
          cert.tags.some(tag => foundCertification.tags.includes(tag))
        )
        .slice(0, 3);
      
      setRelatedCertifications(related);
    } else {
      navigate('/not-found');
    }
  }, [id, navigate]);
  
  if (!certification) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-pulse-gentle">Loading...</div>
      </div>
    );
  }
  
  const getProviderColor = (provider: string) => {
    const colors: Record<string, string> = {
      'Google': 'bg-blue-100 text-blue-800 border-blue-200',
      'AWS': 'bg-orange-100 text-orange-800 border-orange-200',
      'IBM': 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'Microsoft': 'bg-teal-100 text-teal-800 border-teal-200',
      'Coursera': 'bg-blue-100 text-blue-800 border-blue-200',
      'edX': 'bg-red-100 text-red-800 border-red-200',
      'Udacity': 'bg-violet-100 text-violet-800 border-violet-200',
      'Udemy': 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200',
      'Pluralsight': 'bg-pink-100 text-pink-800 border-pink-200',
    };
    
    return colors[provider] || 'bg-gray-100 text-gray-800 border-gray-200';
  };
  
  const getLevelColor = (level: string) => {
    const colors: Record<string, string> = {
      'Beginner': 'bg-green-100 text-green-800 border-green-200',
      'Intermediate': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Advanced': 'bg-orange-100 text-orange-800 border-orange-200',
      'Expert': 'bg-red-100 text-red-800 border-red-200',
      'All Levels': 'bg-purple-100 text-purple-800 border-purple-200',
    };
    
    return colors[level] || 'bg-gray-100 text-gray-800 border-gray-200';
  };
  
  const handleTagClick = (tag: string) => {
    navigate(`/explore?tag=${encodeURIComponent(tag)}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      
      <main className="flex-grow bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/explore" className="flex items-center gap-1">
                <ChevronLeft className="h-4 w-4" /> Back to Search
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card className="overflow-hidden">
                <div className="relative h-48 md:h-64">
                  <img 
                    src={certification.image || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400&q=80'} 
                    alt={certification.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className={getProviderColor(certification.provider)}>
                      {certification.provider}
                    </Badge>
                    <h1 className="text-2xl md:text-3xl font-bold text-white mt-2">{certification.title}</h1>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-certopedia-purple" />
                      <div>
                        <p className="text-sm text-gray-500">Level</p>
                        <p className="font-medium">{certification.level}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5 text-certopedia-indigo" />
                      <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-medium">{certification.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSignIcon className="h-5 w-5 text-certopedia-teal" />
                      <div>
                        <p className="text-sm text-gray-500">Price</p>
                        <p className="font-medium">{certification.price}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">Description</h2>
                    <p className="text-gray-700">{certification.summary}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Topics</h2>
                    <div className="flex flex-wrap gap-2">
                      {certification.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="tag-pill"
                          onClick={() => handleTagClick(tag)}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button size="lg" asChild>
                      <a 
                        href={certification.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Visit Official Page <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Provider Information</h2>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg">
                      <img 
                        src={getProviderLogo(certification.provider)} 
                        alt={certification.provider} 
                        className="max-w-full max-h-full"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{certification.provider}</p>
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-sm"
                        asChild
                      >
                        <Link to={`/explore?provider=${encodeURIComponent(certification.provider)}`}>
                          View all certifications
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 mt-4">
                    <h3 className="font-semibold mb-2">Why choose {certification.provider}?</h3>
                    <p className="text-sm text-gray-600">
                      {certification.provider} offers industry-recognized certifications that validate your skills and can help advance your career.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {relatedCertifications.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Related Certifications</h2>
                    <div className="space-y-4">
                      {relatedCertifications.map(cert => (
                        <div key={cert.id} className="flex gap-3">
                          <div className="w-16 h-16 shrink-0 rounded overflow-hidden">
                            <img 
                              src={cert.image || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400&q=80'} 
                              alt={cert.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <Link 
                              to={`/certification/${cert.id}`}
                              className="font-medium hover:text-primary transition-colors line-clamp-2"
                            >
                              {cert.title}
                            </Link>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {cert.provider}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {cert.level}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
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

export default CertificationDetailsPage;
