import React from 'react';
import { Code2, Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-container">
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo">
                            <Code2 size={28} color="var(--accent)" />
                            Portfolio<span>.</span>
                        </a>
                        <p className="footer-desc">
                            Crafting elegant digital solutions with modern technologies. 
                            Let's build something amazing together.
                        </p>
                        <div className="footer-socials">
                            <a href="https://github.com/MrMohone" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub"><Github size={20} /></a>
                            <a href="https://www.linkedin.com/in/mohammed-awol1" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#contact" className="social-icon" aria-label="Email"><Mail size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <div className="footer-links-col">
                            <h4>Navigation</h4>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        
                        <div className="footer-links-col">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#">Web Development</a></li>
                                <li><a href="#">UI/UX Design</a></li>
                                <li><a href="#">Mobile Apps</a></li>
                                <li><a href="#">API Integration</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-container bottom-content">
                    <p className="footer-text">
                        © {new Date().getFullYear()} MrMohone. All rights reserved.
                    </p>
                    <p className="footer-made-by">
                        Built with <Heart size={16} color="#ff3366" fill="#ff3366" /> and React
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
