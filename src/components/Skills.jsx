import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            title: "💻 Languages",
            icon: "fas fa-code",
            skills: ["🐍 Python", "🌐 HTML5", "🎨 CSS3", "⚡ JavaScript"]
        },
        {
            title: "📚 Core Concepts",
            icon: "fas fa-cube",
            skills: ["🧠 Data Structures", "🏗️ Object-Oriented Programming (OOP)"]
        },
        {
            title: "🧱 Frameworks",
            icon: "fas fa-cube",
            skills: ["🚀 Django", "🔥 Flask", "⚡ FastAPI"]
        },
        {
            title: "💾 Databases",
            icon: "fas fa-database",
            skills: ["🛢️ MySQL"]
        },
        {
            title: "🔧 Version Control",
            icon: "fas fa-tools",
            skills: ["🔀 Git", "🐙 GitHub"]
        },
        {
            title: "🌐 APIs & Web Services",
            icon: "fas fa-plug",
            skills: ["🔗 RESTful APIs", "📮 Postman", "☁️ AWS"]
        },
        {
            title: "🖼️ UI Library",
            icon: "fas fa-laptop-code",
            skills: ["⚛️ React.js"]
        },
        {
            title: "📊 Python Libraries",
            icon: "fas fa-chart-bar",
            skills: ["📐 NumPy", "🧮 Pandas"]
        }
    ];

    return (
        <section id="skills">
            <div className="container">
                <h2 data-aos="fade-up">🛠️ Technical Proficiency</h2>
                <div className="skills-grid" data-aos="fade-up" data-aos-delay="100">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <div className="skill-header">
                                <i className={category.icon}></i>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skill-items">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
