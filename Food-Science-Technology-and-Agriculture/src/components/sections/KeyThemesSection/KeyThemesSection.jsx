import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Wheat,
    Sprout,
    Leaf,
    FlaskConical,
    Utensils,
    Droplet,
    Microscope,
    Globe,
    ShieldCheck,
    Dna,
    Sun,
    Cog,
    Package,
    Truck
} from 'lucide-react';
import './KeyThemesSection.css';

const sessionsData = [
    { title: "Sustainable Agriculture & Crop Science", icon: Wheat },
    { title: "Food Safety & Quality Control", icon: ShieldCheck },
    { title: "Food Chemistry & Analysis", icon: FlaskConical },
    { title: "Dairy Science & Technology", icon: Droplet },
    { title: "Food Packaging & Preservation", icon: Package },
    { title: "Nutraceuticals & Functional Foods", icon: Leaf },
    { title: "Food Microbiology & Fermentation", icon: Microscope },
    { title: "Agricultural Biotechnology", icon: Dna },
    { title: "Supply Chain & Logistics", icon: Truck },
    { title: "Climate Smart Agriculture", icon: Sun },
    { title: "Soil Science & Plant Nutrition", icon: Sprout },
    { title: "Livestock & Animal Science", icon: Utensils },
    { title: "Food Engineering & Processing", icon: Cog },
    { title: "Sensory Science & Consumer Behavior", icon: Globe },
    { title: "Post-harvest Technology", icon: Package },
    { title: "Food Policy & Regulation", icon: ShieldCheck },
    { title: "Aquaculture & Fisheries", icon: Droplet },
    { title: "Vertical Farming & Urban Agriculture", icon: Sprout },
    { title: "Food Waste Management", icon: Leaf },
    { title: "Plant Genomics & Breeding", icon: Dna },
    { title: "Organic Farming", icon: Wheat },
    { title: "Beverage Technology", icon: Utensils },
    { title: "Meat Science & Processing", icon: Utensils },
    { title: "Grain & Oilseed Technology", icon: Wheat },
    { title: "Novel Food Ingredients", icon: FlaskConical },
    { title: "Halal & Kosher Food", icon: Globe },
    { title: "Food Toxicology", icon: Microscope },
    { title: "Agronomy & Weed Science", icon: Sprout },
    { title: "Food Innovation & Startups", icon: Sun },
    { title: "Precision Agriculture", icon: Cog }
];

const Link = ({ href, children }) => <a href={href}>{children}</a>; // Placeholder if needed

const scheduleData = {
    day1: [
        { time: '8.30 – 9.00', program: 'Registration' },
        { time: '9.00 – 9.30', program: 'Conference Inauguration' },
        { time: '9.30 – 11.00', program: 'Plenary Sessions' },
        { time: '11.00 – 11.20', program: 'Tea/Coffee Break' },
        { time: '11:20 – 13.00', program: 'Plenary Sessions' },
        { time: '13.00 – 13.10', program: 'Group Photograph' },
        { time: '13.10 – 14.00', program: 'Lunch' },
        { time: '14.00 – 15.40', program: 'Keynote Sessions' },
        { time: '15.40 – 16.00', program: 'Tea/Coffee Break' },
        { time: '16.00 – 17.30', program: 'Keynote Sessions' },
        { time: '17.30 – 18.30', program: 'Workshop' },
    ],
    day2: [
        { time: '9.00 – 10.30', program: 'Scientific Sessions' },
        { time: '10.30 – 10.50', program: 'Tea/Coffee Break' },
        { time: '10.50 – 13.00', program: 'Poster Presentations' },
        { time: '13.00 – 14.00', program: 'Lunch' },
        { time: '14.00 – 15.30', program: 'Panel Discussions' },
        { time: '15.30 – 16.00', program: 'Award Ceremony & Closing' },
    ],
    day3: [
        { time: '9.00 – 10.30', program: 'Networking Session' },
        { time: '10.30 – 11.00', program: 'Tea/Coffee Break' },
        { time: '11.00 – 12.30', program: 'Future Trends Workshop' },
        { time: '12.30 – 13.30', program: 'Lunch' },
        { time: '13.30 – 15.00', program: 'Final Remarks & Departure' },
    ]
};

const KeyThemesSection = ({ showLearnMore = false }) => {
    const [activeDay, setActiveDay] = useState('day1');
    const navigate = useNavigate();

    // Limit items if in preview mode (Home page)
    const displaySessions = showLearnMore ? sessionsData.slice(0, 10) : sessionsData;
    const displaySchedule = showLearnMore ? scheduleData[activeDay].slice(0, 5) : scheduleData[activeDay];

    return (
        <section className={`sessions-schedule-section section-padding ${showLearnMore ? 'preview-mode' : ''}`} id="sessions">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <h2 className="section-title">Conference Schedule</h2>
                    <div className="section-line"></div>
                </div>

                <div className="sessions-schedule-layout" style={showLearnMore ? { overflow: 'hidden' } : {}}>
                    {/* Left Column: Sessions List */}
                    <div className="sessions-column">
                        <h3 className="column-title">Session</h3>
                        <div className="sessions-list-container">
                            <ul className="sessions-list-clean">
                                {displaySessions.map((session, index) => {
                                    const Icon = session.icon || Stethoscope;
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

                    {/* Center Divider */}
                    <div className="schedule-divider">
                        <div className="divider-line"></div>
                    </div>

                    {/* Right Column: Schedule */}
                    <div className="schedule-column">
                        <div className="schedule__tabs-wrapper">
                            <div className="schedule__tabs">
                                <button
                                    className={`schedule__tab ${activeDay === 'day1' ? 'active' : ''}`}
                                    onClick={() => setActiveDay('day1')}
                                >
                                    <span className="tab-day">Day 01</span>
                                    <span className="tab-date">Conference</span>
                                </button>
                                <button
                                    className={`schedule__tab ${activeDay === 'day2' ? 'active' : ''}`}
                                    onClick={() => setActiveDay('day2')}
                                >
                                    <span className="tab-day">Day 02</span>
                                    <span className="tab-date">Discussions</span>
                                </button>
                                <button
                                    className={`schedule__tab ${activeDay === 'day3' ? 'active' : ''}`}
                                    onClick={() => setActiveDay('day3')}
                                >
                                    <span className="tab-day">Day 03</span>
                                    <span className="tab-date">Workshops</span>
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
                                        {displaySchedule.map((item, index) => (
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

                    {/* Fade Overlay */}
                    {showLearnMore && <div className="key-themes-fade-overlay"></div>}
                </div>

                {/* Learn More Button */}
                {showLearnMore && (
                    <div className="text-center mt-4">
                        <button className="btn-learn-more" onClick={() => navigate('/sessions')}>
                            Learn More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default KeyThemesSection;
