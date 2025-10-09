import React from 'react';

const Home = () => {
    return (
        <section id="home" className="full-height">
            <div className="container">
                <div className="hero-content">
                    <div className="text" data-aos="fade-up">
                        <h1>👋 Hi, I'm Nikhil Thipparthi</h1>
                        <h2>💻 Full Stack Developer</h2>
                        <p>⚙️ Turning ideas into full-fledged digital products</p>
                        <p>🖥️ Building seamless experiences from backend to frontend</p>
                        <p>🚀 Passionate about clean code and continuous improvement</p>
                        <p>🌐 Let's create something amazing together!</p>

                        <a href="#about" className="cta">Learn More</a>
                    </div>
                    <div className="image" data-aos="fade-left">
                        <img src="/nikhil.jpg" alt="Nikhil Thipparthi" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
