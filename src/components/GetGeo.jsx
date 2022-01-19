import React, { useState } from "react";

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
    <div className="geo">
      {getUserGeolocationDetails()}
      <h4>
        <div>
          {details && (
            <ul className="list-group">
              <li className="list-group-item">{today + ""}</li>
              <li className="list-group-item">
                Location <br />
                {`${details.city}, ${details.country_name}(${details.country_code})`}
              </li>

              <li className="list-group-item"></li>
            </ul>
          )}
        </div>
      </h4>
    </div>
  );
};

export default GetGeo;
