import React, { useState } from 'react';
import Button from '../../components/common/Button/Button';
import { CalendarDays, Upload, FileText, CheckCircle } from 'lucide-react';
import './AbstractSubmission.css';

const AbstractSubmission = () => {
    const [formData, setFormData] = useState({
        title: '',
        name: '',
        email: '',
        mobile: '',
        organization: '',
        country: '',
        interest: '',
        topic: '',
        address: '',
        abstractFile: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prev => ({ ...prev, abstractFile: file }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.abstractFile) {
            alert('Please upload your abstract document before submitting.');
            return;
        }
        console.log('Form submitted:', formData);
        alert(`Abstract for "${formData.abstractFile.name}" submitted successfully! (This is a demo)`);
    };

    return (
        <div className="abstract-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Abstract Submission</h1>
                    <p className="page-breadcrumb">Home / Abstract Submission</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="abstract-layout">

                    {/* Left Column: Form */}
                    <div className="abstract-col-left">
                        <h2 className="abstract-title">Abstract Submission</h2>

                        <p className="abstract-intro">
                            You are invited to submit abstract. Kindly fill the below form to submit an abstract of your research. <a href="#" className="template-link">Download the Abstract Template</a>
                        </p>

                        <form className="submission-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <select
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="form-control"
                                    >
                                        <option value="" disabled>- Select Title -</option>
                                        <option value="Mr">Mr</option>
                                        <option value="Ms">Ms</option>
                                        <option value="Mrs">Mrs</option>
                                        <option value="Dr">Dr</option>
                                        <option value="Prof">Prof</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter Name"
                                        className="form-control"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter Email"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        placeholder="Enter Mobile Number"
                                        className="form-control"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="organization"
                                        value={formData.organization}
                                        onChange={handleChange}
                                        placeholder="Enter Organization"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="form-control"
                                    >
                                        <option value="" disabled>- Please choose a country -</option>
                                        <option value="usa">United States</option>
                                        <option value="uk">United Kingdom</option>
                                        <option value="canada">Canada</option>
                                        <option value="germany">Germany</option>
                                        {/* Add more countries as needed */}
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <select
                                        name="interest"
                                        value={formData.interest}
                                        onChange={handleChange}
                                        className="form-control"
                                    >
                                        <option value="" disabled>- Interested In -</option>
                                        <option value="oral">Oral Presentation</option>
                                        <option value="poster">Poster Presentation</option>
                                        <option value="workshop">Workshop</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select
                                        name="topic"
                                        value={formData.topic}
                                        onChange={handleChange}
                                        className="form-control"
                                    >
                                        <option value="" disabled>- Select Topics of Discussion: -</option>
                                        <option value="epidemiology">Epidemiology & Disease Control</option>
                                        <option value="health-policy">Global Health Policy</option>
                                        <option value="digital-health">Digital Health & Telemedicine</option>
                                        <option value="environmental-health">Environmental Health</option>
                                        <option value="preventive-medicine">Preventive Medicine & Lifestyle</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group full-width">
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Full Postal Address..."
                                    rows="3"
                                    className="form-control"
                                ></textarea>
                            </div>

                            <div className="form-group full-width">
                                <label className="file-upload-label">Upload Abstract Document (PDF/DOCX)</label>
                                <div className={`file-upload-wrapper ${formData.abstractFile ? 'has-file' : ''}`}>
                                    <input
                                        type="file"
                                        id="abstractFile"
                                        name="abstractFile"
                                        onChange={handleFileChange}
                                        accept=".pdf,.doc,.docx"
                                        className="file-input-hidden"
                                    />
                                    <label htmlFor="abstractFile" className="file-upload-content">
                                        {formData.abstractFile ? (
                                            <>
                                                <CheckCircle className="upload-icon success" size={24} />
                                                <div className="file-info">
                                                    <span className="file-name">{formData.abstractFile.name}</span>
                                                    <span className="file-status">File selected successfully</span>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <Upload className="upload-icon" size={24} />
                                                <div className="file-info">
                                                    <span className="upload-text">Click to browse or drag your file here</span>
                                                    <span className="upload-hint">Supported formats: PDF, DOCX (Max 10MB)</span>
                                                </div>
                                            </>
                                        )}
                                    </label>
                                </div>
                            </div>

                            <div className="form-actions">
                                <Button type="submit">Submit Abstract</Button>
                            </div>
                        </form>
                    </div>

                    {/* Right Column: Important Dates */}
                    <div className="abstract-col-right">
                        <h3 className="dates-header-title">Important Dates</h3>

                        <div className="dates-list-vertical">
                            <div className="date-card-item">
                                <div className="date-icon-circle">
                                    <CalendarDays size={20} />
                                </div>
                                <div className="date-content">
                                    <h4>Abstract Submission Opens</h4>
                                    <p>March 15, 2026</p>
                                </div>
                            </div>

                            <div className="date-card-item">
                                <div className="date-icon-circle">
                                    <CalendarDays size={20} />
                                </div>
                                <div className="date-content">
                                    <h4>Early Bird Deadline</h4>
                                    <p>June 30, 2026</p>
                                </div>
                            </div>

                            <div className="date-card-item">
                                <div className="date-icon-circle">
                                    <CalendarDays size={20} />
                                </div>
                                <div className="date-content">
                                    <h4>Abstract Submission Deadline</h4>
                                    <p>August 15, 2026</p>
                                </div>
                            </div>

                            <div className="date-card-item">
                                <div className="date-icon-circle">
                                    <CalendarDays size={20} />
                                </div>
                                <div className="date-content">
                                    <h4>Conference Date</h4>
                                    <p>October 26–28, 2026</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AbstractSubmission;
