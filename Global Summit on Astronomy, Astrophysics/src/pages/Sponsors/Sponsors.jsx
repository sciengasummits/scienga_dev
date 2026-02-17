import React from 'react';
import SponsorsSection from '../../components/sections/SponsorsSection/SponsorsSection';
import Button from '../../components/common/Button/Button';
import { CheckCircle } from 'lucide-react';
import './Sponsors.css';

const sponsorshipPackages = [
    {
        tier: 'Platinum Sponsorship',
        price: '$5000',
        benefits: [
            '4 Complimentary registrations',
            'Complementary workshop',
            'Complimentary Lunch and Coffee Break',
            'Acknowledgement during the opening and closing ceremony',
            'Logo in website with hyperlink',
            'Logo in social media pages',
            'Logo in all promotional materials (flyers, posters, etc.)',
            '15 minutes presentation/address to the audience'
        ]
    },
    {
        tier: 'Gold Sponsorship',
        price: '$4000',
        benefits: [
            '3 Complimentary registrations',
            'Complimentary Lunch and Coffee Break',
            'Acknowledgement during the opening and closing ceremony',
            'Logo in website with hyperlink',
            'Logo in social media pages',
            'Logo in all promotional materials (flyers, posters, etc.)'
        ]
    },
    {
        tier: 'Silver Sponsorship',
        price: '$3000',
        benefits: [
            '2 Complimentary registrations',
            'Complimentary Lunch and Coffee Break',
            'Acknowledgement during the opening and closing ceremony',
            'Logo in website with hyperlink',
            'Logo in social media pages',
            'Logo in all promotional materials (flyers, posters, etc.)'
        ]
    },
    {
        tier: 'Exhibitor / Table Exhibit',
        price: '$2500',
        benefits: [
            '2 Complimentary registrations',
            '1 Table in exhibition area',
            'Direct interactions with participants',
            'Logo in website with hyperlink',
            'Logo in social media pages',
            'Logo in all promotional materials (flyers, posters, etc.)'
        ]
    }
];

const Sponsors = () => {
    return (
        <div className="sponsors-page">
            <div className="page-header" style={{ marginTop: '0' }}>
                <div className="container">
                    <h1 className="page-title">Sponsorship & Exhibitors</h1>
                    <p className="page-breadcrumb">Home / Sponsorship</p>
                </div>
            </div>

            <div className="container">
                <div className="sponsorship-header">
                    <h2>Sponsorship & Tiers</h2>
                    <p>Showcase your brand to valid industry leaders and researchers.</p>
                    <div className="title-line"></div>
                </div>

                <div className="sponsorship-grid">
                    {sponsorshipPackages.map((pkg, index) => (
                        <div className="sponsorship-card" key={index}>
                            <div className="sponsorship-card__header">
                                <h3 className="sponsorship-card__tier">{pkg.tier}</h3>
                                <div className="sponsorship-card__price">{pkg.price}</div>
                            </div>
                            <div className="sponsorship-card__divider"></div>
                            <ul className="sponsorship-card__benefits">
                                {pkg.benefits.map((benefit, bIndex) => (
                                    <li key={bIndex} className="benefit-item">
                                        <CheckCircle className="benefit-icon" size={18} />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Also show the current Collaborators/Partners below the tiers if desired, or keep it clean */}
            <SponsorsSection />

        </div>
    );
};

export default Sponsors;
