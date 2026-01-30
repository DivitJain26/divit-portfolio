'use client';

import { motion } from 'framer-motion';

interface StatCardProps {
  value: string | number;
  label: string;
  delay?: number;
}

export function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center p-4 md:p-6 bg-neutral-900 rounded-xl border border-neutral-700 hover:border-brand-primary transition-colors"
    >
      <motion.div
        className="text-3xl md:text-4xl font-bold text-brand-primary mb-1 md:mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {value}+
      </motion.div>

      <div className="text-neutral-400 text-sm">{label}</div>
    </motion.div>
  );
}
