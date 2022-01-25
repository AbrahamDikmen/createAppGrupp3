import React, { useState } from "react";
import GetGeo from "../GetGeo";
import AddCityForm from "../AddCityForm";
import AnalogueClock from "../AnalogueClock";
import AnalogueNightMode from "../AnalogueNightMode";
import Time from "../Time";
import CityList from "../CityList";
import DigitalClock from "../DigitalClock";
import Container from 'react-bootstrap/Container';

const Home = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div id="home">
      <Container>
        <div className="form-check form-switch" onClick={() => handleToggle()}>
          <input
            style={{ position: "absolute", right: "20px", marginTop: "4%" }}
            checked={toggle}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
        <div className="homeTop">
          {toggle ? <DigitalClock /> : <AnalogueClock />}
          <GetGeo />
          <Time />
        </div>
        <CityList></CityList>
        <AddCityForm />
      </Container>
    </div>
  );
};

export default Home;
