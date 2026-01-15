'use client';

import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  icon: string; // devicon class
}

export function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.05 }}
      className="min-w-[130px] md:min-w-0 bg-neutral-900 border border-neutral-700 
                 hover:border-brand-primary rounded-xl p-4 flex flex-col items-center 
                 justify-center transition-all group"
    >
      <div className="text-4xl mb-3 group-hover:text-brand-primary transition">
        <i className={`${icon} colored group-hover:!text-brand-primary`} />
      </div>

      <p className="text-sm font-medium text-neutral-200 text-center">
        {name}
      </p>
    </motion.div>
  );
}
