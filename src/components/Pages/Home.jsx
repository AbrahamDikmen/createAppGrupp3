import React from "react";
import GetGeo from "../GetGeo";
import AddCityForm from "../AddCityForm";
import AnalogueClock from "../AnalogueClock";

const Home = () => {
  return (
    <div>
      <h1> Home</h1>

      <GetGeo />
      <AnalogueClock />

      <AddCityForm />
    </div>
  );
};

export default Home;
