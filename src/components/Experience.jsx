import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: "💼 Zaktis IT Solutions",
            role: "Full Stack Developer",
            duration: "📅 April 2025 - Present",
            description:
                "Working as a Full Stack Developer on production-grade applications, building React-based web frontends, cross-platform mobile apps for Android and iOS, and robust backends with Flask and Django REST APIs. I handle end-to-end project deployment on AWS and collaborate with teams to deliver scalable, real-time solutions.",
            skills: [
                "⚛️ React",
                "📱 Android & iOS Apps",
                "☁️ AWS",
                "🚀 Project Deployment",
                "🐍 Flask",
                "🔗 Django REST APIs",
                "🌐 Full Stack Development",
            ],
        },
    ];

    return (
        <section id="experience">
            <div className="container">
                <h2 data-aos="fade-up">💼 Work Experience</h2>
                <div className="experience-list" data-aos="fade-up" data-aos-delay="200">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-card">
                            <div className="experience-header">
                                <div>
                                    <h3>{exp.company}</h3>
                                    <p className="experience-role">{exp.role}</p>
                                </div>
                                <span className="experience-badge">Current</span>
                            </div>
                            <p className="experience-duration">
                                <strong>{exp.duration}</strong>
                            </p>
                            <p className="experience-description">{exp.description}</p>
                            <ul className="experience-skills">
                                {exp.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
