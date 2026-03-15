import React from 'react';

const Stats = () => {
    const statsData = [
        { label: 'Years Experience', value: '3+' },
        { label: 'Projects Completed', value: '20+' },
        { label: 'Tech Stack', value: '12+' },
        { label: 'Happy Clients', value: '15+' }
    ];

    return (
        <section className="stats-section pt-20 mt-20">
            <div className="stats-container">
                {statsData.map((stat, index) => (
                    <div key={index} className="stat-item">
                        <h3 className="stat-value text-gradient">{stat.value}</h3>
                        <p className="stat-label">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
