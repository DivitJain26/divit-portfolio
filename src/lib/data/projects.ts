import { v4 as uuid } from 'uuid';
import { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: uuid(),
    title: 'VAK - Voice Abuse Kill Switch',
    subtitle: 'AI-powered Social Media Moderation Platform',
    description: 'An AI-powered social media moderation platform that detects toxic and abusive content in real time using machine learning. Features automated content flagging, moderation workflows, and a scalable full-stack architecture for safer online interactions.',
    image_url: 'https://raw.githubusercontent.com/DivitJain26/vak/main/demo-picture.png',
    github_url: 'https://github.com/DivitJain26/vak',
    live_url: 'https://vak-tau.vercel.app/',
    tech_stack: ['reactjs', 'nextjs', 'node', 'mongodb', 'typescript', 'tailwindcss', 'python', 'flask'],
  },
  {
    id: uuid(),
    title: 'Aluminate',
    subtitle: 'Alumni–Student Engagement Platform',
    description: 'A full-stack MERN application that connects alumni and students through secure networking and engagement features. Implements JWT-based authentication with cookies, optimized MongoDB schemas, and a responsive UI for seamless community interaction.',
    image_url: 'https://raw.githubusercontent.com/DivitJain26/Aluminate/main/client/public/demo-picture.png',
    github_url: 'https://github.com/DivitJain26/Aluminate',
    live_url: 'https://aluminate-syvf.onrender.com/',
    tech_stack: ['reactjs', 'express', 'node', 'mongodb', 'tailwindcss'],
  },
  {
    id: uuid(),
    title: 'SyncRoll',
    subtitle: 'Interactive dice game where players test their timing and luck',
    description: 'A fast-paced dice synchronization game where players roll multiple dice and strategically freeze them to match the same face value. Built with React using clean state management, real-time win/loss detection, and a responsive UI.',
    image_url: 'https://raw.githubusercontent.com/DivitJain26/SyncRoll/main/Public/demo-picture.png',
    github_url: 'https://github.com/DivitJain26/SyncRoll',
    live_url: 'https://syncroll2.onrender.com/',
    tech_stack: ['reactjs', 'javascript'],
  },
];
