// ════════════════════════════════════════════════════════════════
// ⚙️  CONFIGURATION - UPDATE THIS SECTION WITH YOUR INFORMATION
// ════════════════════════════════════════════════════════════════

export const PERSONAL = {
  name: 'Ketan Ayatti',
  tagline: 'DevOps Engineer · Deployment Automation & Infrastructure Reliability',
  bio: `My focus is on how systems behave after they're deployed.

I started in application development — React interfaces, REST API integration, schema validation — and that work gave me an accurate picture of what applications need from their infrastructure. Over time it pushed me into deployment systems: Jenkins pipelines, Docker environments, Linux server configuration, reverse proxy routing, and CI/CD workflows designed for production stability.

What I care about operationally: rollback safety, health-check validation, traffic routing correctness, deployment consistency, and failure recoverability.`,
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
  // ── DevOps & Infrastructure (Primary) ──
  'CI/CD Pipelines', 'Jenkins', 'Docker', 'Docker Compose', 'Nginx', 'Linux', 'Bash', 'AWS EC2', 'Blue-Green Deployment', 'Zero-Downtime Deployment', 'Automated Rollback', 'Health-Check Validation', 'Deployment Automation', 'Infrastructure Reliability',
  // ── Systems & Operations (Secondary) ──
  'SSH Configuration', 'Firewall Rules', 'Container Networking', 'Environment Management', 'System Reliability', 'Logging', 'Self-Healing Systems',
  // ── Application Stack (Tertiary) ──
  'Node.js', 'Express', 'Redis', 'MongoDB', 'React', 'TypeScript',
]

export const SKILLS_GROUPED = {
  devops: {
    label: 'DevOps & Infrastructure',
    weight: 'primary' as const,
    skills: ['CI/CD Pipelines', 'Jenkins', 'Docker', 'Docker Compose', 'Nginx', 'Linux', 'Bash', 'AWS EC2', 'Blue-Green Deployment', 'Zero-Downtime Deployment', 'Automated Rollback', 'Health-Check Validation', 'Deployment Automation', 'Infrastructure Reliability'],
  },
  systems: {
    label: 'Systems & Operations',
    weight: 'secondary' as const,
    skills: ['SSH Configuration', 'Firewall Rules', 'Container Networking', 'Environment Management', 'System Reliability', 'Logging', 'Self-Healing Systems'],
  },
  application: {
    label: 'Application Stack',
    weight: 'tertiary' as const,
    skills: ['Node.js', 'Express', 'Redis', 'MongoDB', 'React', 'TypeScript'],
  },
}

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

  // Open Source
  {
    id: 7,
    title: 'ShareDrop',
    outcome: 'ShareDrop is a local file sharing app that works across Android, Mac, Windows, Linux, iOS, and Web. No internet, no account, no cloud — just connect to the same WiFi and share files directly between your devices. It\'s built with Kotlin Multiplatform and Compose Multiplatform, so most of the code is written once and runs everywhere.',
    tags: ['Kotlin Multiplatform', 'Compose Multiplatform', 'Android', 'iOS', 'macOS', 'Windows', 'Linux', 'File Sharing', 'Local Network', 'Cross-platform'],
    category: 'fullstack' as const,
    github: 'https://github.com/ketanayatti/sharedrop.git',
    featured: false,
  },
]

export const JOURNEY = [
  {
    year: 'Jan 2026 – Apr 2026',
    title: 'DevOps Engineer Intern',
    org: 'IonIdea',
    description: 'Joined as a frontend developer on a client-facing Outcome-Based Education platform — built React modules with TypeScript and AG Grid, integrated REST APIs with Zod-based schema validation. Transitioned into DevOps-focused responsibilities as the internship progressed, working on production-grade infrastructure and deployment systems.',
    tags: ['JENKINS', 'DOCKER', 'AWS EC2', 'NGINX', 'LINUX', 'BASH', 'CI/CD'],
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
  'Deployment Automation',
  'CI/CD Pipeline Engineer',
  'Infrastructure Reliability',
  'Zero-Downtime Systems',
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
  ► DevOps & Infrastructure: CI/CD Pipelines, Jenkins, Docker, Docker Compose, NGINX, Linux, Bash, AWS EC2, Blue-Green Deployment, Zero-Downtime Deployment, Health-Check Validation, Infrastructure Reliability
  ► Systems & Operations: SSH Configuration, Firewall Rules, Container Networking, Environment Management, System Reliability, Logging, Self-Healing Systems
  ► Application Stack: Node.js, Express, Redis, MongoDB, React, TypeScript`,
  experience: `PROFESSIONAL JOURNEY:
  
  → ${JOURNEY[0].year} | ${JOURNEY[0].title} @ ${JOURNEY[0].org}
    ${JOURNEY[0].description}
    Tech: ${JOURNEY[0].tags.join(', ')}`,
  'tech-stack': `TECHNOLOGY STACK:
  
  Backend:            Node.js, Express, FastAPI, Python
  Frontend:           React, TypeScript, Tailwind CSS, Next.js
  DevOps & Cloud:     Docker, Docker Compose, Jenkins, AWS EC2, NGINX, Linux, Bash
  Databases:          MongoDB, Redis, MySQL
  Deployment:         Blue-Green, Zero-Downtime, Health Checks, Auto-Rollback
  Tools:              Git, GitHub, Postman, Docker Hub, VS Code
  Monitoring:         CloudWatch, Health Checks, System Monitoring`,
  projects: `FEATURED PROJECTS (${PROJECTS.length} total):
  
  1. AI Mock Interview Platform with Automated CI/CD Deployment
     → Fully automated CI/CD pipeline with Jenkins & GitHub webhooks
     → Blue-Green deployment on AWS EC2 with zero downtime
     → Tech: Jenkins, Docker, AWS EC2, NGINX, Node.js, MongoDB
  
  2. Enterprise Real-Time Collaboration Platform (Communiatec)
     → Scalable backend handling thousands of WebSocket connections
     → Full DevOps pipeline: Docker, Jenkins, AWS EC2
     → Tech: React, Node.js, Socket.io, Docker, Jenkins
  
  3. Self-Hosted AIOps Agent on AWS
     → On-instance LLM inference with llama.cpp
     → System monitoring, controlled execution, REST endpoints
     → Tech: AWS EC2, FastAPI, Python, LLM, System Monitoring
  
  Use "projects" on portfolio to see all work →`,
  contact: `CONTACT INFORMATION:
  
  📧 Email:    ${SOCIAL.email}
  🔗 GitHub:   ${SOCIAL.github}
  💼 LinkedIn: ${SOCIAL.linkedin}
  ${SOCIAL.twitter ? '🐦 Twitter:  ' + SOCIAL.twitter : ''}
  
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

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
}

export const PROJECT_CATEGORIES = [
  { key: 'devops', label: 'DevOps' },
  { key: 'infrastructure', label: 'Infrastructure' },
  { key: 'fullstack', label: 'Full Stack' },
] as const
