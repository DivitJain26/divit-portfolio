'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/src/lib/supabase';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group min-w-[280px] md:min-w-0 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl bg-neutral-800 border border-neutral-700 group-hover:border-brand-primary transition-all duration-300">
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-60"></div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-neutral-400 text-sm mb-4">
            {project.subtitle}
          </p>

          <div className="flex gap-3">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-brand-primary"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={20} />
              </a>
            )}

            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-brand-primary"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
