'use client';

import { motion } from 'framer-motion';
import { User, Code, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { personalInfo } from '@/lib/data';

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { key: 'about', label: 'About', icon: User, href: '/about' },
    { key: 'projects', label: 'Projects', icon: Code, href: '/projects' },
    { key: 'blog', label: 'Blog', icon: BookOpen, href: '/blog' }
  ];

  return (
    <nav className="fixed top-0 w-full backdrop-blur-sm border-b border-black-10 z-50 bg-white-95">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <motion.div 
            className="font-Ian text-xl text-black cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            {personalInfo.name}
          </motion.div>
        </Link>
        
        <div className="flex space-x-8">
          {navItems.map(({ key, label, icon: Icon, href }) => {
            const isActive = pathname === href;
            
            return (
              <Link key={key} href={href}>
                <motion.div
                  className={`flex items-center gap-2 transition-colors font-suisse-mono ${
                    isActive ? 'font-medium text-brand-primary' : 'text-black hover:text-brand-primary'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  <Icon size={16} />
                  {label}
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;