import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Import meeting images
import meeting1 from '../../assets/images/meetings/1.jpg'
import meeting2 from '../../assets/images/meetings/2.jpg'
import meeting3 from '../../assets/images/meetings/3.jpg'
import meeting4 from '../../assets/images/meetings/4.jpg'
import meeting5 from '../../assets/images/meetings/5.jpg'
import meeting6 from '../../assets/images/meetings/6.jpg'
import meeting7 from '../../assets/images/meetings/7.jpg'
import meeting8 from '../../assets/images/meetings/8.jpg'
import meeting9 from '../../assets/images/meetings/9.jpg'
import meeting10 from '../../assets/images/meetings/10.jpg'
import meeting11 from '../../assets/images/meetings/11.jpg'
import meeting12 from '../../assets/images/meetings/12.jpg'
import meeting13 from '../../assets/images/meetings/13.jpg'

const meetingsData = {
    2026: [
        {
            id: 1,
            title: "POLYMATSUMMIT2026",
            description: "Global Summit on Polymers and Composite Materials",
            location: "AMSTERDAM, NETHERLANDS",
            date: "NOVEMBER 16-18, 2026",
            image: meeting1
        },
        {
            id: 2,
            title: "ADVANCENANOSUMMIT2026",
            description: "Global Summit on Advanced Materials and Nanotechnology",
            location: "AMSTERDAM, NETHERLANDS",
            date: "NOVEMBER 16-18, 2026",
            image: meeting2
        },
        {
            id: 3,
            title: "OPTICPHOTONSUMMIT2026",
            description: "Global Summit on Optics, Photonics and Laser Technology",
            location: "AMSTERDAM, NETHERLANDS",
            date: "NOVEMBER 16-18, 2026",
            image: meeting3
        },
        {
            id: 4,
            title: "CROPSCIENGSUMMIT2026",
            description: "Global Summit on Crop Science and Engineering",
            location: "MARINA BAY, SINGAPORE",
            date: "DECEMBER 07-09, 2026",
            image: meeting4
        },
        {
            id: 5,
            title: "CIVILENVSUMMIT2026",
            description: "Global Summit on Civil Structural and Environmental Science",
            location: "MARINA BAY, SINGAPORE",
            date: "DECEMBER 07-09, 2026",
            image: meeting5
        },
        {
            id: 6,
            title: "FOODAGRISUMMIT2026",
            description: "Global Summit on Food Science Technology and Agriclulture",
            location: "MARINA BAY, SINGAPORE",
            date: "DECEMBER 07-09, 2026",
            image: meeting6
        }
    ],
    2027: [
        {
            id: 7,
            title: "RENECLIMSUMMIT2026",
            description: "Global Summit on Renewable Energy and Climate Change",
            location: "MUNICH, GERMANY",
            date: "MARCH 23-25, 2027",
            image: meeting7
        },
        {
            id: 8,
            title: "POWERENGSUMMIT2026",
            description: "Global Summit on Power Energy and Electrical Engineering",
            location: "MUNICH, GERMANY",
            date: "MARCH 23-25, 2027",
            image: meeting8
        },
        {
            id: 9,
            title: "CLEANENGTECHSUMMIT2026",
            description: "Global Summit on Clean Energy and Sustainable Technologies",
            location: "MUNICH, GERMANY",
            date: "MARCH 23-25, 2027",
            image: meeting9
        },
        {
            id: 10,
            title: "ASTROSPACESUMMIT2026",
            description: "Global Summit on Astronomy, Astrophysics and Space Science",
            location: "TOKYO, JAPAN",
            date: "APRIL 12-14, 2027",
            image: meeting10
        },
        {
            id: 11,
            title: "LIUTEXVORTEXSUMMIT2026",
            description: "Global Summit on Liutex and Vortex Identification",
            location: "TOKYO, JAPAN",
            date: "APRIL 12-14, 2027",
            image: meeting11
        },
        {
            id: 12,
            title: "AIROBOTMLSUMMIT2026",
            description: "Global Summit on AI, Robotics, and Machine Learning",
            location: "SEOUL, SOUTH KOREA",
            date: "MAY 10-12, 2027",
            image: meeting12
        },
        {
            id: 13,
            title: "CONDENSEDPHYSSUMMIT2026",
            description: "Global Summit on Condensed Matter & Applied Physics",
            location: "SEOUL, SOUTH KOREA",
            date: "MAY 10-12, 2027",
            image: meeting13
        },
        {
            id: 14,
            title: "CYBERQUANTUMSUMMIT2026",
            description: "Global Summit on Cybersecurity and Quantum Computing",
            location: "SEOUL, SOUTH KOREA",
            date: "MAY 10-12, 2027",
            image: meeting11
        },
        {
            id: 15,
            title: "HEALTHMEDSUMMIT2026",
            description: "Global Summit on Public Health and Preventive Medicine",
            location: "LONDON, UK",
            date: "JUNE 07-09, 2027",
            image: meeting12
        }
    ],
    2028: [
        {
            id: 16,
            title: "FLUIDTURBOSUMMIT2026",
            description: "Global Summit on Fluid Mechanics and Turbomachinery",
            location: "TOKYO, JAPAN",
            date: "APRIL 12-14, 2028",
            image: meeting13
        }
    ]
}

export default function MeetingsSection() {
    const primaryColor = 'var(--primary)'
    const allMeetings = Object.values(meetingsData).flat();

    return (
        <section id="meetings" style={{ padding: '6rem 0', backgroundColor: '#f8fafc' }}>
            <div className="container">

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>

                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                        fontWeight: '800',
                        color: '#0f172a',
                        marginBottom: '1rem',
                        lineHeight: '1.2'
                    }}>
                        Upcoming <span style={{ color: primaryColor }}>Conferences</span>
                    </h2>
                    <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Join leading experts and researchers at our premier international conferences.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="meetings-grid">
                    {allMeetings.map((meeting) => (
                        <div key={meeting.id}
                            className="meeting-card"
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                            }}
                        >
                            {/* Card Image */}
                            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                <img
                                    src={meeting.image}
                                    alt={meeting.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    padding: '6px 12px',
                                    borderRadius: '8px',
                                    fontSize: '0.75rem',
                                    fontWeight: '700',
                                    color: '#0f172a',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                }}>
                                    {meeting.date.split(',')[0]} {/* Short date */}
                                </div>
                            </div>

                            {/* Card Content */}
                            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                {/* Location */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.75rem', color: primaryColor, fontSize: '0.85rem', fontWeight: '600' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: '16px', height: '16px' }}>
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    {meeting.location}
                                </div>

                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '700',
                                    color: '#0f172a',
                                    marginBottom: '0.75rem',
                                    lineHeight: '1.3'
                                }}>
                                    {meeting.title}
                                </h3>

                                <p style={{
                                    color: '#64748b',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    marginBottom: '1.5rem',
                                    flexGrow: 1
                                }}>
                                    {meeting.description.length > 80 ? meeting.description.substring(0, 80) + '...' : meeting.description}
                                </p>

                                <Link to="#" style={{
                                    alignSelf: 'start',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    backgroundColor: primaryColor,
                                    color: 'white',
                                    fontWeight: '600',
                                    fontSize: '1rem',
                                    textDecoration: 'none',
                                    padding: '12px 24px',
                                    borderRadius: '50px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                                        e.currentTarget.style.filter = 'brightness(110%)';
                                        e.currentTarget.querySelector('span').style.transform = 'translateX(4px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                                        e.currentTarget.style.filter = 'brightness(100%)';
                                        e.currentTarget.querySelector('span').style.transform = 'translateX(0)';
                                    }}
                                >
                                    Learn More <span style={{ fontSize: '1.2rem', transition: 'transform 0.3s ease' }}>→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
