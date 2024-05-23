import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Achivement.css';

const Achivement = () => {
    return (
        <section className="achivement-wrap text-white">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} lg={6} sm={12}>
                        <div className="section-title">
                            <h1>Our Mission</h1>
                        </div>
                        <div className="achivement-txt">
                            <p className="w-75">Our mission is to connect with multiple users and provide them this convinient way of digital treatment and connect with more and more professional doctors.</p>
                            <div className="more-tool">
                            <Link to="/login"><button  className="theme-btn btn-fill">Appoinment</button></Link>
                            <a href="https://www.youtube.com/watch?v=7HhdN9_MgE8" className="watchBtn"><button className="theme-btn btn-unfill"><FontAwesomeIcon className="play-btn" icon={faPlayCircle} /><span>Watch Vedio</span></button></a>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={6} sm={12}>
                        <Row className="achivement-funfact text-white">
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <span>10000 +</span>
                                    <p>Patients</p>
                                </div>
                            </Col>
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <span>75 +</span>
                                    <p>Doctors</p>
                                </div>
                            </Col>
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <span>25 +</span>
                                    <p>Hospitals</p>
                                </div>
                            </Col>
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <span>28 +</span>
                                    <p>Branches</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Achivement;