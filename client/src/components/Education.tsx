import { useEffect, useRef } from 'react';

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="education" ref={sectionRef} className="px-4 md:px-8 py-20 section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 flex items-center section-title">
          <span>Education</span>
          <div className="ml-4 h-px bg-textSecondary bg-opacity-30 flex-grow"></div>
        </h2>
        
        <div className="space-y-12">
          {/* BSc Computer Systems Engineering */}
          <div className="relative pl-8 md:pl-0">
            <div className="hidden md:block absolute top-0 bottom-0 left-0 w-0.5 bg-neonBlue"></div>
            <div className="hidden md:flex absolute left-0 top-0 -translate-x-1/2 h-6 w-6 rounded-full border-2 border-neonBlue bg-midnight items-center justify-center">
              <div className="h-2 w-2 bg-neonBlue rounded-full"></div>
            </div>
            
            <div className="md:ml-12">
              <div className="about-content-wrapper education-card hover-shadow-glow transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-semibold text-textPrimary">BSc (Hons) Computer Systems Engineering</h3>
                  <span className="font-mono text-neonBlue text-sm mt-2 md:mt-0">2022–2025 (Expected)</span>
                </div>
                <p className="text-textSecondary mb-4">ISMT</p>
                <p className="text-textSecondary text-sm">
                  Studying modern computer systems engineering with focus on software development, 
                  systems architecture, and practical project implementation.
                </p>
              </div>
            </div>
          </div>
          
          {/* +2 HSEB Certificate */}
          <div className="relative pl-8 md:pl-0">
            <div className="hidden md:block absolute top-0 bottom-0 left-0 w-0.5 bg-neonBlue"></div>
            <div className="hidden md:flex absolute left-0 top-0 -translate-x-1/2 h-6 w-6 rounded-full border-2 border-neonBlue bg-midnight items-center justify-center">
              <div className="h-2 w-2 bg-neonBlue rounded-full"></div>
            </div>
            
            <div className="md:ml-12">
              <div className="about-content-wrapper education-card hover-shadow-glow transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-semibold text-textPrimary">+2 HSEB Certificate in Science</h3>
                  <span className="font-mono text-neonBlue text-sm mt-2 md:mt-0">2020–2022</span>
                </div>
                <p className="text-textSecondary mb-4">Ankuram Academy</p>
                <p className="text-textSecondary text-sm">
                  Completed higher secondary education with a focus on science subjects,
                  building a strong foundation in mathematics and physics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
