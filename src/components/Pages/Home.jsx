import React from 'react'
import GetGeo from "../GetGeo";
import AddCityForm from '../AddCityForm';

const Home = () => {
  return (

    <div id="home">

      <div className= "home-Container" >
      <h1> Home</h1>

      <GetGeo />

      <AddCityForm />
      </div>
      </div>
  );
};

export default Home;
