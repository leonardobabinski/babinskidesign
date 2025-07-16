import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const socialLinks = [
    { href: 'https://www.behance.net/leonardbabinsk', label: 'Behance', svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 9.24h-6.16c.28-1.14.99-1.71 2.13-1.71 1.06 0 1.75.54 2.03 1.46h1.93c-.38-2.07-1.93-3.17-3.96-3.17-2.38 0-4.01 1.56-4.01 4.04 0 2.49 1.56 4.09 4.03 4.09 2.09 0 3.59-1.45 3.59-3.71v-.03zM17.9 11.4c-.23.89-.85 1.44-1.8 1.44-1.09 0-1.81-.64-2.01-1.44h3.81zM10.37 10.37c0-1.53-1.15-2.37-2.8-2.37H2v8h5.75c1.84 0 3.38-1.05 3.38-2.91 0-1.15-.57-2-1.76-2.46 1.02-.44 1.42-1.15 1.42-2.26zM5.33 9.05h1.64c.69 0 1.19.33 1.19 1.01s-.5 1.02-1.19 1.02H5.33V9.05zm1.72 4.83H5.33v-2.04h1.72c.85 0 1.33.36 1.33 1.01s-.49 1.03-1.33 1.03zM13.65 7h4.07v1.26h-4.07z"/></svg>
    )},
    { href: 'https://vimeo.com/lbabinski', label: 'Vimeo', svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 6.63c-.09 2.01-1.49 4.76-4.19 8.27-2.8 3.68-5.15 5.52-7.03 5.52-1.19 0-2.2-1.1-3.03-3.31-.55-2.01-1.1-4.03-1.65-6.04-.61-2.2-1.26-3.31-1.96-3.31-.15 0-.66.31-1.52.92L2 7.14c.98-.87 1.94-1.73 2.91-2.6 1.32-1.15 2.3-1.76 2.94-1.83 1.55-.15 2.5.92 2.84 3.22.38 2.51.65 4.07.8 4.7.44 2.01.92 3.01 1.46 3.01.41 0 1.03-.65 1.86-1.96.84-1.3 1.29-2.3 1.37-2.99.12-1.14-.33-1.7-1.37-1.7-.49 0-.99.11-1.48.34 1.01-3.3 2.94-4.91 5.79-4.84 2.1.06 3.08 1.42 2.95 4.17z"/></svg>
    )}
  ];

  // Detectar scroll para adicionar background ao header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'testimonials', label: 'Testimonials' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#17323A]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white text-xl md:text-2xl font-bold hover:text-[#f4d03f] transition-colors duration-300"
            >
              Babinski
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-[#f4d03f] transition-colors duration-300 font-medium text-sm lg:text-base"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex space-x-4 ml-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#f4d03f] transition-colors duration-300"
                aria-label={link.label}
              >
                {link.svg}
              </a>
            ))}
          </div>


          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#f4d03f] transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-64 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="py-4 space-y-2 bg-[#2c5f5f]/95 backdrop-blur-sm rounded-lg mt-2 mx-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-6 py-3 text-white hover:text-[#f4d03f] hover:bg-white/10 transition-all duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            {/* Contact button for mobile */}
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-6 py-3 text-[#f4d03f] hover:bg-[#f4d03f]/20 transition-all duration-300 font-semibold border-t border-white/20 mt-2 pt-4"
            >
              Contact Me
            </button>
            <div className="flex justify-center space-x-6 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#f4d03f] transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.svg}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

