import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cardcomp from "./Cardcomp";
import "./style.css";

function Coaching() {
  return (
    <Container>
      <Row style={{ height: "500px" }}>
        <Col className="centerdiv">
          <div>
            <h1
              style={{ fontWeight: "bolder", color: "grey", fontSize: "5rem" }}
            >
              Coaching
            </h1>
          </div>
        </Col>
        <Col className="centerdiv2">
          <Cardcomp />
        </Col>
      </Row>
    </Container>
  );
}

export default Coaching;
