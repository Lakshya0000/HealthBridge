import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import serviceDetailImg from "../../../Images/ginger.png";
import serviceDetailImg2 from "../../../Images/honey.png";
import "./Detail.css";

const Detail = () => {
  return (
    <>
      <section className="healing p-5">
        <Container>
          <Row className="align-items-center p-5">
            <Col lg={6} sm={12} xs={12}>
              <div className="expertDentist-txt mt-5 mt-lg-0">
                <h2 className="fw-bold">Ginger</h2>
                <p>
                  for nausea, upset stomach, and inflammation. You can grate
                  ginger into tea or hot water, or take ginger chews.
                </p>
                <p>
                  How to use ginger as a home remedy:Ginger tea: This is a
                  classic and easy way to consume ginger. Simply grate or slice
                  fresh ginger and steep it in hot water for a soothing tea.
                  Chew on ginger: Ginger chews are a convenient way to get a
                  dose of ginger. Look for ginger chews that are made with real
                  ginger and avoid excessive sugar content. Add it to cooking:
                  Ginger adds a delicious flavor to stir-fries, soups, and
                  stews.
                </p>
              </div>
            </Col>
            <Col lg={6} sm={12} xs={12}>
              <img
                src={serviceDetailImg}
                alt="expertDentist"
                className="img-fluid ginger"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="healing p-5 footer-bg">
        <Container>
          <Row className="align-items-center p-5">
            <Col lg={6} sm={12} xs={12}>
              <img
                src={serviceDetailImg2}
                alt="expertDentist"
                className="img-fluid pt-xs-5"
              />
            </Col>
            <Col lg={6} sm={12} xs={12}>
              <div className="expertDentist-txt mt-5 mt-lg-0">
                <h2 className="fw-bold text-white">Honey</h2>
                <p className="text-white">
                  for coughs, sore throats, and wounds. Honey has antibacterial
                  properties and can soothe a cough.
                </p>
                <p className="text-white">
                  Wound healing: Honey's antibacterial and antimicrobial
                  properties can aid in wound healing. Studies suggest it
                  promotes tissue regeneration and fights infection. Topical
                  application of medical-grade honey may be beneficial for minor
                  cuts, scrapes, and burns. Cough suppressant: Honey can be
                  a soothing remedy for coughs, especially nighttime coughs that
                  disrupt sleep. Its demulcent properties coat the throat,
                  reducing irritation and cough.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Detail;
