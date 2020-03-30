import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import { IoIosArrowForward } from "react-icons/io";

export default function Header({ handleShow }) {
  const dropdowns = [
    { name: "Kompetencer", link: "competences" },
    { name: "Referencer", link: "references" },
    { name: "Om os", link: "about" }
  ];
  const dropdownItems = [
    { name: "Konstruktioner", link: "constructions", id: "competences" },
    { name: "Installationer", link: "installations", id: "competences" },
    { name: "Energi", link: "energy", id: "competences" },
    {
      name: "Byggestyring",
      link: "construction-management",
      id: "competences"
    },
    { name: "Bygherrerådgivning", link: "client-advisory", id: "competences" },
    { name: "Brand", link: "fire", id: "competences" },
    { name: "Fugt", link: "moisture", id: "competences" },
    { name: "Indeklima", link: "indoor-climate", id: "competences" },
    { name: "Boliger", link: "housing", id: "references" },
    { name: "Erhverv", link: "vocation", id: "references" },
    { name: "Institutioner", link: "institutions", id: "references" },
    { name: "Andre", link: "other", id: "references" },
    { name: "Firmaoplysninger", link: "company-info", id: "about" },
    { name: "Medarbejdere", link: "employees", id: "about" },
    { name: "GDPR", link: "gdpr", id: "about" }
  ];
  return (
    <Navbar bg="light" fixed="top" expand="md">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>AFM Consulting A/S</Navbar.Brand>
        </NavLink>
        <Button
          onClick={handleShow}
          className="ml-auto d-md-none btn btn-primary navbar-btn"
        >
          Kontakt
        </Button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {dropdowns.map(dropdown => (
              <Dropdown key={dropdown.name} as="ul">
                <Dropdown.Toggle className="parent-link" as="li">
                  {dropdown.name}
                </Dropdown.Toggle>
                <Dropdown.Menu as="ul">
                  <NavLink className="dropdown-link" to={"/" + dropdown.link}>
                    <Dropdown.Item as="li">
                      {dropdown.name}
                      <IoIosArrowForward className="align-self-center arrow"></IoIosArrowForward>
                    </Dropdown.Item>
                  </NavLink>
                  <Dropdown.Divider />
                  {dropdownItems
                    .filter(item => item.id === dropdown.link)
                    .map(item => (
                      <NavLink
                        key={item.name}
                        className="dropdown-link"
                        to={"/" + dropdown.link + "/" + item.link}
                      >
                        <Dropdown.Item as="li">{item.name}</Dropdown.Item>
                      </NavLink>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
            ))}
            <NavLink className="parent-link" to="/job">
              Job
            </NavLink>
          </Nav>
          <Button
            onClick={handleShow}
            className="d-none d-md-block ml-auto btn btn-primary navbar-btn"
          >
            Kontakt
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
