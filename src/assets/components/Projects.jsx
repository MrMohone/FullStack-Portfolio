import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';


const Projects = () => {
    useGSAP(() => {
        gsap.from(".section-header", {
            scrollTrigger: {
                trigger: ".section-header",
                start: "top 90%",
                toggleActions: "play none none reverse",
            },
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.6,
            ease: "power1.inOut",
        });

        gsap.from(".projects-grid", {
            scrollTrigger: {
                trigger: ".projects-grid",
                start: "top 90%",
                toggleActions: "play none none reverse",
            },
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.6,
            ease: "power1.inOut",

        });
    }, []);
    const projects = [
        {
            id: 1,
            title: "E-Commerce Dashboard",
            description: "A comprehensive analytics dashboard for modern online stores with real-time data visualization and inventory management.",
            image: "/images/project_1.png",
            tech: ["React", "Node.js", "MongoDB", "Chart.js"],
            liveLink: "#",
            githubLink: "https://github.com/MrMohone",
            featured: true
        },
        {
            id: 2,
            title: "Health & Fitness Tracker",
            description: "Mobile-first web application connecting users with their daily health metrics. Features custom workout plans and activity tracking.",
            image: "/images/project_2.png",
            tech: ["React Native", "Firebase", "Redux", "Tailwind"],
            liveLink: "#",
            githubLink: "https://github.com/MrMohone",
            featured: false
        },
        {
            id: 3,
            title: "SaaS Financial Platform",
            description: "Secure and scalable financial tech platform for small businesses to manage their cash flow, invoices, and accounting.",
            image: "/images/project_3.png",
            tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
            liveLink: "#",
            githubLink: "https://github.com/MrMohone",
            featured: false
        },
        {
            id: 4,
            title: "SaaS Financial Platform",
            description: "Secure and scalable financial tech platform for small businesses to manage their cash flow, invoices, and accounting.",
            image: "/images/project_3.png",
            tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
            liveLink: "#",
            githubLink: "https://github.com/MrMohone",
            featured: false
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="section-header">
                <span className="section-subtitle">Portfolio</span>
                <h2 className="section-title">
                    My Recent <span className="text-gradient">Work</span>
                </h2>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`project-card ${project.featured ? 'featured' : ''}`}
                    >
                        <div className="project-image-container">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="project-overlay">
                                <div className="project-links">
                                    <a href={project.liveLink} className="icon-btn" aria-label="Live Demo">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.githubLink} className="icon-btn" aria-label="GitHub Repo">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>

                            <div className="project-tech">
                                {project.tech.map((techItem, index) => (
                                    <span key={index} className="tech-tag">{techItem}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="projects-cta">
                <button className="secondary-btn">View All Projects</button>
            </div>
        </section>
    );
};

export default Projects;
