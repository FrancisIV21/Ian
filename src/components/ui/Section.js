import { cn } from '@/lib/utils';

const Section = ({ children, className = '' }) => {
  return (
    <section className={cn('py-20 px-6', className)}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;