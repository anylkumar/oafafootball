import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
const logoImage = require("../../assets/images/oafalogo.png"); // Adjust the path as needed

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col xs={12} md={6} className="d-flex align-items-center">
            <Image
              src={logoImage}
              alt="Brand Logo"
              width="50"
              height="50"
              className="me-2"
            />
            <span className="h6">OAFA Football Academy</span>
          </Col>
          <Col xs={12} md={6} className="text-md-end mt-3 mt-md-0">
            &copy; {new Date().getFullYear()} All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
