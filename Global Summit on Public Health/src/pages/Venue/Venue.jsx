import React from 'react';
import VenueSection from '../../components/sections/VenueSection/VenueSection';
import Button from '../../components/common/Button/Button';
import './Venue.css';

const Venue = () => {
    const venueFeatures = [
        {
            title: 'Medical Research Wing',
            description: 'State-of-the-art facilities for high-impact medical research and collaborative study.'
        },
        {
            title: 'International Health Banquet',
            description: 'Premium dining hosting global health delegates with locally sourced Swiss cuisine.'
        },
        {
            title: 'Digital Health Innovation Hub',
            description: 'Showcasing the latest in telemedicine, health informatics, and diagnostic technology.'
        },
        {
            title: 'Global Health Connectivity',
            description: 'High-speed secure networking for real-time international data exchange and collaboration.'
        },
        {
            title: 'Health Protocol Standards',
            description: 'Integrated health and safety measures ensuring a secure environment for all delegates.'
        },
        {
            title: 'Eco-Friendly Excellence',
            description: 'Sustainability-focused venue minimizing carbon footprint and promoting environmental health.'
        }
    ];

    const nearbyAttractions = [
        {
            name: 'Jet d’Eau',
            distance: '1.5 km',
            image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&q=80'
        },
        {
            name: 'Palace of Nations',
            distance: '3.2 km',
            image: 'https://images.unsplash.com/photo-1589416521016-16013a525410?w=400&q=80'
        },
        {
            name: 'Lake Geneva',
            distance: '0.5 km',
            image: 'https://images.unsplash.com/photo-1541310582613-33bc0a094e1d?w=400&q=80'
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

            <div className="reveal-on-scroll">
                <VenueSection />
            </div>

            {/* Venue Features Section */}
            <section className="venue-features section-padding reveal-on-scroll">
                <div className="container">
                    <div className="text-center mb-5">
                        <h4 className="section-subtitle">Venue Amenities</h4>
                        <h2 className="section-title">Why Choose Our Venue</h2>
                        <p className="section-desc">
                            Experience world-class facilities designed for international health conferences
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
            <section className="about-city section-padding reveal-on-scroll">
                <div className="container">
                    <div className="about-city-content">
                        <div className="about-city-text">
                            <h4 className="section-subtitle">Discover Geneva</h4>
                            <h2 className="section-title">About the Host City</h2>
                            <p className="city-description">
                                Geneva is a global center for diplomacy and health, hosting the World Health Organization (WHO) and numerous international NGOs. Known for its precision and neutrality, it provides the ideal environment for advancing global public health dialogue.
                            </p>
                            <p className="city-description">
                                Nestled by the stunning Lake Geneva, the city harmonizes international governance with breathtaking natural beauty. It remains a pinnacle of security and scientific pursuit in the heart of Europe.
                            </p>
                            <div className="city-stats">
                                <div className="stat-box">
                                    <h3>200k+</h3>
                                    <p>Population</p>
                                </div>
                                <div className="stat-box">
                                    <h3>15°C</h3>
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
                                src="https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&q=80"
                                alt="Geneva City"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Attractions */}
            <section className="nearby-attractions section-padding reveal-on-scroll">
                <div className="container">
                    <div className="text-center mb-5">
                        <h4 className="section-subtitle">Explore Geneva</h4>
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

            {/* CTA Section */}
            <section className="venue-cta section-padding" style={{ background: 'var(--color-orange-gradient)' }}>
                <div className="container text-center">
                    <h2 className="cta-title" style={{ color: 'white', marginBottom: '1rem' }}>
                        Ready to Join Us?
                    </h2>
                    <p className="cta-desc" style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Secure your spot at the Global Summit on Public Health and Preventive Medicine and be part of this transformative event
                    </p>
                    <Button variant="outline" style={{ borderColor: 'white', color: 'white', background: 'transparent' }}>
                        Register Now
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Venue;
