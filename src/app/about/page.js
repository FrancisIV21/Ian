'use client';

import { motion } from 'framer-motion';
import { Mail, Github } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import { personalInfo } from '@/lib/data';
import { stagger, fadeIn } from '@/lib/utils';

export default function About() {
  return (
    <div className="pt-20">
      {/* About Section */}
      <Section>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Title */}
          <motion.h1 
            className="text-4xl md:text-5xl font-viola text-black mb-8"
            variants={fadeIn}
          >
            About Me
          </motion.h1>
          
          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Bio + Buttons */}
            <motion.div variants={fadeIn}>
              {personalInfo.bio.map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-lg text-black font-suisse-mono leading-relaxed mb-6"
                >
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

            {/* About Me PNG */}
            <motion.div 
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex justify-center items-start -mt-10"
            >
              <Image
                src="/images/aboutme.png"
                alt="About Me"
                width={500}
                height={500}
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* Separator line */}
      <div className="border-t border-gray-300 my-16"></div>

      {/* Tech Stack Section */}
      <Section>
        <div className="text-center">
          {/* Title */}
          <motion.h2 
            className="text-4xl md:text-5xl font-viola text-black mb-12"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Tech Stack
          </motion.h2>

          {/* Layout: Left List - Image - Right List */}
          <div className="grid md:grid-cols-3 gap-6 items-start">
            
            {/* Left - Part Designer */}
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-right flex flex-col"
            >
              <h3 className="text-2xl font-viola text-black mb-4">Part Designer</h3>
              <ul className="list-none text-black font-suisse-mono space-y-2">
                <li>Figma</li>
                <li>Adobe XD</li>
                <li>WordPress</li>
                <li>Photoshop</li>
                <li>Adobe Illustrator</li>
              </ul>
            </motion.div>

            {/* Center - Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex justify-center items-center"
            >
              <Image
                src="/images/piechart.png"
                alt="Tech Stack"
                width={300}
                height={300}
                className="object-contain"
              />
            </motion.div>

           {/* Right - Part Developer */}
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-left flex flex-col"
            >
              <h3 className="text-2xl font-viola text-black mb-4">Part Developer</h3>
              <ul className="list-none text-black font-suisse-mono space-y-2">
                <li>React</li>
                <li>Vue</li>
                <li>Vanilla JS</li>
                <li>Next.js</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>PHP</li>
                <li>Python</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Separator line */}
      <div className="border-t border-gray-300 my-16"></div>

      {/* Education Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left - School Image (slides in on scroll) */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center"
          >
            <Image
              src="/images/school.png" // replace with your actual school image
              alt="Bohol Island State University"
              width={400}
              height={400}
              className="object-contain"
            />
          </motion.div>

          {/* Right - Title & Description (static, no animation) */}
          <div className="text-right">
            <h2 className="text-4xl md:text-5xl font-viola text-black mb-6">
              Education
            </h2>
           <p className="text-lg text-black font-suisse-mono leading-relaxed">
            I recently graduated from{" "}
            <span className="font-bold">Bohol Island State University</span>{" "}
            with a degree in{" "}
            <span className="font-bold">Bachelor of Science in Computer Engineering</span>.
            It was an incredible four-year journey filled with growth, challenges, and opportunities that 
            shaped my passion for technology and problem-solving.
          </p>
          </div>
        </div>
      </Section>
      
      {/* Separator line */}
<div className="border-t border-gray-300 my-16"></div>

{/* Work Experience Section */}
<Section>
  <div className="grid md:grid-cols-2 gap-16 items-center">
    
    {/* Left - Title & Description (static, no animation) */}
    <div className="text-left">
      <h2 className="text-4xl md:text-5xl font-viola text-black mb-6">
        Work Experience
      </h2>
      <p className="text-lg text-black font-suisse-mono leading-relaxed">
        I started my professional journey with{" "}
        <span className="font-bold">Zionlabs ITC</span> as an{" "}
        <span className="font-bold">Intern Web Developer</span> and in{" "}
        <span className="font-bold">Upwork</span> as a{" "}
        <span className="font-bold">Graphic Designer</span> and{" "}
        <span className="font-bold">Video Editor</span>.  
        These experiences helped me sharpen my skills, collaborate with diverse teams,  
        and deliver solutions that make real impact.
      </p>
    </div>

    {/* Right - Work Image (slides in on scroll) */}
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex justify-center"
    >
      <Image
        src="/images/work.png" // replace with your actual work experience image
        alt="Work Experience"
        width={400}
        height={400}
        className="object-contain"
      />
    </motion.div>
  </div>
</Section>



    </div>
  );
}
