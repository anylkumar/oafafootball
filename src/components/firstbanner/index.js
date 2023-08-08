import Card from "react-bootstrap/Card";
import "./style.css";
const logoImage = require("../../assets/images/oafalogo.png"); // Adjust the path as needed
const banner4Img = require("../../assets/images/banner4.jpeg");

function Firstbanner({ imageTitle }) {
  return (
    <div>
      <Card id="firstbanner" className="bg-dark text-white">
        <Card.Img
          src={banner4Img}
          alt="Card image"
          fluid
          style={{ height: "100vh", objectFit: "cover" }}
        />
        <Card.ImgOverlay>
          <Card.Title className="custom-title">
            {imageTitle.toUpperCase()}
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Firstbanner;
