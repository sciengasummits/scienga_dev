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
    { title: "Stellar Evolution and Life Cycles", icon: Star },
    { title: "Exoplanets and Search for Life", icon: Globe },
    { title: "Cosmology and Dark Matter", icon: Telescope },
    { title: "Gravitational Waves and Black Holes", icon: Rocket },
    { title: "Space Mission Design and Engineering", icon: Rocket },
    { title: "Radio Astronomy and Interferometry", icon: Microscope },
    { title: "Astrobiology and Planetary Science", icon: Activity },
    { title: "Computational Astrophysics and Big Data", icon: Brain },
    { title: "Satellite Technology and SmallSats", icon: Smartphone },
    { title: "Space Law and Policy", icon: ShieldCheck },
    { title: "Solar Physics and Space Weather", icon: Zap },
    { title: "Observational Techniques and Instrumentation", icon: Microscope },
    { title: "Galactic Archaeology", icon: Globe },
    { title: "High Energy Astrophysics", icon: Activity }
];

const scheduleData = {
    day1: [
        { time: '8.30 – 9.00', program: 'Registration & Welcome Coffee' },
        { time: '9.00 – 9.30', program: 'Conference Inauguration: Beyond the Horizon' },
        { time: '9.30 – 11.00', program: 'Plenary Session: The Future of Deep Space Exploration' },
        { time: '11.00 – 11.20', program: 'Networking Break' },
        { time: '11:20 – 13.00', program: 'Scientific Sessions: Black Holes & Event Horizons' },
        { time: '13.00 – 13.10', program: 'Group Photograph' },
        { time: '13.10 – 14.00', program: 'Lunch Break' },
        { time: '14.00 – 15.40', program: 'Keynote Sessions: James Webb Space Telescope Discoveries' },
        { time: '15.40 – 16.00', program: 'Coffee Break' },
        { time: '16.00 – 17.30', program: 'Panel Discussion: Commercial Space Travel' },
        { time: '17.30 – 18.30', program: 'Workshop: Analyzing Cosmic Ray Data' },
    ],
    day2: [
        { time: '9.00 – 10.30', program: 'Scientific Sessions: Exoplanetary Atmospheres' },
        { time: '10.30 – 10.50', program: 'Morning Refreshments' },
        { time: '10.50 – 13.00', program: 'Stellar Evolution Poster Presentations' },
        { time: '13.00 – 14.00', program: 'Networking Lunch' },
        { time: '14.00 – 15.30', program: 'Panel Discussions: Dark Matter & Dark Energy' },
    ],
    day3: [
        { time: '9.00 – 10.30', program: 'Scientific Sessions: Galactic Formation' },
        { time: '10.30 – 10.50', program: 'Final Breakout Session' },
        { time: '10.50 – 12.30', program: 'Keynote Sessions: Search for Extra-Terrestrial Intelligence' },
        { time: '12.30 – 13.30', program: 'Farewell Lunch' },
        { time: '13.30 – 15.00', program: 'Future Outlook: The Multi-Planetary Future' },
        { time: '15.00 – 16.00', program: 'Awards Gala & Closing Ceremony' },
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
                                    <span className="tab-date">July 15, 2026</span>
                                </button>
                                <button
                                    className={`schedule__tab ${activeDay === 'day2' ? 'active' : ''}`}
                                    onClick={() => setActiveDay('day2')}
                                >
                                    <span className="tab-day">Day 02</span>
                                    <span className="tab-date">July 16, 2026</span>
                                </button>
                                <button
                                    className={`schedule__tab ${activeDay === 'day3' ? 'active' : ''}`}
                                    onClick={() => setActiveDay('day3')}
                                >
                                    <span className="tab-day">Day 03</span>
                                    <span className="tab-date">July 17, 2026</span>
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
