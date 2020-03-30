import React from "react";
import Form from "react-bootstrap/Form";
import "./Contact.css";
export default function ContactForm() {
  return (
    <Form>
      <Form.Group controlId="name">
        <Form.Label>Dit Navn</Form.Label>
        <Form.Control
          type="text"
          placeholder="Skriv navn"
          className="thick-control"
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Din email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Skriv email"
          className="thick-control"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group controlId="phone">
        <Form.Label>Din telefon</Form.Label>
        <Form.Control
          type="text"
          placeholder="Skriv telefonnummer"
          className="thick-control"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group controlId="message">
        <Form.Label>Evt besked</Form.Label>
        <Form.Control
          as="textarea"
          rows="5"
          placeholder="Skriv besked"
          className="thick-control"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <div className="d-flex align-items-center">
        <button className="btn btn-primary thick-btn">KONTAKT</button>
      </div>
    </Form>
  );
}
