'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import { projectsData } from '@/lib/data';
import { stagger, fadeIn } from '@/lib/utils';

export default function Projects() {
  const [projectFilter, setProjectFilter] = useState('all');

  const filteredProjects = projectFilter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === projectFilter);

  const filterButtons = [
    { key: 'all', label: 'All Projects' },
    { key: 'work', label: 'Work Projects' },
    { key: 'school', label: 'School Projects' },
    { key: 'personal', label: 'Personal Projects' }
  ];

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
            My Projects
          </motion.h1>
          
          <motion.p 
            className="text-xl text-black font-suisse-mono mb-12"
            variants={fadeIn}
          >
            A collection of work projects, personal experiments, and academic achievements
          </motion.p>

          {/* Filter Buttons */}
          <motion.div className="flex flex-wrap gap-4 mb-12" variants={fadeIn}>
            {filterButtons.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setProjectFilter(key)}
                className={`px-4 py-2 rounded-none transition-colors font-viola ${
                  projectFilter === key
                    ? 'bg-brand-primary text-white'
                    : 'bg-black-5 text-black hover:bg-black-10'
                }`}
              >
                {label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={fadeIn}>
                <div className="relative group">
                  {/* Card with shadow effect */}
                  <div className="relative">
                    {/* Shadow element */}
                    <div
                      className="
                        absolute inset-0
                        translate-x-[4px] translate-y-[4px]
                        bg-black border border-black
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-200
                      "
                    />
                    
                    {/* Main card */}
                    <motion.div
                      initial={{ x: 0, y: 0 }}
                      whileHover={{ x: -2, y: -2 }}
                      whileTap={{ x: -1, y: -1 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="relative z-10 border border-black aspect-square cursor-pointer p-4 flex flex-col items-center justify-center text-center"
                      style={{ backgroundColor: '#f0ede6' }}
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      {/* Centered content */}
                      <div>
                        <h3 className="text-lg font-suisse-bold text-black mb-3 line-clamp-2">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-2">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span 
                              key={tag}
                              className="px-2 py-1 bg-black-5 text-black font-suisse-mono text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Redirect button */}
                      <div className="mt-4">
                        <ArrowUpRight 
                          size={20} 
                          className="text-black group-hover:text-brand-primary transition-colors" 
                        />
                      </div>
                    </motion.div>
                  </div>

                     {/* Floating image preview on hover */}
                  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-2">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-[28rem] h-auto object-cover border-2 border-black shadow-xl"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
}
