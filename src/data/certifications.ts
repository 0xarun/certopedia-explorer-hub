
import { Certification } from "@/types";

export const certifications: Certification[] = [
  {
    id: "1",
    title: "Google Cloud Professional Data Engineer",
    provider: "Google",
    url: "https://cloud.google.com/certification/data-engineer",
    summary: "Earn the Google Cloud Professional Data Engineer certification to validate your ability to design and build data processing systems and create machine learning models on Google Cloud Platform.",
    tags: ["Cloud", "Data Science", "Machine Learning", "Google Cloud"],
    duration: "Self-paced + Exam",
    level: "Advanced",
    price: "$200",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400&q=80",
    featured: true
  },
  {
    id: "2",
    title: "AWS Certified Solutions Architect - Associate",
    provider: "AWS",
    url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    summary: "This certification validates your expertise in designing and deploying scalable systems on AWS. It's ideal for individuals with experience in designing distributed applications.",
    tags: ["Cloud", "Architecture", "AWS", "Solutions Architecture"],
    duration: "6 months preparation + Exam",
    level: "Intermediate",
    price: "$150",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400&q=80",
    featured: true
  },
  {
    id: "3",
    title: "IBM Data Science Professional Certificate",
    provider: "IBM",
    url: "https://www.coursera.org/professional-certificates/ibm-data-science",
    summary: "Develop skills in Python, SQL, data visualization, machine learning, and more. Create a portfolio of data science projects and earn a Professional Certificate from IBM.",
    tags: ["Data Science", "Python", "Machine Learning", "SQL"],
    duration: "11 months",
    level: "Beginner",
    price: "$39/month (Coursera subscription)",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "4",
    title: "Microsoft Certified: Azure AI Engineer Associate",
    provider: "Microsoft",
    url: "https://learn.microsoft.com/en-us/certifications/azure-ai-engineer/",
    summary: "This certification validates your skills in using Cognitive Services, Machine Learning, and Knowledge Mining to architect and implement Microsoft AI solutions.",
    tags: ["AI", "Azure", "Machine Learning", "Cloud"],
    duration: "Self-paced + Exam",
    level: "Intermediate",
    price: "$165",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "5",
    title: "Certified Information Systems Security Professional (CISSP)",
    provider: "edX",
    url: "https://www.edx.org/learn/cybersecurity/isc2-cissp-certified-information-systems-security-professional",
    summary: "The CISSP certification is ideal for IT security professionals with managerial or technical experience and provides a comprehensive foundation for enterprise security.",
    tags: ["Security", "Cybersecurity", "IT Security", "Enterprise"],
    duration: "Self-paced + Exam",
    level: "Expert",
    price: "$699",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400&q=80",
    featured: true
  },
  {
    id: "6",
    title: "Deep Learning Specialization",
    provider: "Coursera",
    url: "https://www.coursera.org/specializations/deep-learning",
    summary: "The Deep Learning Specialization is a foundational program that helps you understand deep learning technologies and build artificial neural networks.",
    tags: ["AI", "Deep Learning", "Neural Networks", "Python"],
    duration: "3 months",
    level: "Intermediate",
    price: "$49/month (Coursera subscription)",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "7",
    title: "Cloud Developer Nanodegree",
    provider: "Udacity",
    url: "https://www.udacity.com/course/cloud-developer-nanodegree--nd9990",
    summary: "Learn to design and deploy applications that scale automatically in the leading cloud service provider platforms and build different apps leveraging microservices.",
    tags: ["Cloud", "Development", "Microservices", "DevOps"],
    duration: "4 months",
    level: "Intermediate",
    price: "$399/month",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "8",
    title: "Professional Scrum Master I",
    provider: "Udemy",
    url: "https://www.udemy.com/course/professional-scrum-master-i/",
    summary: "Learn Scrum theory and gain a comprehensive understanding of the Scrum framework. This course prepares you for the PSM I certification exam.",
    tags: ["Agile", "Scrum", "Project Management", "Leadership"],
    duration: "Self-paced",
    level: "Beginner",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "9",
    title: "React Developer Certification",
    provider: "Pluralsight",
    url: "https://www.pluralsight.com/role-iq/react-developer",
    summary: "Validate your skills in building React applications with this comprehensive certification that tests your knowledge of React core concepts and best practices.",
    tags: ["Web Development", "React", "JavaScript", "Frontend"],
    duration: "Self-paced",
    level: "Intermediate",
    price: "$29/month (Pluralsight subscription)",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "10",
    title: "AWS Certified Machine Learning - Specialty",
    provider: "AWS",
    url: "https://aws.amazon.com/certification/certified-machine-learning-specialty/",
    summary: "This certification validates your expertise in designing, implementing, deploying, and maintaining machine learning (ML) solutions on the AWS platform.",
    tags: ["Machine Learning", "AWS", "Cloud", "AI"],
    duration: "Self-paced + Exam",
    level: "Expert",
    price: "$300",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400&q=80"
  }
];

export const allTags = Array.from(
  new Set(certifications.flatMap(cert => cert.tags))
).sort();

export const providers = Array.from(
  new Set(certifications.map(cert => cert.provider))
).sort();

export const levels = Array.from(
  new Set(certifications.map(cert => cert.level))
).sort();
