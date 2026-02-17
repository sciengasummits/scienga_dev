import React, { useState, useEffect } from 'react';
import './VenueSection.css';

const venues = [
    {
        id: 1,
        // Earth from Space
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1920&q=80"
    },
    {
        id: 2,
        // Observatory
        image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=1920&q=80"
    },
    {
        id: 3,
        // Galaxy/Nebula
        image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=80"
    },
    {
        id: 4,
        // Mauna Kea Hawaii
        image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1920&q=80"
    }
];

const VenueSection = () => {
    const [activeVenue, setActiveVenue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveVenue((prev) => (prev + 1) % venues.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [activeVenue]); // Reset interval when activeVenue changes manually

    const goToVenue = (index) => {
        if (index !== activeVenue) {
            setActiveVenue(index);
        }
    };

    const goToPrev = () => {
        setActiveVenue((prev) => (prev - 1 + venues.length) % venues.length);
    };

    const goToNext = () => {
        setActiveVenue((prev) => (prev + 1) % venues.length);
    };

    return (
        <section className="venue" id="venue">
            <div className="venue__slides">
                {venues.map((venue, index) => (
                    <div
                        key={venue.id}
                        className={`venue__slide ${index === activeVenue ? 'active' : ''}`}
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
