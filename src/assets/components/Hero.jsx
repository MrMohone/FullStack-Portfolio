import React, { useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import developerImg from '../developer.png';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-background">
                <div className="glow glow-1"></div>
                <div className="glow glow-2"></div>
            </div>
            
            <div className="hero-container">
                <div className="hero-content">
                    <div className="badge">
                        <span className="badge-dot"></span>
                        Available for work
                    </div>
                    
                    <h1 className="hero-title">
                        Building Digital <br />
                        <span className="text-gradient">Experiences</span>
                    </h1>
                    
                    <p className="hero-subtitle">
                        I'm a Full Stack Developer specializing in building exceptional digital experiences, 
                        currently focused on creating accessible, human-centered products.
                    </p>
                    
                    <div className="hero-actions">
                        <button className="primary-btn">
                            Explore Work <ArrowRight size={20} />
                        </button>
                        
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="GitHub"><Github size={22} /></a>
                            <a href="#" className="social-link" aria-label="LinkedIn"><Linkedin size={22} /></a>
                            <a href="#" className="social-link" aria-label="Email"><Mail size={22} /></a>
                        </div>
                    </div>
                    
                    <div className="tech-stack">
                        <p>Tech Stack:</p>
                        <div className="tech-icons">
                            <span className="tech-badge">React</span>
                            <span className="tech-badge">Node.js</span>
                            <span className="tech-badge">CSS3</span>
                            <span className="tech-badge">UI/UX</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="image-container">
                        <img 
                            src={developerImg} 
                            alt="Developer Portrait" 
                            className="developer-img"
                        />
                        
                        <div className="floating-card card-1">
                            <div className="card-icon">⚡</div>
                            <div className="card-info">
                                <h4>Fast</h4>
                                <p>Performance</p>
                            </div>
                        </div>
                        
                        <div className="floating-card card-2">
                            <div className="card-icon">🎯</div>
                            <div className="card-info">
                                <h4>Clean</h4>
                                <p>Code</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
