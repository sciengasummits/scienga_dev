import React from 'react';
import VenueSection from '../../components/sections/VenueSection/VenueSection';
import Button from '../../components/common/Button/Button';
import './Venue.css';

const Venue = () => {
    const venueFeatures = [
        {
            title: 'Astronometric Data Center',
            description: 'State-of-the-art facilities for high-speed cosmic data processing and collaborative research.'
        },
        {
            title: 'Interstellar Banquet Hall',
            description: 'Premium dining hosting global astronomy delegates with curated Hawaiian-inspired cuisine.'
        },
        {
            title: 'Cosmic Exhibition Wing',
            description: 'Showcasing the latest in telescope technology, satellite instrumentation, and space robotics.'
        },
        {
            title: 'Deep Space Networking Hub',
            description: 'High-speed secure connectivity for real-time astronomical data exchange with global observatories.'
        },
        {
            title: 'Celestial Observation Deck',
            description: 'A rooftop facility equipped with professional-grade telescopes for night sky monitoring.'
        },
        {
            title: 'Eco-Cosmic Excellence',
            description: 'Sustainability-focused venue minimizing light pollution and promoting environmental stewardship of the Pacific.'
        }
    ];

    const nearbyAttractions = [
        {
            name: 'Mauna Kea Observatory',
            distance: '15 km',
            image: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=800&q=80'
        },
        {
            name: 'Hawaii Volcanoes NP',
            distance: '45 km',
            image: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?w=400&q=80'
        },
        {
            name: 'Akaka Falls',
            distance: '20 km',
            image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&q=80'
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
                            Experience world-class facilities designed for international astronomy and space science conferences
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
                            <h4 className="section-subtitle">Discover Hawaii</h4>
                            <h2 className="section-title">About the Host Location</h2>
                            <p className="city-description">
                                Hawaii is a premier global hub for astronomical research, hosting the world's most sophisticated observatories on the summit of Mauna Kea. Its unique geography and clear skies provide an unparalleled window into the universe.
                            </p>
                            <p className="city-description">
                                Nestled in the heart of the Pacific, the Big Island offers a breathtaking landscape of volcanic peaks and lush rainforests, making it the perfect backdrop for exploring the mysteries of the cosmos.
                            </p>
                            <div className="city-stats">
                                <div className="stat-box">
                                    <h3>200k+</h3>
                                    <p>Population</p>
                                </div>
                                <div className="stat-box">
                                    <h3>22°C</h3>
                                    <p>Avg. Temperature</p>
                                </div>
                                <div className="stat-box">
                                    <h3>GMT-10</h3>
                                    <p>Time Zone</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-city-image">
                            <img
                                src="https://images.unsplash.com/photo-1507876466345-c6a8b2831997?w=800&q=80"
                                alt="Hawaii Coast"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Attractions */}
            <section className="nearby-attractions section-padding reveal-on-scroll">
                <div className="container">
                    <div className="text-center mb-5">
                        <h4 className="section-subtitle">Explore Hawaii</h4>
                        <h2 className="section-title">Nearby Attractions</h2>
                        <p className="section-desc">
                            Make the most of your visit with these iconic natural wonders
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
                        Ready to Explore the Cosmos?
                    </h2>
                    <p className="cta-desc" style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Secure your spot at the Global Summit on Astronomy, Astrophysics and Space Science and be part of this cosmic journey
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
