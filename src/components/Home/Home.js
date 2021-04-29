import React from "react";
import CardCategories from "../CardCategories/CardCategories";
import "./Home.css";
import vehicles from "./ridersData";

const Home = () => {
  document.title = "Home";
  return (
    <div>
      <div className="home-container" >
        {vehicles.map((vehicle) => (
          <CardCategories key={vehicle.id} vehicle={vehicle}></CardCategories>
        ))}
      </div>
    </div>
  );
};

export default Home;
