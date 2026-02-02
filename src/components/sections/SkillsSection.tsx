'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/src/lib/types/portfolio';
import { SectionHeading } from '@/src/components/ui/SectionHeading';
import { SkillsCategory } from '@/src/components/ui/SkillsCategory';

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const featuredSkills = skills.filter(skill => skill.featured);
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-20 bg-neutral-800">
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
            backgroundText="Skills"
            title="My Skills"
            align="center"
          />

          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build scalable products
          </p>
        </motion.div>

        {/* Categories */}
        {categories.map(category => (
          <SkillsCategory
            key={category}
            category={category}
            skills={featuredSkills.filter(skill => skill.category === category)}
          />
        ))}

      </div>
    </section>
  );
}
