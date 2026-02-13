import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ScheduleSection.css';

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
        { time: '9.00 – 10.30', program: 'Deep Learning in Vortex Identification' },
        { time: '10.30 – 10.50', program: 'Tea/Coffee Break' },
        { time: '10.50 – 13.00', program: 'Poster Presentations: CFD & Experimental Fluids' },
        { time: '13.00 – 14.00', program: 'Lunch Break' },
        { time: '14.00 – 15.30', program: 'Panel: The Future of Liutex Theory' },
        { time: '15.30 – 16.00', program: 'Awards Ceremony & Closing Remarks' },
    ],
    day3: [
        { time: '9.00 – 10.30', program: 'Workshop: Hands-on Liutex Calculation Code' },
        { time: '10.30 – 11.00', program: 'Tea/Coffee Break' },
        { time: '11.00 – 12.30', program: 'Advanced Workshop: OpenFOAM & Liutex Integration' },
        { time: '12.30 – 13.30', program: 'Lunch' },
        { time: '13.30 – 15.00', program: 'Networking & Lab Tours' },
    ]
};

const ScheduleSection = () => {
    const [activeDay, setActiveDay] = useState('day1');
    const navigate = useNavigate();

    return (
        <section className="schedule section-padding" id="schedule">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <h2 className="section-title">Program Schedule</h2>
                    <div className="section-line"></div>
                </div>

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
                    <div className="schedule__table-container demo-container">
                        <table className="schedule__table">
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Session Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {scheduleData[activeDay].slice(0, 6).map((item, index) => (
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
                        {/* Fade Effect Overlay */}
                        <div className="schedule-fade-overlay"></div>
                    </div>

                    <div className="text-center mt-4">
                        <button className="btn-view-schedule" onClick={() => navigate('/sessions')}>
                            View Full Schedule
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScheduleSection;
