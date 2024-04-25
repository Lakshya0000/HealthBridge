import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-bg">
            <Container>
                <Row className="text-white">
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Practices</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link" href='/not'>FAQ's</NavLink>
                                <NavLink className="footer-link" href='/not'>About</NavLink>
                                <NavLink className="footer-link" href='/not'>Contact Us</NavLink>
                                <NavLink className="footer-link" href='/not'>Blog</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Resources</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link" href='/contact'>Contact</NavLink>
                                <NavLink className="footer-link" href='/not'>Meet the Team</NavLink>
                                <NavLink className="footer-link" href='/not'>Patient Form</NavLink>
                                <NavLink className="footer-link" href='/login'>Account Login</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Services</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link" href='/not'>Physician</NavLink>
                                <NavLink className="footer-link" href='/not'>Oral Surgeon</NavLink>
                                <NavLink className="footer-link" href='/not'>Skin Treatment</NavLink>
                                <NavLink className="footer-link" href='/not'>Neurologist</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Our Address</h2>
                            </div>
                            <div className="widget-content">
                                <ul>
                                <li>IIIT Lucknow, C.G. City, Lucknow, UP</li><br />
                                <li>Phone : +91-9999999999</li><br />
                                <li>Email : student.iiitl@gmail.com</li><br /></ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;