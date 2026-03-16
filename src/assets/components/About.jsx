import React, { useRef } from 'react';
import aboutImg from '../about_img1.png';
import { Terminal, Lightbulb } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const imageWrapperRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {
        gsap.to(imageRef.current, {
            scale: 1.30,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: imageWrapperRef.current,
                start: "top center",
                toggleActions: "play none none reverse",
            }
        });
    }, { scope: containerRef });

    return (
        <section id="about" className="about-section" ref={containerRef}>
            <div className="about-container">

                {/* Left side: Image */}
                <div className="about-image-wrapper about-left-img" ref={imageWrapperRef}>
                    <div className="about-image-inner">
                        <div className="about-name-badge pl-10 bg-dark">
                            <span className="name">Mohammed Awol</span>
                            <span className="title">Fullstack<br />Software Developer</span>
                        </div>
                        <img
                            ref={imageRef}
                            src={aboutImg}
                            alt="Developer working"
                            className="about-img"
                        />
                        <div className="experience-badge bg-dark">
                            <span className="years">3+</span>
                            <span className="text">Years<br />Experience</span>
                        </div>
                    </div>
                </div>

                {/* Right side: Content */}
                <div className="about-content">
                    <h2 className="section-title">
                        Crafting digital <br />
                        <span className="text-gradient">experiences with precision.</span>
                    </h2>

                    <p className="about-text">
                        My journey in tech started at Wachemo University, where I developed a deep
                        fascination for how information systems can solve real-world problems. Over
                        the last 3 years, I've transitioned from a curious student to a professional
                        full-stack developer.
                    </p>

                    <div className="expertise-cards">
                        <div className="expertise-card">
                            <div className="expertise-icon">
                                <Terminal size={24} color="var(--accent)" />
                            </div>
                            <div>
                                <h4>Professional Experience</h4>
                                <p>3+ years of building production-ready apps.</p>
                            </div>
                        </div>

                        <div className="expertise-card">
                            <div className="expertise-icon">
                                <Lightbulb size={24} color="var(--accent)" />
                            </div>
                            <div>
                                <h4>Fullstack Expertise</h4>
                                <p>Bridging the gap between UI and complex logic.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
