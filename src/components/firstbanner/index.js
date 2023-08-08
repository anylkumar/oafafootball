import Card from "react-bootstrap/Card";
import "./style.css";
const logoImage = require("../../assets/images/oafalogo.png"); // Adjust the path as needed
const banner4Img = require("../../assets/images/banner4.jpeg");

function Firstbanner({ imageTitle }) {
  return (
    <Card id="firstbanner" className="bg-dark text-white">
      <Card.Img src={banner4Img} alt="Card image" fluid />
      <Card.ImgOverlay>
        <Card.Title className="custom-title">{imageTitle}</Card.Title>
        {/* <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text> */}
      </Card.ImgOverlay>
    </Card>
  );
}

export default Firstbanner;
