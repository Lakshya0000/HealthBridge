import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Content.css';

const Content = () => {
    return (
        <section className="about-content-sec">
            <Container>
                <Row>
                    <Col md={12} lg={8} lg={{ order: 2 }} className="text-center">
                        <div className="section-title">
                            <h1>Our Aim</h1>
                        </div>
                        <p className="w-50 m-auto content-inner">Our aim is to deliver online treatment possible to every household of this country.A person from rural area who just have a smartphone and internet connection can connet with doctors online and there is no need to travel to cities to visit doctor.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Content;