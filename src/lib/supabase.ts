import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image_url: string;
  github_url?: string;
  live_url?: string;
}

export interface Skill {
  id: string;
  name: string;
  icon_name: string;
  category: string;
}

export type SocialLink = {
  id: string;
  name: string;
  url: string;
  icon: string; // devicon or lucide key
};

export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('order_index', { ascending: true });

  if (error) throw error;
  return data || [];
}

export async function getSkills(): Promise<Skill[]> {
  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .order('order_index', { ascending: true });

  if (error) throw error;
  return data || [];
}
