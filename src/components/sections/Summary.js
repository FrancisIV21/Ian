'use client';

import Image from 'next/image';

export default function Summary() {
  return (
    <div className="w-full h-full flex items-center justify-between px-12 md:px-24">
      {/* Text Section */}
      <div className="max-w-xl">
        <h2 className="text-5xl font-bold mb-6">Over the years,</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          I've built products for companies and businesses around the globe
          ranging from marketing websites to complex solutions and enterprise
          apps with a strong focus on fast, elegant, and accessible user
          experiences. Each project has shaped the way I approach design and
          development today.
        </p>
      </div>

      {/* Image Section */}
      <div className="hidden md:block">
        <Image
          src="/summary-image.png" // replace with your own edited image
          alt="Work Summary"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
    </div>
  );
}
