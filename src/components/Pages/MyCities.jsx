import React from 'react';
import { useState } from "react";
import '../../Styles/myCities.css';
import { Link } from 'react-router-dom';

export default function MyCities({ cities }) {
  /*
  Renders a component containing links for the given list of cities.
  The links reroutes to a detailed view for that city.
  */

  const [storedCities, setCities] = useState(cities);

  // A function that filters the storedCities state variable on the 
  // given index.Then sets the localStorage.storedCities to the 
  // filtered array and calls setCities to set the value of the 
  // storedCities state variable.
  const removeCity = (index) => {
    let filteredCities = storedCities.filter((item) => {
      return item !== storedCities[index];
    });

    localStorage.storedCities = JSON.stringify(filteredCities);
    setCities(filteredCities);
  }

  return (
    <div className="cities-container">

      <div className="cities-outer-wrapper">
        <div className="cities-inner-wrapper">
          <h1>Mina Städer</h1>
          {
            storedCities && storedCities.map((item, i) =>
              <div key={i} className="city-link-wrapper">
                <Link to={`/${item.city}`} className="link-item">
                  <div>
                    {item.city} ({item.timezone})
                  </div>
                </Link>
                <div onClick={() => removeCity(i)} className="remove-city">X</div>
              </div>)
          }
        </div>
      </div>

    </div>
  );
};