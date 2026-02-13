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
        number: "10+",
        label: "Years of Liutex Research"
    },
    {
        id: 2,
        icon: <CalendarCheck size={32} />,
        number: "50+",
        label: "Technical Sessions"
    },
    {
        id: 3,
        icon: <MapPin size={32} />,
        number: "30+",
        label: "Represented Countries"
    },
    {
        id: 4,
        icon: <Mic size={32} />,
        number: "150+",
        label: "Invited Speakers"
    },
    {
        id: 5,
        icon: <Users size={32} />,
        number: "500+",
        label: "Attendees"
    },
    {
        id: 6,
        icon: <Building2 size={32} />,
        number: "100+",
        label: "Universities & Labs"
    },
    {
        id: 7,
        icon: <Globe size={32} />,
        number: "500+",
        label: "Published Papers"
    },
    {
        id: 8,
        icon: <Newspaper size={32} />,
        number: "10+",
        label: "Special Journal Issues"
    }
];

const StatsSection = () => {
    return (
        <section className="stats-section section-padding">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title" style={{ marginBottom: '3rem', color: 'var(--color-text-header)' }}>LIUTEX VORTEX SUMMIT IMPACT</h2>
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
