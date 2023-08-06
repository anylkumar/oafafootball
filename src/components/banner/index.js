import Carousel from "react-bootstrap/Carousel";
import Carouselimg from "./Carouselimg";
// banner images
const banner1Img = require("../../assets/images/banner1.jpeg");
const banner2Img = require("../../assets/images/banner2.jpeg");
const banner3Img = require("../../assets/images/banner3.jpeg");
const banner4Img = require("../../assets/images/banner4.jpeg");

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="bg-body-tertiary">
      <Carousel.Item>
        <Carouselimg fileSrc={banner1Img} />
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <Carouselimg fileSrc={banner2Img} />
        {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <Carouselimg fileSrc={banner3Img} />
        {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <Carouselimg fileSrc={banner4Img} />
        {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
