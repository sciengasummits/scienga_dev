import React, { useState } from 'react';
import Button from '../../components/common/Button/Button';
import './VisaInfo.css';

const VisaInfo = () => {
    const [email, setEmail] = useState('');

    const handleInviteRequest = (e) => {
        e.preventDefault();
        alert(`Request sent for ${email}`);
        setEmail('');
    };

    return (
        <div className="visa-page">
            <header className="page-header">
                <div className="container text-center">
                    <h1 className="page-title">Visa Information</h1>
                    <div className="page-breadcrumb">Home / Visa Info</div>
                </div>
            </header>

            <section className="section-padding visa-text-section">
                <div className="container">
                    <div className="visa-content-wrapper">
                        <h2 className="visa-main-title">VISA INFORMATION FOR INTERNATIONAL PARTICIPANTS</h2>

                        <p className="visa-intro-text">
                            The <strong>Global Summit on Public Health and Preventive Medicine</strong> welcomes speakers & delegates from all over the world.
                            Below is essential visa-related information to assist with your travel planning to Geneva, Switzerland:
                        </p>

                        <div className="visa-info-block">
                            <h3 className="visa-block-title">1. Do You Need a Visa?</h3>
                            <ul className="visa-list">
                                <li>
                                    <strong>Switzerland is a member of the Schengen Area</strong>. Check if you require a Schengen visa to enter Switzerland using the official Swiss Federal Office for Migration (SEM) websites or your local Swiss Embassy.
                                </li>
                                <li>
                                    Nationals of many countries (including <strong>USA, UK, Canada, Australia, Japan, and most EU countries</strong>) do not require a visa for short-term visits (up to 90 days) but must have a valid passport.
                                </li>
                                <li>
                                    Nationals of other countries must apply for a <strong>Schengen Visa (Category C)</strong>, which allows travel within the entire Schengen Area for up to 90 days.
                                </li>
                            </ul>
                        </div>

                        <div className="visa-info-block">
                            <h3 className="visa-block-title">2. Visa Application Process</h3>
                            <ul className="visa-list">
                                <li>
                                    <strong>Schedule an Appointment:</strong> Applications should be submitted at the Swiss embassy or consulate in your country of residence well in advance (at least 2-3 months before travel).
                                </li>
                                <li>
                                    <strong>Biometric Data:</strong> You may need to provide fingerprints if you haven't applied for a Schengen visa in the last 59 months.
                                </li>
                            </ul>
                        </div>

                        <div className="visa-info-block">
                            <h3 className="visa-block-title">3. Required Documents</h3>
                            <ul className="visa-list">
                                <li>Valid passport (minimum 3 months validity beyond the intended stay and issued within the last 10 years).</li>
                                <li>Proof of travel insurance (covering at least EUR 30,000 for medical and repatriation).</li>
                                <li>Confirmed flight and hotel reservations.</li>
                                <li>Proof of personal financial means.</li>
                                <li>Official Letter of Invitation (provided by the Summit Committee upon registration).</li>
                            </ul>
                        </div>

                        <div className="visa-info-block">
                            <h3 className="visa-block-title">4. Invitation Letter</h3>
                            <ul className="visa-list">
                                <li>
                                    Registered participants can request an official invitation letter to support their visa application.
                                    This letter confirms your registration and participation in the summit.
                                </li>
                            </ul>

                            {/* Simple Form embedded in the text flow or separated */}
                            <div className="simple-invite-form">
                                <p><strong>Request your Invitation Letter:</strong></p>
                                <form onSubmit={handleInviteRequest} className="text-invite-form">
                                    <input
                                        type="email"
                                        placeholder="Enter your registered email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <Button type="submit" variant="primary" className="btn-sm">Send Request</Button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default VisaInfo;
