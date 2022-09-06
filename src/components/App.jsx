import React from "react";
import TopNavbar from "./TopNavbar";
import Contact from "./Contact";
import Home from "./Home";
import Desserts from "./Desserts";
import AddDessert from "./AddDessert";
import DeleteDessert from "./DeleteDessert";
import UpdateDessert from "./UpdateDessert";
import AboutUs from "./AboutUs";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "../styles/App.css";
import { CssBaseline } from "@mui/material";
import Container from '@mui/material/Container';
import { useEffect } from "react";

const App = () => {
  const [desserts, setDesserts] = useState([]);
  useEffect(() => {
    fetch("https://desserts-db.herokuapp.com/desserts")
      .then((res) => res.json())
      .then((data) => setDesserts(data));
  }, [setDesserts]);

  return (
    <div className="App background">
      <TopNavbar />
      <CssBaseline />
      <Container className="content">
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route
            path="/desserts"
            element={<Desserts desserts={desserts} handleDessertInCart={handleDessertInCart} setDesserts={setDesserts} setDessertsInCart={setDessertsInCart} />}
          />
          <Route
            path="/addDessert"
            element={<AddDessert />} />
          <Route
            path="/deleteDessert"
            element={<DeleteDessert desserts={desserts} />}
          />
          <Route
            path="/updateDessert"
            element={<UpdateDessert desserts={desserts} />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </Container>

    </div>
  );
};

export default App;
