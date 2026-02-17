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
                            The <strong>Global Summit on Astronomy, Astrophysics and Space Science</strong> welcomes scientists & space explorers from all over the world.
                            Below is essential visa-related information to assist with your travel planning to Hawaii, USA:
                        </p>

                        <div className="visa-info-block">
                            <h3 className="visa-block-title">1. Do You Need a Visa?</h3>
                            <ul className="visa-list">
                                <li>
                                    <strong>Entry to the United States:</strong> International participants may require a B-1/B-2 visitor visa or an ESTA (Electronic System for Travel Authorization) for countries under the Visa Waiver Program.
                                </li>
                                <li>
                                    Nationals of <strong>Visa Waiver Program (VWP) countries</strong> must apply for an <strong>ESTA</strong> at least 72 hours before departure.
                                </li>
                                <li>
                                    Nationals of non-VWP countries must apply for a <strong>Non-immigrant B-1/B-2 Visa</strong> at their nearest US Embassy or Consulate.
                                </li>
                            </ul>
                        </div>

                        <div className="visa-info-block">
                            <h3 className="visa-block-title">2. Visa Application Process</h3>
                            <ul className="visa-list">
                                <li>
                                    <strong>Schedule an Interview:</strong> We strongly recommend starting the application process at least 4-6 months in advance due to potential wait times at US Embassies.
                                </li>
                                <li>
                                    <strong>DS-160 Form:</strong> Complete the online non-immigrant visa application and pay the required fee.
                                </li>
                            </ul>
                        </div>

                        <div className="visa-info-block">
                            <h3 className="visa-block-title">3. Required Documents</h3>
                            <ul className="visa-list">
                                <li>Valid passport (valid for at least six months beyond your period of stay in the US).</li>
                                <li>Visa application confirmation page (Form DS-160).</li>
                                <li>Proof of personal financial means and intent to return to home country.</li>
                                <li>Official Letter of Invitation (provided by the Summit Committee upon registration).</li>
                            </ul>
                        </div>

                        <div className="visa-info-block">
                            <h3 className="visa-block-title">4. Invitation Letter</h3>
                            <ul className="visa-list">
                                <li>
                                    Registered participants can request an official invitation letter to support their visa application.
                                    This letter confirms your registration and participation in the astronomy summit.
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
