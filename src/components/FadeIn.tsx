
import { useInView } from 'react-intersection-observer';
import type { ReactNode } from 'react';


interface FadeInProps {
  children: ReactNode;
  className?: string;
}

const FadeIn = ({ children, className }: FadeInProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,    
  });

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default FadeIn;