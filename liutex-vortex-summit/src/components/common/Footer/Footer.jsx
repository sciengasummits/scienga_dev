import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';
import Logo from '../Logo/Logo';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__info">
                        <div className="footer__logo-wrap">
                            <Logo />
                        </div>
                        <p className="footer__about">
                            The definitive global summit for the advancement of Liutex theory and vortex identification.
                            Connecting world-class researchers with high-impact industrial applications.
                        </p>
                        <div className="footer__social">
                            <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
                            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                        </div>
                    </div>

                    <div className="footer__links-group">
                        <div className="footer__links-col">
                            <h4 className="footer__heading">Program</h4>
                            <ul className="footer__list">
                                <li><a href="/sessions">Scientific Sessions</a></li>
                                <li><a href="/speakers">Keynote Speakers</a></li>
                                <li><a href="/abstract-submission">Abstract Submission</a></li>
                                <li><a href="/register">Registration</a></li>
                            </ul>
                        </div>
                        <div className="footer__links-col">
                            <h4 className="footer__heading">Resources</h4>
                            <ul className="footer__list">
                                <li><a href="/venue">Venue Info</a></li>
                                <li><a href="/visa-info">Visa Assistance</a></li>
                                <li><a href="/brochure">Brochure (PDF)</a></li>
                                <li><a href="/faqs">FAQ's</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer__newsletter">
                        <h4 className="footer__heading">Stay Updated</h4>
                        <p className="footer__newsletter-desc">Subscribe to our newsletter for the latest technical updates.</p>
                        <form className="footer__newsletter-form">
                            <input type="email" placeholder="Email address" required />
                            <button type="submit" aria-label="Subscribe">
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer__bottom">
                    <div className="footer__bottom-content">
                        <p className="copyright">&copy; {new Date().getFullYear()} Liutex Vortex Summit. All rights reserved.</p>
                        <div className="footer__legal">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
