import React, { useState } from 'react';
import './Register.css';

const Register = ({ isDiscounted = false }) => {
    // State for form fields
    const [formData, setFormData] = useState({
        designation: '',
        fullName: '',
        email: '',
        telephone: '',
        country: '',
        company: '',
        address: ''
    });

    // State for selected items
    const [selectedAcademic, setSelectedAcademic] = useState('speaker');
    const [selectedAccommodation, setSelectedAccommodation] = useState(null);
    const [selectedSponsorship, setSelectedSponsorship] = useState(null);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [includeAccompanying, setIncludeAccompanying] = useState(false);

    // Discount multiplier (20% off if discounted)
    const discountMultiplier = isDiscounted ? 0.8 : 1;
    const applyDiscount = (price) => Math.round(price * discountMultiplier);

    // Pricing Data
    const academicPricing = [
        { id: 'speaker', label: 'Speaker Registration', early: applyDiscount(749), standard: applyDiscount(849), onspot: applyDiscount(949) },
        { id: 'delegate', label: 'Delegate Registration', early: applyDiscount(899), standard: applyDiscount(999), onspot: applyDiscount(1099) },
        { id: 'poster', label: 'Poster Registration', early: applyDiscount(449), standard: applyDiscount(549), onspot: applyDiscount(649) },
        { id: 'student', label: 'Student', early: applyDiscount(299), standard: applyDiscount(399), onspot: applyDiscount(499) },
    ];

    const accommodationOptions = [
        { nights: 2, single: 360, double: 400, triple: 440 },
        { nights: 3, single: 540, double: 600, triple: 660 },
        { nights: 4, single: 720, double: 800, triple: 880 },
        { nights: 5, single: 900, double: 1000, triple: 1100 },
    ];

    const sponsorshipPricing = [
        { id: 'platinum', label: 'Platinum Sponsor', price: applyDiscount(4999) },
        { id: 'diamond', label: 'Diamond Sponsor', price: applyDiscount(3999) },
        { id: 'gold', label: 'Gold Sponsor', price: applyDiscount(2999) },
        { id: 'exhibitor', label: 'Exhibitor', price: applyDiscount(1999) },
    ];

    // Helper to calculate total
    const calculateTotal = () => {
        let total = 0;

        // Add selected academic registration
        const item = academicPricing.find(p => p.id === selectedAcademic);
        if (item) {
            total += item.onspot; // Following screenshot where "OnSpot" is active/highlighted
        }

        // Add Sponsorship
        if (selectedSponsorship) {
            const item = sponsorshipPricing.find(p => p.id === selectedSponsorship);
            if (item) {
                total += item.price;
            }
        }

        // Add Accompanying Person
        if (includeAccompanying) {
            total += 249;
        }

        // Add Accommodation
        if (selectedAccommodation) {
            const [nights, type] = selectedAccommodation.split('-');
            const option = accommodationOptions.find(o => o.nights === parseInt(nights));
            if (option) {
                total += option[type];
            }
        }

        return total;
    };

    const handleAcademicChange = (id) => {
        setSelectedAcademic(id);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const total = calculateTotal();
        const summary = `
Registration Summary:
- Name: ${formData.fullName}
- Designation: ${formData.designation}
- Email: ${formData.email}
- Total Amount: $${total}
- Accompanying Person: ${includeAccompanying ? 'Yes' : 'No'}
- Accommodation: ${selectedAccommodation ? selectedAccommodation : 'None'}
- Sponsorship: ${selectedSponsorship ? sponsorshipPricing.find(s => s.id === selectedSponsorship)?.label : 'None'}

(This is a demo submission)
        `;
        alert(summary);
    };

    const handleReset = () => {
        setFormData({
            designation: '',
            fullName: '',
            email: '',
            telephone: '',
            country: '',
            company: '',
            address: ''
        });
        setSelectedAcademic('speaker');
        setTermsAccepted(false);
        setIncludeAccompanying(false);
        setSelectedAccommodation(null);
        setSelectedSponsorship(null);
    };

    return (
        <div className="register-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Registration</h1>
                    <p className="page-breadcrumb">Home / Register</p>
                </div>
            </div>

            <div className="container section-padding">

                <div className="registration-form-container">
                    {/* Left Side: Form */}
                    <div className="form-section full-width-form">
                        <div className="form-row">
                            <select
                                name="designation"
                                className="form-control"
                                value={formData.designation}
                                onChange={handleInputChange}
                            >
                                <option value="">Select Designation</option>
                                <option value="Student">Student</option>
                                <option value="Research Scholar">Research Scholar</option>
                                <option value="Professor">Professor</option>
                                <option value="Associate Professor">Associate Professor</option>
                                <option value="Assistant Professor">Assistant Professor</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Scientist">Scientist</option>
                                <option value="Researcher">Researcher</option>
                                <option value="Director">Director</option>
                                <option value="Manager">Manager</option>
                                <option value="Other">Other</option>
                            </select>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                className="form-control"
                                value={formData.fullName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-row">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            <input
                                type="tel"
                                name="telephone"
                                placeholder="Telephone Number"
                                className="form-control"
                                value={formData.telephone}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-row">
                            <input
                                type="text"
                                name="country"
                                placeholder="Select Country"
                                className="form-control"
                                value={formData.country}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="company"
                                placeholder="Company/University"
                                className="form-control"
                                value={formData.company}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-row full-width">
                            <textarea
                                name="address"
                                placeholder="Address"
                                className="form-control"
                                rows="3"
                                value={formData.address}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                    </div>
                </div>

                <div className="pricing-section">
                    <h2 className="pricing-title">SELECT FROM VARIOUS CATEGORIES BELOW</h2>

                    <table className="pricing-table">
                        <thead>
                            <tr>
                                <th className="category-header">Academic</th>
                                <th>Early Bird Registration<br /><span className="date">October 25, 2025</span></th>
                                <th>Standard Registration<br /><span className="date">February 16, 2026</span></th>
                                <th className="onspot-header">
                                    <span className="status-badge">ACTIVE</span>
                                    OnSpot Registration<br /><span className="date">April 20, 2026</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {academicPricing.map(item => (
                                <tr key={item.id} className={selectedAcademic === item.id ? 'selected' : ''}>
                                    <td className="item-cell">
                                        <label className="checkbox-label">
                                            <input
                                                type="radio"
                                                name="academicTier"
                                                checked={selectedAcademic === item.id}
                                                onChange={() => handleAcademicChange(item.id)}
                                            />
                                            <span className={`radio-selection-btn ${selectedAcademic === item.id ? 'active' : ''}`}></span>
                                            {item.label}
                                        </label>
                                    </td>
                                    <td>$ {item.early}</td>
                                    <td>$ {item.standard}</td>
                                    <td className="onspot-cell">$ {item.onspot}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* New Sponsorship Section matching layout */}
                    <table className="pricing-table sponsorship-table">
                        <thead>
                            <tr>
                                {sponsorshipPricing.map(item => (
                                    <th key={item.id}>{item.label}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {sponsorshipPricing.map(item => (
                                    <td key={item.id}>
                                        <label className={`sponsorship-radio ${selectedSponsorship === item.id ? 'active' : ''}`}>
                                            <input
                                                type="radio"
                                                name="sponsorship"
                                                checked={selectedSponsorship === item.id}
                                                onChange={() => setSelectedSponsorship(item.id)}
                                                style={{ display: 'none' }}
                                            />
                                            <span className="radio-circle"></span>
                                            ${item.price}
                                        </label>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Accommodation Section */}
                <div className="accommodation-section">
                    <div className="accompanying-checkbox">
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                checked={includeAccompanying}
                                onChange={(e) => setIncludeAccompanying(e.target.checked)}
                            />
                            <strong>Include Accompanying Person ( $249 Extra)</strong>
                        </label>
                    </div>

                    <table className="accommodation-table">
                        <thead>
                            <tr>
                                <th>Accommodation</th>
                                <th>Single Occupancy</th>
                                <th>Double Occupancy</th>
                                <th>Triple Occupancy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accommodationOptions.map((option) => (
                                <tr key={option.nights}>
                                    <td className="nights-cell">For {option.nights} Nights</td>
                                    <td>
                                        <label className="radio-label">
                                            <input
                                                type="radio"
                                                name="accommodation"
                                                checked={selectedAccommodation === `${option.nights}-single`}
                                                onChange={() => setSelectedAccommodation(`${option.nights}-single`)}
                                            />
                                            ${option.single}
                                        </label>
                                    </td>
                                    <td>
                                        <label className="radio-label">
                                            <input
                                                type="radio"
                                                name="accommodation"
                                                checked={selectedAccommodation === `${option.nights}-double`}
                                                onChange={() => setSelectedAccommodation(`${option.nights}-double`)}
                                            />
                                            ${option.double}
                                        </label>
                                    </td>
                                    <td>
                                        <label className="radio-label">
                                            <input
                                                type="radio"
                                                name="accommodation"
                                                checked={selectedAccommodation === `${option.nights}-triple`}
                                                onChange={() => setSelectedAccommodation(`${option.nights}-triple`)}
                                            />
                                            ${option.triple}
                                        </label>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="summary-section">
                    <div className="total-display">
                        <span className="total-label">TOTAL PRICE($) :</span>
                        <span className="total-amount">{calculateTotal()}</span>
                    </div>

                    <div className="terms-checkbox">
                        <label>
                            <input
                                type="checkbox"
                                checked={termsAccepted}
                                onChange={(e) => setTermsAccepted(e.target.checked)}
                            />
                            I've read and accept the <span className="terms-link">terms & conditions</span>.
                        </label>
                    </div>

                    <p className="processing-fee">Note: 5% of processing charges will be applicable.</p>

                    <div className="action-buttons">
                        <button className="btn-register" onClick={handleSubmit}>REGISTER NOW</button>
                        <button className="btn-reset" onClick={handleReset}>RESET</button>
                    </div>
                </div>
                <div className="registration-extra-info mt-5">
                    <div className="info-grid reveal-on-scroll">
                        <div className="info-card-simple">
                            <h3>Payment Information</h3>
                            <p>We accept all major credit cards, bank transfers, and institutional purchase orders. All transactions are securely processed through our encrypted gateway.</p>
                            <ul className="info-list-simple">
                                <li>Credit Cards: Visa, MasterCard, AMEX</li>
                                <li>Bank Transfer (Contact us for details)</li>
                                <li>Institutional Invoices available upon request</li>
                            </ul>
                        </div>
                        <div className="info-card-simple">
                            <h3>Cancellation Policy</h3>
                            <p>Cancellations received before August 31, 2026, are eligible for a 50% refund. No refunds will be issued for cancellations after this date.</p>
                            <p>Substitutions are allowed at no extra cost until October 10, 2026.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
