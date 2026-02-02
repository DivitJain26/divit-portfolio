'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { skills } from '@/src/lib/data/skills';
import { projects } from '@/src/lib/data/projects';
import { Project } from '@/src/lib/types/portfolio';
import { getTechStack } from '@/src/lib/utils/getTechStack';


interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const techStack = project.tech_stack
    ? getTechStack(skills, project.tech_stack)
    : [];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-neutral-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-neutral-700"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative h-96">
            <img
              src={project.image_url}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-neutral-900/80 p-2 rounded-full hover:bg-neutral-800"
            >
              <X className="text-white" size={24} />
            </button>
          </div>

          <div className="p-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {project.title}
            </h2>

            <p className="text-brand-primary text-lg mb-6">
              {project.subtitle}
            </p>

            <p className="text-neutral-300 text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            {techStack.length > 0 && (
              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.06 },
                  },
                }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {techStack.map(skill => (
                  <motion.div
                    key={skill.key}
                    variants={{
                      hidden: { opacity: 0, y: 8, scale: 0.95 },
                      show: { opacity: 1, y: 0, scale: 1 },
                    }}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className=" group flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-700 bg-neutral-900/60 backdrop-blur text-sm text-neutral-200 transition-all hover:border-brand-primary"
                  >
                    <i
                      className={`${skill.icon_name} text-xl transition group-hover:!text-brand-primary`}
                    />
                    <span className="tracking-wide">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}

            <div className="flex gap-4 ">
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" bg-brand-primary text-neutral-900 px-3 py-2 sm:px-6 sm:py-3 rounded-full font-medium sm:font-semibold text-m sm:text-base flex items-center justify-center gap-2 hover:bg-brand-accent transition active:scale-95 "
                >
                  <i className="devicon-github-original text-base sm:text-xl" />
                  View Code
                </a>
              )}

              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" border border-brand-primary sm:border-2 text-brand-primary px-3 py-2 sm:px-6 sm:py-3 rounded-full font-medium sm:font-semibold text-m sm:text-base flex items-center justify-center gap-2 hover:bg-brand-primary hover:text-neutral-900 transition active:scale-95 "
                >
                  <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                  Live Demo
                </a>
              )}
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
