import React from "react";
import Card from "react-bootstrap/Card";
import List from "./List";
const banner1Img = require("../../assets/images/banner1.jpeg");

function Cardcomp({ containsImg }) {
  return (
    <Card>
      {containsImg ? (
        <Card.Img variant="top" src={banner1Img} alt="football img" />
      ) : (
        <>
          <Card.Body>
            <Card.Title style={{ color: "grey", fontSize: "4rem" }}>
              PLAYER FOCUSED, COACH DIRECTED
            </Card.Title>
            <Card.Text style={{ fontSize: "1rem" }}>
              The development of each individual player sits at the centre of
              everything we do: our Academy is Player focused and Coach
              directed.
            </Card.Text>
            <Card.Text style={{ fontSize: "1rem" }}>
              This means we continue to develop and evolve players by age and
              position. We provide individual and team coaching curriculums that
              ensure our players constantly develop in all our pillars:
            </Card.Text>
            <List />
            <Card.Text style={{ fontSize: "1rem" }}>
              These programmes are reviewed monthly with the Head of Coaching,
              Lead Phase Coach and Head Coaches. Every player matters and we do
              everything we can to enable each individual to thrive as a Strong
              Young Gunner.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </>
      )}
    </Card>
  );
}

export default Cardcomp;
