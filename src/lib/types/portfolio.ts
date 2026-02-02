export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image_url: string;
  github_url?: string;
  live_url?: string;
  tech_stack?: string[];
}

export type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'language'
  | 'tools';

export interface Skill {
  id: string;
  key: string;
  featured?: boolean;
  name: string;
  category: SkillCategory;
  icon_name: string;
}
