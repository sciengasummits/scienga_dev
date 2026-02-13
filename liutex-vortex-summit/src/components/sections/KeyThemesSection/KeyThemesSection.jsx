import React, { useState } from 'react';
import {
    Activity,
    Globe,
    Brain,
    ShieldCheck,
    Dna,
    Zap,
    Wind,
    Waves,
    Database,
    Box,
    Settings,
    Crosshair,
    Hexagon,
    Layers,
    Target,
    Cpu,
    Microscope,
    Stethoscope
} from 'lucide-react';
import './KeyThemesSection.css';

const sessionsData = [
    { title: "Mathematical Theory of Liutex", icon: Hexagon },
    { title: "Vortex Identification Methods", icon: Crosshair },
    { title: "Turbulence Structure Identification", icon: Activity },
    { title: "Aerodynamics & Hydrodynamics", icon: Wind },
    { title: "Meteorological Vortex Dynamics", icon: Globe },
    { title: "Ocean Vortex Dynamics", icon: Waves },
    { title: "Bio-medical Flow Analysis", icon: Dna },
    { title: "CFD and Liutex Integration", icon: Database },
    { title: "AI in Fluid Mechanics", icon: Brain },
    { title: "Comparison of Vortex Criteria", icon: Layers },
    { title: "Liutex Core Lines & Tubes", icon: Zap },
    { title: "Multi-resolution Liutex Method", icon: Box },
    { title: "Relative Liutex Theory", icon: Target },
    { title: "High-Order Numerical Methods", icon: Settings },
    { title: "Experimental Fluid Mechanics", icon: Microscope },
    { title: "Fluid-Structure Interaction", icon: ShieldCheck },
    { title: "Aeroacoustics & Liutex", icon: Activity },
    { title: "Plasma and Space Vortices", icon: Globe },
    { title: "Wind Engineering & Civil Eng.", icon: Wind },
    { title: "Industrial Fluid Dynamics", icon: Cpu }
];

const scheduleData = {
    day1: [
        { time: '8.30 – 9.00', program: 'Registration & Welcome Coffee' },
        { time: '9.00 – 9.30', program: 'Opening Ceremony: Evolution of Vortex Theory' },
        { time: '9.30 – 11.00', program: 'Keynote: Third Generation of Vortex Identification' },
        { time: '11.00 – 11.20', program: 'Tea/Coffee Break' },
        { time: '11:20 – 13.00', program: 'Plenary: Liutex vs. Vorticity in Shear Flow' },
        { time: '13.00 – 13.10', program: 'Group Photograph' },
        { time: '13.10 – 14.00', program: 'Lunch Break' },
        { time: '14.00 – 15.40', program: 'Session 1: Vortex Dynamics in Turbulence' },
        { time: '15.40 – 16.00', program: 'Tea/Coffee Break' },
        { time: '16.00 – 17.30', program: 'Session 2: Bio-Fluid Mechanics Applications' },
        { time: '17.30 – 18.30', program: 'Welcome Reception' },
    ],
    day2: [
        { time: '9.00 – 10.30', program: 'Session 3: Deep Learning in Vortex Identification' },
        { time: '10.30 – 10.50', program: 'Tea/Coffee Break' },
        { time: '10.50 – 13.00', program: 'Poster Presentations: CFD & Experimental Fluids' },
        { time: '13.00 – 14.00', program: 'Lunch Break' },
        { time: '14.00 – 15.30', program: 'Panel: The Future of Liutex Theory' },
        { time: '15.30 – 16.00', program: 'Award Ceremony & Closing remarks' },
        { time: '16.00 – 17.30', program: 'Session 4: High-Order Methods in Fluid Dynamics' },
    ],
    day3: [
        { time: '9.00 – 10.30', program: 'Workshop: Hands-on Liutex Calculation Code' },
        { time: '10.30 – 11.00', program: 'Tea/Coffee Break' },
        { time: '11.00 – 12.30', program: 'Advanced Workshop: OpenFOAM & Liutex Integration' },
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
                        <h3 className="column-title">Session Topics</h3>
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
