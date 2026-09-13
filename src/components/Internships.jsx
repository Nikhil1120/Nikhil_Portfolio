import React from 'react';
import { Carousel } from 'antd';
import { internships } from '../data/resume';

const Internships = () => {
  return (
    <section id="internships" className="alt-section">
      <div className="container">
        <header className="section-heading" data-aos="fade-up">
          <p className="eyebrow">Training</p>
          <h2>Internships</h2>
        </header>
        <div className="carousel-wrap" data-aos="fade-up" data-aos-delay="80">
          <Carousel
            className="content-carousel"
            effect="scrollx"
            dots
            arrows
            infinite
            autoplay={{ dotDuration: true }}
            autoplaySpeed={5000}
            slidesToShow={3}
            slidesToScroll={1}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
              { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            ]}
          >
            {internships.map((internship) => (
              <div key={internship.company} className="carousel-slide">
                <article className="surface-card carousel-card">
                  <h3>{internship.company}</h3>
                  {internship.role && <p className="experience-role">{internship.role}</p>}
                  <p className="meta-text">{internship.duration}</p>
                  <p>{internship.description}</p>
                  <ul className="chip-list">
                    {internship.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Internships;
