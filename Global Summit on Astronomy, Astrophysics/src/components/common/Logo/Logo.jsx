
import React from 'react';
import { Telescope, Star, Rocket, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = ({ className = '', linkTo = '/', onClick }) => {
    return (
        <Link to={linkTo} className={`app-logo ${className}`} onClick={onClick}>
            <div className="logo-icon-container">
                <Telescope size={28} strokeWidth={2.5} className="logo-icon-primary" />
                <div className="logo-icon-heart-wrapper">
                    <div className="logo-icon-heart">
                        <Star size={12} fill="currentColor" strokeWidth={0} />
                    </div>
                </div>
            </div>

            <div className="logo-text-container">
                <span className="logo-text-top">GLOBAL SUMMIT ON</span>
                <span className="logo-text-main">ASTRONOMY, ASTROPHYSICS</span>
                <span className="logo-text-sub">& SPACE SCIENCE</span>
            </div>
        </Link>
    );
};

export default Logo;
