import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import display from '../../../Images/hospital.jpg';
import { Link } from "react-router-dom";
import './About.css';

const About = () => {

    useEffect(() => {
        AOS.init({
                duration: 2000,
            });
        AOS.refresh();
      }, []);
    return (
        <section className="about-wrapper">
            <Container>
                <Row>
                    <Col md={12} lg={6}>
                        <div className="about-left">
                            <img src={display} alt="display" className="img-fluid donto" />
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className="about-right mt-5 mt-lg-0">
                            <div className="about-content text-start" data-aos="zoom-in">
                                <h1>Welcome to a Family</h1>
                                <p>We the team Tech Titans welcome you toh have a easy and transparent appointment booking system through which you can easily get treated by experienced doctors at bare minimum charges.</p>
                                <a> <Link to="/about" className="text-decoration-none">About Us</Link> </a>
                            </div>
                            <div className="fun-fact-sec" data-aos="fade-right">
                                <div className="single-fun">
                                    <span>500</span>
                                    <span>+</span>
                                    <p>Happy Patients</p>
                                </div>
                                <div className="single-fun sp-fun" data-aos="fade-right">
                                    <span>88</span>
                                    <span>+</span>
                                    <p>Qualified Doctors</p>
                                </div>
                                <div className="single-fun" data-aos="fade-left">
                                    <span>25</span>
                                    <span>+</span>
                                    <p>Years Experience</p>
                                </div>
                                <div className="single-fun sp-fun" data-aos="fade-left">
                                    <span>50</span>
                                    <span>+</span>
                                    <p>Dental Awards</p>
                                </div>
                                <span className="line"></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;