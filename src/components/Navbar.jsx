import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/useTheme';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'internships', label: 'Internships' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMobileMenuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [isMobileMenuOpen]);

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={(event) => handleNavClick(event, 'home')}>
          <span className="logo-mark">NT</span>
          <span className="logo-text">Nikhil Thipparthi</span>
        </a>

        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="nav-link"
              onClick={(event) => handleNavClick(event, link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'} aria-hidden="true" />
          </button>
          <button
            type="button"
            className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
