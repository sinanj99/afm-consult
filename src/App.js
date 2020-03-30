import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import "./App.css";
import Frontpage from "./components/frontpage/Frontpage";
import ContactModal from "./components/contact/ContactModal";

function App() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <Router>
        <Header handleShow={handleShow}></Header>
      </Router>
      <Frontpage handleShow={handleShow}></Frontpage>
      <ContactModal show={show} handleClose={handleClose}></ContactModal>
    </React.Fragment>
  );
}

export default App;
