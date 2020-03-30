import React from "react";
import Modal from "react-bootstrap/Modal";
import ContactForm from "./ContactForm";
import "./Contact.css";

export default function ContactModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Kontaktformular</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <ContactForm></ContactForm>
      </Modal.Body>
    </Modal>
  );
}
