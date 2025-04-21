import { useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { isDarkMode } = useTheme();

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
    <section id="contact" ref={sectionRef} className="px-4 md:px-8 py-20 section">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 flex items-center">
          <span className="text-neonBlue font-mono mr-4">05.</span>
          <span>Connect</span>
          <div className="ml-4 h-px bg-textSecondary bg-opacity-30 flex-grow"></div>
        </h2>
        
        <p className="text-textSecondary text-lg max-w-2xl mx-auto text-center mb-10">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'd love to hear from you!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-darkBlue bg-opacity-30 p-6 rounded-lg border border-textSecondary border-opacity-10 hover-shadow-glow flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-neonBlue bg-opacity-10 flex items-center justify-center mb-4">
              <i className="fas fa-envelope text-neonBlue text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-textPrimary mb-2">Email</h3>
            <a href="mailto:gautamsuyog58@gmail.com" className="text-textSecondary hover:text-neonBlue transition-colors">
              gautamsuyog58@gmail.com
            </a>
          </div>
          
          <div className="bg-darkBlue bg-opacity-30 p-6 rounded-lg border border-textSecondary border-opacity-10 hover-shadow-glow flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-neonBlue bg-opacity-10 flex items-center justify-center mb-4">
              <i className="fas fa-phone text-neonBlue text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-textPrimary mb-2">Phone</h3>
            <a href="tel:+9779863048953" className="text-textSecondary hover:text-neonBlue transition-colors">
              +977 9863048953
            </a>
          </div>
          
          <div className="bg-darkBlue bg-opacity-30 p-6 rounded-lg border border-textSecondary border-opacity-10 hover-shadow-glow flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-neonBlue bg-opacity-10 flex items-center justify-center mb-4">
              <i className="fab fa-github text-neonBlue text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-textPrimary mb-2">GitHub</h3>
            <a href="https://github.com/suyog-gautam" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-neonBlue transition-colors">
              github.com/suyog-gautam
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-block px-8 py-4 bg-neonBlue bg-opacity-10 text-neonBlue border border-neonBlue rounded-lg hover:bg-opacity-20 transition-all duration-300 connect-btn text-lg font-medium"
            onClick={(e) => {
              e.preventDefault();
              // In a real app, this would link to a downloadable resume file
              alert('Resume download would be available in production');
            }}
          >
            <i className="fas fa-download mr-2"></i> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
