import React from "react";
import GetGeo from "../GetGeo";
import AddCityForm from "../AddCityForm";
import AnalogueClock from "../AnalogueClock";


const Home = () => {
  return (
    <div id="home">
      <div className="home-Container">
        <h1> Home</h1>
        <GetGeo />
        <AnalogueClock />
        <Time/>
        <AddCityForm />
      </div>
    </div>
  );
};

export default Home;
