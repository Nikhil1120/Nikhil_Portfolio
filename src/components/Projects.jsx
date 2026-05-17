import React from 'react';
import { Carousel } from 'antd';

const Projects = () => {
    const projects = [
        {
            title: "✉️ AI-Powered Email Generator",
            description:
                "A full-stack app that generates professional emails using Google Gemini API. Users can describe the email purpose, choose tone and length, generate content, copy it, and download it as TXT/PDF.",
        },
        {
            title: "🏢 HOMi 365 — Society Management App",
            description:
                "A society management web application built during my work experience at HOMi 365. It streamlines residential society operations with member management, notices, billing, and admin dashboards for efficient community administration.",
        },
        {
            title: "🛒 Walmart Sales Analysis for Retail Industry",
            description:
                "A machine learning project developed during my SmartInternz internship and final year work. It forecasts Walmart sales using historical data with Python, NumPy, Pandas, and Matplotlib, and evaluates how holidays impact sales performance.",
            // badge: "Final Year Project",
        },
        {
            title: "🌾 Opti Crop: Smart Agricultural Production Optimization Engine",
            description:
                "An advanced ML-based system that integrates Nitrogen, Phosphorous, Potassium levels, soil temperature, humidity, pH, rainfall, and crop types to deliver intelligent recommendations for maximizing yields and resource efficiency in sustainable farming.",
            // badge: "Final Year Project",
        },
        {
            title: "📧 Django-Email-API",
            description:
                "Developed an email notification system using Django, REST APIs, and cookies, enabling real-time tracking, automated notifications, and session management.",
            link: "https://github.com/Nikhil1120/Django-Email-API",
        },
        {
            title: "📦 Product Management System",
            description:
                "The Product Management System is a web application built using Django (Python framework) and MySQL database. The system allows businesses and administrators to manage their product inventory efficiently through a simple interface that supports CRUD (Create, Read, Update, Delete) operations.",
            link: "https://github.com/Nikhil1120/Product-management-Django-Mysql",
        },
        {
            title: "📊 Data Portal Django",
            description:
                "A web application built using Django (Python) and MySQL to efficiently manage and retrieve employee/student data. This project provides full CRUD operations with secure user authentication, data validation, search and filter options, and an intuitive UI.",
            link: "https://github.com/Nikhil1120/Data_Portal_Django",
        },
        {
            title: "📱 Google Play Store Data Analysis & ML Deployment",
            description:
                "Built during training at Naresh i Technologies: analyzes 10,000+ Google Play Store apps (ratings, reviews, categories, installations) using Python, trains a machine learning model for predictions, and deploys it within a Django web application.",
            badge: "Naresh i Technologies",
        },
    ];

    return (
        <section id="projects">
            <div className="container">
                <h2 data-aos="fade-up">💻 Projects</h2>
                <div className="project-carousel-wrapper" data-aos="fade-up" data-aos-delay="200">
                    <Carousel
                        className="project-carousel"
                        effect="scrollx"
                        dots
                        arrows
                        infinite
                        autoplay={{ dotDuration: true }}
                        autoplaySpeed={4500}
                        slidesToShow={3}
                        slidesToScroll={1}
                        responsive={[
                            {
                                breakpoint: 1024,
                                settings: { slidesToShow: 2, slidesToScroll: 1 },
                            },
                            {
                                breakpoint: 768,
                                settings: { slidesToShow: 1, slidesToScroll: 1 },
                            },
                        ]}
                    >
                        {projects.map((project, index) => (
                            <div key={index} className="project-slide">
                                <div className="project">
                                    {project.badge && (
                                        <span className="project-badge">{project.badge}</span>
                                    )}
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            🔗 Project Repository
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Projects;
