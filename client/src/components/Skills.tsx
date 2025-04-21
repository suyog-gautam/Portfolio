import { useEffect, useRef } from 'react';

const Skills = () => {
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
    <section id="skills" ref={sectionRef} className="px-4 md:px-8 py-20 section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 flex items-center">
          <span className="text-neonBlue font-mono mr-4">02.</span>
          <span>Technical Skills</span>
          <div className="ml-4 h-px bg-textSecondary bg-opacity-30 flex-grow"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Programming Section */}
          <div className="bg-darkBlue bg-opacity-30 p-6 rounded-lg border border-textSecondary border-opacity-10 card-3d">
            <div className="flex items-center mb-6">
              <i className="fas fa-code text-neonBlue text-2xl mr-4"></i>
              <h3 className="text-xl font-semibold">Programming</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="fas fa-check text-neonBlue mr-2"></i>
                <span>Python</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-neonBlue mr-2"></i>
                <span>JavaScript</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-neonBlue mr-2"></i>
                <span>PHP</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-neonBlue mr-2"></i>
                <span>HTML/CSS</span>
              </li>
            </ul>
          </div>
          
          {/* Libraries & Frameworks Section */}
          <div className="bg-darkBlue bg-opacity-30 p-6 rounded-lg border border-textSecondary border-opacity-10 card-3d">
            <div className="flex items-center mb-6">
              <i className="fas fa-layer-group text-neonBlue text-2xl mr-4"></i>
              <h3 className="text-xl font-semibold">Libraries & Frameworks</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="fas fa-check text-neonBlue mr-2"></i>
                <span>React & React Native</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-neonBlue mr-2"></i>
                <span>Node.js & Express</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-neonBlue mr-2"></i>
                <span>Laravel</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-neonBlue mr-2"></i>
                <span>WordPress & WooCommerce</span>
              </li>
            </ul>
          </div>
          
          {/* Databases & Tools Section */}
          <div className="bg-darkBlue bg-opacity-30 p-6 rounded-lg border border-textSecondary border-opacity-10 card-3d">
            <div className="flex items-center mb-6">
              <i className="fas fa-database text-neonBlue text-2xl mr-4"></i>
              <h3 className="text-xl font-semibold">Databases & Tools</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="fas fa-check text-neonBlue mr-2"></i>
                <span>MongoDB</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-neonBlue mr-2"></i>
                <span>MySQL</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-neonBlue mr-2"></i>
                <span>Firebase</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-neonBlue mr-2"></i>
                <span>Git & GitHub</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Soft Skills Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-darkBlue bg-opacity-20 p-4 rounded-lg border border-textSecondary border-opacity-10 flex items-center card-3d">
              <i className="fas fa-lightbulb text-neonBlue text-xl mr-3"></i>
              <span>Problem-solving</span>
            </div>
            <div className="bg-darkBlue bg-opacity-20 p-4 rounded-lg border border-textSecondary border-opacity-10 flex items-center card-3d">
              <i className="fas fa-sync-alt text-neonBlue text-xl mr-3"></i>
              <span>Flexibility</span>
            </div>
            <div className="bg-darkBlue bg-opacity-20 p-4 rounded-lg border border-textSecondary border-opacity-10 flex items-center card-3d">
              <i className="fas fa-bolt text-neonBlue text-xl mr-3"></i>
              <span>Quick Learner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
