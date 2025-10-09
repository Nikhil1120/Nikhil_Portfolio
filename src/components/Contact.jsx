import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your message has been sent!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact">
            <div className="container">
                <h2 data-aos="fade-up">📬 Contact Me</h2>
                <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="300">
                    <input
                        type="text"
                        name="name"
                        placeholder="🧑 Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="📧 Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="💬 Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit" className="cta">📨 Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
