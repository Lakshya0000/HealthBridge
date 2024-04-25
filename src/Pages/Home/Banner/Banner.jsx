import "@fontsource/josefin-sans";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import display from '../../../Images/bannerim.png';
import './Banner.css';



const Banner = () => {
    return (
            <section className="single-hero-slide text-white ">
                <Container className="d-flex justify-content-center align-items-center">
                    <Row className="align-items-center">
                        <Col md={12} sm={12} lg={6}>
                            <div className="hero-slide-left justify-content-end align-items-center text-center text-lg-start">
                                <h2>Better Life Through</h2>
                                <h1>Better Health</h1>
                                <p className="mb-xs-5">Join us to a fun and friendly healthier environment. Our doctors are working so hard to see smile on your face that you deserve! We are dedicated about our duties.</p>
                                <div className="banner-btn m-sm-auto">
                                    <Link to="/login"><button className="theme-btn btn-fill">Appoinment</button></Link>
                                    <button className='theme-btn bth-blank'>Learn More</button>
                                </div>
                            </div>
                        </Col>
                        <Col md={12} sm={12} lg={6} className="mt-sm-5">
                            <div className="hero-slide-right text-center text-lg-start mt-sm-5">
                                <img src={display} alt="" className="display"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    );
};

export default Banner;