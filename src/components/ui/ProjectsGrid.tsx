'use client';

import { Project } from '@/src/lib/supabase';
import { ProjectCard } from './ProjectCard';

interface ProjectsGridProps {
  projects: Project[];
  onSelect: (project: Project) => void;
}

export function ProjectsGrid({ projects, onSelect }: ProjectsGridProps) {
  return (
    <div
      className="
        flex gap-6 overflow-x-auto pb-4
        md:grid md:grid-cols-2 lg:grid-cols-3
        md:overflow-visible
        scrollbar-hide
      "
    >
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => onSelect(project)}
        />
      ))}
    </div>
  );
}
