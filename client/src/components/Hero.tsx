import { useEffect, useRef } from 'react';

const Hero = () => {
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
    <section 
      id="hero" 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-24 pb-16 section"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <p className="font-mono text-neonBlue opacity-80 fade-up">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-textPrimary fade-up delay-1">
            <span className="block">Suyog Gautam</span>
          </h1>
          <p className="text-lg md:text-xl text-textSecondary max-w-xl fade-up delay-2">
            A motivated and detail-oriented individual seeking opportunities in the field of Computer Systems Engineering. 
            Proficient in Python, JavaScript, React, Laravel, and MySQL. Skilled in web development with a passion for 
            AI integration and problem-solving.
          </p>
          <div className="pt-4 flex flex-wrap gap-4 fade-up delay-3">
            <a 
              href="#projects" 
              className="hero-btn px-6 py-3 bg-transparent border-2 border-neonBlue text-neonBlue rounded hover:bg-neonBlue hover:bg-opacity-10 transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  window.scrollTo({
                    top: projectsSection.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="hero-btn px-6 py-3 bg-neonBlue bg-opacity-10 text-neonBlue border-2 border-neonBlue rounded hover:bg-opacity-20 transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Connect
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center items-center fade-up">
          <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neonBlue animate-[glow_2s_ease-in-out_infinite_alternate]">
            {/* Profile image placeholder */}
            <div className="w-full h-full bg-darkBlue flex items-center justify-center">
              <i className="fas fa-user-circle text-8xl text-textSecondary opacity-30"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
