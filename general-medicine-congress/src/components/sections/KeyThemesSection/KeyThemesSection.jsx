import React, { useState } from 'react';
import {
    Stethoscope,
    Heart,
    Brain,
    Globe,
    Activity,
    Microscope,
    Pill,
    Baby,
    User,
    Scissors,
    Smartphone,
    Leaf,
    ShieldCheck,
    Dna,
    Eye,
    Zap
} from 'lucide-react';
import './KeyThemesSection.css';

const sessionsData = [
    { title: "Internal Medicine Updates", icon: Stethoscope },
    { title: "Primary Care Innovations", icon: User },
    { title: "Cardiology & Cardiovascular Health", icon: Heart },
    { title: "Neurology & Brain Disorders", icon: Brain },
    { title: "Public Health & Epidemiology", icon: Globe },
    { title: "Emergency Medicine & Critical Care", icon: Activity },
    { title: "Clinical Research & Trials", icon: Microscope },
    { title: "Infectious Diseases & Control", icon: ShieldCheck },
    { title: "Oncology & Cancer Research", icon: Dna },
    { title: "Pediatrics & Child Health", icon: Baby },
    { title: "Geriatrics & Aging Society", icon: User },
    { title: "Endocrinology & Diabetes Care", icon: Activity },
    { title: "Gastroenterology & Hepatology", icon: Activity },
    { title: "Nephrology & Urology", icon: Activity },
    { title: "Pulmonology & Respiratory Medicine", icon: Activity },
    { title: "Rheumatology & Autoimmune Diseases", icon: Activity },
    { title: "Dermatology & Skin Biology", icon: Activity },
    { title: "Psychiatry & Mental Health", icon: Brain },
    { title: "Surgery & Anesthesia", icon: Scissors },
    { title: "Radiology & Medical Imaging", icon: Eye },
    { title: "Pathology & Diagnostics", icon: Microscope },
    { title: "Pharmacology & Drug Discovery", icon: Pill },
    { title: "Medical Ethics & Healthcare Law", icon: ShieldCheck },
    { title: "Healthcare Management & Policy", icon: Globe },
    { title: "Digital Health & Telemedicine", icon: Smartphone },
    { title: "Nursing & Patient Care", icon: User },
    { title: "Occupational Health & Safety", icon: ShieldCheck },
    { title: "Sports Medicine & Rehabilitation", icon: Activity },
    { title: "Nutrition & Dietetics", icon: Leaf },
    { title: "Alternative & Integrative Medicine", icon: Leaf }
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

const KeyThemesSection = () => {
    const [activeDay, setActiveDay] = useState('day1');

    return (
        <section className="sessions-schedule-section section-padding" id="sessions">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <h2 className="section-title">Conference Schedule</h2>
                    <div className="section-line"></div>
                </div>

                <div className="sessions-schedule-layout">
                    {/* Left Column: Sessions List */}
                    <div className="sessions-column">
                        <h3 className="column-title">Session</h3>
                        <div className="sessions-list-container">
                            <ul className="sessions-list-clean">
                                {sessionsData.map((session, index) => {
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
                                        {scheduleData[activeDay].map((item, index) => (
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
