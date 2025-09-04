  'use client'
  import { motion, AnimatePresence } from 'framer-motion';
  import Link from 'next/link';
  import Image from 'next/image';
  import { useState, useEffect } from 'react';
  import { ArrowUpRight, User } from 'lucide-react';
  import Button from '@/components/ui/Button';
  import Section from '@/components/ui/Section';
  import { personalInfo } from '@/lib/data';
  import { fadeIn, stagger } from '@/lib/utils';

  const Hero = () => {
    const [clipX, setClipX] = useState(50);
    const [isDeveloper, setIsDeveloper] = useState(true);

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      setClipX(x);
    };

    // Flip word in title every 4s
    useEffect(() => {
      const interval = setInterval(() => {
        setIsDeveloper((prev) => !prev);
      }, 4000);
      return () => clearInterval(interval);
    }, []);

    return (
      <Section className="min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Side - Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-left"
          >
            {/* Big Title with looping swap */}
            <motion.h1 
              className="text-5xl md:text-7xl font-viola text-black mb-6 flex gap-3 flex-wrap"
              variants={fadeIn}
            >
              Web{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={isDeveloper ? "dev" : "des"}
                  className="inline-block text-brand-black"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  {isDeveloper ? "Developer" : "Designer"}
                </motion.span>
              </AnimatePresence>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-black font-suisse-mono mb-12 max-w-xl"
              variants={fadeIn}
            >
              {personalInfo.description}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeIn}
            >
              <Link href="/projects">
                <Button>
                  View My Work
                  <ArrowUpRight size={16} />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="secondary">
                  About Me
                  <User size={16} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Cursor Split Image */}
          <motion.div 
            className="relative w-full max-w-md mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            onMouseMove={handleMouseMove}
          >
            {/* Base image (Designer / Animated) */}
            <Image
              src="/images/animated.png"
              alt="Portrait Designer"
              width={500}
              height={500}
              className="rounded-2xl"
            />

            {/* Reveal image (Developer / NotAnimated) */}
            <Image
              src="/images/notanimated.png"
              alt="Portrait Developer"
              width={500}
              height={500}
              className="rounded-2xl absolute inset-0 transition-all duration-200 ease-out"
              style={{
                clipPath: `inset(0 0 0 ${clipX}%)`,
              }}
            />

            {/* Floating corner labels */}
            <motion.span
              className="absolute left-6 top-6 font-suisse-mono text-xl tracking-wider text-black"
              animate={{ 
                opacity: clipX / 100,
                y: [0, -5, 0], // float up and down
              }}
              transition={{ 
                opacity: { duration: 0.3 },
                y: { repeat: Infinity, duration: 3, ease: 'easeInOut' }
              }}
            >
              Designer
            </motion.span>

            <motion.span
              className="absolute right-6 top-6 font-suisse-mono text-xl tracking-wider text-black"
              animate={{ 
                opacity: 1 - clipX / 100,
                y: [0, -5, 0], // float up and down
              }}
              transition={{ 
                opacity: { duration: 0.3 },
                y: { repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 1 }
              }}
            >
              Developer
            </motion.span>
          </motion.div>
        </div>
      </Section>
    );
  };

  export default Hero;
