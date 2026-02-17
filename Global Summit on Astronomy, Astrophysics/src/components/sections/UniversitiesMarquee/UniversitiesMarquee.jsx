import React from 'react';
import './UniversitiesMarquee.css';

const universities = [
    { name: 'MIT', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png', id: 1 },
    { name: 'Caltech', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Caltech_Logo.svg/1200px-Caltech_Logo.svg.png', id: 2 },
    { name: 'Harvard', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/2560px-Harvard_University_logo.svg.png', id: 3 },
    { name: 'Stanford', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_University_logo.svg/2560px-Stanford_University_logo.svg.png', id: 4 },
];

const UniversitiesMarquee = () => {
    return (
        <section className="universities-marquee">
            <div className="marquee-track">
                {/* Original Set */}
                {universities.map((uni) => (
                    <div key={uni.id} className="university-item">
                        <img src={uni.imgUrl} alt={uni.name} className="university-logo" />
                    </div>
                ))}

                {/* Duplicate Set for Seamless Loop */}
                {universities.map((uni) => (
                    <div key={`dup-${uni.id}`} className="university-item">
                        <img src={uni.imgUrl} alt={uni.name} className="university-logo" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UniversitiesMarquee;
