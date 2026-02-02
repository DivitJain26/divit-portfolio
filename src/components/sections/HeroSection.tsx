'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { personalInfo } from '@/src/lib/data/personal';

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-[90vh] md:min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"
    >
      <div className="absolute inset-0 bg-black bg-cover bg-center"></div>

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Mobile background image */}
      <motion.div
        className="absolute inset-0 md:hidden z-0 flex items-end justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1 }}
      >
        <img
          src={personalInfo.avatar}
          alt={personalInfo.name}
          className="w-full scale-120 mr-15 object-contain object-bottom translate-y-12"
        />

        {/* Mobile gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </motion.div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-25 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="text-brand-primary font-medium text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I&apos;m
            </motion.span>
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mt-4 mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {personalInfo.name}
            </motion.h1>
            <motion.h2
              className="text-xl md:text-3xl text-neutral-300 mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {personalInfo.title}
            </motion.h2>
            <motion.p
              className="text-neutral-400 text-[0.9rem] md:text-lg mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {personalInfo.bio}
            </motion.p>
            <motion.div
              className="flex flex-wrap md:flex-nowrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="bg-brand-primary text-neutral-900 px-4 py-2 md:px-8 md:py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-brand-accent transition-colors text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowRight size={16} className="md:ml-1" />
              </motion.a>
              <motion.a
                href="/Divit_Jain_Full_Stack_Developer_Resume.pdf"
                className="border-2 border-brand-primary text-brand-primary px-4 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-brand-primary hover:text-neutral-900 transition-colors text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full h-[550px] rounded-2xl" >
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="object-contain scale-125"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
