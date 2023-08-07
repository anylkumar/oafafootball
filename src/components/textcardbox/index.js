import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cardcomp from "./Cardcomp";
import "./style.css";

function Textcardbox({ setOrder }) {
  return (
    <Container>
      {setOrder === "one" ? (
        <Row style={{ height: "500px" }}>
          <Col className="centerdiv order-last order-md-first">
            <Cardcomp />
          </Col>
          <Col className="">
            <Cardcomp containsImg={true} />
          </Col>
        </Row>
      ) : (
        <Row style={{ height: "500px" }}>
          <Col className="centerdiv order-last order-md-first">
            <Cardcomp containsImg={true} />
          </Col>
          <Col className="">
            <Cardcomp />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Textcardbox;
