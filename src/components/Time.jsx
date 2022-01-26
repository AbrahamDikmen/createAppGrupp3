import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Styles/Time.css";

let city1 = "London";
let city2 = "New York";
let city3 = "Paris";
let city4 = "Tokyo";
let city5 = "Sydney";

let city1offset = 0;
let city2offset = 0;
let city3offset = 0;
let city4offset = 0;
let city5offset = 0;

let city1Hours = 0;
let city2Hours = 0;
let city3Hours = 0;
let city4Hours = 0;
let city5Hours = 0;

//parses through the json file and adds the correct offset value
//to the city?offset variable if the name of the city is found
async function getOffset() {
  let rawData = await fetch("./src/jsonfiles/cities-timezones.json");
  let cities = await rawData.json();

  for (let i = 0; i < cities.length; i++) {
    if (city1 == cities[i].city) {
      city1offset = cities[i].offset;
    }
    if (city2 == cities[i].city) {
      city2offset = cities[i].offset;
    }
    if (city3 == cities[i].city) {
      city3offset = cities[i].offset;
    }
    if (city4 == cities[i].city) {
      city4offset = cities[i].offset;
    }
    if (city5 == cities[i].city) {
      city5offset = cities[i].offset;
    }
  }
}

//a function that show the correct time
//of the specified cities with diffrent timezones
function Time() {
  //calls the getOffset function so it can be used when calculating the right time
  getOffset();

  const [date, setDate] = useState(new Date());

  //a function that updates time every second
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  //calculates the difference between the local time
  //and the standard UTC time in hours
  let localOffset = date.getTimezoneOffset() / 60;

  let hour = date.getHours();

  let minutes = date.getMinutes();
  //a few if statments that both calculates the time in the different timezones
  //and adds a 0 in front of the hour/min/sec to make it look more like a digital clock
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let seconds = date.getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  city1Hours = hour + city1offset + localOffset;
  if (city1Hours < 10) {
    city1Hours = "0" + city1Hours;
  }
  city2Hours = hour + city2offset + localOffset;
  if (city2Hours < 10) {
    city2Hours = "0" + city2Hours;
  }
  city3Hours = hour + city3offset + localOffset;
  if (city3Hours < 10) {
    city3Hours = "0" + city3Hours;
  }
  city4Hours = hour + city4offset + localOffset;
  if (city4Hours < 10) {
    city4Hours = "0" + city4Hours;
  }
  city5Hours = hour + city5offset + localOffset;
  if (city5Hours < 10) {
    city5Hours = "0" + city5Hours;
  }
  //Displays the cities/times with bootstrap
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h3>{city1}</h3>
            <h3>
              {city1Hours}:{minutes}:{seconds}
            </h3>
          </Col>
          <Col>
            <h3>{city2}</h3>
            <h3>
              {city2Hours}:{minutes}:{seconds}
            </h3>
          </Col>
          <Col>
            <h3>{city3}</h3>
            <h3>
              {city3Hours}:{minutes}:{seconds}
            </h3>
          </Col>
          <Col>
            <h3>{city4}</h3>
            <h3>
              {city4Hours}:{minutes}:{seconds}
            </h3>
          </Col>
          <Col>
            <h3>{city5}</h3>
            <h3>
              {city5Hours}:{minutes}:{seconds}
            </h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Time;
