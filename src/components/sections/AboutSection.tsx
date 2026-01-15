'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { personalInfo, stats } from '@/src/lib/portfolio-data';
import { SectionHeading } from '@/src/components/ui/SectionHeading';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
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
          >
            <SectionHeading
              backgroundText="About"
              title="About Me"
              align="left"   // or "center" or "right"
            />

            <h3 className="text-3xl font-bold text-white mb-6">
              {personalInfo.title}
            </h3>
            <p className="text-neutral-300 text-lg mb-6 leading-relaxed">
              {personalInfo.bio}
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-neutral-300">
                <Mail className="text-amber-500" size={20} />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <Phone className="text-amber-500" size={20} />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <MapPin className="text-amber-500" size={20} />
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-neutral-900 rounded-xl border border-neutral-700 hover:border-amber-500 transition-colors"
            >
              <motion.div
                className="text-4xl font-bold text-amber-500 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {stat.value}+
              </motion.div>
              <div className="text-neutral-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
