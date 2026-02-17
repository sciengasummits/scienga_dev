import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import './HeroSection.css';

const HeroSection = () => {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = React.useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    React.useEffect(() => {
        const targetDate = new Date('July 15, 2026 09:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    const handleDownloadBrochure = () => {
        navigate('/brochure');
    };

    return (
        <section className="hero">
            <div className="hero__overlay"></div>
            <div className="container hero__container">
                <div className="hero__content hero-content-entry">
                    <h2 className="hero__title">
                        <span className="hero__title-sub"><b>GLOBAL SUMMIT ON</b></span>
                        ASTRONOMY, ASTROPHYSICS
                        & SPACE SCIENCE
                    </h2>

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
                        Exploring the Final Frontier: Join world-leading astronomers, astrophysicists, and space explorers as we uncover the mysteries of the universe.
                    </p>
                    <div className="hero__actions">
                        <Button variant="primary" onClick={() => navigate('/register')}>REGISTER NOW</Button>
                        <Button variant="primary" onClick={handleDownloadBrochure}>BROCHURE</Button>
                        <Button variant="primary" onClick={() => navigate('/abstract-submission')}>SUBMIT ABSTRACT</Button>
                    </div>
                </div>

                <div className="hero__info-cards">
                    <div className="info-card date-card">
                        <h3>July</h3>
                        <p>15-17, 2026</p>
                    </div>

                    <div className="info-card venue-card">
                        <h3>Venue</h3>
                        <p>Mauna Kea Center</p>
                        <p>Hawaii, USA</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
