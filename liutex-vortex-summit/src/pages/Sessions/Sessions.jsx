import React from 'react';
import { useNavigate } from 'react-router-dom';
import KeyThemesSection from '../../components/sections/KeyThemesSection/KeyThemesSection';
import SessionFaqSection from '../../components/sections/SessionFaqSection/SessionFaqSection';
import Button from '../../components/common/Button/Button';

const Sessions = () => {
    const navigate = useNavigate();

    return (
        <div className="sessions-page">
            <div className="page-header">
                <div className="container">
                    <span className="page-breadcrumb">Program</span>
                    <h1 className="page-title">Scientific Sessions</h1>
                </div>
            </div>

            <KeyThemesSection />

            <div className="container section-padding">
                <div className="cta-card text-center" style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    padding: '4rem',
                    background: 'var(--color-bg-light)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid rgba(30, 64, 175, 0.1)'
                }}>
                    <span className="section-subtitle">Submission Open</span>
                    <h2 className="section-title">Call for Abstracts</h2>
                    <p style={{
                        fontSize: '1.125rem',
                        lineHeight: '1.7',
                        color: 'var(--color-text-body)',
                        marginBottom: '2rem',
                        maxWidth: '700px',
                        margin: '0 auto 2rem'
                    }}>
                        We invite researchers, engineers, and academicians to contribute their latest findings to the summit.
                        Accepted work will be featured in our technical proceedings and special journal issues.
                    </p>
                    <div className="flex-center" style={{ gap: '1rem' }}>
                        <Button onClick={() => navigate('/abstract-submission')} variant="primary">
                            Submit Abstract
                        </Button>
                        <Button onClick={() => navigate('/brochure')} variant="secondary">
                            Download Guidelines
                        </Button>
                    </div>
                </div>
            </div>

            <SessionFaqSection />
        </div>
    );
};

export default Sessions;
