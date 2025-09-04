'use client';

import { motion } from 'framer-motion';
import { Mail, Github } from 'lucide-react';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import { personalInfo, skillsData } from '@/lib/data';
import { stagger, fadeIn } from '@/lib/utils';

export default function About() {
  return (
    <div className="pt-20">
      <Section>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-viola text-black mb-8"
            variants={fadeIn}
          >
            About Me
          </motion.h1>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div variants={fadeIn}>
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index} className="text-lg text-black font-suisse-mono leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
              
              <div className="flex gap-4 mt-8">
                <Button>
                  <Mail size={16} />
                  Get in Touch
                </Button>
                <Button variant="secondary">
                  <Github size={16} />
                  GitHub
                </Button>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="space-y-8">
              <div>
                <h3 className="text-2xl font-viola text-black mb-6">Technical Skills</h3>
                <div className="space-y-4">
                  {skillsData.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-black font-suisse-mono font-medium">{skill.name}</span>
                        <span className="text-black-70 font-suisse-mono text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-black-10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-brand-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-viola text-black mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-brand-primary pl-4">
                    <h4 className="font-suisse-bold text-black">Bachelor of Computer Science</h4>
                    <p className="text-black font-suisse-mono">University of Technology • 2018-2022</p>
                    <p className="text-sm text-black-70 font-suisse-mono mt-1">Magna Cum Laude • GPA: 3.8/4.0</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}