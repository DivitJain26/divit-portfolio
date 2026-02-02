'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from "../../lib/data/personal";

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const sections = navItems.map(item =>
      document.querySelector(item.href)
    );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.1, 0.6], // Lower threshold for mobile
        rootMargin: '-80px 0px -30% 0px', // Adjust for navbar height
      }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="#home"
            className="text-xl md:text-2xl font-bold text-white pl-0 md:ml-18"
            whileHover={{ scale: 1.05 }}
          >
            {personalInfo.name}
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');

              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-300 ${isActive
                    ? 'text-brand-primary font-semibold'
                    : 'text-neutral-300 hover:text-brand-primary'
                    }`}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-900"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`block transition-colors ${isActive
                      ? 'text-brand-primary font-semibold'
                      : 'text-neutral-300 hover:text-brand-primary'
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
