'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/src/components/ui/SectionHeading';
import { ServicesGrid } from '@/src/components/ui/ServicesGrid';

export function ServicesSection() {
  return (
    <section id="services" className="py-15 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <SectionHeading
            backgroundText="Services"
            title="Services"
            align="center"
          />

          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to bring your digital vision to life
          </p>
        </motion.div>

        {/* Services */}
        <ServicesGrid />
      </div>
    </section>
  );
}
