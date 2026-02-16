import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import './HeroSection.css';

const HeroSection = () => {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('December 14, 2026 09:00:00').getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            } else {
                clearInterval(interval);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero">
            <div className="hero__overlay"></div>
            <div className="container hero__container">
                <div className="hero__content">
                    <h1 className="hero__title">
                        <span className="hero__title-sub">GLOBAL SUMMIT ON</span>
                        <span className="hero__title-main">LIUTEX THEORY</span>
                        <span className="hero__title-secondary">IN VORTEX DYNAMICS</span>
                    </h1>

                    <div className="hero__countdown">
                        <div className="countdown-item">
                            <span className="countdown-value">{timeLeft.days}</span>
                            <span className="countdown-label">Days</span>
                        </div>
                        <div className="countdown-item">
                            <span className="countdown-value">{timeLeft.hours}</span>
                            <span className="countdown-label">Hours</span>
                        </div>
                        <div className="countdown-item">
                            <span className="countdown-value">{timeLeft.minutes}</span>
                            <span className="countdown-label">Minutes</span>
                        </div>
                        <div className="countdown-item">
                            <span className="countdown-value">{timeLeft.seconds}</span>
                            <span className="countdown-label">Seconds</span>
                        </div>
                    </div>

                    <p className="hero__desc">
                        Join us at the Global Summit on Liutex Theory and Applications in Vortex Identification
                        and Vortex Dynamics. Explore ground-breaking research, connect with top professionals,
                        and discuss the future of vortex dynamics.
                    </p>

                    <div className="hero__actions">
                        <Button onClick={() => navigate('/brochure')}>
                            DOWNLOAD BROCHURE
                        </Button>
                        <Button onClick={() => navigate('/register')}>
                            REGISTER NOW
                        </Button>
                        <Button onClick={() => navigate('/abstract-submission')}>
                            SUBMIT ABSTRACT
                        </Button>
                    </div>
                </div>

                <div className="hero__info-cards-wrapper">
                    <div className="hero__info-cards overlapping-style">
                        <div className="info-card date-card">
                            <h3>December</h3>
                            <p>14-16, 2026</p>
                        </div>

                        <div className="info-card venue-card">
                            <h3>Venue</h3>
                            <div className="venue-details">
                                <p className="venue-label">Event Venue: Outram</p>
                                <p className="venue-location">Singapore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
