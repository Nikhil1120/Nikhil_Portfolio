import React, { useEffect, useState } from 'react';
import { profile } from '../data/resume';

const Home = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  useEffect(() => {
    const currentRole = profile.roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else if (displayText.length > 0) {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
        setTypingSpeed(45);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % profile.roles.length);
        setTypingSpeed(90);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section id="home" className="hero">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-copy" data-aos="fade-up">
            <p className="eyebrow">
              <span className="wave" aria-hidden="true">👋</span>
              Available for hire
            </p>
            <h1>{profile.name}</h1>
            <h2 className="animated-role">
              <span className="role-prefix">I am a</span>
              <span className="typing-text">{displayText}</span>
              <span className="cursor" aria-hidden="true" />
            </h2>
            <p className="hero-summary">{profile.summary}</p>
            <ul className="hero-highlights">
              {profile.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="hero-actions">
              <a href="#projects" className="cta">View projects</a>
              <a href="#contact" className="cta cta-secondary">Contact me</a>
            </div>
          </div>

          <div className="hero-visual" data-aos="fade-left">
            <div className="hero-card">
              <div className="react-logo">
                <svg className="react-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" fill="none" />
                  <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.6" fill="none" className="react-ellipse-1" />
                  <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.6" fill="none" className="react-ellipse-2" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
              </div>
              <div className="hero-stats">
                <div>
                  <strong>Full Stack</strong>
                  <span>Web + Mobile</span>
                </div>
                <div>
                  <strong>AWS</strong>
                  <span>Production deploys</span>
                </div>
                <div>
                  <strong>8+</strong>
                  <span>Shipped projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
