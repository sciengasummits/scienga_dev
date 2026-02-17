import React from 'react';
import './SponsorsSection.css';

const sponsors = [
    {
        id: 1,
        name: 'SpaceX',
        type: 'Platinum Sponsor',
        description: 'Leading the future of reusable rocket technology and multi-planetary life',
        image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=400&q=80',
        category: 'sponsor'
    },
    {
        id: 2,
        name: 'Blue Origin',
        type: 'Gold Sponsor',
        description: 'Developing infrastructure for human expansion into the solar system',
        image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=400&q=80',
        category: 'sponsor'
    },
    {
        id: 3,
        name: 'Lockheed Martin',
        type: 'Silver Sponsor',
        description: 'Global security and aerospace company advancing space exploration',
        image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=400&q=80',
        category: 'sponsor'
    },
    {
        id: 5,
        name: 'NASA',
        type: 'Strategic Partner',
        description: 'The National Aeronautics and Space Administration leading US space efforts',
        image: 'https://images.unsplash.com/photo-1614728263952-84ea206f99b6?w=400&q=80',
        category: 'partner'
    },
    {
        id: 6,
        name: 'ESA',
        type: 'Scientific Partner',
        description: 'European Space Agency coordinating Europe’s exploration of space',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80',
        category: 'partner'
    },
    {
        id: 7,
        name: 'The Planetary Society',
        type: 'Research Partner',
        description: 'Empowering the world\'s citizens to advance space science and exploration',
        image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=400&q=80',
        category: 'partner'
    },
];

const SponsorsSection = () => {
    const sponsorsList = sponsors.filter(s => s.category === 'sponsor');
    const partnersList = sponsors.filter(s => s.category === 'partner');

    return (
        <section className="sponsors section-padding" id="sponsors">
            <div className="container">

                {/* Sponsors */}
                <div className="sponsors__category">
                    <h3 className="sponsors__category-title">Collaborators</h3>
                    <div className="sponsors__grid">
                        {sponsorsList.map((sponsor) => (
                            <div className="sponsor-card" key={sponsor.id}>
                                <div className="sponsor-card__image">
                                    <img src={sponsor.image} alt={sponsor.name} />
                                </div>
                                <div className="sponsor-card__content">
                                    <span className="sponsor-card__type">{sponsor.type}</span>
                                    <h4 className="sponsor-card__name">{sponsor.name}</h4>
                                    <p className="sponsor-card__desc">{sponsor.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Partners */}
                <div className="sponsors__category">
                    <h3 className="sponsors__category-title">Partners</h3>
                    <div className="sponsors__grid">
                        {partnersList.map((partner) => (
                            <div className="sponsor-card" key={partner.id}>
                                <div className="sponsor-card__image">
                                    <img src={partner.image} alt={partner.name} />
                                </div>
                                <div className="sponsor-card__content">
                                    <span className="sponsor-card__type">{partner.type}</span>
                                    <h4 className="sponsor-card__name">{partner.name}</h4>
                                    <p className="sponsor-card__desc">{partner.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SponsorsSection;
