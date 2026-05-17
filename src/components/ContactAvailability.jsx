import React from 'react';

const ContactAvailability = () => {
    return (
        <section id="contact-availability">
            <div className="container">
                <div className="contact-availability" data-aos="fade-up" data-aos-delay="100">
                    <h2>🚀 Available for Hire</h2>
                    <p>
                        Looking for a developer for your next project? I&apos;m open to collaborate on{' '}
                        <strong>full-stack web</strong> and <strong>mobile (Android & iOS)</strong> solutions.
                    </p>
                    <ul className="contact-availability-list">
                        <li>✅ Full-time opportunities</li>
                        <li>✅ Part-time / freelance work</li>
                        <li>✅ Contract-based projects</li>
                        <li>⚛️ Full-stack web apps (React, Django, Flask, Node.js, Express)</li>
                        <li>📱 Mobile app development (Android & iOS)</li>
                        <li>☁️ AWS deployment & API integration</li>
                    </ul>
                    <p className="contact-cta-text">
                        📞 Scroll down to send a message — I&apos;d love to discuss your project and how I can help!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactAvailability;
