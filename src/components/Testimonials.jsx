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
          <h3>Our Cafeteria Decor</h3>
          <p>
            We are located in an ambient,secure and spacious location.Our
            restaurant decor is very exquisite & lounge worthy.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={dessertbg} alt="Second slide" />

        <Carousel.Caption className="background-fix">
          <h3>Sweet Treats </h3>
          <p>
            We offer the most delicious delicacies & treats at a very affordable
            price.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={coffeebg} alt="Third slide" />

        <Carousel.Caption className="background-fix">
          <h3>Coffee café</h3>
          <p>
            We have the best cappuccino & hot latte in the whole of Nairobi City
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Testimonials;
