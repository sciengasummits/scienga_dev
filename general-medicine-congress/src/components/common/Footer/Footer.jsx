import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from '../Logo/Logo';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__col">
                        <div className="footer__coll-logo" style={{ marginBottom: '1.5rem' }}>
                            <Logo />
                        </div>
                        <p className="footer__desc">
                            Global medical minds unite to shape the future of healthcare.
                            Discover ground-breaking research and connect with top professionals.
                        </p>
                        <div className="footer__socials">
                            <a href="#" className="social-icon"><Facebook size={20} /></a>
                            <a href="#" className="social-icon"><Twitter size={20} /></a>
                            <a href="#" className="social-icon"><Linkedin size={20} /></a>
                            <a href="#" className="social-icon"><Instagram size={20} /></a>
                        </div>
                    </div>

                    <div className="footer__col">
                        <h4>Quick Links</h4>
                        <ul className="footer__links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/abstract-submission">Abstract Submission</a></li>
                            <li><a href="/speakers">Speakers</a></li>
                            <li><a href="/schedule">Schedule</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4>Contact Info</h4>
                        <ul className="footer__contact">
                            <li>
                                <MapPin size={18} />
                                <div>
                                    <span style={{ display: 'block', fontWeight: 'bold', color: 'white' }}>Venue:</span>
                                    <span>The Twin Towers Hotel, Bangkok, Thailand</span>
                                </div>
                            </li>

                            <li>
                                <Mail size={18} />
                                <span>contact@generalmedicinecongress.com</span>
                            </li>
                            <li>
                                <Phone size={18} />
                                <span>+1 (702) 988-2320</span>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4>Subscribe</h4>
                        <p>Get the latest updates and news.</p>
                        <form className="footer__form">
                            <input type="email" placeholder="Your Email" />
                            <button type="submit">Go</button>
                        </form>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>&copy; {new Date().getFullYear()} World General Medicine Congress. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
