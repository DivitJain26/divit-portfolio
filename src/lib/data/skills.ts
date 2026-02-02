import { v4 as uuid } from 'uuid';
import { Skill } from '../types/portfolio';

export const skills: Skill[] = [
  // Frontend
  { id: uuid(), featured: true, key: 'reactjs', name: 'React', category: 'frontend', icon_name: 'devicon-react-original colored' },
  { id: uuid(), featured: true, key: 'nextjs', name: 'Next.js', category: 'frontend', icon_name: 'devicon-nextjs-plain colored' },
  { id: uuid(), featured: true, key: 'tailwindcss', name: 'Tailwind CSS', category: 'frontend', icon_name: 'devicon-tailwindcss-plain colored' },

  // Backend
  { id: uuid(), featured: true, key: 'node', name: 'Node.js', category: 'backend', icon_name: 'devicon-nodejs-plain-wordmark colored' },
  { id: uuid(), featured: true, key: 'express', name: 'Express.js', category: 'backend', icon_name: 'devicon-express-original colored' },
  { id: uuid(), featured: false, key: 'socketio', name: 'Socket.io', category: 'backend', icon_name: 'devicon-socketio-original' },
  { id: uuid(), featured: false, key: 'flask', name: 'Flask', category: 'backend', icon_name: 'devicon-flask-original colored' },

  // Database
  { id: uuid(), featured: true, key: 'mongodb', name: 'MongoDB', category: 'database', icon_name: 'devicon-mongodb-plain colored' },
  { id: uuid(), featured: true, key: 'postgre', name: 'PostgreSQL', category: 'database', icon_name: 'devicon-postgresql-plain colored' },
  { id: uuid(), featured: true, key: 'firebase', name: 'Firebase', category: 'database', icon_name: 'devicon-firebase-plain colored' },
  { id: uuid(), featured: false, key: 'prisma', name: 'Prisma', category: 'database', icon_name: 'devicon-prisma-original' },

	// Languages
	{ id: uuid(), featured: true, key: "typescript", name: 'TypeScript', category: 'language', icon_name: 'devicon-typescript-plain colored', },
  { id: uuid(), featured: true, key: "javascript", name: 'JavaScript', category: 'language', icon_name: 'devicon-javascript-plain colored', },
  { id: uuid(), featured: true, key: "java", name: 'Java', category: 'language', icon_name: 'devicon-java-plain colored', },
  { id: uuid(), featured: true, key: "python", name: 'Python', category: 'language', icon_name: 'devicon-python-plain colored', },
  { id: uuid(), featured: true, key: "cpp", name: 'C++', category: 'language', icon_name: 'devicon-cplusplus-plain colored', },

  // Tools
  { id: uuid(), featured: true, key: "git", name: 'Git', category: 'tools', icon_name: 'devicon-git-plain colored' },
	{ id: uuid(), featured: true, key: "github", name: 'GitHub', category: 'tools', icon_name: 'devicon-github-plain !text-white' },
  { id: uuid(), featured: true, key: "docker", name: 'Docker', category: 'tools', icon_name: 'devicon-docker-plain colored' },
];
