'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/src/lib/types/portfolio';
import { SkillsGrid } from './SkillsGrid';

interface SkillsCategoryProps {
  category: string;
  skills: Skill[];
}

export function SkillsCategory({ category, skills }: SkillsCategoryProps) {
  return (
    <div className="mb-10">

      {/* Category Title */}
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-brand-primary mb-4 capitalize"
      >
        {category}
      </motion.h3>

      <SkillsGrid skills={skills} />
    </div>
  );
}
