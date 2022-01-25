import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

let cityNames = [];

async function getCities() {
  let rawData = await fetch("./src/jsonfiles/cities-timezones.json");
  let cities = await rawData.json();

  for (let i = 0; i < cities.length; i++) {
    cityNames[i] = cities[i].city;
  }
}

function CityList() {
  getCities();

  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <Container>
          <Col>
            <Row>{cityNames[0]}</Row>
            <Row>{cityNames[1]}</Row>
            <Row>{cityNames[2]}</Row>
            <Row>{cityNames[3]}</Row>
            <Row>{cityNames[4]}</Row>
            <Row>{cityNames[5]}</Row>
          </Col>
        </Container>
        <Container>
          <Col>
            <Row>{cityNames[6]}</Row>
            <Row>{cityNames[7]}</Row>
            <Row>{cityNames[8]}</Row>
            <Row>{cityNames[9]}</Row>
            <Row>{cityNames[10]}</Row>
            <Row>{cityNames[11]}</Row>
          </Col>
        </Container>
        <Container>
          <Col>
            <Row>{cityNames[12]}</Row>
            <Row>{cityNames[13]}</Row>
            <Row>{cityNames[14]}</Row>
            <Row>{cityNames[15]}</Row>
            <Row>{cityNames[16]}</Row>
            <Row>{cityNames[17]}</Row>
          </Col>
        </Container>
      </Stack>
    </>
  );
}

export default CityList;
