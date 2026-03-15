import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-header">
                    <h2 className="section-title">
                        Let's Work <span className="text-gradient">Together</span>
                    </h2>
                    <p className="section-description">
                        Have a project in mind or want to discuss a potential collaboration? 
                        I'd love to hear from you.
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info-wrapper">
                        <div className="contact-info-card">
                            <div className="info-icon">
                                <Mail size={24} color="var(--accent)" />
                            </div>
                            <div className="info-details">
                                <h4>Email Me</h4>
                                <p>hello@example.com</p>
                            </div>
                        </div>

                        <div className="contact-info-card">
                            <div className="info-icon">
                                <Phone size={24} color="var(--accent)" />
                            </div>
                            <div className="info-details">
                                <h4>Call Me</h4>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>

                        <div className="contact-info-card">
                            <div className="info-icon">
                                <MapPin size={24} color="var(--accent)" />
                            </div>
                            <div className="info-details">
                                <h4>Location</h4>
                                <p>San Francisco, CA</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    placeholder="Tell me about your project..."
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            
                            <button type="submit" className="primary-btn submit-btn">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
