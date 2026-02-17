import React from 'react';
import {
    Calendar,
    CalendarCheck,
    MapPin,
    Mic,
    Users,
    Building2,
    Globe,
    Newspaper
} from 'lucide-react';
import './StatsSection.css';

const stats = [
    {
        id: 1,
        icon: <Calendar size={32} />,
        number: "12+",
        label: "Years of Security Research"
    },
    {
        id: 2,
        icon: <CalendarCheck size={32} />,
        number: "40+",
        label: "Cyber Summits"
    },
    {
        id: 3,
        icon: <MapPin size={32} />,
        number: "95+",
        label: "Defense Deployments"
    },
    {
        id: 4,
        icon: <Mic size={32} />,
        number: "350+",
        label: "Quantum Scholars"
    },
    {
        id: 5,
        icon: <Users size={32} />,
        number: "1500+",
        label: "Attendees"
    },
    {
        id: 6,
        icon: <Building2 size={32} />,
        number: "45+",
        label: "Industry Partners"
    },
    {
        id: 7,
        icon: <Globe size={32} />,
        number: "70+",
        label: "Participating Nations"
    },
    {
        id: 8,
        icon: <Newspaper size={32} />,
        number: "1200+",
        label: "Whitepapers Published"
    }
];

const StatsSection = () => {
    return (
        <section className="stats-section section-padding">
            <div className="container">


                <div className="text-center mb-5">
                    <h2 className="section-title" style={{ marginBottom: '3rem', color: 'var(--color-text-header)' }}>CYBERSECURITY SUMMIT GLOBAL IMPACT</h2>
                </div>

                <div className="stats-grid">
                    {stats.map((stat) => (
                        <div key={stat.id} className="stats-card">
                            <div className="stats-icon">
                                {stat.icon}
                            </div>
                            <div className="stats-number">{stat.number}</div>
                            <div className="stats-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
