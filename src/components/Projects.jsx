import React from 'react';
import { Carousel } from 'antd';
import { projects } from '../data/resume';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <header className="section-heading" data-aos="fade-up">
          <p className="eyebrow">Work</p>
          <h2>Projects</h2>
        </header>
        <div className="carousel-wrap" data-aos="fade-up" data-aos-delay="80">
          <Carousel
            className="content-carousel"
            effect="scrollx"
            dots
            arrows
            infinite
            autoplay={{ dotDuration: true }}
            autoplaySpeed={4500}
            slidesToShow={3}
            slidesToScroll={1}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
              { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            ]}
          >
            {projects.map((project) => (
              <div key={project.title} className="carousel-slide">
                <article className="surface-card carousel-card project-card">
                  {project.badge && <span className="badge">{project.badge}</span>}
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View repository
                    </a>
                  )}
                </article>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
