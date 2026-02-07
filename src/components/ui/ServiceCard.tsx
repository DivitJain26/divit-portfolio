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
  compact?: boolean; // for mobile
}

export function ServiceCard({ service, index, compact }: ServiceCardProps) {
  const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: compact ? 1 : 1.03 }} // slight scale instead of spin
      className={`h-full bg-neutral-800 rounded-xl border border-neutral-700 hover:border-brand-primary transition-all duration-300 group ${compact ? 'p-4' : 'p-8'}`}
    >
      <motion.div
        className={`flex items-center justify-center mb-4 ${compact ? 'w-12 h-12' : 'w-16 h-16'} bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary/20 transition-colors`}
      >
        <Icon className="text-brand-primary" size={compact ? 24 : 32} />
      </motion.div>

      <h3 className={`font-bold text-white mb-2 ${compact ? 'text-lg' : 'text-xl'}`}>
        {service.title}
      </h3>

      <p className={`text-neutral-400 leading-relaxed ${compact ? 'text-sm' : 'text-base'}`}>
        {service.description}
      </p>
    </motion.div>
  );
}
