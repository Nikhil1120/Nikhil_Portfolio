import React from 'react';
import { experiences } from '../data/resume';

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <header className="section-heading" data-aos="fade-up">
          <p className="eyebrow">Experience</p>
          <h2>Work experience</h2>
        </header>
        <div className="timeline" data-aos="fade-up" data-aos-delay="80">
          {experiences.map((exp) => (
            <article key={exp.company} className="surface-card experience-card">
              <div className="experience-header">
                <div>
                  <h3>{exp.company}</h3>
                  <p className="experience-role">{exp.role}</p>
                </div>
                {exp.current && <span className="badge">Current</span>}
              </div>
              <p className="meta-text">{exp.duration}</p>
              <p>{exp.description}</p>
              <ul className="chip-list">
                {exp.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
