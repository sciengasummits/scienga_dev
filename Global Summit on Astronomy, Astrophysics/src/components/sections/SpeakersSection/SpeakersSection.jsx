import React, { useState } from 'react';
import { User } from 'lucide-react';
import { speakers } from '../../../data/speakersData';
import './SpeakersSection.css';

const SpeakersSection = () => {
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);

    const openModal = (speaker) => {
        setSelectedSpeaker(speaker);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        setSelectedSpeaker(null);
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    return (
        <section className="speakers section-padding" id="speakers">
            <div className="container">
                <div className="text-center mb-5">
                    <h4 className="section-subtitle">Meet The Experts</h4>
                    <h2 className="section-title">Distinguished Speakers</h2>
                </div>

                <div className="speakers__grid">
                    {speakers.map((speaker) => (
                        <div className="speaker-card" key={speaker.id}>
                            <div className="speaker-img-wrapper">
                                <img src={speaker.image} alt={speaker.name} className="speaker-img" />
                                <div className="speaker-overlay">
                                    {/* Social icons could go here */}
                                </div>
                            </div>
                            <div className="speaker-info">
                                <h3 className="speaker-name">{speaker.name}</h3>
                                <p className="speaker-title">{speaker.title}</p>
                                <p className="speaker-affiliation">{speaker.affiliation}</p>
                                <button className="btn-biograph" onClick={() => openModal(speaker)}>
                                    <User size={16} /> Biography
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Speaker Modal */}
            {
                selectedSpeaker && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={e => e.stopPropagation()}>
                            <button className="modal-close" onClick={closeModal}>&times;</button>

                            <div className="modal-body">
                                <h3 className="modal-title">{selectedSpeaker.name}</h3>
                                <span className="modal-type">{selectedSpeaker.title}</span>
                                <p className="modal-affiliation-highlight">{selectedSpeaker.affiliation}</p>
                                <p className="modal-desc">{selectedSpeaker.bio || "A distinguished expert in the field of astronomy and space science, contributing significantly to celestial research and space exploration technology. With years of experience leading international missions and publishing groundbreaking studies in astrophysics, they have become a pivotal figure in advancing our understanding of the universe. Their work focuses on innovative observational methodologies and pushing the boundaries of space science through evidence-based research."}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </section >
    );
};

export default SpeakersSection;
