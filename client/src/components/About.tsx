import { useEffect, useRef } from 'react';

const About = () => {
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
    <section id="about" ref={sectionRef} className="px-4 md:px-8 py-20 section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 flex items-center">
          <span className="text-neonBlue font-mono mr-4">01.</span>
          <span>About Me</span>
          <div className="ml-4 h-px bg-textSecondary bg-opacity-30 flex-grow"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <p className="text-textSecondary leading-relaxed">
              I am a Computer Systems Engineering student with a passion for creating efficient, user-friendly web and mobile applications. 
              My journey in tech started with a curiosity about how digital systems work and evolved into a commitment to building 
              solutions that make a difference.
            </p>
            <p className="text-textSecondary leading-relaxed">
              My focus areas include full-stack web development, mobile app development, and exploring the integration of AI in 
              everyday applications. I believe in clean code, thoughtful architecture, and continuous learning.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-textPrimary">Connect With Me</h3>
              <div className="flex flex-wrap gap-6">
                <a href="mailto:gautamsuyog58@gmail.com" className="text-textSecondary hover:text-neonBlue transition-colors duration-300 flex items-center">
                  <i className="fas fa-envelope mr-2"></i> gautamsuyog58@gmail.com
                </a>
                <a href="tel:+9779863048953" className="text-textSecondary hover:text-neonBlue transition-colors duration-300 flex items-center">
                  <i className="fas fa-phone mr-2"></i> +977 9863048953
                </a>
                <a href="https://github.com/suyog-gautam" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-neonBlue transition-colors duration-300 flex items-center">
                  <i className="fab fa-github mr-2"></i> github.com/suyog-gautam
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-darkBlue bg-opacity-50 rounded-lg p-6 border border-textSecondary border-opacity-10 shadow-glow">
            <h3 className="text-xl font-semibold mb-6 text-neonBlue">Technical Proficiencies</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-textPrimary font-medium mb-2">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-midnight border border-neonBlue text-neonBlue rounded text-sm tech-card">Python</span>
                  <span className="px-3 py-1 bg-midnight border border-neonBlue text-neonBlue rounded text-sm tech-card">JavaScript</span>
                  <span className="px-3 py-1 bg-midnight border border-neonBlue text-neonBlue rounded text-sm tech-card">PHP</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-textPrimary font-medium mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-midnight border border-accentPurple text-accentPurple rounded text-sm tech-card">React</span>
                  <span className="px-3 py-1 bg-midnight border border-accentPurple text-accentPurple rounded text-sm tech-card">React Native</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-textPrimary font-medium mb-2">Backend & Databases</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-midnight border border-neonBlue text-neonBlue rounded text-sm tech-card">Node</span>
                  <span className="px-3 py-1 bg-midnight border border-neonBlue text-neonBlue rounded text-sm tech-card">Express</span>
                  <span className="px-3 py-1 bg-midnight border border-neonBlue text-neonBlue rounded text-sm tech-card">Laravel</span>
                  <span className="px-3 py-1 bg-midnight border border-neonBlue text-neonBlue rounded text-sm tech-card">MongoDB</span>
                  <span className="px-3 py-1 bg-midnight border border-neonBlue text-neonBlue rounded text-sm tech-card">MySQL</span>
                  <span className="px-3 py-1 bg-midnight border border-neonBlue text-neonBlue rounded text-sm tech-card">Firebase</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-textPrimary font-medium mb-2">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-midnight border border-accentPurple text-accentPurple rounded text-sm tech-card">Git</span>
                  <span className="px-3 py-1 bg-midnight border border-accentPurple text-accentPurple rounded text-sm tech-card">WordPress</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
