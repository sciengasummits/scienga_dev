import React from 'react';
import './Brochure.css';
import brochurePdf from '../../assets/brochure/World-General-Medicine-Congress-Your-Official-Digital-Platform.pdf';
import { Download, FileText, CheckCircle, Activity, Star, Globe, Telescope, Rocket, Microscope } from 'lucide-react';

const Brochure = () => {
    return (
        <div className="brochure-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Conference Brochure</h1>
                    <p className="page-breadcrumb">Home / Brochure</p>
                </div>
            </div>

            <section className="brochure-content section-padding">
                <div className="container">
                    <div className="brochure-top-layout reveal-on-scroll">
                        <div className="brochure-info-col">
                            <h2 className="mb-4">Everything You Need to Know</h2>
                            <p className="mb-4 text-muted">
                                Our comprehensive brochure provides a deep dive into the 2026 Global Summit on Astronomy, Astrophysics and Space Science.
                                From exoplanet abstracts to deep space mission designs, it's your essential guide.
                            </p>
                            <ul className="brochure-features-list">
                                <li><CheckCircle size={18} /> Detailed 3-Day Program</li>
                                <li><CheckCircle size={18} /> Speaker Profiles & Research Areas</li>
                                <li><CheckCircle size={18} /> Technical Workshops & Panels</li>
                                <li><CheckCircle size={18} /> Venue Maps & Hawaii Logistics</li>
                            </ul>
                            <div className="brochure-actions mt-5">
                                <a href={brochurePdf} download className="download-btn-cosmic">
                                    <Download size={20} /> Download PDF
                                </a>
                                <a href={brochurePdf} target="_blank" rel="noreferrer" className="view-btn-outline">
                                    <FileText size={20} /> View Online
                                </a>
                            </div>
                        </div>

                        <div className="brochure-preview-col">
                            <div className="preview-card-3d">
                                <Star size={80} strokeWidth={1} />
                                <h3>SPACE SUMMIT 2026</h3>
                                <p>OFFICIAL GUIDE</p>
                                <div className="card-glare"></div>
                            </div>
                        </div>
                    </div>

                    <div className="brochure-tracks-section mt-5 reveal-on-scroll">
                        <h2 className="text-center mb-5">Highlighted Summit Tracks</h2>
                        <div className="tracks-grid">
                            <div className="track-card">
                                <div className="track-icon"><Star size={24} /></div>
                                <h3>Stellar Evolution</h3>
                                <p>Studying the birth, life, and death of stars across the cosmos.</p>
                            </div>
                            <div className="track-card">
                                <div className="track-icon"><Globe size={24} /></div>
                                <h3>Exoplanet Discovery</h3>
                                <p>The search for habitable worlds and chemical signatures of life.</p>
                            </div>
                            <div className="track-card">
                                <div className="track-icon"><Telescope size={24} /></div>
                                <h3>Cosmological Models</h3>
                                <p>Exploring dark matter, dark energy, and the origin of the universe.</p>
                            </div>
                            <div className="track-card">
                                <div className="track-icon"><Rocket size={24} /></div>
                                <h3>Space Engineering</h3>
                                <p>Designing next-generation spacecraft and deep space probes.</p>
                            </div>
                            <div className="track-card">
                                <div className="track-icon"><Activity size={24} /></div>
                                <h3>Planetary Science</h3>
                                <p>Investigating the geomorphology and atmospheres of solar system bodies.</p>
                            </div>
                            <div className="track-card">
                                <div className="track-icon"><Microscope size={24} /></div>
                                <h3>Radio Astronomy</h3>
                                <p>Analyzing cosmic signals through the world's most sensitive arrays.</p>
                            </div>
                        </div>
                    </div>

                    <div className="brochure-extra-sections mt-5">


                    </div>
                </div>
            </section>
        </div>
    );
};

export default Brochure;
