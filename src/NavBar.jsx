import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

// import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
              <Container>
                <Navbar.Brand className="navbar-brand" href="#home">
                  GetWebby
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/service">Services</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
