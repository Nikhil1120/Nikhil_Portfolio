import React from 'react';

const Internships = () => {
    const internships = [
        {
            company: "💼 Zaktis IT Solutions",
            duration: "📅 Duration: April 2025 - Present",
            description: "✨ I am happy to share that I am working as a Full Stack Python Developer at Zaktis IT Solutions, where I contribute to the development of dynamic web applications, collaborate with cross-functional teams, and gain hands-on experience with both frontend and backend technologies across various real-time projects.",
            skills: []
        },
        {
            company: "🏫 Naresh i Technologies",
            duration: "📅 Duration: August 2024 - January 2025",
            description: "📘 I completed a 6-month Full Stack Python Developer training at Naresh IT, where I honed my skills in Python, Django, REST APIs, and MySQL, and successfully built scalable web applications using the Django framework.",
            skills: ["🐍 Python", "🚀 Django", "🛢️ MySQL", "🔗 REST API", "🌐 HTML", "🎨 CSS", "⚡ JavaScript"]
        },
        {
            company: "🛠️ Zidio Development",
            duration: "📅 Duration: April 2024 - July 2024",
            description: "🎯 I developed a fully dynamic web project using HTML and CSS, focused on delivering a responsive and visually appealing user experience. The project showcases my ability to structure and style web pages efficiently, while incorporating essential features to enhance interactivity and engagement.",
            skills: ["🌐 HTML", "🎨 CSS", "🧩 Bootstrap", "⚡ JavaScript"]
        }
    ];

    return (
        <section id="internships">
            <div className="container">
                <h2 data-aos="fade-up">🎓 Internships</h2>
                <div className="timeline" data-aos="fade-up" data-aos-delay="100">
                    {internships.map((internship, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-icon">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <div className="timeline-content">
                                <h3>{internship.company}</h3>
                                <p className="timeline-duration"><strong>{internship.duration}</strong></p>
                                <p>{internship.description}</p>
                                {internship.skills.length > 0 && (
                                    <ul className="timeline-skills">
                                        {internship.skills.map((skill, skillIndex) => (
                                            <li key={skillIndex}>{skill}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Internships;
