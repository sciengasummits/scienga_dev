import React from 'react';
import KeyThemesSection from '../../components/sections/KeyThemesSection/KeyThemesSection';

const Sessions = () => {
    return (
        <div className="sessions-page-wrapper">
            <div className="page-header" style={{ marginBottom: '2rem' }}>
                <div className="container">
                    <h1 className="page-title">Program Sessions</h1>
                </div>
            </div>

            <KeyThemesSection layout="stacked" />


        </div>
    );
};

export default Sessions;
