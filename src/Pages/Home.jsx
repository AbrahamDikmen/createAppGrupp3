import React from 'react'

const Home = () => {
  return (
    <div>
      <h1> Home</h1>
    </div>
  )
}

export default Home;

function locationLoggIn() {   
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const key = "492zTFzCHsAEKSxkC1BgoiVneNAwr8FI";

    status.textContent = "";
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    const url = `http://www.mapquestapi.com/geocoding/v1/reverse?key=${key}&location=${latitude},${longitude}`;
    console.log(url);
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector("#find-me").addEventListener("click", locationLoggIn);
