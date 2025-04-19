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
    provider: "(ISC)²",
    url: "https://www.isc2.org/Certifications/CISSP",
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
    provider: "Scrum.org",
    url: "https://www.scrum.org/professional-scrum-certifications/professional-scrum-master-i-certification",
    summary: "Learn Scrum theory and gain a comprehensive understanding of the Scrum framework. This course prepares you for the PSM I certification exam.",
    tags: ["Agile", "Scrum", "Project Management", "Leadership"],
    duration: "Self-paced",
    level: "Beginner",
    price: "$150",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "9",
    title: "React Developer Certification",
    provider: "Meta",
    url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    summary: "Validate your skills in building React applications with this comprehensive certification that tests your knowledge of React core concepts and best practices.",
    tags: ["Web Development", "React", "JavaScript", "Frontend"],
    duration: "7 months",
    level: "Intermediate",
    price: "$49/month (Coursera subscription)",
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
  },
  {
    id: "11",
    title: "Certified Kubernetes Administrator (CKA)",
    provider: "Linux Foundation",
    url: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/",
    summary: "The Certified Kubernetes Administrator certification ensures that you have the skills, knowledge, and competency to perform the responsibilities of a Kubernetes Administrator.",
    tags: ["DevOps", "Kubernetes", "Containers", "Cloud Native"],
    duration: "Self-paced + Exam",
    level: "Advanced",
    price: "$375",
    image: "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?auto=format&fit=crop&w=600&h=400&q=80",
    featured: true
  },
  {
    id: "12",
    title: "CompTIA Security+",
    provider: "CompTIA",
    url: "https://www.comptia.org/certifications/security",
    summary: "Security+ is the first security certification IT professionals should earn. It establishes the core knowledge required of any cybersecurity role and provides a springboard to intermediate-level cybersecurity jobs.",
    tags: ["Security", "Cybersecurity", "Networking", "CompTIA"],
    duration: "Self-paced + Exam",
    level: "Intermediate",
    price: "$370",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "13",
    title: "Salesforce Certified Administrator",
    provider: "Salesforce",
    url: "https://trailhead.salesforce.com/en/credentials/administrator",
    summary: "A Salesforce Administrator works with stakeholders to define system requirements and customize the platform to enable users to get the most out of Salesforce.",
    tags: ["CRM", "Salesforce", "Business Applications", "Cloud"],
    duration: "Self-paced + Exam",
    level: "Intermediate",
    price: "$200",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "14",
    title: "Oracle Certified Professional, Java SE 17 Developer",
    provider: "Oracle",
    url: "https://education.oracle.com/oracle-certified-professional-java-se-17-developer/trackp_OCPJSE17",
    summary: "The Java SE 17 Developer certification helps developers prove their understanding of Java SE and validates their basic syntax and structure knowledge of the Java programming language.",
    tags: ["Java", "Programming", "Software Development", "Oracle"],
    duration: "Self-paced + Exam",
    level: "Intermediate",
    price: "$245",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "15",
    title: "TensorFlow Developer Certificate",
    provider: "Google",
    url: "https://www.tensorflow.org/certificate",
    summary: "The TensorFlow Developer Certificate program allows developers to demonstrate their proficiency in using TensorFlow to solve deep learning and ML problems.",
    tags: ["AI", "Machine Learning", "TensorFlow", "Deep Learning"],
    duration: "Self-paced + Exam",
    level: "Intermediate",
    price: "$100",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "16",
    title: "Project Management Professional (PMP)",
    provider: "PMI",
    url: "https://www.pmi.org/certifications/project-management-pmp",
    summary: "The Project Management Professional (PMP) certification is the most important industry-recognized certification for project managers that demonstrates your proficiency in leading and directing projects.",
    tags: ["Project Management", "Leadership", "PMP", "Business"],
    duration: "Self-paced + Exam",
    level: "Advanced",
    price: "$555",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&h=400&q=80",
    featured: true
  },
  {
    id: "17",
    title: "Cisco Certified Network Associate (CCNA)",
    provider: "Cisco",
    url: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html",
    summary: "CCNA certification validates your skills and knowledge in network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation and programmability.",
    tags: ["Networking", "Cisco", "Infrastructure", "IT"],
    duration: "Self-paced + Exam",
    level: "Intermediate",
    price: "$300",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "18",
    title: "Certified Ethical Hacker (CEH)",
    provider: "EC-Council",
    url: "https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/",
    summary: "The CEH certification demonstrates your knowledge of ethical hacking tools, techniques, and methodologies used by hackers and cybersecurity professionals alike.",
    tags: ["Security", "Ethical Hacking", "Cybersecurity", "Penetration Testing"],
    duration: "5 days + Exam",
    level: "Intermediate",
    price: "$500",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "19",
    title: "MongoDB Certified Developer Associate",
    provider: "MongoDB",
    url: "https://university.mongodb.com/certification/developer-associate",
    summary: "This certification validates that you understand the fundamentals of MongoDB and can develop applications using MongoDB and a MongoDB driver.",
    tags: ["Database", "NoSQL", "MongoDB", "Backend"],
    duration: "Self-paced + Exam",
    level: "Intermediate",
    price: "$150",
    image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "20",
    title: "Certified Data Science Professional",
    provider: "IBM",
    url: "https://www.ibm.com/training/badge/data-science-professional-certificate",
    summary: "This certification program validates your skills in data science, machine learning, and data analysis using tools like Python, Jupyter Notebooks, and various data science libraries.",
    tags: ["Data Science", "Machine Learning", "Python", "Statistics"],
    duration: "6 months",
    level: "Intermediate",
    price: "$39/month (Coursera subscription)",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "21",
    title: "Unity Certified Programmer",
    provider: "Unity",
    url: "https://unity.com/products/unity-certifications/programmer",
    summary: "The Unity Certified Programmer certification validates your foundational skills in C# programming, implementing game mechanics, and optimizing performance for Unity projects.",
    tags: ["Game Development", "Unity", "C#", "Programming"],
    duration: "Self-paced + Exam",
    level: "Intermediate",
    price: "$200",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "22",
    title: "Databricks Certified Data Engineer Associate",
    provider: "Databricks",
    url: "https://www.databricks.com/learn/certification/data-engineer-associate",
    summary: "This certification validates your ability to build production data engineering pipelines using the Databricks Lakehouse Platform and Apache Spark.",
    tags: ["Data Engineering", "Spark", "Big Data", "Databricks"],
    duration: "Self-paced + Exam",
    level: "Intermediate",
    price: "$200",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "23",
    title: "Certified ScrumMaster (CSM)",
    provider: "Scrum Alliance",
    url: "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster",
    summary: "The CSM certification validates your understanding of Scrum values, practices, and applications and provides a strong foundation in Scrum methodology.",
    tags: ["Agile", "Scrum", "Project Management", "Leadership"],
    duration: "2-day course + Exam",
    level: "Beginner",
    price: "$450-$1000",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&h=400&q=80",
    featured: true
  },
  {
    id: "24",
    title: "AZ-900: Microsoft Azure Fundamentals",
    provider: "Microsoft",
    url: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
    summary: "This certification validates your foundational knowledge of cloud concepts and Microsoft Azure services, pricing, SLAs, and lifecycle management.",
    tags: ["Cloud", "Azure", "Microsoft", "Fundamentals"],
    duration: "Self-paced + Exam",
    level: "Beginner",
    price: "$99",
    image: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "25",
    title: "Google Analytics Individual Qualification",
    provider: "Google",
    url: "https://skillshop.exceedlms.com/student/path/2938-google-analytics-certification",
    summary: "The Google Analytics certification demonstrates your proficiency in Google Analytics and validates your ability to turn analytics data into business insights.",
    tags: ["Marketing", "Analytics", "Google", "Data Analysis"],
    duration: "Self-paced + Exam",
    level: "Beginner",
    price: "Free",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "26",
    title: "Certified Information Security Manager (CISM)",
    provider: "ISACA",
    url: "https://www.isaca.org/credentialing/cism",
    summary: "The CISM certification focuses on information security management, promoting international security practices and recognizing the individuals who manage, design, and oversee an enterprise's information security program.",
    tags: ["Security", "Management", "Enterprise", "Governance"],
    duration: "Self-paced + Exam",
    level: "Expert",
    price: "$575-$760",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "27",
    title: "HashiCorp Certified: Terraform Associate",
    provider: "HashiCorp",
    url: "https://www.hashicorp.com/certification/terraform-associate",
    summary: "This certification validates your understanding of infrastructure as code concepts, Terraform basics, and the ability to build infrastructure using Terraform.",
    tags: ["DevOps", "Infrastructure as Code", "Terraform", "Cloud"],
    duration: "Self-paced + Exam",
    level: "Intermediate",
    price: "$70",
    image: "https://images.unsplash.com/photo-1618335829737-2228915674e0?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "28",
    title: "UX Design Professional Certificate",
    provider: "Google",
    url: "https://www.coursera.org/professional-certificates/google-ux-design",
    summary: "This program teaches the foundations of UX design and research, helping you build a professional portfolio and prepare for entry-level jobs in the field.",
    tags: ["UX Design", "UI", "Product Design", "Design"],
    duration: "6 months",
    level: "Beginner",
    price: "$39/month (Coursera subscription)",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "29",
    title: "Confluent Certified Developer for Apache Kafka",
    provider: "Confluent",
    url: "https://www.confluent.io/certification",
    summary: "This certification validates your ability to build, test, and debug Apache Kafka applications using any programming language and the Kafka API.",
    tags: ["Kafka", "Streaming", "Big Data", "Distributed Systems"],
    duration: "Self-paced + Exam",
    level: "Advanced",
    price: "$150",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "30",
    title: "CFA Level I",
    provider: "CFA Institute",
    url: "https://www.cfainstitute.org/en/programs/cfa",
    summary: "The CFA Level I exam covers the foundational knowledge and analytical tools used in investment management, focusing on ethics, economics, financial reporting, and portfolio management.",
    tags: ["Finance", "Investment", "Economics", "Analysis"],
    duration: "300+ hours + Exam",
    level: "Intermediate",
    price: "$700-$1,000",
    image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=600&h=400&q=80",
    featured: true
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