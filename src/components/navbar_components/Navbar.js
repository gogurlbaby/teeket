import React, { useState } from "react";
import logo from "../../assets/other-images/general_teeket_logo.svg";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import "./MenuButton.css";

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar
      expand="md">
        <Container fluid>
          <Navbar.Brand>
            <img src={logo} alt="teeket-logo"/>
          </Navbar.Brand>
          <button
            type="button"
            onClick={handleShow}
            className="menu-button mt-2 bg-[#001133] py-[1rem] px-[1.5rem] text-[#FFFFFF] rounded-[12px] text-sm- font-bold"
          >
            Menu
          </button>

          <Navbar.Offcanvas
            show={show}
            onHide={handleClose}
            responsive="lg"
            id="responsive-navbar-nav"
            placement="end"
            style={{ width: "50%" }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title> </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="list-items justify-content-end flex-grow-1 pe-3 mr-[1rem]">
                <ul>
                  <li><a href="/">Teeket</a></li>
                  <li><a href="/home">Home</a></li>
                  <li><a href="/discover-events">Discover Events</a></li>
                  <li><a href="/trending-events">Book Events</a></li>
                </ul>
                
                {/* <Nav.Link href="/">Teeket</Nav.Link>
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/discover-events">Discover</Nav.Link>
                <Nav.Link href="/trending-events">Book Events</Nav.Link> */}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
