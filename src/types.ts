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
  | 'Pluralsight'
  | '(ISC)²'
  | 'Scrum.org'
  | 'Meta'
  | 'Linux Foundation'
  | 'CompTIA'
  | 'Salesforce'
  | 'Oracle'
  | 'PMI'
  | 'Cisco'
  | 'EC-Council'
  | 'MongoDB'
  | 'Unity'
  | 'Databricks'
  | 'Scrum Alliance'
  | 'ISACA'
  | 'HashiCorp'
  | 'Confluent'
  | 'CFA Institute'
  | 'Others';

export type Level = 
  | 'Beginner'
  | 'Intermediate'
  | 'Advanced'
  | 'Expert'
  | 'All Levels';

export interface User {
  id: string;
  name: string;
  email: string;
  joinedDate: string;
  savedCertifications: string[]; // Array of certification IDs
  role: 'user' | 'admin';
}

export interface Analytics {
  totalCertifications: number;
  totalUsers: number;
  certificationsByProvider: {
    provider: Provider;
    count: number;
  }[];
  certificationsByLevel: {
    level: Level;
    count: number;
  }[];
  certificationsByPriceRange: {
    range: string;
    count: number;
  }[];
  userGrowth: {
    date: string;
    count: number;
  }[];
}

export interface AdminDashboardData {
  analytics: Analytics;
  users: User[];
  certifications: Certification[];
}
