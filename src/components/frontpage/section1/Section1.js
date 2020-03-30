import React from "react";
import "./Section1.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ContactForm from "../../contact/ContactForm";

export default function Section1({ handleShow }) {
  return (
    <Container className="frontpage-section-1">
      <Row>
        <Col>
          <p>AFM Rådgivende Ingeniører A/S</p>
          <h1>
            Professionel <br />
            rådgivning <br />
            i din <br />
            byggeproces.
            <br />
          </h1>
          <p className="mb-4">
            Uvildig, professionel og erfaren rådgivning som sikrer, at dit
            projekt får det rigtige forløb og når det ønskede mål.
          </p>
          <button
            onClick={handleShow}
            className="btn btn-primary thick-btn d-lg-none"
          >
            KONTAKT
          </button>
          <button className="btn btn-secondary thick-btn d-lg-none">
            SE REFERENCER
          </button>
          <button className="btn btn-primary thick-btn d-none d-lg-block">
            SE REFERENCER
          </button>
        </Col>
        <Col className="d-none d-lg-block">
          <ContactForm></ContactForm>
        </Col>
      </Row>
    </Container>
  );
}
