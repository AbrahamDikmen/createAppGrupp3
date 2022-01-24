import React from "react";
import  Navbar  from "react-bootstrap/Navbar";
import Container  from "react-bootstrap/Container";
import  Nav  from "react-bootstrap/Nav";
import  Form  from "react-bootstrap/Form";
import  Button  from "react-bootstrap/Button";
import "../Styles/Navbar.css";
import jsonfiles from "../jsonfiles/cities-timezones.json";
import { SearchCity } from "./SearchCity";
import earth from "/src/images/earth.png";
import {Link} from "react-router-dom"


const NavbarOne = () => {
  return (
    <Navbar id="navbarBackground" expand="lg">
      <Container fluid>
        <Navbar.Brand id="Logo" href="">
            <Link id="textLogo" to="/">TAJMING</Link>
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
              <SearchCity data={jsonfiles} />

              <Button id="searchButton" variant="outline-success">
                Sök
              </Button>

              <Nav.Link id="MyCities" href="MinaStäder">
                            <Link id="MyCities" to="/MinaStäder">Mina Städer</Link>
              </Nav.Link>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};

export default NavbarOne;
