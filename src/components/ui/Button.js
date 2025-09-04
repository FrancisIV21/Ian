'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles =
    'px-6 py-3 rounded-none font-medium transition-colors inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2';

  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-red-700',
    secondary:
      'border border-black bg-white text-black hover:border-brand-primary hover:text-brand-primary',
    ghost: 'text-black hover:text-brand-primary hover:bg-black-5',
  };

  return (
    <span className="relative inline-block group">
      {/* Shadow element (hidden until hover) */}
      <span
        aria-hidden
        className="
          absolute inset-0 rounded-none
          translate-x-[4px] translate-y-[4px]
          bg-black
          opacity-0 group-hover:opacity-100
          transition-opacity duration-200
        "
      />

        <motion.button
          initial={{ x: 0, y: 0 }}
          whileHover={{ x: -2, y: -2 }}   // even smaller subtle lift
          whileTap={{ x: -1, y: -1 }}     // gentle press effect
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className={cn(baseStyles, variants[variant], 'relative z-10', className)}
          {...props}
        >
          {children}
        </motion.button>
    </span>
  );
};

export default Button;
