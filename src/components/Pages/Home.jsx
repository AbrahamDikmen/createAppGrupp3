import React, { useEffect, useState } from "react";
import GetGeo from "../GetGeo";
import AddCityForm from "../AddCityForm";
import AnalogueClock from "../AnalogueClock";
import AnalogueNightMode from "../AnalogueNightMode";
import Time from "../Time";
import CityList from "../CityList";
import DigitalClock from "../DigitalClock";
import { Container } from "react-bootstrap";

const Home = ({ nightMode, setNightMode }) => {

  const toggleNightMode = () => {
    setNightMode(!nightMode);
  };

  let { img, btn, home, container } = nightModeStyle;
  
  //Using a react hook(useState), toggle is a constant and setToggle is a set function.
  const [toggle, setToggle] = useState(false);
  
  //This hook makes the toggle to switch betwen analog and digital text. 
  const [switchText, setSwitchTest] = useState(<h6>Switch to Digital</h6>);

  //if statement that switches betwen Analog and Digital clock.
  const handleToggle = () => {
    setToggle(!toggle);
    if (!toggle) {
      setSwitchTest(<h6>Switch to Analog</h6>);
    } else if (toggle) {
      setSwitchTest(<h6>Switch to Digital</h6>);
    }
  };

  
  return (
    < div className='background' >
      <Container>
        <div id="settings">
          <div className="toggle">{switchText}</div>
          <div
            className="form-check form-switch"
            onClick={() => handleToggle()}  
          >
  
            <input
              height="30"
              width="30"
              checked={toggle}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
          <button onClick={toggleNightMode} id="nightmode-btn">
            <img
              src="src/images/nightmode-btn.png"
              alt=""
              height="30"
              width="30"
            />
          </button>
        </div>
        <div className="homeTop">
          {toggle ? (
            <DigitalClock />
          ) : nightMode ? (
            <AnalogueNightMode />
          ) : (
            <AnalogueClock />
          )}
          <GetGeo />
          <Time />
        </div>
        <CityList></CityList>
        <AddCityForm />
      </Container>
    </div >
  );
};
export default Home;
