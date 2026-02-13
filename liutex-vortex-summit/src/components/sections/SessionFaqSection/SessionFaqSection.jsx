import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './SessionFaqSection.css';

const SessionFaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is the duration of an oral session presentation?",
            answer: "Each oral presentation is strictly 20 minutes, including 5 minutes for Q&A. Presenters are encouraged to bring their slides on a USB drive."
        },
        {
            question: "What are the dimensions for poster presentations?",
            answer: "Posters should be in A0 size (841 x 1189 mm) in portrait orientation. Materials for hanging will be provided at the registration desk."
        },
        {
            question: "Are virtual presentation slots available?",
            answer: "Yes, we offer hybrid sessions. Registered virtual attendees will receive a personalized link to join their sessions via Zoom 48 hours before the summit."
        },
        {
            question: "Will the session recordings be available after the summit?",
            answer: "Yes, all plenary and scientific sessions will be recorded and made available to registered attendees on our platform for 6 months."
        },
        {
            question: "Is there a best paper or best poster award?",
            answer: "Yes, we have awards for 'Best Student Paper', 'Innovation in Vortex Identification', and 'Outstanding Poster Presentation' which will be announced during the closing ceremony."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="session-faq-section section-padding">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <h2 className="section-title">Session FAQ's</h2>
                    <div className="section-line"></div>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div
                                key={index}
                                className={`faq-item ${isActive ? 'active' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="faq-question">
                                    <h3>{faq.question}</h3>
                                    <span className="faq-toggle-icon">
                                        {isActive ? <Minus size={20} /> : <Plus size={20} />}
                                    </span>
                                </div>
                                <div className={`faq-answer ${isActive ? 'open' : ''}`}>
                                    <div className="faq-answer-inner">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SessionFaqSection;
