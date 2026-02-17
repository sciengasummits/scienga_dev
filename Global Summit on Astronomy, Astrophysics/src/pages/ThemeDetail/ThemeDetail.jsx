import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Globe, Telescope, Zap, Rocket, Microscope, ArrowLeft } from 'lucide-react';
import Button from '../../components/common/Button/Button';

const themesData = {
    'stellar-evolution': {
        title: 'Stellar Evolution',
        icon: <Star size={48} />,
        description: 'Studying the life cycles of stars, from nebular birth to supernova deaths and compact remnants.',
        topics: [
            'Protostellar Formation', 'Main Sequence Dynamics', 'Red Giants and White Dwarfs', 'Supernova Mechanisms', 'Neutron Stars and Pulsars'
        ]
    },
    'exoplanets': {
        title: 'Exoplanets',
        icon: <Globe size={48} />,
        description: 'Discovery and characterization of planets beyond our solar system, focusing on habitability and atmospheric signatures.',
        topics: [
            'Transit Photometry', 'Radial Velocity Methods', 'Exoplanet Atmospheres', 'Biosignatures', 'Habitable Zone Dynamics'
        ]
    },
    'cosmology': {
        title: 'Cosmology',
        icon: <Telescope size={48} />,
        description: 'Exploring the origin, evolution, and large-scale structure of the universe, including dark matter and dark energy.',
        topics: [
            'Big Bang Nucleosynthesis', 'Cosmic Microwave Background', 'Dark Matter Distribution', 'Inflationary Theory', 'Large Scale Structure'
        ]
    },
    'gravitational-waves': {
        title: 'Gravitational Waves',
        icon: <Zap size={48} />,
        description: 'Detection and analysis of spacetime ripples from cataclysmic cosmic events like black hole mergers.',
        topics: [
            'LIGO/Virgo Observations', 'Compact Binary Inspirals', 'Multi-Messenger Astronomy', 'Numerical Relativity', 'Future Space-Based Detectors'
        ]
    },
    'space-mission-design': {
        title: 'Space Mission Design',
        icon: <Rocket size={48} />,
        description: 'Engineering and planning for next-generation space exploration missions to the moon, Mars, and beyond.',
        topics: [
            'Orbital Mechanics', 'Propulsion Systems', 'In-Situ Resource Utilization', 'Deep Space Communications', 'Autonomous Navigation'
        ]
    },
    'radio-astronomy': {
        title: 'Radio Astronomy',
        icon: <Microscope size={48} />,
        description: 'Observing the universe at radio frequencies using large-scale interferometric arrays.',
        topics: [
            'Very Large Array (VLA) Techniques', 'Fast Radio Bursts', 'Cosmic Radio Background', 'VLBI Imaging', 'Square Kilometre Array (SKA) Prospects'
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
        <div className="theme-detail-page" style={{ background: 'var(--color-bg-dark)', minHeight: '100vh', color: 'var(--color-text-body)' }}>
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
                            color: 'var(--color-accent)'
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
