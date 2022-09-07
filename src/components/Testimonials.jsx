import Carousel from "react-bootstrap/Carousel";
import dessertbg from "../img/dessertbg.jpeg";
import cafebg from "../img/cafebg.jpeg";
import coffeebg from "../img/coffeebg.jpeg";
import "../styles/Testimonials.css";
const Testimonials = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={cafebg} alt="First slide" />
        <Carousel.Caption className="background-fix">
          <h3>Cafeteria Decor </h3>
          <p>
            We started buying this desserts due to the great variety of regimes
            they have.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={dessertbg} alt="Second slide" />

        <Carousel.Caption className="background-fix">
          <h3>Sweet Treats </h3>
          <p>Best desserts ever</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={coffeebg} alt="Third slide" />

        <Carousel.Caption className="background-fix">
          <h3>Cafeteria Balboa</h3>
          <p>We sell this desserts like hot potato.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Testimonials;
