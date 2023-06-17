import React, { useState } from "react";
import logo from "../../assets/other-images/general_teeket_logo.svg";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import "./MenuButton.css";

function NavbarLogin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar
        expand="md"
        className="h-[100px] w-full flex justify-between pt-[1.5rem] px-[1rem] shadow-lg "
      >
        <Container fluid>
          <Navbar.Brand>
            <a href="/">
              <img src={logo} alt="teeket-logo" />
            </a>
          </Navbar.Brand>
          <button
            type="button"
            onClick={handleShow}
            className="menu-button mt-2 bg-[#001133] py-[0.6rem] px-[1.2rem] text-[#FFFFFF] rounded-[10px] text-sm- font-bold"
          >
            Menu
          </button>

          <Navbar.Offcanvas
            show={show}
            onHide={handleClose}
            responsive="lg"
            id="responsive-navbar-nav"
            placement="end"
            style={{ width: "60%" }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title> </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <ul>
                  <li>
                    <a href="/">Teeket</a>
                  </li>
                  <li>
                    <a href="/home">Home</a>
                  </li>
                </ul>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarLogin;
