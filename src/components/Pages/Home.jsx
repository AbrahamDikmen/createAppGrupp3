import React from "react";
import GetGeo from "../GetGeo";
import AddCityForm from "../AddCityForm";

const Home = () => {
  return (
    <div>
      <h1> Home</h1>

      <GetGeo />

      <AddCityForm />
    </div>
  );
};

export default Home;
