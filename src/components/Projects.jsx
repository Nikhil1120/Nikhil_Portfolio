import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "📧 Django-Email-API",
            description: "Developed an email notification system using Django, REST APIs, and cookies, enabling real-time tracking, automated notifications, and session management.",
            link: "https://github.com/Nikhil1120/Django-Email-API"
        },
        {
            title: "📦 Product Management System",
            description: "The Product Management System is a web application built using Django (Python framework) and MySQL database. The system allows businesses and administrators to manage their product inventory efficiently through a simple interface that supports CRUD (Create, Read, Update, Delete) operations.",
            link: "https://github.com/Nikhil1120/Product-management-Django-Mysql"
        },
        {
            title: "📊 Data Portal Django",
            description: "A web application built using Django (Python) and MySQL to efficiently manage and retrieve employee/student data. This project provides full CRUD operations with secure user authentication, data validation, search and filter options, and an intuitive UI.",
            link: "https://github.com/Nikhil1120/Data_Portal_Django"
        }
    ];

    return (
        <section id="projects">
            <div className="container">
                <h2 data-aos="fade-up">💻 Projects</h2>
                <div className="project-grid" data-aos="fade-up" data-aos-delay="200">
                    {projects.map((project, index) => (
                        <div key={index} className="project">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                🔗 Project Repository
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
