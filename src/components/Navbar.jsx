import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            const offset = 80; // Account for fixed navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-logo">
                    <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
                        <span className="logo-text">Nikhil Thipparthi</span>
                    </a>
                </div>

                <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="nav-link">
                        Home
                    </a>
                    <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="nav-link">
                        About
                    </a>
                    <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="nav-link">
                        Skills
                    </a>
                    <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="nav-link">
                        Projects
                    </a>
                    <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="nav-link">
                        Contact
                    </a>
                </div>

                <div
                    className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

