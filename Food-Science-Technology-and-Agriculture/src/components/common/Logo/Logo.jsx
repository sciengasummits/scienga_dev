
import React from 'react';
import { Wheat, Sprout, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = ({ className = '', linkTo = '/', onClick }) => {
    return (
        <Link to={linkTo} className={`app-logo ${className}`} onClick={onClick}>
            <div className="logo-icon-container">
                <Wheat size={28} strokeWidth={2.5} className="logo-icon-primary" />
                <div className="logo-icon-heart-wrapper">
                    <div className="logo-icon-heart">
                        <Sprout size={12} fill="currentColor" strokeWidth={0} />
                    </div>
                </div>
            </div>
            <div className="logo-text-container">
                <span className="logo-text-top">Global Summit on</span>
                <span className="logo-text-main">Food Science</span>
                <span className="logo-text-sub">Technology & Agriculture</span>
            </div>
        </Link>
    );
};

export default Logo;
