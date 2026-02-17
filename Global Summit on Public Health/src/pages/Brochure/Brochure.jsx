import React from 'react';
import './Brochure.css';
import brochurePdf from '../../assets/brochure/World-General-Medicine-Congress-Your-Official-Digital-Platform.pdf';
import { Download, FileText, CheckCircle, Activity } from 'lucide-react';

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
                                Our comprehensive brochure provides a deep dive into the 2026 Global Summit on Public Health.
                                From epidemiology abstracts to digital health innovations, it's your essential guide.
                            </p>
                            <ul className="brochure-features-list">
                                <li><CheckCircle size={18} /> Detailed 3-Day Program</li>
                                <li><CheckCircle size={18} /> Speaker Profiles & Research Areas</li>
                                <li><CheckCircle size={18} /> Technical Workshops & Panels</li>
                                <li><CheckCircle size={18} /> Venue Maps & Logistics</li>
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
                                <Activity size={80} strokeWidth={1} />
                                <h3>HEALTH SUMMIT 2026</h3>
                                <p>OFFICIAL GUIDE</p>
                                <div className="card-glare"></div>
                            </div>
                        </div>
                    </div>

                    <div className="brochure-tracks-section mt-5 reveal-on-scroll">
                        <h2 className="text-center mb-5">Highlighted Summit Tracks</h2>
                        <div className="tracks-grid">
                            <div className="track-card">
                                <div className="track-icon"><Activity size={24} /></div>
                                <h3>Epidemiology</h3>
                                <p>Tracking and controlling disease patterns in global populations.</p>
                            </div>
                            <div className="track-card">
                                <div className="track-icon"><CheckCircle size={24} /></div>
                                <h3>Global Health Policy</h3>
                                <p>International strategies for sustainable healthcare governance.</p>
                            </div>
                            <div className="track-card">
                                <div className="track-icon"><FileText size={24} /></div>
                                <h3>Digital Health</h3>
                                <p>Innovations in telemedicine and public health informatics.</p>
                            </div>
                            <div className="track-card">
                                <div className="track-icon"><Activity size={24} /></div>
                                <h3>Environmental Health</h3>
                                <p>Impact of climate and surroundings on human well-being.</p>
                            </div>
                            <div className="track-card">
                                <div className="track-icon"><CheckCircle size={24} /></div>
                                <h3>Preventive Medicine</h3>
                                <p>Lifestyle interventions and early diagnostic protocols.</p>
                            </div>
                            <div className="track-card">
                                <div className="track-icon"><FileText size={24} /></div>
                                <h3>Healthcare Systems</h3>
                                <p>Managing resilient and equitable health infrastructures.</p>
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
