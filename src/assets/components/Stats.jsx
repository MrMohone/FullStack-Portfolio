import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
    const statsData = [
        { label: 'Years Experience', value: '3+' },
        { label: 'Projects Completed', value: '20+' },
        { label: 'Happy Clients', value: '15+' },
        { label: 'Tech Stack', value: '10+' },
    ];

    const containerRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                end: "top 40%",
                scrub: 1
            }
        });

        tl.from(".stat-item", {
            y: 80,
            rotationX: 90,
            rotationY: 15,
            z: -200,
            opacity: 0,
            stagger: 0.15,
            ease: "back.out(1.4)",
            transformOrigin: "bottom center"
        });
    }, { scope: containerRef });

    return (
        <section className="stats-section" ref={containerRef}>
            <div className="stats-container" style={{ perspective: "1500px" }}>
                {statsData.map((stat, index) => (
                    <div key={index} className="stat-item" style={{ transformStyle: "preserve-3d" }}>
                        <h3 className="stat-value text-gradient">{stat.value}</h3>
                        <p className="stat-label">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
