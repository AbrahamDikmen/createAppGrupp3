import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Styles/Time.css";

let city1 = "Malmö";
let city2 = "Amsterdam";
let city3 = "Moskva";
let city4 = "Mallorca";
let city5 = "Shanghai";

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

function Time() {
  getOffset();

  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  let localOffset = date.getTimezoneOffset() / 60;

  let hour = date.getHours();

  let minutes = date.getMinutes();
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
