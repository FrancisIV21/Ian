'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Card from '@/components/ui/Card';
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
                className={`px-4 py-2 rounded-full transition-colors font-suisse-mono ${
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
                <Card className="overflow-hidden">
                  <div className="relative group">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black-60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <a 
                        href={project.liveUrl}
                        className="p-2 bg-white-20 backdrop-blur-sm rounded-full text-white hover:bg-white-30 transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="p-2 bg-white-20 backdrop-blur-sm rounded-full text-white hover:bg-white-30 transition-colors"
                        aria-label="View source code"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-brand-primary text-white px-2 py-1 rounded text-xs font-suisse-mono font-medium">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-suisse-bold text-black mb-2">{project.title}</h3>
                    <p className="text-black font-suisse-mono mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-black-5 text-black font-suisse-mono rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
}