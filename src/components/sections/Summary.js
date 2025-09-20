'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Summary() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 max-w-7xl w-full">
        {/* Text Section */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Recently,</h2>
          <p className="text-base md:text-lg leading-relaxed text-black-700 font-suisse-mono">
            I've built Websites for local resorts and businesses ranging from 
            marketing websites to complex solutions and enterprise
            apps with a strong focus on fast, elegant, and accessible user
            experiences. Each project has shaped the way I approach design and
            development today.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-md md:max-w-lg">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image
              src="/images/summary.png"
              alt="Work Summary"
              width={600}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}