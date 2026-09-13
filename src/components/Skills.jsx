import React from 'react';
import { skillCategories } from '../data/resume';

const Skills = () => {
  return (
    <section id="skills" className="alt-section">
      <div className="container">
        <header className="section-heading" data-aos="fade-up">
          <p className="eyebrow">Skills</p>
          <h2>Technical proficiency</h2>
        </header>
        <div className="skills-grid" data-aos="fade-up" data-aos-delay="80">
          {skillCategories.map((category) => (
            <article key={category.title} className="surface-card skill-category">
              <div className="skill-header">
                <i className={category.icon} aria-hidden="true" />
                <h3>{category.title}</h3>
              </div>
              <div className="skill-items">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
