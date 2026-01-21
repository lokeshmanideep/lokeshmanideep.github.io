// TypeScript types for portfolio data

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface Skill {
  name: string;
  category: "backend" | "frontend" | "database" | "devops" | "tools";
}

export interface ContentBlock {
  type: "text" | "image" | "video" | "code" | "link" | "list";
  content: string;
  caption?: string;
  language?: string; // for code blocks
  url?: string; // for videos/links
  items?: string[]; // for lists
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  detailContent?: ContentBlock[];
  coverImage?: string;
  date?: string;
  category: "AI/ML" | "Full-stack" | "Data Science" | "Other";
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    subtitle: string;
    email: string;
    location: string;
    bio: string[];
  };
  socials: SocialLink[];
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
}

// Portfolio data
export const portfolioData: PortfolioData = {
  personal: {
    name: "Lokesh Boggavarapu",
    title: "Senior Software & AI Engineer",
    subtitle:
      "Full-Stack Developer bridging scalable backend infrastructure and modern AI",
    email: "lokeshmanideep14@gmail.com",
    location: "Chicago, IL, USA",
    bio: [
      "Senior Software & AI Engineer with 5+ years of experience building end-to-end production systems using Java (Spring Boot), Python, and modern AI technologies.",
      "Specialized in architecting distributed systems, designing fault-tolerant microservices, and event-driven architectures using Kafka and Kubernetes.",
      "Proven track record delivering high-impact engineering from systems processing 50K+ daily updates to NIDILRR-funded research platforms for healthcare.",
    ],
  },
  socials: [
    { platform: "GitHub", url: "https://github.com/lokeshmanideep" },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/lokesh-manideep-b0957412b/",
    },
    { platform: "Medium", url: "https://medium.com/@lokeshmanideep14" },
    { platform: "Email", url: "mailto:lokeshmanideep14@gmail.com" },
  ],
  skills: [
    // Backend
    { name: "Java", category: "backend" },
    { name: "Spring Boot", category: "backend" },
    { name: "Python", category: "backend" },
    { name: "FastAPI", category: "backend" },
    { name: "Flask", category: "backend" },
    { name: "Node.js", category: "backend" },
    { name: "Kafka", category: "backend" },
    { name: "REST APIs", category: "backend" },
    { name: "GraphQL", category: "backend" },
    { name: "Microservices", category: "backend" },
    { name: "LangChain", category: "backend" },
    { name: "LangGraph", category: "backend" },
    { name: "RAG", category: "backend" },

    // Databases
    { name: "PostgreSQL", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "MySQL", category: "database" },
    { name: "Redis", category: "database" },
    { name: "Cassandra", category: "database" },
    { name: "Qdrant", category: "database" },
    { name: "Milvus", category: "database" },
    { name: "Pinecone", category: "database" },

    // DevOps
    { name: "AWS", category: "devops" },
    { name: "Azure", category: "devops" },
    { name: "GCP", category: "devops" },
    { name: "Docker", category: "devops" },
    { name: "Kubernetes", category: "devops" },
    { name: "Jenkins", category: "devops" },
    { name: "GitHub Actions", category: "devops" },

    // Frontend
    { name: "React", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "Swift", category: "frontend" },

    // Tools
    { name: "Git", category: "tools" },
    { name: "Maven", category: "tools" },
    { name: "Gradle", category: "tools" },
    { name: "OpenAI APIs", category: "tools" },
    { name: "Gemini", category: "tools" },
  ],
  experience: [
    {
      id: "exp-1",
      company: "University of Illinois Chicago",
      position: "AI Engineer",
      duration: "Jun 2024 - Present",
      location: "Chicago, IL",
      description: [
        "Architected Discover, an NIDILRR-funded RAG platform using LangChain and Qdrant, implementing semantic routing to synthesize psychiatric resources from 5 disparate university centers",
        "Engineered multimodal feature extraction pipeline processing 42K+ GoFundMe campaigns using LangChain and OpenAI APIs",
        "Developed event aggregation platform using FastAPI and MongoDB, exposing data via custom MCP server for AI-powered discovery",
        "Fine-tuned Mistral 7B on 54K samples using QLoRA, achieving 15% accuracy lift for psychiatric condition classification",
      ],
      technologies: [
        "Python",
        "LangChain",
        "FastAPI",
        "MongoDB",
        "Qdrant",
        "OpenAI APIs",
      ],
    },
    {
      id: "exp-2",
      company: "Oravel Stays (OYO Rooms)",
      position: "Software Development Engineer II",
      duration: "Jul 2023 - Dec 2023",
      location: "Gurgaon, India",
      description: [
        "Engineered automated CI/CD pipeline for OYO Vacation Homes backend, cutting deployment lead time by 30%",
        "Designed integration layer for TUI Ferienhaus, ingesting 100K+ bookings via fault-tolerant Kubernetes microservice",
        "Built Kafka service layer processing 50K+ price updates daily across 10K+ properties",
        "Managed smooth data transfer during OYO's acquisition of TUI, ensuring business continuity",
      ],
      technologies: [
        "Spring Boot",
        "Kafka",
        "Kubernetes",
        "Azure",
        "Docker",
        "Jenkins",
      ],
    },
    {
      id: "exp-3",
      company: "Oravel Stays (OYO Rooms)",
      position: "Software Development Engineer I",
      duration: "Aug 2020 - Jun 2023",
      location: "Gurgaon, India",
      description: [
        "Led migration of OYO Vacation Homes backend services from on-premises to Azure, managing 1.5TB data transfer",
        "Developed automated pricing tool using Flask, reducing contract sync time by 40%",
        "Rebuilt pricing module in Spring Boot with React/TypeScript UI, ensuring data consistency and functional parity",
        "Reduced annual maintenance costs by €20K through cloud migration",
      ],
      technologies: [
        "Spring Boot",
        "Flask",
        "React",
        "TypeScript",
        "Azure",
        "Kubernetes",
      ],
    },
    {
      id: "exp-4",
      company: "WIPRO",
      position: "Software Engineering Intern",
      duration: "May 2019 - Jul 2019",
      location: "Bangalore, India",
      description: [
        "Developed web-based compliance monitoring application using Spring Boot and React",
        "Automated compliance checks for 3 key rules on IoT devices, generating detailed reports",
        "Implemented real-time policy enforcement integrating AWS Lambda and DynamoDB",
        "Built automated alert system for non-compliant device configurations",
      ],
      technologies: ["Spring Boot", "React", "AWS Lambda", "DynamoDB"],
    },
  ],
  projects: [
    {
      id: "rag-platform",
      title: "NIDILRR-Funded RAG Platform (Discover)",
      description:
        "Architected an enterprise RAG platform using LangChain and Qdrant to synthesize psychiatric resources from 5 disparate university centers into a unified, semantically searchable knowledge base.",
      technologies: ["Python", "LangChain", "Qdrant", "FastAPI", "OpenAI APIs"],
      date: "Jun 2024 - Present",
      category: "AI/ML",
      highlights: [
        "Semantic routing across 5 university centers",
        "NIDILRR-funded research platform",
        "RAG-based knowledge synthesis",
        "Healthcare resource discovery",
      ],
      detailContent: [
        {
          type: "text",
          content:
            "## Overview\n\nThe Discover platform was built to address a critical challenge in psychiatric healthcare: resources and research findings were scattered across five separate university research centers, making it nearly impossible for clinicians and researchers to find relevant information quickly.\n\nThis NIDILRR-funded project demonstrates the practical application of Retrieval-Augmented Generation (RAG) in healthcare, combining semantic search with large language models to create an intelligent knowledge synthesis system.",
        },
        {
          type: "text",
          content:
            "## The Problem\n\nHealthcare professionals were spending hours manually searching through disparate databases and research repositories. Each university center maintained its own system with different taxonomies, formats, and access methods. This fragmentation led to:\n\n- Duplicated research efforts\n- Missed connections between related studies\n- Delayed application of research findings to clinical practice\n- Inconsistent resource recommendations across institutions",
        },
        {
          type: "text",
          content:
            "## Technical Architecture\n\nThe platform uses a multi-stage RAG pipeline with semantic routing to handle the complexity of heterogeneous data sources.",
        },
        {
          type: "code",
          language: "python",
          content: `# Semantic Router Implementation
from langchain.chains import RetrievalQA
from langchain.vectorstores import Qdrant
from qdrant_client import QdrantClient

class SemanticRouter:
    def __init__(self):
        self.client = QdrantClient(url="localhost", port=6333)
        self.centers = self.initialize_center_collections()
    
    def route_query(self, query: str) -> str:
        """Route queries to appropriate center based on semantic similarity"""
        embeddings = self.embed_query(query)
        
        # Score each center's relevance
        scores = {}
        for center_id, collection in self.centers.items():
            results = self.client.search(
                collection_name=collection,
                query_vector=embeddings,
                limit=1
            )
            scores[center_id] = results[0].score if results else 0
        
        return max(scores.items(), key=lambda x: x[1])[0]`,
        },
        {
          type: "text",
          content:
            "## Key Features\n\n### 1. Semantic Routing Layer\n\nInstead of broadcasting queries to all five centers, we implemented an intelligent routing system that analyzes the query's semantic content and directs it to the most relevant data sources. This reduced average query time from 8 seconds to under 2 seconds.\n\n### 2. Unified Knowledge Graph\n\nWe built a unified ontology that maps concepts across different institutional taxonomies, ensuring consistent results regardless of which terms users employ.\n\n### 3. Context-Aware Generation\n\nThe system doesn't just retrieve documents—it synthesizes information from multiple sources and generates comprehensive, citation-backed responses.",
        },
        {
          type: "text",
          content:
            "## Implementation Challenges\n\n**Challenge 1: Data Heterogeneity**\n\nEach center used different data formats (PDF, HTML, structured databases). Solution: Built custom extractors and normalizers for each source type.\n\n**Challenge 2: Maintaining Data Freshness**\n\nResearch updates constantly. Solution: Implemented incremental indexing with change detection to update the vector database without full reindexing.\n\n**Challenge 3: Citation Accuracy**\n\nCritical in healthcare to trace information back to sources. Solution: Implemented a citation tracking system that preserves provenance through the entire RAG pipeline.",
        },
        {
          type: "text",
          content:
            "## Results & Impact\n\n- **5 research centers** unified into a single searchable platform\n- **2,000+ psychiatric resources** indexed and semantically searchable\n- **73% reduction** in time to find relevant research\n- **NIDILRR funding** secured based on prototype performance\n- **Clinical adoption** at 3 partner institutions\n\nThe platform is now being used by researchers and clinicians across partner institutions, fundamentally changing how psychiatric research is discovered and applied.",
        },
        {
          type: "text",
          content:
            "## Technologies Used\n\n**Backend:** Python, FastAPI, LangChain, LangGraph\n\n**Vector Database:** Qdrant for semantic search and similarity matching\n\n**LLM Integration:** OpenAI GPT-4 for generation, with fine-tuned embeddings\n\n**Infrastructure:** Docker, Kubernetes for scalable deployment\n\n**Monitoring:** Custom analytics for query patterns and system performance",
        },
      ],
    },
    {
      id: "multimodal-pipeline",
      title: "Multimodal Feature Extraction Pipeline",
      description:
        "Engineered a production pipeline processing 42K+ GoFundMe campaigns using LangChain and OpenAI APIs with schema-enforced generation to quantify latent variables from unstructured narratives and imagery.",
      technologies: ["Python", "LangChain", "OpenAI APIs", "Computer Vision"],
      date: "Aug 2024 - Dec 2024",
      category: "Data Science",
      highlights: [
        "Processed 42K+ campaigns",
        "Multimodal data extraction",
        "Schema-enforced generation",
        "Medical complexity quantification",
      ],
    },
    {
      id: "event-aggregation",
      title: "Event Aggregation & AI Discovery Platform",
      description:
        "Built a FastAPI-based platform unifying 10+ university event sources with MongoDB, exposing data via custom MCP server to power RAG-based AI assistant for natural language discovery and automated calendar syncing.",
      technologies: ["FastAPI", "MongoDB", "MCP", "RAG", "LangChain"],
      date: "Sep 2024 - Present",
      category: "Full-stack",
      highlights: [
        "10+ university sources unified",
        "Custom MCP server integration",
        "Natural language discovery",
        "Automated calendar syncing",
      ],
    },
    {
      id: "psychiatric-classifier",
      title: "Fine-tuned Psychiatric Classification Model",
      description:
        "Fine-tuned Mistral 7B on 54K samples using QLoRA (PEFT) to classify psychiatric conditions including Suicidal Ideation, Depression, and Bipolar disorder with 15% accuracy improvement over base models.",
      technologies: ["Python", "Mistral 7B", "QLoRA", "PEFT", "HuggingFace"],
      date: "Jul 2024 - Oct 2024",
      category: "AI/ML",
      highlights: [
        "54K training samples",
        "15% accuracy improvement",
        "QLoRA optimization",
        "Multi-class psychiatric classification",
      ],
    },
  ],
  education: [
    {
      id: "edu-1",
      institution: "University of Illinois Chicago",
      degree: "Master of Science",
      field: "Computer Science",
      duration: "Jan 2024 - Dec 2025",
      location: "Chicago, IL",
    },
    {
      id: "edu-2",
      institution: "National Institute of Technology Karnataka",
      degree: "Bachelor of Technology",
      field: "Computer Engineering",
      duration: "Jun 2016 - Jun 2020",
      location: "Karnataka, India",
    },
  ],
};
