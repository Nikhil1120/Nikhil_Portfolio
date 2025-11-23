import React, { useState, useEffect } from 'react';

const roles = [
    "💻 Full Stack Developer",
    "🤖 AI React Developer",
    "⚛️ React Specialist",

];

const Home = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentRole.length) {
                    setDisplayText(currentRole.substring(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(currentRole.substring(0, displayText.length - 1));
                    setTypingSpeed(75);
                } else {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                    setTypingSpeed(150);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

    return (
        <section id="home" className="full-height">
            <div className="animated-background"></div>
            <div className="container">
                <div className="hero-content">
                    <div className="text" data-aos="fade-up">
                        <div className="greeting">
                            <span className="wave">👋</span>
                            <span className="greeting-text">Hi, I'm</span>
                        </div>
                        <h1 className="name-gradient">Nikhil Thipparthi</h1>
                        <h2 className="animated-role">
                            <span className="role-prefix">I'm a</span>
                            <span className="typing-text">{displayText}</span>
                            <span className="cursor">|</span>
                        </h2>
                        <div className="description-list" data-aos="fade-up" data-aos-delay="200">
                            <p className="animated-text">⚙️ Turning ideas into full-fledged digital products</p>
                            <p className="animated-text">🖥️ Building seamless experiences from backend to frontend</p>
                            <p className="animated-text">🚀 Passionate about clean code and continuous improvement</p>
                            <p className="animated-text">🌐 Let's create something amazing together!</p>
                        </div>

                        <a href="#about" className="cta pulse-animation">Learn More</a>
                    </div>
                    <div className="react-animations" data-aos="fade-left">
                        <div className="react-icon-container">
                            <div className="react-logo">
                                <svg className="react-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="#61dafb" strokeWidth="2" fill="none" className="react-circle" />
                                    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="2" fill="none" className="react-ellipse-1" />
                                    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="2" fill="none" className="react-ellipse-2" />
                                    <circle cx="12" cy="12" r="2" fill="#61dafb" className="react-center" />
                                </svg>
                            </div>
                            <div className="floating-icons">
                                <div className="icon-float icon-1">⚛️</div>
                                <div className="icon-float icon-2">💻</div>
                                <div className="icon-float icon-3">🚀</div>
                                <div className="icon-float icon-4">⚡</div>
                                <div className="icon-float icon-5">🔧</div>
                                <div className="icon-float icon-6">🎨</div>
                            </div>
                            <div className="code-lines">
                                <div className="code-line line-1"></div>
                                <div className="code-line line-2"></div>
                                <div className="code-line line-3"></div>
                                <div className="code-line line-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
