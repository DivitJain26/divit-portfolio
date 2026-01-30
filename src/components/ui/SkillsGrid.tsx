'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/src/lib/supabase';
import { SkillCard } from '@/src/components/ui/SkillCard';

interface SkillsGridProps {
  skills: Skill[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <div className="relative">
      <div
        className="
          flex gap-2 overflow-x-auto pb-3
          md:grid md:grid-cols-4 lg:grid-cols-7 md:gap-0 md:overflow-visible
          scrollbar-hide
        "
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
            }}
          >
            <SkillCard
              name={skill.name}
              icon={skill.icon_name}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
