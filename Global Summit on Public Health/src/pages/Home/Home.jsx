import React from 'react';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import UniversitiesMarquee from '../../components/sections/UniversitiesMarquee/UniversitiesMarquee';
import AboutSection from '../../components/sections/AboutSection/AboutSection';
import KeyThemesSection from '../../components/sections/KeyThemesSection/KeyThemesSection';
import SpeakersSection from '../../components/sections/SpeakersSection/SpeakersSection';
import VenueSection from '../../components/sections/VenueSection/VenueSection';
import SponsorsSection from '../../components/sections/SponsorsSection/SponsorsSection';
import StatsSection from '../../components/sections/StatsSection/StatsSection';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <HeroSection />
            <div className="reveal-on-scroll"><UniversitiesMarquee /></div>
            <div className="reveal-on-scroll"><AboutSection /></div>
            <div className="reveal-on-scroll"><StatsSection /></div>
            <div className="reveal-on-scroll"><SpeakersSection /></div>
            <div className="reveal-on-scroll"><KeyThemesSection /></div>
            <div className="reveal-on-scroll"><VenueSection /></div>
            <div className="reveal-on-scroll"><SponsorsSection /></div>
        </div>
    );
};

export default Home;
