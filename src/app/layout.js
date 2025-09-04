import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { personalInfo } from '@/lib/data';

export const metadata = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: personalInfo.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-brand-secondary min-h-screen">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}