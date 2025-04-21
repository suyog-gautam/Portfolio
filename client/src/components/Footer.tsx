const Footer = () => {
  return (
    <footer className="px-4 md:px-8 py-8 border-t border-textSecondary border-opacity-10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-textSecondary">
          Designed & Built by Suyog Gautam
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="mailto:gautamsuyog58@gmail.com" className="text-textSecondary hover:text-neonBlue transition-colors">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="tel:+9779863048953" className="text-textSecondary hover:text-neonBlue transition-colors">
            <i className="fas fa-phone"></i>
          </a>
          <a href="https://github.com/suyog-gautam" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-neonBlue transition-colors">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
