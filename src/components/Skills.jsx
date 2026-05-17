import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            title: "💼 Current Stack (In Use)",
            icon: "fas fa-briefcase",
            skills: ["⚛️ React", "📱 React Native", "🟢 Node.js", "🚂 Express", "☁️ AWS"]
        },
        {
            title: "💻 Languages",
            icon: "fas fa-code",
            skills: ["🐍 Python", "🟢 JavaScript", "🌐 HTML5", "🎨 CSS3"]
        },
        {
            title: "📱 Mobile Development",
            icon: "fas fa-mobile-alt",
            skills: ["📱 React Native", "🤖 Android", "🍎 iOS"]
        },
        {
            title: "🧱 Frameworks & Backend",
            icon: "fas fa-cube",
            skills: ["⚛️ React.js", "🟢 Node.js", "🚂 Express", "🚀 Django", "🔥 Flask", "⚡ FastAPI"]
        },
        {
            title: "📚 Core Concepts",
            icon: "fas fa-brain",
            skills: ["🧠 Data Structures", "🏗️ Object-Oriented Programming (OOP)"]
        },
        {
            title: "💾 Databases",
            icon: "fas fa-database",
            skills: ["🛢️ MySQL"]
        },
        {
            title: "🌐 APIs, Cloud & DevOps",
            icon: "fas fa-plug",
            skills: ["🔗 RESTful APIs", "📮 Postman", "☁️ AWS", "🚀 Project Deployment"]
        },
        {
            title: "🔧 Version Control & Tools",
            icon: "fas fa-tools",
            skills: ["🔀 Git", "🐙 GitHub", "💻 VS Code"]
        },
        {
            title: "📊 Python Libraries",
            icon: "fas fa-chart-bar",
            skills: ["📐 NumPy", "🧮 Pandas", "📈 Matplotlib"]
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
