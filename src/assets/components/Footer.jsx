import React from 'react';
import { Code2, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <Code2 size={24} color="var(--accent)" />
                    Portfolio<span>.</span>
                </div>
                
                <p className="footer-text">
                    Built with <Heart size={16} color="red" fill="red" /> by me. © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
