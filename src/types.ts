
export interface Certification {
  id: string;
  title: string;
  provider: Provider;
  url: string;
  summary: string;
  tags: string[];
  duration: string;
  level: Level;
  price: string;
  image?: string;
  featured?: boolean;
}

export type Provider = 
  | 'Google'
  | 'IBM'
  | 'AWS'
  | 'Microsoft'
  | 'Coursera'
  | 'edX'
  | 'Udacity'
  | 'Udemy'
  | 'Pluralsight';

export type Level = 
  | 'Beginner'
  | 'Intermediate'
  | 'Advanced'
  | 'Expert'
  | 'All Levels';
