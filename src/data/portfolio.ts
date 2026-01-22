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
    {
      id: "python-moms-wish",
      title: "How I Used Python to Grant My Mom's Simple Wish",
      description:
        "Built an automated content pipeline using Python to extract, process, and publish Krishna's wisdom from Mahabharat episodes to YouTube, transforming hundreds of hours of video into a curated audio playlist for my mom.",
      technologies: [
        "Python",
        "Telethon",
        "MoviePy",
        "Google Speech-to-Text",
        "Google Translate",
        "Gemini AI",
        "YouTube API",
      ],
      date: "2024",
      category: "Other",
      githubUrl: "https://github.com/lokeshmanideep/whispers-of-wisdom",
      liveUrl:
        "https://www.youtube.com/playlist?list=PLPgC7mD72GJ_rUG0khmdx-7CNDjRmxu-X",
      highlights: [
        "Automated Telegram episode downloads",
        "Manual timestamp extraction from 100+ episodes",
        "Precision audio extraction with MoviePy",
        "Multi-language transcription and translation",
        "Automated YouTube publishing pipeline",
      ],
      detailContent: [
        {
          type: "image",
          content: "/momproject.webp",
        },
        {
          type: "text",
          content:
            "## It all started with my mom and a TV show.\n\nShe was watching the classic series Mahabharat, and like many, she was captivated by the wisdom shared by Lord Krishna in his anecdotes throughout the episodes. To her, those moments were \"pure gold.\"\n\nOne day, she turned to me and expressed a simple wish: \"I'd love to listen to just Krishna's voice notes whenever I have some free time.\"\n\nI heard her, and the request stuck with me. How could I easily pull out just those specific moments from hours of video? My first thought wasn't about servers or complex software. It was finally time to prove my degree was for more than just being the family's designated Wi-Fi fixer. **This was my moment.**\n\nThe problem was simple, and my tool of choice was just as straightforward: **Python**. It's easy to work with, and I knew it was perfect for the job.",
        },
        {
          type: "text",
          content:
            "## Act I: The Great Episode Heist\n\nMy first mission was to get the episodes. I searched everywhere in the internet but couldn't download them from any official streaming platform. After a bit of digging, I stumbled upon a Telegram channel that had all the episodes.\n\nInstead of manually downloading hundreds of files, I saw my first opportunity to code. I wrote a small Python script using the **Telethon** package to connect to Telegram's API. With a few lines of code, my script became a digital librarian, programmatically downloading every single episode for me.\n\n**Step one, done.**",
        },
        {
          type: "text",
          content:
            "## Act II: My Nemesis, The Pause Button\n\nNext came the real challenge: finding the exact moments Krishna speaks. I searched online for dialogue timecodes or transcripts, but came up completely empty. It became clear that some things just need a human touch (and a lot of patience).\n\nSo, I resorted to the manual task. I watched every episode, my finger poised over the pause button, carefully noting the start and end time of each of Krishna's messages.",
        },
        {
          type: "text",
          content:
            "## Act III: A Bot with a Scalpel\n\nWith my precious list of timestamps ready, it was back to Python. I used a wonderful library called **moviepy** to write a script that acted like a surgeon. It sliced the audio from the full episodes with precision, using my timestamps to create small, clean audio clips of just Krishna's voice.\n\nAll the pain from the previous step was suddenly worth it.",
        },
        {
          type: "code",
          language: "python",
          content: `# Audio extraction using MoviePy
from moviepy.editor import VideoFileClip

def extract_audio_segment(video_path, start_time, end_time, output_path):
    """Extract specific audio segment from video"""
    video = VideoFileClip(video_path)
    audio_segment = video.subclip(start_time, end_time).audio
    audio_segment.write_audiofile(output_path)
    video.close()

# Process all timestamps
for episode, timestamps in krishna_moments.items():
    for idx, (start, end) in enumerate(timestamps):
        output = f"krishna_ep{episode}_{idx}.mp3"
        extract_audio_segment(episode, start, end, output)`,
        },
        {
          type: "text",
          content:
            "## Act IV: This Was Too Good to Keep Secret\n\nHolding these golden audio clips, I realized they were too good to just sit on my computer. These were messages everyone could benefit from hearing. That's when the project grew from a personal gift into a public playlist.\n\nI decided to share it with the world (or at least, the corner of it that is YouTube).",
        },
        {
          type: "text",
          content:
            "## Act V: The API Conga Line\n\nTo make the videos YouTube-ready, they needed a proper title and description. This is where I assembled my team of AI assistants and things got really fun. It was a multi-step digital dance:\n\n1. **First**, I sent each audio clip to **Google's Speech-to-Text API** to get a written transcript.\n\n2. **Then**, since the text was in my native language, Telugu, I passed it to the **Google Translate API** to get an English version.\n\n3. I took this translated transcript and headed over to the **Gemini** website. I used it as a creative partner, brainstorming the perfect titles and descriptions for each video. It was like having a marketing team that never sleeps.",
        },
        {
          type: "text",
          content:
            "## The Grand Finale: Firing the YouTube Bot\n\nOnce the final video, title, and description were ready, I used Python one last time. I wrote a script that used the **YouTube v3 API** to upload the video, set all the details, and add it to a playlist—all without me having to click a single button on the YouTube site.\n\nAnd just like that, it was done. A simple wish from my mom had turned into a complete, automated content pipeline. It wasn't built with fancy platforms or a big budget. It was built with Python, a handful of free APIs, and a whole lot of love.",
        },
        {
          type: "text",
          content:
            "## Most Importantly\n\nIt was built with a purpose: **to make my mom happy**. And seeing her enjoy the playlist is a better reward than any complex project I could have ever worked on.\n\nIt's a reminder that sometimes, the most meaningful code you can write is the kind that solves a problem for someone you love. Being able to take a heartfelt request and build a real solution is exactly why I love coding.",
        },
        {
          type: "text",
          content:
            "## See it in Action\n\nI hope you enjoyed the story behind the project. You can see the final result and dive into the code using the links below.\n\n🎧 [**The Playlist**](https://www.youtube.com/playlist?list=PLPgC7mD72GJ_rUG0khmdx-7CNDjRmxu-X) — Listen to Krishna's wisdom\n\n💻 [**The Code**](https://github.com/lokeshmanideep/whispers-of-wisdom) — Explore the automation pipeline on GitHub",
        },
      ],
    },
    {
      id: "hi-feelings",
      title: "hi feelings - iOS App for Connection",
      description:
        "Built a full-stack offline-first iOS app from 0 to 1 enabling users to write private journals, create memories, and schedule virtual letters with handwritten notes to loved ones. Architected with MVVM-C pattern, integrated with Firebase authentication, RevenueCat subscriptions, and custom Spring Boot backend.",
      technologies: [
        "Swift",
        "UIKit",
        "Core Data",
        "Combine",
        "Firebase",
        "Spring Boot",
        "RevenueCat",
        "PencilKit",
      ],
      date: "2025 - 4 months",
      category: "Full-stack",
      highlights: [
        "Sole developer: frontend & backend",
        "MVVM-C architecture with Coordinator pattern",
        "Offline-first with Core Data sync",
        "Handwritten notes using Apple Pencil",
        "JWT-based authentication with Spring Boot",
      ],
      detailContent: [
        {
          type: "text",
          content:
            "## A Quick Look\n\n- **Role:** Sole iOS Developer (Frontend & Backend)\n- **Timeline:** 4 months, from concept to TestFlight\n- **Status:** Available on TestFlight",
        },
        {
          type: "text",
          content:
            "## The Idea: Virtual Letters, Real Love\n\nDid you ever want to send a letter to your loved ones but felt limited by distance or time? What if you could do it virtually, with the same love and personal touch?\n\nThat's the simple idea behind **'hi feelings'**. It's an offline-first iOS app I built from **0 to 1** to help people connect with themselves and others. Users can write private journals, tag special moments as memories, and even schedule \"letters\" to be sent to their contacts on a future date. To add that personal touch, every letter can be accompanied by a **handwritten, scribbled note** using Apple Pencil or a finger.\n\nAs the sole developer, I was responsible for every aspect of this project, from the initial architectural design and backend integration to the final UI polish and deployment.",
        },
        {
          type: "image",
          content: "/hi-feelings-1.png",
          caption: "Main app interface showing the journal and letters feature",
        },
        {
          type: "text",
          content:
            '## The Architecture: A "Gold Standard" Foundation\n\nBuilding a complex, offline-first app requires a clean and scalable foundation. I chose the **MVVM-C (Model-View-ViewModel-Coordinator)** architecture to ensure a clear separation of concerns, making the app highly testable and maintainable.\n\n### MVVM Pattern\n\nThe ViewModel acts as the "brain" for each screen, containing all the business logic and state. The Views (ViewControllers) are "dumb" and simply render the state provided by the ViewModel, updating automatically using **Combine**.\n\n### Coordinator Pattern\n\nAll navigation and presentation logic is handled by Coordinators. This keeps my ViewControllers completely decoupled from each other, meaning a screen doesn\'t know about the other screens it navigates to.\n\n### Design Patterns Used\n\nI used several key design patterns to keep the code modular and clean:\n\n- **Factory & Command:** To configure complex UI elements and user actions, like the dynamic in-app menus\n- **Repository:** To create a clean abstraction layer between the ViewModels and the data sources (both local and remote)\n- **Protocol-Oriented Programming:** To flexibly handle different types of content (Journals, Letters, Memories) within the same UI',
        },
        {
          type: "text",
          content:
            "## Technology Deep Dive\n\nI handled both the frontend and backend integration, using a modern and robust tech stack.",
        },
        {
          type: "list",
          content: "Frontend (iOS)",
          caption: "Frontend (iOS)",
          items: [
            "Language & UI: Swift, UIKit, Auto Layout",
            "Concurrency & State Management: Combine, async/await",
            "Persistence: Core Data (for a robust, offline-first experience)",
            "Rich Text & Drawing: NSAttributedString, PencilKit",
            "Animations: Custom UIViewController transitions and UIView animations",
          ],
        },
        {
          type: "list",
          content: "Backend & Services",
          caption: "Backend & Services",
          items: [
            "Authentication: Firebase Authentication (Phone & Email Link)",
            "API Security: JWT Tokens for managing secure user sessions",
            "Core Backend: Java SpringBoot",
            "Subscriptions: RevenueCat for handling in-app purchases and subscriptions",
          ],
        },
        {
          type: "list",
          content: "Tools & Deployment",
          caption: "Tools & Deployment",
          items: [
            "Beta Testing: TestFlight for distributing builds and gathering feedback",
            "Deep Linking: Universal Links to handle opening the app from a shared link",
          ],
        },
        {
          type: "image",
          content: "/hi-feelings-2.png",
          caption: "Dynamic card stack UI showing the 'I feel' feature",
        },
        {
          type: "text",
          content: "## Key Features & Implementation Highlights",
        },
        {
          type: "text",
          content:
            "### Offline-First with Core Data\n\nThe app is fully functional without an internet connection. I designed the persistence layer using **Core Data** as the single source of truth. The Repository pattern manages all data operations and handles the logic for syncing local changes with the remote server when a connection is available.",
        },
        {
          type: "text",
          content:
            '### Dynamic Card Stack UI\n\nThe main "I feel" screen features a complex, interactive card stack. This UI is built declaratively. The ViewModel publishes an array of card models, and the `UICollectionView` (or `UIStackView`) uses a `DiffableDataSource` to automatically and efficiently render the UI, handling insertions, deletions, and updates with smooth animations.',
        },
        {
          type: "text",
          content:
            "### Secure Authentication Flow\n\nI implemented a complete authentication system using **Firebase** for phone and magic link sign-in. On the backend, I designed a Java Spring Boot microservice to issue **JWT tokens** upon successful verification, which are used to secure all subsequent API requests.",
        },
        {
          type: "code",
          language: "swift",
          content: `// Example: ViewModel with Combine for reactive state management
class JournalViewModel {
    @Published var entries: [JournalEntry] = []
    @Published var isLoading: Bool = false
    
    private let repository: JournalRepository
    private var cancellables = Set<AnyCancellable>()
    
    func loadEntries() {
        isLoading = true
        repository.fetchEntries()
            .receive(on: DispatchQueue.main)
            .sink(
                receiveCompletion: { [weak self] _ in
                    self?.isLoading = false
                },
                receiveValue: { [weak self] entries in
                    self?.entries = entries
                }
            )
            .store(in: &cancellables)
    }
}`,
          caption: "Reactive state management using Combine framework",
        },
        {
          type: "text",
          content:
            "## Results & Impact\n\nBuilding 'hi feelings' was a fantastic journey in full-stack iOS development. It strengthened my skills in architecting robust, user-focused, and maintainable applications from the ground up.\n\n- **Complete ownership** of frontend and backend development\n- **Production-ready** app available on TestFlight\n- **Clean architecture** ensuring scalability and maintainability\n- **Offline-first** design providing seamless user experience\n- **Modern iOS patterns** leveraging Combine, async/await, and protocol-oriented programming",
        },
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
