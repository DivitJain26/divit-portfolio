'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { stats } from '@/src/lib/data/stats';
import { personalInfo } from '@/src/lib/data/personal';
import { SectionHeading } from '@/src/components/ui/SectionHeading';
import { StatCard } from '@/src/components/ui/StatCard';

export function AboutSection() {
  return (
    <section id="about" className="py-15 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="grid md:grid-cols-2 gap-12 items-stretch mb-1 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full h-[480px] rounded-2xl overflow-hidden">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-[center_10%]"
              />
              <div className="absolute inset-0 from-neutral-900/60 to-transparent"></div>
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-500 rounded-full opacity-20 blur-3xl -z-10"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between h-full"
          >
            <SectionHeading
              backgroundText="About"
              title="About Me"
              align="left"   // or "center" or "right"
            />

            <h3 className="text-3xl font-bold text-white mb-6">
              {personalInfo.title}
            </h3>
            <p className="text-neutral-300 text-[0.9rem] md:text-lg mb-6 leading-relaxed">
              {personalInfo.about}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-neutral-300">
                <Mail className="text-brand-primary" size={20} />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <Phone className="text-brand-primary" size={20} />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <MapPin className="text-brand-primary" size={20} />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 px-4 md:px-2"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
