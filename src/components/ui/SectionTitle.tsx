'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  subtitle?: string
  title: string
  description?: string
  bigText?: string
}

export default function SectionTitle({ subtitle, title, description, bigText }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      {bigText && (
        <div className="text-7xl md:text-9xl font-bold text-gray-100 opacity-50 mb-4">
          {bigText}
        </div>
      )}
      {subtitle && (
        <span className="text-primary font-medium mb-2 block">{subtitle}</span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {description && (
        <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
      )}
    </motion.div>
  )
}