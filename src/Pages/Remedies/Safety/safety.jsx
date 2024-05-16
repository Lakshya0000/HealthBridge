import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Safety.css';

const Safety = () => {
    return (
        <section className="about-content-sec">
            <Container>
                <Row>
                    <Col md={12} lg={8} lg={{ order: 2 }} className="text-center">
                        <div className="section-title">
                            <h1>Safety First</h1>
                        </div>
                        <p className="w-50 m-auto content-inner">It has been proven by scientific research that home remedies have been a successful cure to various small diseases. When there are rememdies so why need to pay doctors a high fees. </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} lg={6}>
                        <div className="vedio-item">
                            <div className="vedio-bg-img">
                                <a href="https://youtu.be/BafXn6YuBsM?si=sHTe51X3HI20r2Wm"><FontAwesomeIcon icon={faPlayCircle} className="vedio-play-btn" /></a>
                            </div>
                            <h5>Using home remedies to cure the common cold</h5>
                        </div>
                    </Col>
                    <Col md={6} lg={6}>
                        <div className="vedio-item">
                            <div className="vedio-bg-img img2">
                                <a href="https://youtu.be/xpYTczv1cjs?si=t2zm2PQU7IEsp5Hr"><FontAwesomeIcon icon={faPlayCircle} className="vedio-play-btn" /></a>
                            </div>
                            <h5>Why Ayurveda? | History, Traditions and Benefits</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Safety;