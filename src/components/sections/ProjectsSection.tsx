'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/src/lib/types/portfolio';
import { SectionHeading } from '@/src/components/ui/SectionHeading';
import { ProjectsGrid } from '@/src/components/ui/ProjectsGrid';
import { ProjectModal } from '@/src/components/ui/ProjectModal';

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visible, setVisible] = useState(6);

  return (
    <section id="projects" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionHeading
            backgroundText="Projects"
            title="My Projects"
            align="center"
          />

          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative endeavors
          </p>
        </motion.div>

        {/* Projects Grid */}
        <ProjectsGrid
          projects={projects.slice(0, visible)}
          onSelect={setSelectedProject}
        />

        {/* Load More (Desktop Only) */}
        {visible < projects.length && (
          <div className="hidden md:flex justify-center mt-12">
            <button
              onClick={() => setVisible(v => v + 6)}
              className="bg-brand-primary text-neutral-900 px-8 py-3 rounded-full font-semibold hover:bg-brand-accent transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
