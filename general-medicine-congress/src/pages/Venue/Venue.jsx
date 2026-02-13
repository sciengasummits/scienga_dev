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
            name: 'Grand Palace',
            distance: '3.5 km',
            image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80'
        },
        {
            name: 'Wat Pho Temple',
            distance: '2.8 km',
            image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400&q=80'
        },
        {
            name: 'Chatuchak Market',
            distance: '8.2 km',
            image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=400&q=80'
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
                            <h4 className="section-subtitle">Discover Bangkok</h4>
                            <h2 className="section-title">About the Host City</h2>
                            <p className="city-description">
                                Bangkok, Thailand's capital, is a vibrant metropolis known for its rich cultural heritage,
                                world-class hospitality, and modern infrastructure. The city seamlessly blends ancient
                                temples with contemporary skyscrapers, offering visitors a unique experience.
                            </p>
                            <p className="city-description">
                                As one of Asia's premier conference destinations, Bangkok provides excellent connectivity,
                                diverse accommodation options, and a wide range of dining and entertainment venues. The
                                city's tropical climate and warm hospitality make it an ideal location for international
                                medical conferences.
                            </p>
                            <div className="city-stats">
                                <div className="stat-box">
                                    <h3>10M+</h3>
                                    <p>Population</p>
                                </div>
                                <div className="stat-box">
                                    <h3>25°C</h3>
                                    <p>Avg. Temperature</p>
                                </div>
                                <div className="stat-box">
                                    <h3>GMT+7</h3>
                                    <p>Time Zone</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-city-image">
                            <img
                                src="https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80"
                                alt="Bangkok City"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Attractions */}
            <section className="nearby-attractions section-padding">
                <div className="container">
                    <div className="text-center mb-5">
                        <h4 className="section-subtitle">Explore Bangkok</h4>
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
            <section className="venue-cta section-padding" style={{ background: 'var(--color-primary-gradient)' }}>
                <div className="container text-center">
                    <h2 className="cta-title" style={{ color: 'white', marginBottom: '1rem' }}>
                        Ready to Join Us?
                    </h2>
                    <p className="cta-desc" style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Secure your spot at the World General Medicine Congress and be part of this transformative event
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
