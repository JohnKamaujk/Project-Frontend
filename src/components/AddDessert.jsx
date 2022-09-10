import FormDesserts from "./FormDesserts";
import "../styles/Home.css";

const AddDessert = () => {
  function fetchAdd(e, params) {
    e.preventDefault();
    fetch("https://dessert1-app.herokuapp.com/desserts", {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => window.alert("Dessert added"));
  }
  return (
    <div>
      <h1>Add Dessert</h1>
      <FormDesserts fetchRequest={fetchAdd} />;
    </div>
  );
};
export default AddDessert;
