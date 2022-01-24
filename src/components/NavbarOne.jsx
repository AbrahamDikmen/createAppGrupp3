import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../Styles/Navbar.css";
import JsonFile from "./JsonFile/cities-timezones.json";
import { SearchCity } from "./SearchCity";
import earth from "/src/images/earth.png";
// import { useNavigate } from "react-router-dom";
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar'


const NavbarOne = () => {
  return (
    <Navbar id="navbarBackground" expand="lg">
      <Container fluid>
        <Navbar.Brand id="Logo" href="#">
          TAJMING
        <img
          src={earth}
          height="50"
            width="50"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto  my-lg-0"
            style={{ height: "30px" }}
            navbarScroll
          >
            <Form className="d-flex">
              <SearchCity data={JsonFile} />

              <Button id="searchButton" variant="outline-success">
                Sök
              </Button>

              <Nav.Link id="myCitys" href="#MinaStäder">
                Mina städer
              </Nav.Link>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarOne;
