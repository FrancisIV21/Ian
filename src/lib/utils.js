// Animation variants for Framer Motion
export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

// Utility functions
export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Color utilities
export const colors = {
  primary: '#f53003',
  secondary: '#f0ede6',
  black: '#000000',
  white: '#ffffff'
};