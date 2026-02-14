import React, { useState, useEffect } from 'react';
import './VenueSection.css';

const venues = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&q=80"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?w=1920&q=80"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1920&q=80"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1505881402582-c5bc11054f91?w=1920&q=80"
    }
];

const VenueSection = () => {
    const [activeVenue, setActiveVenue] = useState(0);
    const [direction, setDirection] = useState('next');

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection('next');
            setActiveVenue((prev) => (prev + 1) % venues.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToVenue = (index) => {
        if (index !== activeVenue) {
            setDirection(index > activeVenue ? 'next' : 'prev');
            setActiveVenue(index);
        }
    };

    const goToPrev = () => {
        setDirection('prev');
        setActiveVenue((prev) => (prev - 1 + venues.length) % venues.length);
    };

    const goToNext = () => {
        setDirection('next');
        setActiveVenue((prev) => (prev + 1) % venues.length);
    };

    return (
        <section className="venue" id="venue">
            <div className="venue__slides">
                {venues.map((venue, index) => (
                    <div
                        key={venue.id}
                        className={`venue__slide ${index === activeVenue ? 'active' : ''} ${index === activeVenue ? direction : ''}`}
                        style={{ backgroundImage: `url(${venue.image})` }}
                    >
                    </div>
                ))}
            </div>

            <div className="venue__controls-bottom">
                <button className="venue__arrow venue__arrow--left" onClick={goToPrev}>
                    ‹
                </button>

                <div className="venue__indicators">
                    {venues.map((_, index) => (
                        <button
                            key={index}
                            className={`venue__indicator ${index === activeVenue ? 'active' : ''}`}
                            onClick={() => goToVenue(index)}
                        />
                    ))}
                </div>

                <button className="venue__arrow venue__arrow--right" onClick={goToNext}>
                    ›
                </button>
            </div>
        </section>
    );
};

export default VenueSection;
