
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
  | 'CFA Institute';

export type Level = 
  | 'Beginner'
  | 'Intermediate'
  | 'Advanced'
  | 'Expert'
  | 'All Levels';
