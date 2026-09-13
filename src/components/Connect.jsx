import React from 'react';
import { socialLinks } from '../data/resume';

const Connect = () => {
  return (
    <section id="connect">
      <div className="container">
        <header className="section-heading" data-aos="fade-up">
          <p className="eyebrow">Social</p>
          <h2>Let&apos;s connect</h2>
        </header>
        <p className="connect-subtitle" data-aos="fade-up" data-aos-delay="40">
          Follow along or reach out — I am always open to new opportunities and collaborations.
        </p>
        <div className="social-links" data-aos="fade-up" data-aos-delay="80">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className={social.icon} aria-hidden="true" />
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connect;
