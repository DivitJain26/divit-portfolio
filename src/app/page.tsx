import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { AboutSection } from "../components/sections/AboutSection";
import { ContactSection } from "../components/sections/ContactSection";
import { HeroSection } from "../components/sections/HeroSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { SkillsSection } from "../components/sections/SkillsSection";


const projects: Project[] = [
  {
    id: 1,
    title: "VAK - Voice Abuse Kill Switch",
    subtitle: "AI-powered toxicity detection platform",
    description: "A social platform with AI moderation A social platform with AI moderationA social platform with AI moderationA social platform with AI moderationA social platform with AI moderation",
    image_url: "/vak.png",
    github_url: "https://github.com/DivitJain26/vak",
    live_url: "https://vak.vercel.app"
  }
];

const skills: Skill[] = [
  {
    id: 1,
    name: 'React',
    category: 'frontend',
    icon_name: 'React',
    proficiency: 90,
  },
  {
    id: 2,
    name: 'Next.js',
    category: 'frontend',
    icon_name: 'Layout',
    proficiency: 85,
  },
  {
    id: 3,
    name: 'Node.js',
    category: 'backend',
    icon_name: 'Server',
    proficiency: 80,
  },
];

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection projects={projects} />
      <SkillsSection skills={skills} />
      <ServicesSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
