import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import developerImg from '../developer.png';

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
                        ></motion.span>
                        Available for work
                    </motion.div>
                    
                    <motion.h1 className="hero-title" variants={itemVariants}>
                        Building Digital <br />
                        <span className="text-gradient">Experiences</span>
                    </motion.h1>
                    
                    <motion.p className="hero-subtitle" variants={itemVariants}>
                        I'm a Full Stack Developer specializing in building exceptional digital experiences, 
                        currently focused on creating accessible, human-centered products.
                    </motion.p>
                    
                    <motion.div className="hero-actions" variants={itemVariants}>
                        <button className="primary-btn">
                            Explore Work <ArrowRight size={20} />
                        </button>
                        
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="GitHub"><Github size={22} /></a>
                            <a href="#" className="social-link" aria-label="LinkedIn"><Linkedin size={22} /></a>
                            <a href="#" className="social-link" aria-label="Email"><Mail size={22} /></a>
                        </div>
                    </motion.div>
                    
                    <motion.div className="tech-stack" variants={itemVariants}>
                        <p>Tech Stack:</p>
                        <div className="tech-icons">
                            {['React', 'Node.js', 'Next.js', 'Framer Motion'].map((tech) => (
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
                        
                        <motion.div 
                            className="floating-card card-1 glass-panel"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="card-icon">⚡</div>
                            <div className="card-info">
                                <h4>Performant</h4>
                                <p>60fps Animations</p>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="floating-card card-2 glass-panel"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 7, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                        >
                            <div className="card-icon">🎯</div>
                            <div className="card-info">
                                <h4>Immersive</h4>
                                <p>UI Design</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
