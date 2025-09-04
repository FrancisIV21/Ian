'use client'
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import { personalInfo } from '@/lib/data';
import { stagger, fadeIn } from '@/lib/utils';

const Footer = () => (
  <footer className="bg-white-50 border-t border-black-10">
    <Section>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={stagger}
        className="text-center"
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-viola text-black mb-6"
          variants={fadeIn}
        >
          Let's Work Together
        </motion.h2>
        
        <motion.p 
          className="text-xl text-black font-suisse-mono mb-8 max-w-2xl mx-auto"
          variants={fadeIn}
        >
          Have a project in mind or just want to chat about tech? 
          I'm always interested in new opportunities and collaborations.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={fadeIn}
        >
          <Button>
            <Mail size={16} />
            {personalInfo.email}
          </Button>
          <Button variant="secondary">
            <Linkedin size={16} />
            LinkedIn
          </Button>
          <Button variant="secondary">
            <Github size={16} />
            GitHub
          </Button>
        </motion.div>

        <motion.div 
          className="pt-8 border-t border-black-10 text-black-70 font-suisse-mono"
          variants={fadeIn}
        >
          <p>&copy; 2025 {personalInfo.name}. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </Section>
  </footer>
);

export default Footer;