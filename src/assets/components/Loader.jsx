import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const Loader = ({ setLoading }) => {
    useEffect(() => {
        // Automatically hide the loader after the premium animation completes
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, [setLoading]);

    return (
        <motion.div
            className="loader-container"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="loader-content">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="loader-logo"
                >
                    <Code2 size={40} color="var(--accent)" />
                </motion.div>
                
                <div className="loader-text-wrapper">
                    {"Mohammed".split("").map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                            className="loader-text"
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
                
                <motion.div 
                    className="loader-bar"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                />
            </div>
        </motion.div>
    );
};

export default Loader;
