import React, { useEffect, useState } from "react";
import React, { useState } from "react";

const GetGeo = () => {
  const [details, setDetails] = useState(null);
  const [timeString, setTimeString] = useState(new Date().toLocaleTimeString());

  const getUserGeolocationDetails = () => {
    fetch(
      "https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708"
    )
      .then((response) => response.json())
      .then((data) => setDetails(data));
  };

  useEffect(() => {
    getUserGeolocationDetails();
    setInterval(() => { setTimeString(new Date().toLocaleTimeString()) }, 1000);
  }, []);

  return (
    <div id="geo">
      <div className="geo-container">
        {details && (
          <ul className="list-group">
            <h2>
              <li className="list-group-item">{timeString + ""}</li>
            </h2>

            <p>
              <li className="list-group-item">
                {`${details.city}, ${details.country_name}(${details.country_code})`}
              </li>
            </p>
          </ul>
        )}
      </div>
    </div>
  );
};

export default GetGeo;
