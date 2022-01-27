import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

let cityNames = [];
let fontStyles = [
  "Abril Fatface",
  "Alfa Slab One",
  "Architects Daughter",
  "EB Garamond",
  "Eczar",
  "Fira Sans Extra Condensed",
  "Gochi Hand",
  "Indie Flower",
  "Lobster",
  "M PLUS Rounded 1c",
  "Mochiy Pop P One",
  "Neucha",
  "Oooh Baby",
  "Orbitron",
  "Parisienne",
  "Permanent Marker",
  "Playball",
  "Sedgwick Ave",
  "Space Mono",
  "Tangerine",
  "Yeseva One",
];

async function getCities() {
  let rawData = await fetch("./src/jsonfiles/cities-timezones.json");
  let cities = await rawData.json();

  for (let i = 0; i < cities.length; i++) {
    cityNames[i] = cities[i].city;
  }
}

let numberArray = [];

function randomizeFonts() {
  while (numberArray.length < 21) {
    let randomNumber = Math.floor(Math.random() * 21);
    if (numberArray.indexOf(randomNumber) === -1)
      numberArray.push(randomNumber);
  }
}

function CityList() {
  getCities();
  randomizeFonts();

  const [cities, setCities] = useState(cityNames);

  return (
    <>
      <Stack id="cityList" direction="horizontal" gap={1}>
        <Container>
          <Col>
            <Row>
              <h3
                style={{
                  fontFamily: `${fontStyles[numberArray[0]]}`,
                }}
              >
                {cities[5]}
              </h3>
            </Row>
            <Row>
              <h3
                style={{
                  fontFamily: `${fontStyles[numberArray[1]]}`,
                }}
              >
                {cities[6]}
              </h3>
            </Row>
            <Row>
              <h3
                style={{
                  fontFamily: `${fontStyles[numberArray[2]]}`,
                }}
              >
                {cities[7]}
              </h3>
            </Row>
            <Row>
              <h3
                style={{
                  fontFamily: `${fontStyles[numberArray[3]]}`,
                }}
              >
                {cities[8]}
              </h3>
            </Row>
            <Row>
              <h3
                style={{
                  fontFamily: `${fontStyles[numberArray[4]]}`,
                }}
              >
                {cities[9]}
              </h3>
            </Row>
            <Row>
              <h3
                style={{
                  fontFamily: `${fontStyles[numberArray[5]]}`,
                }}
              >
                {cities[10]}
              </h3>
            </Row>
            <Row>
              <h3
                style={{
                  fontFamily: `${fontStyles[numberArray[6]]}`,
                }}
              >
                {cities[11]}
              </h3>
            </Row>
          </Col>
        </Container>
        <Container>
          <Col>
            <Row>
              <h3
                style={{
                  fontFamily: `${fontStyles[numberArray[7]]}`,
                }}
              >
                {cities[12]}
              </h3>
            </Row>
            <Row>
              <h3
                style={{
                  fontFamily: `${fontStyles[numberArray[8]]}`,
                }}
              >
                {cities[13]}
              </h3>
            </Row>
            <Row>
              <h3
                style={{
                  fontFamily: `${fontStyles[numberArray[9]]}`,
                }}
              >
                {cities[14]}
              </h3>
            </Row>
            <Row>
              <h3
                style={{
                  fontFamily: `${fontStyles[numberArray[10]]}`,
                }}
              >
                {cities[15]}
              </h3>
            </Row>
            <Row>
              <h3
                style={{
                  fontFamily: `${fontStyles[numberArray[11]]}`,
                }}
              >
                {cities[16]}
              </h3>
            </Row>
            <Row>
              <h3
                style={{
                  fontFamily: `${fontStyles[numberArray[12]]}`,
                }}
              >
                {cities[17]}
              </h3>
            </Row>
            <Row>
              <h3
                style={{
                  fontFamily: `${fontStyles[numberArray[13]]}`,
                }}
              >
                {cities[18]}
              </h3>
            </Row>
          </Col>
        </Container>
        <Container>
          <Col>
            <Row>
              <h3
                style={{
                  fontFamily: `${fontStyles[numberArray[14]]}`,
                }}
              >
                {cities[19]}
              </h3>
            </Row>
            <Row>
              <h3
                style={{
                  fontFamily: `${fontStyles[numberArray[15]]}`,
                }}
              >
                {cities[20]}
              </h3>
            </Row>
            <Row>
              <h3
                style={{
                  fontFamily: `${fontStyles[numberArray[16]]}`,
                }}
              >
                {cities[21]}
              </h3>
            </Row>
            <Row>
              <h3
                style={{
                  fontFamily: `${fontStyles[numberArray[17]]}`,
                }}
              >
                {cities[22]}
              </h3>
            </Row>
            <Row>
              <h3
                style={{
                  fontFamily: `${fontStyles[numberArray[18]]}`,
                }}
              >
                {cities[23]}
              </h3>
            </Row>
            <Row>
              <h3
                style={{
                  fontFamily: `${fontStyles[numberArray[19]]}`,
                }}
              >
                {cities[24]}
              </h3>
            </Row>
            <Row>
              <h3
                style={{
                  fontFamily: `${fontStyles[numberArray[20]]}`,
                }}
              >
                {cities[25]}
              </h3>
            </Row>
          </Col>
        </Container>
      </Stack>
    </>
  );
}

export default CityList;
