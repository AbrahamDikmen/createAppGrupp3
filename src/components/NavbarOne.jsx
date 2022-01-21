import React from 'react'
// import { useNavigate } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../Styles/Navbar.css'
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar'


const NavbarOne = () => {
  return (
      
        <Navbar id= "navbarBackground" expand="lg">
  <Container fluid>
    <Navbar.Brand id="Logo" href="#">TAJMING</Navbar.Brand>
    
    <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
      <Nav className="me-auto  my-lg-0 "
            style={{ maxHeight: '100px', }}
              navbarScroll >
        <Form className="d-flex ">
        <FormControl id = "formControl"
            type="search"
            placeholder="Ange en stad"
            className="me-2"
            aria-label="Search"
        />
        <Button id="searchButton" variant="outline-success">Sök</Button>
            </Form>
            
        <Nav.Link id="myCitys"href="#MinaStäder">Mina städer</Nav.Link>
      </Nav>
   
    </Navbar.Collapse>
  </Container>
</Navbar>
        
  )
}

export default NavbarOne;