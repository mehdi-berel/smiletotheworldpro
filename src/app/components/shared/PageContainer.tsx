'use client';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <main className={`flex-grow mt-20 pb-32 container mx-auto px-4 py-8 animate-fadeIn ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </main>
  );
}
