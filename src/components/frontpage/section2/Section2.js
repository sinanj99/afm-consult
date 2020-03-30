import React from "react";
import "./Section2.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import construction from "../../../assets/images/under-construction.svg";
import checklist from "../../../assets/images/checklist.svg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import ScrollAnimation from "react-animate-on-scroll";

export default function Section2() {
  return (
    <Container className="frontpage-section-2">
      <ScrollAnimation animateIn="fadeIn">
        <Row className="mb-5">
          <Col xs={12} lg={6} className="mb-5">
            <h1>Hvorfor vælge os?</h1>
            <br></br>
            <p>
              Her får du professionel og erfaren rådgivning, som sikrer, at dit
              projekt får det rigtige forløb og når det ønskede mål. Uanset om
              opgaven er stor eller lille, bestræber vi os på at yde
              professionel rådgivning tilpasset projektet og dine behov.
            </p>
          </Col>

          <Col
            xs={12}
            lg={6}
            className="d-flex align-items-center justify-content-center mb-5"
          >
            <Image src={construction}></Image>
          </Col>
        </Row>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Row>
          <Col xs={12} lg={6} className="mb-5">
            <h1>Hos os får du:</h1>
            <br></br>
            <ul>
              <li>
                <p>
                  Professinel styring af kvalitet, funktioner, tid og økonomi{" "}
                  <IoMdCheckmarkCircleOutline className="checkmark"></IoMdCheckmarkCircleOutline>
                </p>
              </li>
              <li>
                <p>
                  Rådgivning tilpasset dine behov{" "}
                  <IoMdCheckmarkCircleOutline className="checkmark"></IoMdCheckmarkCircleOutline>
                </p>
              </li>
              <li>
                <p>
                  Gensidig tillid og respekt{" "}
                  <IoMdCheckmarkCircleOutline className="checkmark"></IoMdCheckmarkCircleOutline>
                </p>
              </li>
              <li>
                <p>
                  Et højt fagligt niveau og personlig engagement{" "}
                  <IoMdCheckmarkCircleOutline className="checkmark"></IoMdCheckmarkCircleOutline>
                </p>
              </li>
            </ul>
            <br className="d-none d-lg-block"></br>
            <button className="btn btn-primary thick-btn d-none d-lg-block">
              SE KOMPETENCER
            </button>
          </Col>
          <Col
            xs={12}
            lg={6}
            className="d-flex align-items-center justify-content-center mb-5"
          >
            <Image src={checklist}></Image>
          </Col>
          <button className="btn btn-primary thick-btn d-block d-lg-none w-100 m-3">
            SE KOMPETENCER
          </button>
        </Row>
      </ScrollAnimation>
    </Container>
  );
}
