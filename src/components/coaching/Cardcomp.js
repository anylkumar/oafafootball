import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cardcomp() {
  return (
    <Card>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title style={{ color: "grey", fontSize: "4rem" }}>
          THE OAFA WAY
        </Card.Title>
        <Card.Text style={{ fontSize: "1rem" }}>
          Our Academy mission of creating the most challenging and caring
          football academy in the world defines what we, as Coaches, do. That is
          why we constantly work towards being the most challenging and caring
          coaching team in world football.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Cardcomp;
