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
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 flex items-center section-title">
          <span>About Me</span>
          <div className="ml-4 h-px bg-textSecondary bg-opacity-30 flex-grow"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6 bg-darkBlue bg-opacity-20 p-6 rounded-lg border border-textSecondary border-opacity-10">
            <h3 className="text-xl font-semibold mb-4 text-neonBlue">About Me</h3>
            
            <p className="text-textSecondary leading-relaxed">
              I am a Computer Systems Engineering student with a passion for creating efficient, user-friendly web and mobile applications. 
              My journey in tech started with a curiosity about how digital systems work and evolved into a commitment to building 
              solutions that make a difference.
            </p>
            
            <p className="text-textSecondary leading-relaxed">
              My focus areas include full-stack web development, mobile app development, and exploring the integration of AI in 
              everyday applications. I believe in clean code, thoughtful architecture, and continuous learning.
            </p>
            
            <p className="text-textSecondary leading-relaxed">
              Beyond coding, I enjoy exploring new technologies, contributing to open-source projects, and solving challenging problems 
              that push the boundaries of what's possible with software development.
            </p>
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
