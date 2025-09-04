'use client'
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Card = ({ children, className = '', hover = true }) => {
  return (
    <motion.div 
      className={cn(
        'bg-white rounded-lg border border-black-10',
        hover ? 'hover:shadow-lg transition-all' : '',
        className
      )}
      whileHover={hover ? { y: -4 } : {}}
    >
      {children}
    </motion.div>
  );
};

export default Card;