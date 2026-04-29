export const PERSONAL = {
  name: 'Ketan Ayatti',
  tagline: 'DevOps Engineer & Full Stack Developer',
  bio: 'DevOps engineer focused on building reliable, production-grade systems with strong expertise in CI/CD automation, cloud deployment, and containerized infrastructure. I prioritize stability by designing systems with health checks, rollback strategies, and zero-downtime deployment patterns. Experienced in designing production pipelines, self-hosted AI systems, and scalable applications with focus on reliability and performance.',
  location: 'India',
  timezone: 'IST (UTC +5:30)',
  available: true,
  avatarUrl: '/avatar.png',
}

export const SOCIAL = {
  github: 'https://github.com/ketanayatti',
  linkedin: 'https://www.linkedin.com/in/ketanayatti/',
  twitter: 'https://twitter.com/ketanayatti',
  email: 'kethanayatti333@gmail.com',
  resume: '/resume.pdf',
}

export const SKILLS = [
  // DevOps & Infrastructure
  'Docker', 'Docker Compose', 'Jenkins', 'AWS EC2', 'NGINX', 'Blue-Green Deployment', 'Linux', 'Ubuntu', 'Bash Scripting', 'Deployment Automation', 'Health Checks', 'Monitoring',
  // Backend
  'Node.js', 'Express.js', 'Python', 'FastAPI', 'REST APIs', 'MongoDB',
  // Frontend
  'React.js', 'TypeScript', 'Tailwind CSS', 'EJS',
  // Tools & Platforms
  'Git', 'GitHub', 'Postman', 'Docker Hub', 'Socket.io', 'VS Code',
]

export const PROJECTS = [
  {
    id: 1,
    title: 'Self-Hosted AIOps Agent on AWS',
    description: 'Production-grade AIOps micro-agent enabling real-time infrastructure monitoring with fully self-hosted LLM using llama.cpp. Runs on AWS Free Tier with zero AI API cost.',
    tags: ['Python', 'FastAPI', 'AWS EC2', 'llama.cpp', 'Linux'],
    category: 'devops' as const,
    github: 'https://github.com/ketanayatti/Self-Hosted-AIOps-Agent-on-AWS',
    live: '',
    featured: true,
    image: '/projects/aiiops-agent.png',
  },
  {
    id: 2,
    title: 'Autonomous Self-Healing Deployment Platform',
    description: 'Production-style deployment system with zero-downtime Blue-Green deployments using Docker and NGINX. Includes watchdog monitoring for health checks and automatic rollback on failure.',
    tags: ['Docker', 'NGINX', 'Bash', 'Linux'],
    category: 'devops' as const,
    github: 'https://github.com/ketanayatti/Autonomous-Self-Healing-Deployment-Platform',
    live: '',
    featured: true,
    image: '/projects/blue-green.png',
  },
  {
    id: 3,
    title: 'AI Mock Interview Platform',
    description: 'Full-stack AI-based interview simulation with end-to-end CI/CD using Jenkins. Docker containerization, AWS EC2 deployment, NGINX traffic routing, and zero-downtime Blue-Green releases.',
    tags: ['Jenkins', 'Docker', 'AWS EC2', 'NGINX', 'Node.js', 'MongoDB'],
    category: 'devops' as const,
    github: 'https://github.com/ketanayatti/ai-mock-interview',
    live: '',
    featured: true,
    image: '/projects/interview-platform.png',
  },
  {
    id: 4,
    title: 'Communiatec',
    description: 'Real-time community platform with Socket.io messaging, AES-256-GCM encrypted file storage, and role-based access control. Scalable architecture with Docker containerization and AWS deployment.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Docker', 'AWS', 'NGINX'],
    category: 'fullstack' as const,
    github: 'https://github.com/ketanayatti/Communiatec',
    live: 'http://3.226.122.22/',
    featured: false,
    image: '/projects/communiatec.png',
  },
]

export const JOURNEY = [
  {
    year: '2026 – Present',
    title: 'DevOps Engineer Intern',
    org: 'IonIdea',
    description: 'Designing and implementing real-world DevOps workflows including CI/CD pipeline automation, containerization, and cloud deployment. Building Jenkins-based pipelines, Docker-based containerization, and Blue-Green deployment strategies on AWS EC2 with zero-downtime releases.',
    tags: ['Jenkins', 'Docker', 'AWS EC2', 'NGINX', 'Linux', 'GitHub'],
  },
  {
    year: '2026 Early',
    title: 'Frontend Developer Intern',
    org: 'IonIdea',
    description: 'Developed frontend modules using React and TypeScript, focusing on reusable components, form validation, and API integration. Worked on CRUD operations, state management, and UI optimization.',
    tags: ['React', 'TypeScript', 'JavaScript', 'REST APIs'],
  },
]

export const PHILOSOPHY = [
  {
    number: '01',
    statement: 'AI Can\'t Replace Engineers Who Build Systems',
    detail: 'AI can be a powerful companion for DevOps engineers, but it cannot replace those who understand systems end-to-end. Real value comes from engineers who design, deploy, and maintain reliable infrastructure.',
  },
  {
    number: '02',
    statement: 'DevOps Is a Mindset, Not Just Tools',
    detail: 'DevOps is about ownership, automation, and system thinking. Tools are secondary—the focus is on building efficient, reliable workflows that reduce friction between development and operations.',
  },
  {
    number: '03',
    statement: 'Reliability First Engineering',
    detail: 'I prioritize stability and fault tolerance by designing systems with health checks, rollback strategies, and zero-downtime deployment patterns. Failures are inevitable; resilience is intentional.',
  },
  {
    number: '04',
    statement: 'Learn, Build, and Grow Through Implementation',
    detail: 'I focus on hands-on learning by building real systems, solving practical problems, and continuously improving through experimentation and iteration.',
  },
]

export const SECTIONS = [
  { id: 'hero', label: 'Welcome' },
  { id: 'about', label: 'About' },
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
  skills: `DevOps:     Docker · Docker Compose · Jenkins · AWS EC2 · NGINX · Blue-Green Deployment
Backend:    Node.js · Express.js · Python · FastAPI · REST APIs · MongoDB
Frontend:   React.js · TypeScript · Tailwind CSS · EJS
Tools:      Git · GitHub · Postman · Docker Hub · Socket.io · VS Code`,
  projects: PROJECTS.filter(p => p.featured).map(p => `▸ ${p.title}\n  ${p.description}`).join('\n\n'),
  contact: `📧 ${SOCIAL.email}
🔗 ${SOCIAL.github}
💼 ${SOCIAL.linkedin}
🐦 ${SOCIAL.twitter}`,
  hire: `Why work with me?

✦ DevOps expertise in CI/CD automation, containerization, and cloud deployment
✦ Zero-downtime deployment strategies with health checks and rollback mechanisms
✦ Full stack capability — backend APIs to production infrastructure
✦ Strong focus on reliability, automation, and system thinking
✦ Hands-on experience with Jenkins, Docker, AWS, and NGINX

Let's talk → ${SOCIAL.email}`,
}

export const PROJECT_CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'devops', label: 'DevOps' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'opensource', label: 'Open Source' },
] as const
