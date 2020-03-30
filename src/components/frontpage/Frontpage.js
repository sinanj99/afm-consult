import React from "react";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import "./Frontpage.css";

export default function Frontpage({ handleShow }) {
  return (
    <div className="frontpage">
      <div className="frontpage-section-1-container">
        <Section1 handleShow={handleShow}></Section1>
      </div>
      <div className="frontpage-section-2-container">
        <Section2></Section2>
      </div>
    </div>
  );
}
