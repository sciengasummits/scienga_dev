import React, { useState } from 'react';
import { User } from 'lucide-react';
import { speakers } from '../../../data/speakersData';
import './SpeakersSection.css';

const SpeakersSection = () => {
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);

    const getDisplayCategory = (category) => {
        if (category === 'Student') return 'Student Speaker';
        if (category === 'Committee') return 'Committee Speaker';
        return category;
    };

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
                    <h2 className="section-title">Global Participants</h2>
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
                                {speaker.category && <span className="speaker-category">{getDisplayCategory(speaker.category)}</span>}
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
                                {selectedSpeaker.category && <p className="modal-category">{getDisplayCategory(selectedSpeaker.category)}</p>}
                                <h3 className="modal-title">{selectedSpeaker.name}</h3>
                                <span className="modal-type">{selectedSpeaker.title}</span>
                                <p className="modal-affiliation-highlight">{selectedSpeaker.affiliation}</p>
                                <p className="modal-desc">{selectedSpeaker.bio || "A distinguished expert in the field of general medicine, contributing significantly to research and clinical practice. With years of experience leading healthcare initiatives and publishing groundbreaking studies, they have become a pivotal figure in advancing medical standards globally. Their work focuses on innovative treatment methodologies and improving patient outcomes through evidence-based medicine."}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </section >
    );
};

export default SpeakersSection;
