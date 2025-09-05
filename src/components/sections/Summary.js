'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Summary() {
  return (
    <section className="w-full min-h-screen flex items-center justify-between px-12 md:px-24">
      {/* Text Section */}
      <div className="max-w-xl">
        <h2 className="text-5xl font-bold mb-6">Recently,</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          I've built Websites for local resorts and businesses ranging from 
          marketing websites to complex solutions and enterprise
          apps with a strong focus on fast, elegant, and accessible user
          experiences. Each project has shaped the way I approach design and
          development today.
        </p>
      </div>

      {/* Image Section */}
      <div className="hidden md:block">
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
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
