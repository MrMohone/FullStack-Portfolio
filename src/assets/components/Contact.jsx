import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, User, MessageSquare } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Contact = () => {

    useGSAP(() => {
        gsap.from(".char", {
            scrollTrigger: {
                trigger: ".contact-header",
                start: "top 90%",
                toggleActions: "play none none reverse",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "back.out(1.7)",
        });

        gsap.from(".section-description", {
            scrollTrigger: {
                trigger: ".contact-header",
                start: "top 90%",
                toggleActions: "play none none reverse",
            },
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 0.8,
            ease: "power2.out",
        });

        gsap.from(".contact-content", {
            scrollTrigger: {
                trigger: ".contact-content",
                start: "top 80%",
                end: "top 50%",
                scrub: 1,
            },
            y: 20,
            scale: 0.9,
            opacity: 0,
            ease: "power1.inOut",
        });
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [focusedField, setFocusedField] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFocus = (fieldName) => setFocusedField(fieldName);
    const handleBlur = () => setFocusedField(null);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsSent(false); // Reset just in case

        try {
            const payload = {
                ...formData,
                _subject: "New Portfolio Message!",
                _template: "table",
                _captcha: "false"
            };

            const response = await fetch("https://formsubmit.co/ajax/mohammedawol0837@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                // Form was submitted successfully
                setIsSent(true);
                setFormData({ name: '', email: '', message: '' });

                // Show "Sent your message" on the button for 3 seconds, then revert to default
                setTimeout(() => {
                    setIsSent(false);
                }, 3000);
            } else {
                alert('Oops, something went wrong. Please try again later.');
            }
        } catch (error) {
            console.error("FormSubmit Error:", error);
            alert('Oops, something went wrong. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-header">
                    <h2 className="section-title">
                        {"Let's Work Together".split('').map((char, index) => (
                            <span key={`w-${index}`} className="char" style={{ display: 'inline-block' }}>
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}

                    </h2>
                    <p className="section-description">
                        Have a project in mind or want to discuss a potential collaboration?
                        I'd love to hear from you.
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info-wrapper">
                        <div className="contact-info-card group">
                            <div className="info-icon group-hover:bg-accent/20 transition-colors">
                                <Mail size={24} color="var(--accent)" />
                            </div>
                            <div className="info-details">
                                <h4>Email Me</h4>
                                <p>mohammedawol0837@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-info-card group">
                            <div className="info-icon group-hover:bg-accent/20 transition-colors">
                                <Phone size={24} color="var(--accent)" />
                            </div>
                            <div className="info-details">
                                <h4>Call Me</h4>
                                <p>+251-925580837</p>
                            </div>
                        </div>

                        <div className="contact-info-card group">
                            <div className="info-icon group-hover:bg-accent/20 transition-colors">
                                <MapPin size={24} color="var(--accent)" />
                            </div>
                            <div className="info-details">
                                <h4>Location</h4>
                                <p>Ethiopia, Hossana</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form
                            onSubmit={handleSubmit}
                            className="contact-form glass-form"
                        >
                            <div className={`form-group ${focusedField === 'name' ? 'focused' : ''}`}>
                                <label htmlFor="name">Full Name</label>
                                <div className="input-with-icon">
                                    <User className="input-icon" size={20} />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="User Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('name')}
                                        onBlur={handleBlur}
                                        required
                                        disabled={isSubmitting}
                                    />
                                    <div className="focus-border"></div>
                                </div>
                            </div>

                            <div className={`form-group ${focusedField === 'email' ? 'focused' : ''}`}>
                                <label htmlFor="email">Email Address</label>
                                <div className="input-with-icon">
                                    <Mail className="input-icon" size={20} />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="User Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('email')}
                                        onBlur={handleBlur}
                                        required
                                        disabled={isSubmitting}
                                    />
                                    <div className="focus-border"></div>
                                </div>
                            </div>

                            <div className={`form-group ${focusedField === 'message' ? 'focused' : ''}`}>
                                <label htmlFor="message">Your Message</label>
                                <div className="input-with-icon textarea-icon-wrapper">
                                    <MessageSquare className="input-icon textarea-icon" size={20} />
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell me about your project..."
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('message')}
                                        onBlur={handleBlur}
                                        required
                                        disabled={isSubmitting}
                                    ></textarea>
                                    <div className="focus-border"></div>
                                </div>
                            </div>

                            <button type="submit" className="primary-btn submit-btn glowing-btn" disabled={isSubmitting}>
                                <span>{isSubmitting ? 'Sending...' : (isSent ? 'Sent your message' : 'Send Message')}</span>
                                <span className="btn-icon-wrapper">
                                    <Send size={18} className="send-icon" />
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
