import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
const logoImage = require("../../assets/images/oafalogo.png"); // Adjust the path as needed

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={logoImage}
            alt="Logo"
            width="30"
            height="auto"
            className="d-inline-block align-top"
          />
          <span id="brandName" className="brown">
            OAFA
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-navbar-nav" />
        <Navbar.Collapse id="menu-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">OUR ACADEMY</Nav.Link>
            <Nav.Link href="#link"> OUR VISION </Nav.Link>
            <Nav.Link href="#link">OUR CLUB</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
