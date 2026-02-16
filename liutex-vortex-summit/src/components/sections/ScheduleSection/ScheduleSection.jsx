import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './ScheduleSection.css';

const sessionsList = [
    "Vortex Dynamics in Turbulence",
    "Bio-Fluid Mechanics Applications",
    "Deep Learning in Vortex Identification",
    "CFD & Experimental Fluids",
    "The Future of Liutex Theory",
    "Hands-on Liutex Calculation Code",
    "OpenFOAM & Liutex Integration"
];

const scheduleData = {
    day1: [
        { time: '08:30 - 09:00', program: 'Registration & Welcome Coffee' },
        { time: '09:00 - 09:30', program: 'Opening Ceremony: Evolution of Vortex Theory' },
        { time: '09:30 - 11:00', program: 'Keynote: Third Generation of Vortex Identification' },
        { time: '11:00 - 11:20', program: 'Tea/Coffee Break' },
        { time: '11:20 - 13:00', program: 'Plenary: Liutex vs. Vorticity in Shear Flow' },
        { time: '13:00 - 14:00', program: 'Lunch with Table Discussions' },
        { time: '14:00 - 15:40', program: 'Session 1: Vortex Dynamics in Turbulence' },
        { time: '15:40 - 16:00', program: 'Tea/Coffee Break' },
        { time: '16:00 - 17:30', program: 'Break Out Session I' },
    ],
    day2: [
        { time: '09:00 - 10:30', program: 'Deep Learning in Vortex Identification' },
        { time: '10:30 - 10:50', program: 'Tea/Coffee Break' },
        { time: '10:50 - 13:00', program: 'Keynote Session II' },
        { time: '13:00 - 14:00', program: 'Lunch Break' },
        { time: '14:00 - 15:30', program: 'Panel: The Future of Liutex Theory' },
        { time: '15:30 - 16:00', program: 'Refreshment Break' },
        { time: '16:00 - 17:30', program: 'Break Out Session II' },
    ],
    day3: [
        { time: '09:00 - 10:30', program: 'Workshop: Hands-on Liutex Calculation Code' },
        { time: '10:30 - 11:00', program: 'Refreshment Break' },
        { time: '11:00 - 12:30', program: 'Advanced Workshop: OpenFOAM & Liutex Integration' },
        { time: '12:30 - 13:30', program: 'Lunch' },
        { time: '13:30 - 15:00', program: 'Networking & Lab Tours' },
    ]
};

const ScheduleSection = () => {
    const [activeDay, setActiveDay] = useState('day1');
    const [activeSession, setActiveSession] = useState(sessionsList[0]);
    const navigate = useNavigate();

    return (
        <section className="schedule section-padding" id="schedule">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <div className="header-decoration"></div>
                    <h2 className="section-title">Conference Schedule</h2>
                    <div className="section-line"></div>
                </div>

                <div className="schedule-layout">
                    {/* Left Sidebar: Session List */}
                    <div className="sessions-sidebar">
                        <h3 className="sidebar-title">Session</h3>
                        <ul className="sessions-list">
                            {sessionsList.map((session, index) => (
                                <li
                                    key={index}
                                    className={`session-item ${activeSession === session ? 'active' : ''}`}
                                    onClick={() => setActiveSession(session)}
                                >
                                    {session}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Content: Schedule Timeline */}
                    <div className="schedule-content-wrapper">
                        {/* Day Tabs */}
                        <div className="day-tabs">
                            {['day1', 'day2', 'day3'].map((day, index) => (
                                <button
                                    key={day}
                                    className={`day-tab ${activeDay === day ? 'active' : ''}`}
                                    onClick={() => setActiveDay(day)}
                                >
                                    Day {index + 1}
                                </button>
                            ))}
                        </div>

                        {/* Timeline */}
                        <div className="timeline-container fade-in">
                            {scheduleData[activeDay].map((item, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-time">{item.time}</div>
                                    <div className="timeline-content">
                                        <span className="timeline-program">{item.program}</span>
                                    </div>
                                </div>
                            ))}

                            {/* Brochure Button (Positioned relatively or absolutely as per design) */}

                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScheduleSection;
