import React, { useState, useEffect } from 'react';
import './VenueSection.css';

const venues = [
    {
        id: 1,
        // Lake Geneva/Switzerland
        image: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=1920&q=80"
    },
    {
        id: 2,
        // Medical Research Lab
        image: "https://images.unsplash.com/photo-1579154235602-3c328909d73d?w=1920&q=80"
    },
    {
        id: 3,
        // Healthcare Professional/Conference
        image: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?w=1920&q=80"
    },
    {
        id: 4,
        // Geneva Cityscape
        image: "https://images.unsplash.com/photo-1589416521016-16013a525410?w=1920&q=80"
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
