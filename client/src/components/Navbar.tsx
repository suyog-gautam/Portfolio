import { useState, useEffect } from 'react';
import { Link } from 'wouter';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style on scroll
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'hero';

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.getAttribute('id') || 'hero';
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  return (
    <nav 
      className={`fixed w-full z-50 px-4 md:px-8 py-4 transition-all duration-300 backdrop-blur-md ${
        scrolled ? 'bg-midnight bg-opacity-80 shadow-md' : 'bg-opacity-90'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center">
        <button 
          onClick={toggleMenu} 
          className="md:hidden absolute left-4 text-textPrimary hover:text-neonBlue focus:outline-none"
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
        
        <div className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto mt-4 md:mt-0 transition-all duration-300 justify-center`}>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'education', label: 'Education' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                className={`text-textSecondary hover:text-neonBlue transition-colors duration-300 nav-link ${
                  activeSection === item.id ? 'nav-active' : ''
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
