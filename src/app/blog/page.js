'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowUpRight } from 'lucide-react';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import { blogData } from '@/lib/data';
import { stagger, fadeIn, formatDate } from '@/lib/utils';

export default function Blog() {
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
            Blog
          </motion.h1>
          
          <motion.p 
            className="text-xl text-black font-suisse-mono mb-12"
            variants={fadeIn}
          >
            Thoughts on web development, technology, and software engineering
          </motion.p>

          <motion.div className="space-y-8" variants={stagger}>
            {blogData.map((post) => (
              <motion.article key={post.id} variants={fadeIn}>
                <Card className="p-8 hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-2xl font-suisse-bold text-black hover:text-brand-primary transition-colors">
                      {post.title}
                    </h2>
                    <ArrowUpRight className="text-black-40 hover:text-brand-primary transition-colors" size={20} />
                  </div>
                  
                  <p className="text-black font-suisse-mono text-lg mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-black-70 font-suisse-mono">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(post.date)}
                      </div>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 font-suisse-mono rounded text-xs bg-brand-primary/10 text-brand-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.article>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            variants={fadeIn}
          >
            <p className="text-black-70 font-suisse-mono text-lg">More articles coming soon...</p>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
}