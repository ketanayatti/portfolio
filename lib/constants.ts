// ════════════════════════════════════════════════════════════════
// ⚙️  CONFIGURATION - UPDATE THIS SECTION WITH YOUR INFORMATION
// ════════════════════════════════════════════════════════════════

export const PERSONAL = {
  name: 'Ketan Ayatti',
  tagline: 'DevOps Engineer | Full Stack Systems',
  bio: 'I\'m Ketan Ayatti, focused on building and shipping complete products end-to-end. My approach to DevOps is grounded in a simple cycle — create, break, and fix — which helps me understand systems at a deeper level rather than just operating them. I work with a systems mindset, valuing accountability, ownership, and clarity in how software is designed, built, and maintained.',
  location: 'India',
  timezone: 'IST (UTC+5:30)',
  available: true,
  avatarUrl: '/avatar.png',
}

export const SOCIAL = {
  github: 'https://github.com/ketanayatti',
  linkedin: 'https://www.linkedin.com/in/ketanayatti/',
  twitter: '',
  email: 'kethanayatti333@gmail.com',
  resume: '/resume.pdf',
}

export const SKILLS = [
  // ── DevOps & Infrastructure ──
  'Docker', 'Docker Compose', 'Jenkins', 'GitHub Actions', 'AWS EC2', 'AWS VPC', 'AWS IAM', 'AWS S3', 'AWS CloudWatch', 'NGINX', 'Apache', 'Blue-Green Deployment', 'Zero-Downtime Deployment', 'Linux', 'Ubuntu', 'Bash Scripting', 'Deployment Automation', 'Health Checks', 'Monitoring', 'Automated Rollbacks', 'Container Networking',
  // ── Cloud & Systems Engineering ──
  'Infrastructure Setup', 'SSH Hardening', 'Firewall Rules', 'Least Privilege', 'Environment Management', 'System Reliability', 'Watchdog Scripts', 'Self-Healing Systems', 'Logging',
  // ── Backend ──
  'Node.js', 'Express.js', 'FastAPI', 'Python', 'REST APIs', 'WebSockets', 'Socket.io', 'JWT Authentication',
  // ── Frontend ──
  'React.js', 'TypeScript', 'Tailwind CSS', 'Next.js',
  // ── Databases ──
  'MongoDB', 'Redis', 'MySQL',
  // ── Tools & Platforms ──
  'Git', 'GitHub', 'Postman', 'Docker Hub', 'VS Code', 'CI/CD Pipelines',
]

export const PROJECTS = [
  // DevOps & Full Stack - Featured
  {
    id: 1,
    title: 'AI Mock Interview Platform with Automated CI/CD Deployment',
    outcome: 'Designed and deployed a DevOps-driven AI interview simulation platform with a fully automated CI/CD pipeline. Integrated GitHub webhooks with Jenkins to trigger build, test, Docker image creation, and deployment on AWS EC2. Implemented Blue-Green deployment strategy with NGINX-based traffic switching, health checks, and rollback mechanisms to ensure zero downtime and high availability. The system demonstrates end-to-end automation from code commit to production deployment.',
    tags: ['Jenkins', 'Docker', 'AWS EC2', 'NGINX', 'GitHub Webhooks', 'Node.js', 'Express.js', 'MongoDB', 'AI APIs', 'REST APIs', 'Blue-Green Deployment', 'Health Checks', 'Rollback', 'Linux'],
    category: 'devops' as const,
    github: 'https://github.com/ketanayatti/ai-mock-interview',
    featured: true,
  },
  {
    id: 1,
    title: 'AI Mock Interview Platform with Automated CI/CD Deployment',
    outcome: 'Designed and deployed a DevOps-driven AI interview simulation platform with a fully automated CI/CD pipeline. Integrated GitHub webhooks with Jenkins to trigger build, test, Docker image creation, and deployment on AWS EC2. Implemented Blue-Green deployment strategy with NGINX-based traffic switching, health checks, and rollback mechanisms to ensure zero downtime and high availability. The system demonstrates end-to-end automation from code commit to production deployment.',
    tags: ['Jenkins', 'Docker', 'AWS EC2', 'NGINX', 'GitHub Webhooks', 'Node.js', 'Express.js', 'MongoDB', 'AI APIs', 'REST APIs', 'Blue-Green Deployment', 'Health Checks', 'Rollback', 'Linux'],
    category: 'fullstack' as const,
    github: 'https://github.com/ketanayatti/ai-mock-interview',
    featured: true,
  },

  // Full Stack & DevOps - Featured
  {
    id: 2,
    title: 'Enterprise Real-Time Collaboration Platform (Communiatec)',
    outcome: 'Built a production-grade full-stack collaboration platform supporting real-time messaging, code collaboration, and file sharing. Architected a scalable backend handling thousands of concurrent WebSocket connections. Implemented secure DevOps pipeline with Docker, Jenkins, and AWS EC2, ensuring automated deployments and 99.9% uptime. Applied zero-trust security practices and optimized database performance with caching layers.',
    tags: ['React', 'Node.js', 'MongoDB', 'Redis', 'Docker', 'Jenkins', 'AWS EC2', 'NGINX', 'Socket.io', 'Real-time Communication', 'Zero-trust Security', 'Caching'],
    category: 'fullstack' as const,
    github: 'https://github.com/ketanayatti/communiatec-devops-platform',
    featured: true,
  },
  {
    id: 2,
    title: 'Enterprise Real-Time Collaboration Platform (Communiatec)',
    outcome: 'Built a production-grade full-stack collaboration platform supporting real-time messaging, code collaboration, and file sharing. Architected a scalable backend handling thousands of concurrent WebSocket connections. Implemented secure DevOps pipeline with Docker, Jenkins, and AWS EC2, ensuring automated deployments and 99.9% uptime. Applied zero-trust security practices and optimized database performance with caching layers.',
    tags: ['React', 'Node.js', 'MongoDB', 'Redis', 'Docker', 'Jenkins', 'AWS EC2', 'NGINX', 'Socket.io', 'Real-time Communication', 'Zero-trust Security', 'Caching'],
    category: 'devops' as const,
    github: 'https://github.com/ketanayatti/communiatec-devops-platform',
    featured: true,
  },

  // DevOps - Featured
  {
    id: 3,
    title: 'CI/CD Pipeline for Containerized Application Deployment (AWS)',
    outcome: 'Engineered a fully automated CI/CD pipeline for containerized applications using Jenkins and Docker. Integrated GitHub-based triggers, automated builds, multi-stage Docker image creation, and deployment to AWS EC2. Implemented Blue-Green deployment with NGINX traffic routing, health-check validation, and automatic rollback to ensure zero downtime and reliable releases.',
    tags: ['Jenkins', 'Docker', 'AWS EC2', 'NGINX', 'GitHub Actions', 'Linux', 'CI/CD Pipelines', 'Blue-Green Deployment', 'Health Checks', 'Automated Rollback'],
    category: 'devops' as const,
    github: 'https://github.com/ketanayatti/communiatec-devops-platform',
    featured: true,
  },

  // DevOps
  {
    id: 4,
    title: 'Self-Hosted AIOps Agent on AWS',
    outcome: 'Developed a self-hosted AIOps micro-agent deployed on AWS EC2 with on-instance LLM inference using llama.cpp, eliminating external AI API dependencies. Implemented system monitoring (CPU, memory), controlled command execution, and FastAPI-based REST endpoints for real-time infrastructure interaction. Designed as a lightweight cloud-native monitoring and automation tool.',
    tags: ['AWS EC2', 'FastAPI', 'Python', 'Linux', 'LLM', 'llama.cpp', 'System Monitoring', 'Cloud-native', 'Infrastructure Automation'],
    category: 'devops' as const,
    github: 'https://github.com/ketanayatti/Self-Hosted-AIOps-Agent-on-AWS',
    featured: false,
  },

  // Full Stack
  {
    id: 5,
    title: 'Chatzy – Intelligent NLP Chatbot System',
    outcome: 'Developed an AI-powered chatbot using NLP and machine learning techniques capable of real-time conversational interaction. Implemented REST API-based backend with intent recognition, sentiment analysis, and context-aware responses. Designed modular architecture for scalable AI integration and continuous learning from user interactions.',
    tags: ['Python', 'NLP', 'Machine Learning', 'REST API', 'HTML', 'CSS', 'AI Integration', 'Sentiment Analysis', 'Intent Recognition'],
    category: 'fullstack' as const,
    github: 'https://github.com/ketanayatti/Chatzy',
    featured: false,
  },

  // Full Stack
  {
    id: 6,
    title: 'Number Puzzle Game (Cross-Platform)',
    outcome: 'Built a cross-platform puzzle game with dynamic problem generation and interactive UI/UX. Implemented real-time validation logic, animations, and responsive design across web, Android, and iOS platforms. Focused on performance optimization and smooth user experience.',
    tags: ['React Native', 'Expo', 'TypeScript', 'UI/UX', 'Cross-platform', 'Performance Optimization', 'Animations', 'Responsive Design'],
    category: 'fullstack' as const,
    github: 'https://github.com/ketanayatti/NumberPuzzleGame',
    featured: false,
  },

  // DevOps & Open Source - Featured
  {
    id: 7,
    title: 'ShareDrop',
    outcome: 'ShareDrop is a local file sharing app that works across Android, Mac, Windows, Linux, iOS, and Web. No internet, no account, no cloud — just connect to the same WiFi and share files directly between your devices. It\'s built with Kotlin Multiplatform and Compose Multiplatform, so most of the code is written once and runs everywhere.',
    tags: ['Kotlin Multiplatform', 'Compose Multiplatform', 'Android', 'iOS', 'macOS', 'Windows', 'Linux', 'File Sharing', 'Local Network', 'Cross-platform'],
    category: 'opensource' as const,
    github: 'https://github.com/ketanayatti/sharedrop.git',
    featured: true,
  },
  {
    id: 7,
    title: 'ShareDrop',
    outcome: 'ShareDrop is a local file sharing app that works across Android, Mac, Windows, Linux, iOS, and Web. No internet, no account, no cloud — just connect to the same WiFi and share files directly between your devices. It\'s built with Kotlin Multiplatform and Compose Multiplatform, so most of the code is written once and runs everywhere.',
    tags: ['Kotlin Multiplatform', 'Compose Multiplatform', 'Android', 'iOS', 'macOS', 'Windows', 'Linux', 'File Sharing', 'Local Network', 'Cross-platform'],
    category: 'devops' as const,
    github: 'https://github.com/ketanayatti/sharedrop.git',
    featured: true,
  },
]

export const JOURNEY = [
  {
    year: 'Feb 2026 – Present',
    title: 'DevOps Engineer Intern',
    org: 'IonIdea',
    description: 'Transitioned into DevOps under mentorship, working on production-grade infrastructure and deployment systems. Designed CI/CD pipelines using Jenkins with GitHub webhook integration. Containerized applications using Docker with multi-stage builds. Deployed applications on AWS EC2 with secure configurations. Implemented Blue-Green deployment with zero downtime. Built health-check validation and rollback systems for reliability.',
    tags: ['Jenkins', 'Docker', 'AWS EC2', 'NGINX', 'Linux', 'Bash', 'CI/CD', 'GitHub Webhooks'],
  },
  {
    year: 'Jan 2026 – Feb 2026',
    title: 'Frontend Engineer Intern',
    org: 'IonIdea',
    description: 'Built a production-ready OBE module system with full CRUD workflows. Developed reusable UI components and schema-based validation using Zod. Integrated AG Grid for data handling and UI rendering. Connected frontend to backend APIs with optimized state handling.',
    tags: ['React.js', 'TypeScript', 'REST APIs', 'Zod', 'AG Grid', 'FastAPI', 'MariaDB'],
  },
]

export const PHILOSOPHY = [
  {
    number: '01',
    statement: 'Build, Break, Fix',
    detail: 'I intentionally design, stress, and repair systems to understand them beyond surface-level usage. This cycle builds deeper system awareness, exposes hidden failure points early, and creates confidence in handling real production issues.',
  },
  {
    number: '02',
    statement: 'Engineers Lead, AI Assists',
    detail: 'AI is a powerful companion for accelerating workflows, but system ownership, decision-making, and reliability engineering remain human responsibilities. I use AI to enhance execution—not replace engineering judgment.',
  },
  {
    number: '03',
    statement: 'Systems Are Measured by Resilience, Not Perfection',
    detail: 'There is no perfect production system—only systems that can handle failure and improve over time. I focus on building architectures that recover quickly, adapt under load, and evolve with real-world usage.',
  },
  {
    number: '04',
    statement: 'Grow Like a System, Not Just a Skill',
    detail: 'Like a tree with deep roots, strong systems are built on unseen foundations. Continuous learning, depth of understanding, and steady evolution create long-term strength and stability 🌱',
  },
]

export const SECTIONS = [
  { id: 'hero', label: 'Welcome' },
  { id: 'about', label: 'About' },
  { id: 'profile', label: 'Profile' },
  { id: 'journey', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'interactive', label: 'Playground' },
  { id: 'connect', label: 'Connect' },
]

export const ROLES = [
  'DevOps Engineer',
  'Cloud Infrastructure Engineer',
  'Automation & Reliability Engineer',
  'Systems-Focused Software Engineer',
  'Full Stack Engineer with DevOps Expertise',
]

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: `Available commands:
  whoami      — About me
  profile     — Full profile
  skills      — Technical skills
  experience  — Work experience
  projects    — Featured projects
  tech-stack  — Technology stack
  contact     — Get in touch
  resume      — Download resume
  github      — GitHub profile
  clear       — Clear terminal`,
  whoami: `┌─────────────────────────────┐
│  ${PERSONAL.name}
│  ${PERSONAL.tagline}
│  📍 ${PERSONAL.location}
│  🕐 ${PERSONAL.timezone}
│  ${PERSONAL.available ? '🟢 Open to opportunities' : '🔴 Not available'}
└─────────────────────────────┘`,
  skills: `CORE SKILLS:
  ► Backend:  Node.js, Express.js, Python, FastAPI, REST APIs
  ► Frontend: React.js, TypeScript, Tailwind CSS
  ► DevOps:   Docker, Kubernetes, AWS, Linux, CI/CD
  ► Tools:    Git, GitHub, Jenkins, Postman, Docker Hub
  ► Database: MongoDB, PostgreSQL
  ► Other:    Socket.io, Bash Scripting, NGINX, Load Balancing`,
  experience: `PROFESSIONAL JOURNEY:
  
  → DevOps Engineer & Full Stack Developer
    - Infrastructure automation & deployment pipelines
    - Containerization & orchestration
    - API development & microservices
    - Cloud deployment & AWS services
    
  UPDATE THIS SECTION with your actual experience details
  in the JOURNEY constant configuration.`,
  'tech-stack': `TECHNOLOGY STACK:
  
  Backend:        Node.js, Express, Python, FastAPI
  Frontend:       React, TypeScript, Tailwind CSS
  DevOps:         Docker, NGINX, Linux
  Cloud:          AWS EC2, AWS Services
  Databases:      MongoDB, PostgreSQL
  Tools:          Git, Jenkins, Postman
  Containerized:  Docker, Docker Compose
  Monitoring:     Health Checks, Prometheus
  Version Control: GitHub, Git`,
  projects: `FEATURED PROJECTS:
  
  1. Self-Hosted AIOps Agent
     → Reduced operational overhead by 70%
     → Tech: Python, FastAPI, AWS EC2, llama.cpp
     
  2. Autonomous Self-Healing Deployment
     → Zero-downtime deployments with auto-rollback
     → Tech: Docker, NGINX, Bash, Linux
     
  3. AI Mock Interview Platform
     → Production CI/CD pipeline
     → Tech: Jenkins, Docker, AWS, Node.js, MongoDB
     
  4. Communication Platform
     → Real-time platform with 10K+ message support
     → Tech: React, Node.js, Socket.io, Docker
     
  Use "projects" on portfolio to see all work →`,
  contact: `CONTACT INFORMATION:
  
  📧 Email:    ${SOCIAL.email}
  🔗 GitHub:   ${SOCIAL.github}
  💼 LinkedIn: ${SOCIAL.linkedin}
  🐦 Twitter:  ${SOCIAL.twitter}
  
  Feel free to reach out! I'm always open to interesting
  conversations and new opportunities.`,
  resume: `📄 Resume Download:
  
  ${SOCIAL.resume}
  
  My resume contains detailed information about my
  experience, skills, and project contributions.`,
  github: `🐙 GitHub Profile:
  
  ${SOCIAL.github}
  
  Check out my repositories and open source contributions!`,
  profile: `╔════════════════════════════════════╗
║       COMPLETE PROFILE               ║
╚════════════════════════════════════╝

NAME:        ${PERSONAL.name}
TITLE:       ${PERSONAL.tagline}
LOCATION:    ${PERSONAL.location}
TIMEZONE:    ${PERSONAL.timezone}
STATUS:      ${PERSONAL.available ? '🟢 Open to Opportunities' : '🔴 Not Available'}
BIO:         ${PERSONAL.bio}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 EXPERTISE:
  • Full Stack Development
  • DevOps & Infrastructure
  • Cloud Architecture
  • Microservices
  • API Design
  • Automation

🔗 CONNECTIONS:
  GitHub:   ${SOCIAL.github}
  LinkedIn: ${SOCIAL.linkedin}
  Email:    ${SOCIAL.email}
Full Resume: ${SOCIAL.resume}`,
}

export const PROJECT_CATEGORIES = [
  { key: 'all', label: 'All in One' },
  { key: 'devops', label: 'DevOps' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'opensource', label: 'Open Source' },
] as const
