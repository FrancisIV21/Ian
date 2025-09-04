'use client';
import { usePathname } from 'next/navigation';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { personalInfo } from '@/lib/data';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <html lang="en">
      <body className="bg-brand-secondary min-h-screen">
        <Navigation />
        <main>{children}</main>
        {/* Only show footer on non-home pages */}
        {!isHomePage && <Footer />}
      </body>
    </html>
  );
}