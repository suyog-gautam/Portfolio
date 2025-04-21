import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { isDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          entry.target.classList.add("visible");
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
      id="about"
      ref={sectionRef}
      className="px-4 md:px-8 py-20 section relative overflow-hidden"
    >
      {/* Three.js inspired background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-darkBlue opacity-20 pointer-events-none"></div>

      {/* Animated geometric shapes in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`shape-circle top-20 left-10 ${
            isVisible ? "animate-float" : ""
          }`}
        ></div>
        <div
          className={`shape-square top-40 right-20 ${
            isVisible ? "animate-float-delay" : ""
          }`}
        ></div>
        <div
          className={`shape-triangle bottom-20 left-1/4 ${
            isVisible ? "animate-float-reverse" : ""
          }`}
        ></div>
        <div
          className={`shape-cross top-1/3 right-1/3 ${
            isVisible ? "animate-spin-slow" : ""
          }`}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-16 flex items-center section-title">
          <span>About Me</span>
          <div className="ml-4 h-px bg-textSecondary bg-opacity-30 flex-grow"></div>
        </h2>

        <div className="about-split-container">
          {/* Left side: About Me */}
          <div
            className={`about-split-side about-left ${
              isVisible ? "slide-in-left" : ""
            }`}
          >
            <div className="about-content-wrapper">
              <div className="profile-image-container">
                <img
                  src="https://avatars.githubusercontent.com/u/96070397?v=4"
                  alt="Suyog Gautam"
                  className="profile-image"
                />
                <div className="image-glow"></div>
              </div>

              <div className="about-text-content">
                <h3 className="text-xl font-semibold mb-6 text-neonBlue">
                  About Me
                </h3>

                <p className="text-textSecondary leading-relaxed mb-4">
                  I am a Computer Systems Engineering student with a passion for
                  creating efficient, user-friendly web and mobile applications.
                  My journey in tech started with a curiosity about how digital
                  systems work and evolved into a commitment to building
                  solutions that make a difference.
                </p>

                <p className="text-textSecondary leading-relaxed mb-4">
                  My focus areas include full-stack web development, mobile app
                  development, and exploring the integration of AI in everyday
                  applications. I believe in clean code, thoughtful
                  architecture, and continuous learning.
                </p>

                <p className="text-textSecondary leading-relaxed">
                  Beyond coding, I enjoy exploring new technologies,
                  contributing to open-source projects, and solving challenging
                  problems that push the boundaries of what's possible with
                  software development.
                </p>
              </div>
            </div>
          </div>

          {/* Central divider with animated elements */}
          <div className="about-divider">
            <div className="divider-line"></div>
            <div
              className={`divider-dot dot-top ${
                isVisible ? "animate-pulse-slow" : ""
              }`}
            ></div>
            <div
              className={`divider-dot dot-middle ${
                isVisible ? "animate-pulse-slow-delay" : ""
              }`}
            ></div>
            <div
              className={`divider-dot dot-bottom ${
                isVisible ? "animate-pulse-slow" : ""
              }`}
            ></div>
          </div>

          {/* Right side: Technical Proficiencies */}
          <div
            className={`about-split-side about-right ${
              isVisible ? "slide-in-right" : ""
            }`}
          >
            <div className="about-content-wrapper">
              <h3 className="text-xl font-semibold mb-6 text-neonBlue">
                Technical Proficiencies
              </h3>

              <div className="space-y-6">
                <div className="proficiency-category">
                  <h4 className="text-textPrimary font-medium mb-3">
                    Programming Languages
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-midnight border border-neonBlue text-neonBlue rounded-md text-sm tech-card">
                      Python
                    </span>
                    <span className="px-4 py-2 bg-midnight border border-neonBlue text-neonBlue rounded-md text-sm tech-card">
                      JavaScript
                    </span>
                    <span className="px-4 py-2 bg-midnight border border-neonBlue text-neonBlue rounded-md text-sm tech-card">
                      PHP
                    </span>
                  </div>
                </div>

                <div className="proficiency-category">
                  <h4 className="text-textPrimary font-medium mb-3">
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-midnight border border-accentPurple text-accentPurple rounded-md text-sm tech-card">
                      React
                    </span>
                    <span className="px-4 py-2 bg-midnight border border-accentPurple text-accentPurple rounded-md text-sm tech-card">
                      React Native
                    </span>
                  </div>
                </div>

                <div className="proficiency-category">
                  <h4 className="text-textPrimary font-medium mb-3">
                    Backend & Databases
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-midnight border border-neonBlue text-neonBlue rounded-md text-sm tech-card">
                      Node
                    </span>
                    <span className="px-4 py-2 bg-midnight border border-neonBlue text-neonBlue rounded-md text-sm tech-card">
                      Express
                    </span>
                    <span className="px-4 py-2 bg-midnight border border-neonBlue text-neonBlue rounded-md text-sm tech-card">
                      Laravel
                    </span>
                    <span className="px-4 py-2 bg-midnight border border-neonBlue text-neonBlue rounded-md text-sm tech-card">
                      MongoDB
                    </span>
                    <span className="px-4 py-2 bg-midnight border border-neonBlue text-neonBlue rounded-md text-sm tech-card">
                      MySQL
                    </span>
                    <span className="px-4 py-2 bg-midnight border border-neonBlue text-neonBlue rounded-md text-sm tech-card">
                      Firebase
                    </span>
                  </div>
                </div>

                <div className="proficiency-category">
                  <h4 className="text-textPrimary font-medium mb-3">
                    Tools & Platforms
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-midnight border border-accentPurple text-accentPurple rounded-md text-sm tech-card">
                      Git
                    </span>
                    <span className="px-4 py-2 bg-midnight border border-accentPurple text-accentPurple rounded-md text-sm tech-card">
                      WordPress
                    </span>
                  </div>
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
