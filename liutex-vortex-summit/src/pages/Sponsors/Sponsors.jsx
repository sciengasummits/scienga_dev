import React from 'react';
import SponsorsSection from '../../components/sections/SponsorsSection/SponsorsSection';
import Button from '../../components/common/Button/Button';

const Sponsors = () => {
    return (
        <div className="pt-5">
            <div className="page-header" style={{ marginTop: '0' }}>
                <div className="container">
                    <h1 className="page-title">Collaborators</h1>
                    <p className="page-breadcrumb">Home / Collaborators</p>
                </div>
            </div>
            <SponsorsSection />

            <div className="container section-padding text-center">
                <h3>Become a Sponsor</h3>
                <p className="mb-4" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
                    Showcase your brand to global leaders in vortex dynamics and fluid mechanics.
                    Contact us today to learn about our sponsorship packages.
                </p>
                <Button>Download Sponsorship Guide</Button>
            </div>
        </div>
    );
};

export default Sponsors;
