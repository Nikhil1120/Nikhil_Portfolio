import React from 'react';
import { about } from '../data/resume';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <header className="section-heading" data-aos="fade-up">
          <p className="eyebrow">About</p>
          <h2>Building reliable products end to end</h2>
        </header>
        <div className="about-layout">
          <div className="about-copy" data-aos="fade-up">
            <p>{about.intro}</p>
            <p>
              <strong>Open to opportunities:</strong> {about.openTo}
            </p>
          </div>
          <div className="about-grid" data-aos="fade-up" data-aos-delay="100">
            {about.specialties.map((item) => (
              <article key={item.title} className="surface-card about-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
