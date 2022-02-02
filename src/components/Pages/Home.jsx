import React, { useEffect, useState } from "react";
import GetGeo from "../GetGeo";
import AddCityForm from "../AddCityForm";
import AnalogueClock from "../AnalogueClock";
import AnalogueNightMode from "../AnalogueNightMode";
import Time from "../Time";
import CityList from "../CityList";
import DigitalClock from "../DigitalClock";
import Container from "react-bootstrap/Container";

const Home = ({ nightMode, setNightMode }) => {
<<<<<<< HEAD
  const [toggle, setToggle] = useState(false);

=======
  
>>>>>>> 97e253b6f48847ff2bf6d9fc25a4ab2b519d0c18
  let nightModeStyle = {};

  if (nightMode) {
    nightModeStyle.img = {
      filter: "initial",
    };
    nightModeStyle.btn = {
      backgroundColor: "white",
    };
    nightModeStyle.home = {
      backgroundImage: "url(/src/images/space.jpg)",
      backgroundSize: "cover",
    };
    nightModeStyle.container = {
      backgroundColor: "rgba(100, 100, 100, 0.4)",
    };
  }

<<<<<<< HEAD
  const handleToggle = () => {
    setToggle(!toggle);
  };

=======
>>>>>>> 97e253b6f48847ff2bf6d9fc25a4ab2b519d0c18
  const toggleNightMode = () => {
    setNightMode(!nightMode);
  };

  let { img, btn, home, container } = nightModeStyle;

  //CommentAli
  const [toggle, setToggle] = useState(false);
  const [switchText, setSwitchTest] = useState("Switch to Digital")
  const handleToggle = () => {
    setToggle(!toggle)
   
    if (!toggle) {
      setSwitchTest("Switch to Analog")

    } else if (toggle) {
      setSwitchTest("Switch to Digital")
    }
  };
  
  //CommentAli
  return (
    <div id="home" style={home}>
      <Container style={container}>
        <div id="settings">
          <div className="form-check form-switch" onClick={() => handleToggle()}> 
            <div>{switchText}</div>
            <input
              style={{ position: "absolute", right: "10%", marginTop: "-1%", width: "3%" }}
              checked={toggle}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            
          
          </div>
          <button onClick={toggleNightMode} id="nightmode-btn" style={btn}>
            <img
              src="src/images/nightmode-btn.png"
              alt=""
              height="30"
              width="30"
              style={img}
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
    </div>
  );
};
export default Home;
