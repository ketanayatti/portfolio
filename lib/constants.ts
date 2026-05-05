// ════════════════════════════════════════════════════════════════
// ⚙️  CONFIGURATION - UPDATE THIS SECTION WITH YOUR INFORMATION
// ════════════════════════════════════════════════════════════════

export const PERSONAL = {
  name: 'Your Full Name',
  tagline: 'Your Professional Title',
  bio: 'Your professional biography and experience summary',
  location: 'Your Location',
  timezone: 'Your Timezone (UTC offset)',
  available: true,
  avatarUrl: '/avatar.png',
}

export const SOCIAL = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://www.linkedin.com/in/yourprofile/',
  twitter: 'https://twitter.com/yourhandle',
  email: 'your.email@example.com',
  resume: '/resume.pdf',
}

export const SKILLS = [
  // ── DevOps & Infrastructure ──
  'Docker', 'Docker Compose', 'Jenkins', 'AWS EC2', 'NGINX', 'Blue-Green Deployment', 'Linux', 'Ubuntu', 'Bash Scripting', 'Deployment Automation', 'Health Checks', 'Monitoring',
  // ── Backend ──
  'Node.js', 'Express.js', 'Python', 'FastAPI', 'REST APIs', 'MongoDB',
  // ── Frontend ──
  'React.js', 'TypeScript', 'Tailwind CSS', 'EJS',
  // ── Tools & Platforms ──
  'Git', 'GitHub', 'Postman', 'Docker Hub', 'Socket.io', 'VS Code',
]

export const PROJECTS = [
  // DevOps Wall - Featured
  {
    id: 1,
    title: 'Self-Hosted AIOps Agent on AWS',
    outcome: 'Reduced operational overhead by 70% with fully self-hosted LLM infrastructure running on AWS Free Tier with zero AI API costs.',
    tags: ['Python', 'FastAPI', 'AWS EC2', 'llama.cpp', 'Linux'],
    category: 'devops' as const,
    github: 'https://github.com/yourusername/project-name',
    featured: true,
  },
  {
    id: 2,
    title: 'Autonomous Self-Healing Deployment Platform',
    outcome: 'Achieved zero-downtime deployments with automatic rollback on failure, reducing deployment risk and manual intervention by 95%.',
    tags: ['Docker', 'NGINX', 'Bash', 'Linux'],
    category: 'devops' as const,
    github: 'https://github.com/yourusername/project-name',
    featured: true,
  },
  {
    id: 3,
    title: 'AI Mock Interview Platform',
    outcome: 'Deployed production-grade CI/CD pipeline with Jenkins reducing release cycle time by 80% and ensuring zero-downtime Blue-Green deployments.',
    tags: ['Jenkins', 'Docker', 'AWS EC2', 'NGINX', 'Node.js', 'MongoDB'],
    category: 'devops' as const,
    github: 'https://github.com/yourusername/project-name',
    featured: true,
  },
  {
    id: 5,
    title: 'Docker Compose Multi-Container Orchestration',
    outcome: 'Orchestrated 5+ containerized services with health checks and automatic restart policies, improving system reliability and recovery time.',
    tags: ['Docker', 'Docker Compose', 'Linux', 'Monitoring'],
    category: 'devops' as const,
    github: 'https://github.com/yourusername/project-name',
    featured: false,
  },
  {
    id: 6,
    title: 'NGINX Load Balancer & Reverse Proxy',
    outcome: 'Configured advanced load balancing and SSL termination for high-availability applications, improving throughput and security posture.',
    tags: ['NGINX', 'Linux', 'Load Balancing', 'SSL/TLS'],
    category: 'devops' as const,
    github: 'https://github.com/yourusername/project-name',
    featured: false,
  },

  // Full Stack Wall
  {
    id: 4,
    title: 'Communication Platform',
    outcome: 'Built real-time platform serving 10K+ messages with encrypted file storage and role-based access, achieving 99.5% uptime with scalable Docker architecture.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Docker', 'AWS'],
    category: 'fullstack' as const,
    github: 'https://github.com/yourusername/project-name',
    featured: true,
  },
  {
    id: 7,
    title: 'E-Commerce REST API',
    outcome: 'Designed scalable REST API handling 500+ concurrent users with JWT authentication and transaction processing, reducing API response time to <100ms.',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT'],
    category: 'fullstack' as const,
    github: 'https://github.com/yourusername/project-name',
    featured: false,
  },
  {
    id: 8,
    title: 'React Task Management Dashboard',
    outcome: 'Developed feature-rich frontend with real-time updates and offline support, increasing user engagement by 45% through optimized UX patterns.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
    category: 'fullstack' as const,
    github: 'https://github.com/yourusername/project-name',
    featured: false,
  },
  {
    id: 9,
    title: 'FastAPI Microservice Framework',
    outcome: 'Built high-performance async API service achieving 10K requests/sec throughput with automatic OpenAPI documentation and validation.',
    tags: ['Python', 'FastAPI', 'Async', 'Pydantic'],
    category: 'fullstack' as const,
    github: 'https://github.com/yourusername/project-name',
    featured: false,
  },

  // Open Source Wall
  {
    id: 10,
    title: 'DevOps Automation Toolkit',
    outcome: 'Open-source CLI tool for infrastructure automation adopted by 200+ developers, streamlining deployment workflows and reducing setup time by 60%.',
    tags: ['Bash', 'Python', 'CLI', 'Automation'],
    category: 'opensource' as const,
    github: 'https://github.com/yourusername/project-name',
    featured: true,
  },
  {
    id: 11,
    title: 'Docker Health Check Monitoring',
    outcome: 'Community-contributed monitoring solution for container health tracking with Prometheus integration, enabling proactive failure detection.',
    tags: ['Docker', 'Prometheus', 'Monitoring', 'Open Source'],
    category: 'opensource' as const,
    github: 'https://github.com/yourusername/project-name',
    featured: false,
  },
  {
    id: 12,
    title: 'Kubernetes Deployment Helpers',
    outcome: 'Open-source Helm charts and deployment utilities simplifying K8s workflows, downloaded 5K+ times and maintained by active community.',
    tags: ['Kubernetes', 'Helm', 'YAML', 'DevOps'],
    category: 'opensource' as const,
    github: 'https://github.com/yourusername/project-name',
    featured: false,
  },
  {
    id: 13,
    title: 'React Component Library',
    outcome: 'Published npm package with 50+ reusable, accessible UI components adopted by 30+ projects and maintained with active community contributions.',
    tags: ['React', 'TypeScript', 'Storybook', 'npm'],
    category: 'opensource' as const,
    github: 'https://github.com/yourusername/project-name',
    featured: false,
  },
]

export const JOURNEY = [
  {
    year: '[Year] – [Month/Year]',
    title: 'DevOps Engineer Role',
    org: 'Company Name',
    description: 'Describe your role, responsibilities, and key achievements here. Update in .env.local configuration.',
    tags: ['Technology 1', 'Technology 2', 'Technology 3'],
  },
  {
    year: '[Year] – [Year]',
    title: 'Frontend Developer Role',
    org: 'Company Name',
    description: 'Describe your role, responsibilities, and key achievements here. Update in .env.local configuration.',
    tags: ['Technology 1', 'Technology 2', 'Technology 3'],
  },
]

export const PHILOSOPHY = [
  {
    number: '01',
    statement: 'Your First Philosophy Statement',
    detail: 'Describe your first core belief or philosophy here. Update in .env.local configuration.',
  },
  {
    number: '02',
    statement: 'Your Second Philosophy Statement',
    detail: 'Describe your second core belief or philosophy here. Update in .env.local configuration.',
  },
  {
    number: '03',
    statement: 'Your Third Philosophy Statement',
    detail: 'Describe your third core belief or philosophy here. Update in .env.local configuration.',
  },
  {
    number: '04',
    statement: 'Your Fourth Philosophy Statement',
    detail: 'Describe your fourth core belief or philosophy here. Update in .env.local configuration.',
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
  'Full Stack Developer',
  'Infrastructure Architect',
  'Automation Specialist',
]

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: `Available commands:
  whoami     — About me
  skills     — Technical skills
  projects   — Featured projects
  contact    — Get in touch
  hire       — Why hire me
  clear      — Clear terminal`,
  whoami: `┌─────────────────────────────┐
│  ${PERSONAL.name}
│  ${PERSONAL.tagline}
│  📍 ${PERSONAL.location}
│  🕐 ${PERSONAL.timezone}
│  ${PERSONAL.available ? '🟢 Open to opportunities' : '🔴 Not available'}
└─────────────────────────────┘`,
  skills: `Your skills go here. Update in .env.local or SKILLS constant.
  
Customize your skill categories and technologies to match your experience.
This terminal message is dynamically generated from TERMINAL_COMMANDS.`,
  projects: `Featured projects will display here.
  
Update project information in PROJECTS constant with your actual repositories.
Currently showing placeholder URLs - update with real GitHub links.`,
  contact: `📧 ${SOCIAL.email}
🔗 ${SOCIAL.github}
💼 ${SOCIAL.linkedin}
🐦 ${SOCIAL.twitter}`,
  hire: `Why work with me?

Update this section with your unique value proposition.
Customize in TERMINAL_COMMANDS constant with your strengths.

Let's talk → ${SOCIAL.email}`,
}

export const PROJECT_CATEGORIES = [
  { key: 'all', label: 'All in One' },
  { key: 'devops', label: 'DevOps' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'opensource', label: 'Open Source' },
] as const
