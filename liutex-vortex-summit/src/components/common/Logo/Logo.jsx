import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = ({ className = '', linkTo = '/', onClick }) => {
    return (
        <Link to={linkTo} className={`app-logo ${className}`} onClick={onClick}>
            <div className="logo-vortex-wrapper">
                <svg viewBox="0 0 100 100" className="logo-vortex-svg">
                    <defs>
                        <linearGradient id="vortexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4facfe" />
                            <stop offset="100%" stopColor="#f093fb" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M50 10 C 20 10, 10 40, 10 50 C 10 70, 30 90, 50 90 C 70 90, 90 70, 90 50 C 90 40, 80 10, 50 10 Z"
                        fill="none"
                        stroke="url(#vortexGradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        className="vortex-path-1"
                    />
                    <path
                        d="M50 25 C 35 25, 25 40, 25 50 C 25 60, 35 75, 50 75 C 65 75, 75 60, 75 50 C 75 40, 65 25, 50 25 Z"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="6"
                        strokeLinecap="round"
                        className="vortex-path-2"
                    />
                    <circle cx="50" cy="50" r="5" fill="#4facfe" />
                </svg>
            </div>
            <div className="logo-text-container">
                <span className="logo-text-top">LIUTEX VORTEX</span>
                <span className="logo-text-main">SUMMIT 2026</span>
            </div>
        </Link>
    );
};

export default Logo;
