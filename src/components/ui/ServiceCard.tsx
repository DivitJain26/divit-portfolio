'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-neutral-800 p-8 rounded-xl border border-neutral-700 hover:border-brand-primary transition-all duration-300 group"
    >
      <motion.div
        className="w-16 h-16 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="text-brand-primary" size={32} />
      </motion.div>

      <h3 className="text-xl font-bold text-white mb-4">
        {service.title}
      </h3>

      <p className="text-neutral-400 leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}
