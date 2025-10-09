import React from 'react';

const Connect = () => {
    const socialLinks = [
        {
            name: "🔗 LinkedIn",
            icon: "fab fa-linkedin-in",
            url: "https://www.linkedin.com/in/nikhil-thipparthi/"
        },
        {
            name: "🐱 GitHub",
            icon: "fab fa-github",
            url: "https://github.com/Nikhil1120"
        },
        {
            name: "🏆 HackerRank",
            icon: "fab fa-hackerrank",
            url: "https://www.hackerrank.com/profile/nikhilt1120"
        }
    ];

    return (
        <section id="connect">
            <div className="container">
                <h2 data-aos="fade-up">🔗 Let's Connect</h2>
                <p className="connect-subtitle" data-aos="fade-up" data-aos-delay="50">
                    Feel free to reach out or follow me on my social platforms. I'm always open to new opportunities and
                    collaborations! 🚀
                </p>
                <div className="social-links" data-aos="fade-up" data-aos-delay="100">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                        >
                            <i className={social.icon}></i>
                            <span>{social.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Connect;
