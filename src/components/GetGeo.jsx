import React, { useState } from "react";
import Backround from "../images/nasa.jpg";

const GetGeo = () => {
  const [details, setDetails] = useState(null);

  const getUserGeolocationDetails = () => {
    fetch(
      "https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708"
    )
      .then((response) => response.json())
      .then((data) => setDetails(data));
  };

  let day = new Date(),
    time = day.toLocaleTimeString();
  let today = `${time}`;

  return (
    <div id="geo">
      <div className="geo-container">
        {details && (
          <ul className="list-group">
            <h2>
              <li className="list-group-item">{today + ""}</li>
            </h2>

            <p>
              <li className="list-group-item">
                {`${details.city}, ${details.country_name}(${details.country_code})`}
              </li>
            </p>
          </ul>
        )}
        {getUserGeolocationDetails()}
      </div>
    </div>
  );
};

export default GetGeo;
