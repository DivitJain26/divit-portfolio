'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

type Props = {
  backgroundText: string;
  title: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
};

export function SectionHeading({
  backgroundText,
  title,
  align = 'left',
  className = '',
}: Props) {
  const alignment = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const bgAlignment = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={clsx('relative mb-2', className)}
    >
      {/* Background Text */}
      <div
        className={clsx(
          'absolute inset-0 flex items-end select-none pointer-events-none',
          bgAlignment[align]
        )}
      >
        <h2 className="text-[5rem] md:text-[8rem] font-extrabold text-neutral-700/20 leading-none">
          {backgroundText}
        </h2>
      </div>

      {/* Foreground Text */}
      <div className={clsx('relative z-10 pb-10 md:pb-18', alignment[align])}>
        <h3 className="text-[2.8rem] md:text-6xl font-bold text-white leading-none">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}
