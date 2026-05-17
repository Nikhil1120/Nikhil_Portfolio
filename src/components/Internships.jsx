import React from 'react';
import { Carousel } from 'antd';

const Internships = () => {
    const internships = [
        {
            company: "🏫 Naresh i Technologies",
            duration: "📅 Duration: August 2024 - January 2025",
            description:
                "📘 I completed a 6-month Full Stack Python Developer training at Naresh IT, where I honed my skills in Python, Django, REST APIs, and MySQL, and successfully built scalable web applications using the Django framework.",
            skills: ["🐍 Python", "🚀 Django", "🛢️ MySQL", "🔗 REST API", "🌐 HTML", "🎨 CSS", "⚡ JavaScript"],
        },
        {
            company: "🛠️ Zidio Development",
            duration: "📅 Duration: April 2024 - July 2024",
            description:
                "During my internship at Zidio Development, I worked on building a portfolio section for a web application. Using HTML, CSS, and JavaScript, I designed and developed a clean, responsive layout to effectively showcase the project's key features and accomplishments. This experience helped me enhance my skills in frontend development while learning how to present work in a visually appealing and organized manner, ensuring it was easy for users to navigate and understand the content.",
            skills: ["🌐 HTML", "🎨 CSS", "⚡ JavaScript", "📱 Responsive Design"],
        },
        {
            company: "📊 SmartInternz — Data Analyst",
            duration: "📅 Duration: Final Year",
            description:
                "As a Data Analyst intern at SmartInternz, I applied machine learning and data analysis concepts that supported my final year project. I worked on Walmart Sales Analysis for the retail industry—forecasting sales from historical data and evaluating holiday impact—and built Opti Crop, an agricultural optimization engine using Python, NumPy, Pandas, Matplotlib, and related ML tools.",
            skills: ["🐍 Python", "🔢 NumPy", "🐼 Pandas", "📈 Matplotlib", "🤖 Machine Learning", "📊 Data Analysis"],
        },
    ];

    return (
        <section id="internships">
            <div className="container">
                <h2 data-aos="fade-up">🎓 Internships</h2>
                <div className="internship-carousel-wrapper" data-aos="fade-up" data-aos-delay="200">
                    <Carousel
                        className="internship-carousel"
                        effect="scrollx"
                        dots
                        arrows
                        infinite
                        autoplay={{ dotDuration: true }}
                        autoplaySpeed={5000}
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
                        {internships.map((internship, index) => (
                            <div key={index} className="internship-slide">
                                <div className="internship-card">
                                    <h3>{internship.company}</h3>
                                    <p className="internship-duration">
                                        <strong>{internship.duration}</strong>
                                    </p>
                                    <p className="internship-description">{internship.description}</p>
                                    {internship.skills.length > 0 && (
                                        <ul className="internship-skills">
                                            {internship.skills.map((skill, skillIndex) => (
                                                <li key={skillIndex}>{skill}</li>
                                            ))}
                                        </ul>
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

export default Internships;
