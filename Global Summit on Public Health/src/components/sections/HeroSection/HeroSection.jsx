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
        const targetDate = new Date('October 26, 2026 09:00:00').getTime();

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
                        PUBLIC  HEALTH
                        & PREVENTIVE MEDICINE
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
                        Join global healthcare leaders, researchers, and policymakers. Together, we shape a healthier and more resilient future.
                    </p>
                    <div className="hero__actions">
                        <Button variant="primary" onClick={() => navigate('/register')}>REGISTER NOW</Button>
                        <Button variant="primary" onClick={handleDownloadBrochure}>BROCHURE</Button>
                        <Button variant="primary" onClick={() => navigate('/abstract-submission')}>SUBMIT ABSTRACT</Button>
                    </div>
                </div>

                <div className="hero__info-cards">
                    <div className="info-card date-card">
                        <h3>October</h3>
                        <p>26-28, 2026</p>
                    </div>

                    <div className="info-card venue-card">
                        <h3>Venue</h3>
                        <p>Congress Center</p>
                        <p>Switzerland</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
