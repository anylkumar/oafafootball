import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Pagecard from "./Pagecard";
import "./style.css";

function Otherpage() {
  return (
    <Container>
      <Row>
        <Col className="">
          <Pagecard />
        </Col>
        <Col className="">
          <Pagecard />
        </Col>
      </Row>
    </Container>
  );
}

export default Otherpage;
