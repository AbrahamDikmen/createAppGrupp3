import React from "react";
import GetGeo from "../GetGeo";
import AddCityForm from "../AddCityForm";
import AnalogueClock from "../AnalogueClock";
import AnalogueNightMode from "../AnalogueNightMode";

const Home = () => {
  return (
    <div id="home">
      <div className="home-Container">
        <GetGeo />
        <AnalogueClock />
        <AddCityForm />
      </div>
    </div>
  );
};

export default Home;
