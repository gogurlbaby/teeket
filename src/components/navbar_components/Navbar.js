import React, { useState } from "react";
import logo from "../../assets/other-images/general_teeket_logo.svg";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar className="h-[80px] w-full pt-[1.5rem] px-[1rem]" expand="md">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} alt="teeket-logo" />
          </Navbar.Brand>
          <button
            type="button"
            onClick={handleShow}
            className="mt-2 bg-[#001133] py-[0.8rem] px-[1.2rem] text-[#FFFFFF] rounded-[12px] text-sm- font-bold"
          >
            Menu
          </button>

          <Navbar.Offcanvas
            show={show}
            onHide={handleClose}
            responsive="lg"
            id="responsive-navbar-nav"
            placement="end"
            style={{ width: "178px" }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title> </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Landing Page</Nav.Link>
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/discover-events">Discover Events</Nav.Link>
                <Nav.Link href="/book-events">Book Events</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
