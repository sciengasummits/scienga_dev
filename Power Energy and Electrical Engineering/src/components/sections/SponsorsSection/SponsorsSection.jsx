import React from 'react';
import './SponsorsSection.css';

const sponsors = [
    {
        id: 1,
        name: 'GridTech Solutions',
        type: 'Platinum Sponsor',
        description: 'Leading provider of smart grid technology',
        image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&q=80',
        category: 'sponsor'
    },
    {
        id: 2,
        name: 'Global Power Corp',
        type: 'Gold Sponsor',
        description: 'International power generation and distribution',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80',
        category: 'sponsor'
    },
    {
        id: 3,
        name: 'EcoEnergy Systems',
        type: 'Silver Sponsor',
        description: 'Sustainable energy management solutions',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80',
        category: 'sponsor'
    },
    {
        id: 5,
        name: 'World Energy Council',
        type: 'Strategic Partner',
        description: 'Global energy leadership organization',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80',
        category: 'partner'
    },
    {
        id: 6,
        name: 'Institute of Electrical Engineers',
        type: 'Academic Partner',
        description: 'Advancing electrical engineering worldwide',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80',
        category: 'partner'
    },
    {
        id: 7,
        name: 'Renewable Power Alliance',
        type: 'Research Partner',
        description: 'Collaborative renewable energy research',
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&q=80',
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
