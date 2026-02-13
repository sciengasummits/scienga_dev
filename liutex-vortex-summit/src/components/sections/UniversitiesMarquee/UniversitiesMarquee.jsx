import React from 'react';
import './UniversitiesMarquee.css';

// Importing images from the universities folder
import uni1 from '../../../assets/images/universities/download.png';
import uni2 from '../../../assets/images/universities/download2.jpg';
import uni3 from '../../../assets/images/universities/images.png';
import uni4 from '../../../assets/images/universities/images2.jpg';

const universities = [
    { name: 'University of Texas at Arlington', imgUrl: uni1, id: 1 },
    { name: 'Tohoku University', imgUrl: uni2, id: 2 },
    { name: 'Shanghai Jiao Tong University', imgUrl: uni3, id: 3 },
    { name: 'Kyoto University', imgUrl: uni4, id: 4 },
    // Repeating to ensure continuous flow
    { name: 'University of Texas at Arlington', imgUrl: uni1, id: 5 },
    { name: 'Tohoku University', imgUrl: uni2, id: 6 },
    { name: 'Shanghai Jiao Tong University', imgUrl: uni3, id: 7 },
    { name: 'Kyoto University', imgUrl: uni4, id: 8 },
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
