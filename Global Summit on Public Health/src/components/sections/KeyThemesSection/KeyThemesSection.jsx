import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Brain,
    Globe,
    Activity,
    Microscope,
    Smartphone,
    ShieldCheck,
    Zap,
    Star,
    Telescope,
    Rocket
} from 'lucide-react';
import './KeyThemesSection.css';

const sessionsData = [
    { title: "Epidemiology and Disease Control", icon: Microscope },
    { title: "Global Health Policy and Governance", icon: Globe },
    { title: "Preventive Medicine and Lifestyle Health", icon: Activity },
    { title: "Environmental Health and Sustainability", icon: Globe },
    { title: "Maternal and Child Health", icon: Brain },
    { title: "Digital Health and Telemedicine", icon: Smartphone },
    { title: "Health Informatics and Big Data", icon: Microscope },
    { title: "Mental Health and Community Well-being", icon: Brain },
    { title: "Nutrition and Food Security", icon: Activity },
    { title: "Public Health Preparedness and Response", icon: ShieldCheck },
    { title: "Occupational Health and Safety", icon: Activity },
    { title: "Healthcare Systems and Management", icon: Globe },
    { title: "Primary Care and Health Education", icon: Microscope },
    { title: "Social Determinants of Health", icon: Globe }
];

const scheduleData = {
    day1: [
        { time: '8.30 – 9.00', program: 'Registration' },
        { time: '9.00 – 9.30', program: 'Conference Inauguration' },
        { time: '9.30 – 11.00', program: 'Plenary Sessions: Future of Global Health' },
        { time: '11.00 – 11.20', program: 'Tea/Coffee Break' },
        { time: '11:20 – 13.00', program: 'Scientific Sessions: Disease Prevention' },
        { time: '13.00 – 13.10', program: 'Group Photograph' },
        { time: '13.10 – 14.00', program: 'Lunch' },
        { time: '14.00 – 15.40', program: 'Keynote Sessions: Digital Health Innovation' },
        { time: '15.40 – 16.00', program: 'Tea/Coffee Break' },
        { time: '16.00 – 17.30', program: 'Panel Discussion: Mental Health' },
        { time: '17.30 – 18.30', program: 'Workshop: Epidemiology' },
    ],
    day2: [
        { time: '9.00 – 10.30', program: 'Scientific Sessions: Preventive Medicine' },
        { time: '10.30 – 10.50', program: 'Tea/Coffee Break' },
        { time: '10.50 – 13.00', program: 'Poster Presentations' },
        { time: '13.00 – 14.00', program: 'Lunch' },
        { time: '14.00 – 15.30', program: 'Panel Discussions: Health Policy' },
    ],
    day3: [
        { time: '9.00 – 10.30', program: 'Scientific Sessions: Global Health Systems' },
        { time: '10.30 – 10.50', program: 'Tea/Coffee Break' },
        { time: '10.50 – 12.30', program: 'Keynote Sessions: One Health Approach' },
        { time: '12.30 – 13.30', program: 'Lunch' },
        { time: '13.30 – 15.00', program: 'Future Outlook & Strategy Sessions' },
        { time: '15.00 – 16.00', program: 'Final Award Ceremony & Closing Remarks' },
    ]
};

const KeyThemesSection = ({ layout = 'sidebar' }) => {
    const [activeDay, setActiveDay] = useState('day1');
    const navigate = useNavigate();

    return (
        <section className={`sessions-schedule-section section-padding ${layout === 'stacked' ? 'layout-stacked' : ''}`} id="sessions">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <h2 className="section-title">Program Sessions & Schedule</h2>
                    <div className="section-line"></div>
                </div>

                <div className={`sessions-schedule-layout ${layout === 'stacked' ? 'stacked' : ''}`}>
                    {/* Sessions Column (On left in sidebar layout) */}
                    <div className="sessions-column">
                        <div className="column-header-flex">
                            <h3 className="column-title">Scientific Sessions</h3>
                            {layout !== 'stacked' && (
                                <button className="btn-learn-more-small" onClick={() => navigate('/sessions')}>
                                    Learn More
                                </button>
                            )}
                        </div>
                        <div className="sessions-list-container">
                            <ul className={`sessions-list-clean ${layout === 'stacked' ? 'grid-display' : ''}`}>
                                {sessionsData.map((session, index) => {
                                    const Icon = session.icon || Telescope;
                                    return (
                                        <li key={index} className="session-item-clean">
                                            <span className="session-icon-small">
                                                <Icon size={18} />
                                            </span>
                                            <span className="session-text">{session.title}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* Center Divider - Hidden if stacked */}
                    {layout !== 'stacked' && (
                        <div className="schedule-divider">
                            <div className="divider-line"></div>
                        </div>
                    )}

                    {/* Schedule Column (On right in sidebar layout) */}
                    <div className="schedule-column">
                        <div className="schedule__tabs-wrapper">
                            <div className="schedule__tabs">
                                <button
                                    className={`schedule__tab ${activeDay === 'day1' ? 'active' : ''}`}
                                    onClick={() => setActiveDay('day1')}
                                >
                                    <span className="tab-day">Day 01</span>
                                    <span className="tab-date">Oct 26, 2026</span>
                                </button>
                                <button
                                    className={`schedule__tab ${activeDay === 'day2' ? 'active' : ''}`}
                                    onClick={() => setActiveDay('day2')}
                                >
                                    <span className="tab-day">Day 02</span>
                                    <span className="tab-date">Oct 27, 2026</span>
                                </button>
                                <button
                                    className={`schedule__tab ${activeDay === 'day3' ? 'active' : ''}`}
                                    onClick={() => setActiveDay('day3')}
                                >
                                    <span className="tab-day">Day 03</span>
                                    <span className="tab-date">Oct 28, 2026</span>
                                </button>
                            </div>
                        </div>

                        <div className="schedule__content fade-in">
                            <div className="schedule__table-container">
                                <table className="schedule__table">
                                    <thead>
                                        <tr>
                                            <th>Time</th>
                                            <th>Session Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {scheduleData[activeDay]?.map((item, index) => (
                                            <tr key={index}>
                                                <td className="time-col">
                                                    <div className="time-badge">{item.time}</div>
                                                </td>
                                                <td className="program-col">
                                                    <div className="program-info">
                                                        <span className="program-title">{item.program}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeyThemesSection;
