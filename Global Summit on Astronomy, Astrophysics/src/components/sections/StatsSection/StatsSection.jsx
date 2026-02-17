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
        number: "50+",
        label: "Specialized Sessions"
    },
    {
        id: 2,
        icon: <CalendarCheck size={32} />,
        number: "200+",
        label: "Renowned Speakers"
    },
    {
        id: 3,
        icon: <Users size={32} />,
        number: "1500+",
        label: "Expected Attendees"
    },
    {
        id: 4,
        icon: <Globe size={32} />,
        number: "40+",
        label: "Participating Nations"
    },
    {
        id: 5,
        icon: <Newspaper size={32} />,
        number: "100+",
        label: "Scientific Posters"
    },
    {
        id: 6,
        icon: <Building2 size={32} />,
        number: "10+",
        label: "Space Agency Partners"
    },
    {
        id: 7,
        icon: <Mic size={32} />,
        number: "25+",
        label: "Industry Exhibitors"
    },
    {
        id: 8,
        icon: <MapPin size={32} />,
        number: "1K+",
        label: "Published Research Papers"
    }
];

const StatsSection = () => {
    return (
        <section className="stats-section section-padding">
            <div className="container">


                <div className="text-center mb-5">
                    <h2 className="section-title" style={{ marginBottom: '3rem', color: 'var(--color-text-header)' }}>ASTRONOMY SUMMIT GLOBAL IMPACT</h2>
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
