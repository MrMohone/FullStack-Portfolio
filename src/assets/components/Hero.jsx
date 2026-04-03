import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import developerImg from '../Generated Image March 16, 2026 - 2_03PM.png';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0, opacity: 1,
        transition: { type: 'spring', stiffness: 100, damping: 10 }
    }
};

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-background">
                <div className="glow glow-1"></div>
                <div className="glow glow-2"></div>
            </div>

            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="badge" variants={itemVariants}>
                        <motion.span
                            className="badge-dot"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        ></motion.span>I'm Mohammed<br />
                        Available for work
                    </motion.div>

                    <motion.h1 className="hero-title">
                        {"Building Digital".split('').map((char, index) => (
                            <motion.span
                                key={`bd-${index}`}
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    stagger: 0.05,
                                    delay: index * 0.05 + 0.3,
                                    ease: [0.175, 0.885, 0.32, 1.275] // Custom back.out ease mapping
                                }}
                                style={{ display: 'inline-block' }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </motion.span>
                        ))}
                        <br />
                        <span className="text-gradient">
                            {"Experiences".split('').map((char, index) => (
                                <motion.span
                                    key={`exp-${index}`}
                                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: (index + 16) * 0.05 + 0.3,
                                        ease: [0.175, 0.885, 0.32, 1.275]
                                    }}
                                    style={{ display: 'inline-block' }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                    </motion.h1>

                    <motion.p className="hero-subtitle" variants={itemVariants}>
                        I'm a Full Stack Developer specializing in building exceptional digital experiences,
                        currently focused on creating accessible, human-centered products.
                    </motion.p>

                    <motion.div className="hero-actions" variants={itemVariants}>
                        <button
                            className="primary-btn"
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Explore Work <ArrowRight size={20} />
                        </button>

                        <div className="social-links">
                            <a href="https://github.com/MrMohone" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub"><Github size={22} /></a>
                            <a href="https://www.linkedin.com/in/mohammed-awol1" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><Linkedin size={22} /></a>
                            <a href="#contact" className="social-link" aria-label="Email"><Mail size={22} /></a>
                        </div>
                    </motion.div>

                    <motion.div className="tech-stack" variants={itemVariants}>
                        <p>Tech Stack:</p>
                        <div className="tech-icons">
                            {['Python', 'Php', 'Js', 'React', 'Bootstrap,Taiwind', 'Django', 'Django Rest', 'Git', 'Css', 'Html'].map((tech) => (
                                <span key={tech} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.4, type: 'spring' }}
                >
                    <div className="image-container">
                        <img
                            src={developerImg}
                            alt="Developer Portrait"
                            className="developer-img"
                        />

                        {/* 3D Floating Logos on the Left Side */}
                        <div className="tech-logos-column">
                            {[
                                { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
                                { name: 'PHP', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
                                { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
                                { name: 'Bootstrap', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' }
                            ].map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    className={`floating-logo logo-${index + 1}`}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
                                    transition={{
                                        opacity: { duration: 0.8, delay: 0.5 + index * 0.2 },
                                        x: { duration: 0.8, delay: 0.5 + index * 0.2, type: 'spring' },
                                        y: { duration: 4 + index, repeat: Infinity, delay: index * 0.5, ease: "easeInOut" }
                                    }}
                                >
                                    <div className="logo-3d-wrapper glass-panel">
                                        <img src={tech.url} alt={tech.name} className="tech-logo-img" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
