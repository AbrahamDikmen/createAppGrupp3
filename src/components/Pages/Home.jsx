import React, { useState } from "react";
import GetGeo from "../GetGeo";
import AddCityForm from "../AddCityForm";
import AnalogueClock from "../AnalogueClock";
import AnalogueNightMode from "../AnalogueNightMode";
import Time from "../Time";
import CityList from "../CityList";

const Home = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div id="home">
      <div className="home-Container">
        <h1>Home</h1>
        <div className="form-check form-switch" onClick={() => handleToggle()}>
          <input
            style={{ position: "absolute", right: "20px", marginTop: "3%" }}
            checked={toggle}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
        {toggle ? <GetGeo /> : <AnalogueClock />}
        <Time />
        <CityList></CityList>
        <AddCityForm />
      </div>
    </div>
  );
};

export default Home;
