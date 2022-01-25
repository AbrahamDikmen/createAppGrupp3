import React from "react";
import '../../Styles/myCities.css';
import { Link } from 'react-router-dom';


export default function MyCities({ cities }) {

  /*
  Renders a component containing links for the given list of cities.
  The links reroutes to a detailed view for that city.
  */

  return (
    <div className="cities-container">

      <div className="cities-outer-wrapper">
        <div className="cities-inner-wrapper">
          <h1>Mina Städer</h1>
          {
            cities && cities.map((item, i) =>
              <Link key={i} to={`/${item.city}`} className="link-item">
                <div key={i}>
                  {item.city} ({item.timezone})
                </div>
              </Link>)
          }
        </div>
      </div>

    </div>
  );
};