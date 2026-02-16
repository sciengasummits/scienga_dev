import React from 'react';
import VenueSection from '../../components/sections/VenueSection/VenueSection';
import Button from '../../components/common/Button/Button';
import './Venue.css';

const Venue = () => {
    const venueFeatures = [
        {
            title: 'World-Class Facilities',
            description: 'State-of-the-art conference halls equipped with the latest audio-visual technology'
        },
        {
            title: 'Catering Services',
            description: 'International cuisine and refreshments throughout the conference'
        },
        {
            title: 'Easy Access',
            description: 'Convenient location with excellent public transport connections'
        },
        {
            title: 'High-Speed WiFi',
            description: 'Complimentary high-speed internet access throughout the venue'
        },
        {
            title: 'Parking Available',
            description: 'Ample parking space for all attendees'
        },
        {
            title: 'Accessibility',
            description: 'Fully accessible facilities for all participants'
        }
    ];

    const nearbyAttractions = [
        {
            name: 'Deutsches Museum',
            distance: '1.2 km',
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
        },
        {
            name: 'BMW Welt',
            distance: '4.5 km',
            image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80"
        },
        {
            name: 'Olympiapark',
            distance: '4.0 km',
            image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80"
        }
    ];

    return (
        <div className="venue-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Event Venue</h1>
                    <p className="page-breadcrumb">Home / Venue</p>
                </div>
            </div>

            <VenueSection />

            {/* Venue Features Section */}
            <section className="venue-features section-padding">
                <div className="container">
                    <div className="text-center mb-5">
                        <h4 className="section-subtitle">Venue Amenities</h4>
                        <h2 className="section-title">Why Choose Our Venue</h2>
                        <p className="section-desc">
                            Experience world-class facilities designed for international conferences
                        </p>
                    </div>

                    <div className="features-grid">
                        {venueFeatures.map((feature, index) => (
                            <div className="feature-card" key={index}>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-desc">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About the City Section */}
            <section className="about-city section-padding" style={{ background: 'var(--color-bg-light)' }}>
                <div className="container">
                    <div className="about-city-content">
                        <div className="about-city-text">
                            <h4 className="section-subtitle">Discover Munich</h4>
                            <h2 className="section-title">About the Host City</h2>
                            <p className="city-description">
                                Munich is the capital of Bavaria and one of Germany’s most popular destinations. Known for its
                                rich history, stunning architecture, and vibrant culture, the city seamlessly blends
                                traditional Bavarian charm with modern innovation.
                            </p>
                            <p className="city-description">
                                As a major European hub for technology and research, Munich provides world-class
                                conference facilities and excellent infrastructure. Visitors can explore centuries-old
                                buildings, numerous museums, and the famous English Garden, making it an ideal location
                                for international summits.
                            </p>
                            <div className="city-stats">
                                <div className="stat-box">
                                    <h3>1.5M+</h3>
                                    <p>Population</p>
                                </div>
                                <div className="stat-box">
                                    <h3>14°C</h3>
                                    <p>Avg. Temperature</p>
                                </div>
                                <div className="stat-box">
                                    <h3>GMT+1</h3>
                                    <p>Time Zone</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-city-image">
                            <img
                                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80"
                                alt="International Congress Center Munich"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Attractions */}
            <section className="nearby-attractions section-padding">
                <div className="container">
                    <div className="text-center mb-5">
                        <h4 className="section-subtitle">Explore Munich</h4>
                        <h2 className="section-title">Nearby Attractions</h2>
                        <p className="section-desc">
                            Make the most of your visit with these must-see destinations
                        </p>
                    </div>

                    <div className="attractions-grid">
                        {nearbyAttractions.map((attraction, index) => (
                            <div className="attraction-card" key={index}>
                                <div className="attraction-image">
                                    <img src={attraction.image} alt={attraction.name} />
                                    <div className="attraction-distance">{attraction.distance}</div>
                                </div>
                                <div className="attraction-info">
                                    <h3>{attraction.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Venue;
