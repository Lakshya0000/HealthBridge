import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FakeRemedies } from '../../../Data/Remedie';
import MultiActionAreaCard from './remDum';

const Remedie = () => {
    return (
        <section className="doctor-wrapper">
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="section-title">
                            <h1 className="mb-5 mb-sm-dent">Popular Remedies</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        FakeRemedies.map(remedie => (
                            <MultiActionAreaCard key={remedie.id} remedie={remedie} />
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
};



export default Remedie;