import React from 'react';
import './SponsorsSection.css';

const sponsors = [
    {
        id: 1,
        name: 'Pfizer',
        type: 'Platinum Sponsor',
        description: 'Global leader in pharmaceutical innovation and preventive medicine',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?w=400&q=80',
        category: 'sponsor'
    },
    {
        id: 2,
        name: 'Mayo Clinic',
        type: 'Gold Sponsor',
        description: 'World-renowned medical research and healthcare institution',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80',
        category: 'sponsor'
    },
    {
        id: 3,
        name: 'Johnson & Johnson',
        type: 'Silver Sponsor',
        description: 'Leading healthcare company focused on community well-being',
        image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=400&q=80',
        category: 'sponsor'
    },
    {
        id: 5,
        name: 'WHO',
        type: 'Strategic Partner',
        description: 'World Health Organization leading international public health efforts',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80',
        category: 'partner'
    },
    {
        id: 6,
        name: 'UNICEF',
        type: 'Health Partner',
        description: 'Working for the rights and wellbeing of every child worldwide',
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80',
        category: 'partner'
    },
    {
        id: 7,
        name: 'Bill & Melinda Gates Foundation',
        type: 'Research Partner',
        description: 'Fighting poverty, disease, and inequity around the world',
        image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400&q=80',
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
