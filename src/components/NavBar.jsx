// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar
      expand="lg"
      className="shadow-sm"
      style={{
        backgroundColor: "#FFFFFF",
        backgroundImage: `url("https://www.transparenttextures.com/patterns/xv.png")`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-black fw-bold fs-4">
          Seasons & Stories
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-black" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="#home" className="text-black">Home</Nav.Link>
            <Nav.Link href="#services" className="text-black">Services</Nav.Link>
            <Nav.Link href="#about" className="text-black">About</Nav.Link>
            <Nav.Link href="#contact" className="text-black">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
