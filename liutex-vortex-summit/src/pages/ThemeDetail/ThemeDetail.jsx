import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Hexagon, Wind, Target, Activity, Cpu, Globe, ArrowLeft } from 'lucide-react';
import Button from '../../components/common/Button/Button';

const themesData = {
    'math-theory': {
        title: 'Mathematical Theory of Liutex',
        icon: <Hexagon size={48} />,
        description: 'Deep dive into the mathematical foundations and formulations of the Liutex vector in fluid mechanics.',
        topics: [
            'Mathematical Definition of Liutex', 'Vector Dynamics', 'Rotor of Velosity', 'Vortex Strength Calculation', 'Mathematical Proofs & Theorems'
        ]
    },
    'aerodynamics': {
        title: 'Aerodynamics & Hydrodynamics',
        icon: <Wind size={48} />,
        description: 'Applications of vortex identification in external and internal aerodynamics for automotive and aerospace industries.',
        topics: [
            'Aircraft Vortex Dynamics', 'Turbulence Modeling', 'External Airflow Analysis', 'Wake Dynamics', 'Boundary Layer Stability'
        ]
    },
    'vortex-id': {
        title: 'Vortex Identification Methods',
        icon: <Target size={48} />,
        description: 'Critique and comparison of different vortex identification criteria, highlighting the advantages of Liutex.',
        topics: [
            'Liutex vs Q-criterion', 'λ2 and Ω method analysis', 'Shear-free vortex identification', 'Threshold-independent methods', 'Vortex Core Line Detection'
        ]
    },
    'bio-fluids': {
        title: 'Bio-Fluid Mechanics',
        icon: <Activity size={48} />,
        description: 'Using Liutex to understand complex blood flow patterns and vortex structures in the human circulatory system.',
        topics: [
            'Cardiac Vortex Dynamics', 'Arterial Flow Analysis', 'Respiratory Flow Patterns', 'Medical Imaging Visualization', 'Hemodynamic Modeling'
        ]
    },
    'cfd': {
        title: 'Computational Fluid Dynamics',
        icon: <Cpu size={48} />,
        description: 'Integration of Liutex identification codes into standard CFD solvers like OpenFOAM, ANSYS, and research codes.',
        topics: [
            'Numerical Algorithm Design', 'Post-processing Software Integration', 'High-Order Schemes', 'Parallel Computing for Large Data', 'Real-time Visualization'
        ]
    },
    'meteorology': {
        title: 'Meteorology & Oceanography',
        icon: <Globe size={48} />,
        description: 'Analyzing planetary-scale vortices like hurricanes, tornadoes, and ocean eddies using Liutex theory.',
        topics: [
            'Tornado Dynamics', 'Hurricane Path Prediction', 'Ocean Eddy Identification', 'Atmospheric Turbulence', 'Planetary Flow Modeling'
        ]
    }
};

const ThemeDetail = () => {
    const { themeId } = useParams();
    const theme = themesData[themeId];

    if (!theme) {
        return (
            <div className="section-padding text-center">
                <h2>Theme Not Found</h2>
                <Link to="/">
                    <Button variant="outline">Go Back Home</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="theme-detail-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">{theme.title}</h1>
                    <p className="page-breadcrumb">
                        <Link to="/" style={{ color: 'white', textDecoration: 'underline' }}>Home</Link> / Key Themes / {theme.title}
                    </p>
                </div>
            </div>

            <div className="container section-padding">
                <Link to="/" className="mb-4 d-inline-block" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginBottom: '2rem' }}>
                    <ArrowLeft size={20} /> Back to Home
                </Link>

                <div className="theme-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="text-center mb-5">
                        <div style={{
                            width: '80px',
                            height: '80px',
                            background: 'var(--color-bg-light)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 1.5rem',
                            color: 'var(--color-primary-end)'
                        }}>
                            {theme.icon}
                        </div>
                        <p className="lead" style={{ fontSize: '1.2rem', color: 'var(--color-text-body)' }}>
                            {theme.description}
                        </p>
                    </div>

                    <div className="theme-topics">
                        <h3 className="mb-4">Key Topics & Sessions</h3>
                        <ul style={{ listStyle: 'disc', paddingLeft: '2rem' }}>
                            {theme.topics.map((topic, index) => (
                                <li key={index} style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                                    {topic}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-5 text-center">
                        <h3 className="mb-3">Interested in this track?</h3>
                        <Link to="/abstract-submission">
                            <Button>Submit Abstract for {theme.title}</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemeDetail;
