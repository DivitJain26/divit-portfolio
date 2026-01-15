'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { Project } from '@/src/lib/supabase';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

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

            <div className="flex gap-4">
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  className="bg-brand-primary text-neutral-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-brand-accent"
                >
                  <Github size={20} />
                  View Code
                </a>
              )}

              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  className="border-2 border-brand-primary text-brand-primary px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-brand-primary hover:text-neutral-900"
                >
                  <ExternalLink size={20} />
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
