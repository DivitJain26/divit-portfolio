'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { personalInfo } from '@/src/lib/data/personal';
import { socialLinks } from '@/src/lib/data/socials';
import { SectionHeading } from '../ui/SectionHeading';
import { SocialIcon } from '../ui/SocialIcon';
import { Input } from '../ui/Input';
import axios from 'axios';
import { useState, useRef } from 'react';
import { Textarea } from '../ui/Textarea';


export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement | null>(null);
  const submittingRef = useRef(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  // 🔒 hard guard against double submit
  if (submittingRef.current) return;
  submittingRef.current = true;

  setLoading(true);
  setStatus('idle');

  const formData = new FormData(formRef.current!);

  const payload = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  try {
    const res = await axios.post('/api/contact', payload, {
      headers: { 'Content-Type': 'application/json' },
      validateStatus: () => true,
    });

    if (res.status === 200 && res.data?.success) {
      setStatus('success');
      formRef.current?.reset(); 
    } else {
      setStatus('error');
    }
  } catch (err) {
    console.error(err);
    setStatus('error');
  } finally {
    submittingRef.current = false;
    setLoading(false);
  }
}


  return (
    <section id="contact" className="py-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionHeading
            backgroundText="Contact"
            title="Get In Touch"
            align="center"   // or "center" or "right"
          />
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-brand-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-neutral-400">{personalInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-brand-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-neutral-400">{personalInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-brand-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-neutral-400">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <SocialIcon
                  key={social.id}
                  name={social.name}
                  url={social.url}
                  icon={social.icon}
                />
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            ref={formRef}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-neutral-900 p-8 rounded-2xl border border-neutral-700"
          >
            <div className="space-y-6">
              <Input label="Name" name="name" placeholder="Your name" />
              <Input label="Email" name="email" type="email" placeholder="your@email.com" />
              <Textarea label="Message" name="message" placeholder="Your message..." />

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-primary text-neutral-900 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send size={20} />
              </motion.button>
              {status === 'success' && (
                <p className="text-green-400 text-sm">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm">Something went wrong.</p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
