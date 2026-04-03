import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <div className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
            <nav className='navbar'>
                <a href="#" className="nav-logo">
                    <Code2 size={28} color="var(--accent)" />
                    <span>Portfolio</span>
                </a>

                <div className="nav-links">
                    {navItems.map((item) => (
                        <a key={item.name} href={item.href} className="nav-link">
                            {item.name}
                        </a>
                    ))}
                    <a href="#contact" className="nav-btn">Hire Me</a>
                </div>

                <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {isMobileMenuOpen && (
                <div className="mobile-nav">
                    <div className="nav-links">
                        {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="nav-link"
                                    onClick={toggleMobileMenu}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <a href="#contact" className="nav-btn" onClick={toggleMobileMenu}>Hire Me</a>
                        </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;