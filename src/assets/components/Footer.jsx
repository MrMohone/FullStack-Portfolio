import React from 'react';
import { Code2, Heart, Github, Linkedin, Mail } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    useGSAP(() => {
        gsap.from(".footer-brand", {
            scrollTrigger: {
                trigger: ".footer",
                start: "top 90%",
                end: "top 50%",
                scrub: 1,
            },
            x: -100,
            opacity: 0,
            ease: "power2.out",
        });

        gsap.from(".footer-links-group", {
            scrollTrigger: {
                trigger: ".footer",
                start: "top 90%",
                end: "top 50%",
                scrub: 1,
            },
            x: 100,
            opacity: 0,
            ease: "power2.out",
        });
    }, []);

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
                                <li><a href="#">Full Stack Development</a></li>
                                <li><a href="#">Front End Development</a></li>
                                <li><a href="#">Back End Development</a></li>
                                <li><a href="#">UI/UX Design</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-container bottom-content">
                    <p className="footer-text">
                        © {new Date().getFullYear()} Mohammed Awol. All rights reserved.
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
