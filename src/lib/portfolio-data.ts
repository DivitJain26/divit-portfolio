import { v4 as uuid } from "uuid";
import { Project, Skill } from "./supabase";

export const personalInfo = {
  name: 'Divit Jain',
  title: 'Full Stack Developer',
  subtitle: 'Building Digital Experiences',
  bio: 'Passionate developer with expertise in creating modern web applications. I specialize in React, Next.js, and Node.js, bringing ideas to life through clean code and intuitive design.',
  about: 'Passionate developer with expertise in creating modern web applications. I specialize in React, Next.js, and Node.js, bringing ideas to life through clean code and intuitive design.',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  availability: 'Available for freelance',
  avatar: '/divit-jain-image.png',
  heroImage: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

export const socialLinks = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  email: 'mailto:john.doe@example.com',
};

export const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and performant web applications using modern technologies.',
    icon: 'Code',
  },
  {
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user interfaces that enhance user experience.',
    icon: 'Palette',
  },
  {
    title: 'Mobile Development',
    description: 'Developing cross-platform mobile applications with React Native.',
    icon: 'Smartphone',
  },
  {
    title: 'API Development',
    description: 'Designing and building scalable RESTful and GraphQL APIs.',
    icon: 'Server',
  },
  {
    title: 'Database Design',
    description: 'Architecting efficient database schemas and optimizing queries.',
    icon: 'Database',
  },
  {
    title: 'DevOps',
    description: 'Setting up CI/CD pipelines and managing cloud infrastructure.',
    icon: 'Cloud',
  },
];

export const stats = [
  { label: 'Projects Completed', value: 150 },
  { label: 'Happy Clients', value: 50 },
  { label: 'Years Experience', value: 5 },
  { label: 'Awards Won', value: 12 },
];

export const projects: Project[] = [
  {
    id: uuid(),
    title: "VAK - Voice Abuse Kill Switch",
    subtitle: "AI-powered toxicity detection platform",
    description: "A social platform with AI moderation A social platform with AI moderationA social platform with AI moderationA social platform with AI moderationA social platform with AI moderation",
    image_url: "/vak.png",
    github_url: "https://github.com/DivitJain26/vak",
    live_url: "https://vak.vercel.app"
  },
];

export const skills: Skill[] = [
  // ===== Frontend =====
  {
    id: uuid(),
    name: 'React',
    category: 'frontend',
    icon_name: 'devicon-react-original colored',
  },
  {
    id: uuid(),
    name: 'Next.js',
    category: 'frontend',
    icon_name: 'devicon-nextjs-plain colored',
  },
  {
    id: uuid(),
    name: 'Tailwind CSS',
    category: 'frontend',
    icon_name: 'devicon-tailwindcss-plain colored',
  },
  {
    id: uuid(),
    name: 'HTML5',
    category: 'frontend',
    icon_name: 'devicon-html5-plain colored',
  },
  {
    id: uuid(),
    name: 'CSS3',
    category: 'frontend',
    icon_name: 'devicon-css3-plain colored',
  },

  // ===== Backend =====
  {
    id: uuid(),
    name: 'Node.js',
    category: 'backend',
    icon_name: 'devicon-nodejs-plain-wordmark colored',
  },
  {
    id: uuid(),
    name: 'Express.js',
    category: 'backend',
    icon_name: 'devicon-express-original colored',
  },
  {
    id: uuid(),
    name: 'REST APIs',
    category: 'backend',
    icon_name: 'devicon-fastapi-plain colored', // visual placeholder
  },

  // ===== Databases =====
  {
    id: uuid(),
    name: 'MongoDB',
    category: 'database',
    icon_name: 'devicon-mongodb-plain colored',
  },
  {
    id: uuid(),
    name: 'PostgreSQL',
    category: 'database',
    icon_name: 'devicon-postgresql-plain colored',
  },
  {
    id: uuid(),
    name: 'MySQL',
    category: 'database',
    icon_name: 'devicon-mysql-plain colored',
  },
  {
    id: uuid(),
    name: 'Supabase',
    category: 'database',
    icon_name: 'devicon-supabase-plain colored',
  },

  // ===== Languages =====
  {
    id: uuid(),
    name: 'TypeScript',
    category: 'language',
    icon_name: 'devicon-typescript-plain colored',
  },
  {
    id: uuid(),
    name: 'JavaScript',
    category: 'language',
    icon_name: 'devicon-javascript-plain colored',
  },
  {
    id: uuid(),
    name: 'Java',
    category: 'language',
    icon_name: 'devicon-java-plain colored',
  },
  {
    id: uuid(),
    name: 'C++',
    category: 'language',
    icon_name: 'devicon-cplusplus-plain colored',
  },
  {
    id: uuid(),
    name: 'Python',
    category: 'language',
    icon_name: 'devicon-python-plain colored',
  },

  // ===== Tools & DevOps =====
  {
    id: uuid(),
    name: 'Git',
    category: 'tools',
    icon_name: 'devicon-git-plain colored',
  },
  {
    id: uuid(),
    name: 'GitHub',
    category: 'tools',
    icon_name: 'devicon-github-original colored',
  },
  {
    id: uuid(),
    name: 'Docker',
    category: 'tools',
    icon_name: 'devicon-docker-plain colored',
  },
  {
    id: uuid(),
    name: 'Linux',
    category: 'tools',
    icon_name: 'devicon-linux-plain colored',
  },
];
