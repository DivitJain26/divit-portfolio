'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/src/lib/supabase';
import * as LucideIcons from 'lucide-react';

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section id="skills" className="py-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">Skills</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {categories.map((category, catIndex) => (
          <div key={category} className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-amber-500 mb-8 capitalize"
            >
              {category}
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => {
                  const Icon = (LucideIcons as any)[skill.icon_name] || LucideIcons.Box;

                  return (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: catIndex * 0.1 + index * 0.05,
                      }}
                      whileHover={{ y: -10, scale: 1.05 }}
                      className="bg-neutral-900 p-6 rounded-xl border border-neutral-700 hover:border-amber-500 transition-all duration-300 group cursor-pointer"
                    >
                      <motion.div
                        className="flex flex-col items-center"
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      >
                        <div className="w-16 h-16 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                          <Icon className="text-amber-500" size={32} />
                        </div>
                        <span className="text-white font-medium text-center text-sm">
                          {skill.name}
                        </span>
                      </motion.div>
                      <motion.div
                        className="mt-4 h-2 bg-neutral-700 rounded-full overflow-hidden"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        <motion.div
                          className="h-full bg-gradient-to-r from-amber-500 to-amber-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
