import React from 'react';
import './SponsorsSection.css';

const sponsors = [
    {
        id: 1,
        name: 'Computational Fluids Inc.',
        type: 'Platinum Sponsor',
        description: 'Advanced CFD simulation software provider',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
        category: 'sponsor'
    },
    {
        id: 2,
        name: 'Aerospace Dynamics',
        type: 'Gold Sponsor',
        description: 'Next-gen aerospace engineering solutions',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80',
        category: 'sponsor'
    },
    {
        id: 3,
        name: 'Marine Hydro Systems',
        type: 'Silver Sponsor',
        description: 'Innovative marine propulsion technologies',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80',
        category: 'sponsor'
    },
    {
        id: 5,
        name: 'Intl. Association of Fluid Mechanics',
        type: 'Strategic Partner',
        description: 'Global network of fluid dynamics researchers',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80',
        category: 'partner'
    },
    {
        id: 6,
        name: 'Journal of Vortex Science',
        type: 'Academic Partner',
        description: 'Publishing breakthrough vortex research',
        image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=400&q=80',
        category: 'partner'
    },
    {
        id: 7,
        name: 'Asian Society of Mechanics',
        type: 'Research Partner',
        description: 'Promoting mechanical sciences in Asia',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80',
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
