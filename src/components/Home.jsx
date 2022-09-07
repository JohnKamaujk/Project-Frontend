import "../styles/Home.css";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <div className="phrase-container">
        <h1>Dessert Palace</h1>
        <p>
          We are located in a beautiful environment surrounded by such lustrous
          greenery in Nairob Spring Valley.The entire setting is an open space
          that boasts of Zen surrounding inspired by urban gardens of Asia.Our
          menu caters for both dine-in and takes away clients.
        </p>
        <h1>Reviews</h1>
        <Testimonials />
      </div>
    </div>
  );
};
export default Home;
