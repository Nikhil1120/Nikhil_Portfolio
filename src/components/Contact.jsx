import React, { useState } from 'react';
import { profile } from '../data/resume';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus(`Thanks ${formData.name}. Reach me on LinkedIn and I will get back to you.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="alt-section">
      <div className="container">
        <header className="section-heading" data-aos="fade-up">
          <p className="eyebrow">Contact</p>
          <h2>Available for hire</h2>
        </header>

        <div className="contact-layout">
          <div className="surface-card contact-availability" data-aos="fade-up">
            <p>
              Looking for a developer for your next project? I collaborate on full-stack web and
              mobile (Android & iOS) solutions.
            </p>
            <ul className="contact-availability-list">
              {profile.availability.map((item) => (
                <li key={item}>{item}</li>
              ))}
              <li>Full-stack web (React, Django, Flask, Node.js, Express)</li>
              <li>Mobile app development (Android & iOS)</li>
              <li>AWS deployment & API integration</li>
            </ul>
            <a
              className="cta cta-secondary"
              href="https://www.linkedin.com/in/nikhil-thipparthi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on LinkedIn
            </a>
          </div>

          <form className="surface-card contact-form" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="80">
            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                placeholder="Tell me about the role or project (full-time, part-time, or contract)."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit" className="cta">Send message</button>
            {status && <p className="form-status" role="status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
