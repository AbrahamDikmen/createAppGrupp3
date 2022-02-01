import React from "react";
import { useParams } from "react-router-dom";
import DigitalClock from '../../DigitalClock';
import "../../../Styles/DetailViewCities.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Cities = (props) => {
  let { city } = useParams();

  const cityData = props.cities.find((x) => x["city"] == city);

  return (
    <Container fluid id="city-container">
      <Row id="city-row">
        <Col id="city-col">
          {cityData && (
            <>
              <h1>{cityData.city.replace('_', ' ')}</h1>
              <DigitalClock timezone={cityData.timezone} />
              <h2 id="TimeZone">{cityData.timezone.replace('_', ' ')}</h2>

              { cityData.info && (
                <p>{cityData.info}</p>
                )}
            </>
          )}
       
        </Col>
      </Row>
    </Container>
  );
};


export const London = () => {
  return (
    <div>
      <h1>London</h1>
    </div>
  );
};

export const New_York = () => {
  return (
    <div>
      <h1>New York</h1>
    </div>
  );
};

export const Paris = () => {
  return (
    <div>
      <h1>Paris</h1>
    </div>
  );
};
export const Tokyo = () => {
  return (
    <div>
      <h1>Tokyo</h1>
    </div>
  );
};
export const Sydney = () => {
  return (
    <div>
      <h1>Sydney</h1>
    </div>
  );
};

export const Honolulu = () => {
  return (
    <div>
      <h1>Honolulu</h1>
    </div>
  );
};

export const LosAngeles = () => {
  return (
    <div>
      <h1>Los Angeles</h1>
    </div>
  );
};

export const Chihuahua = () => {
  return (
    <div>
      <h1>Chihuahua</h1>
    </div>
  );
};

export const Bogota = () => {
  return (
    <div>
      <h1>Bogota</h1>
    </div>
  );
};

export const Detroit = () => {
  return (
    <div>
      <h1>Detroit</h1>
    </div>
  );
};

export const Jerusalem = () => {
  return (
    <div>
      <h1>Jerusalem</h1>
    </div>
  );
};

export const Lissabon = () => {
  return (
    <div>
      <h1>Lissabon</h1>
    </div>
  );
};

export const Malmo = () => {
  return (
    <div>
      <h1>Malmö</h1>
    </div>
  );
};

export const Rom = () => {
  return (
    <div>
      <h1>Rom</h1>
    </div>
  );
};

export const Amsterdam = () => {
  return (
    <div>
      <h1>Amsterdam</h1>
    </div>
  );
};

export const Prag = () => {
  return (
    <div>
      <h1>Prag</h1>
    </div>
  );
};

export const Moskva = () => {
  return (
    <div>
      <h1>Moskva</h1>
    </div>
  );
};

export const Dubai = () => {
  return (
    <div>
      <h1>Dubai</h1>
    </div>
  );
};

export const NewDelhi = () => {
  return (
    <div>
      <h1>New Delhi</h1>
    </div>
  );
};

export const Bangkok = () => {
  return (
    <div>
      <h1>Bangkok</h1>
    </div>
  );
};

export const Jakarta = () => {
  return (
    <div>
      <h1>Jakarta</h1>
    </div>
  );
};

export const Hongkong = () => {
  return (
    <div>
      <h1>Hongkong</h1>
    </div>
  );
};

export const Shanghai = () => {
  return (
    <div>
      <h1>Shanghai</h1>
    </div>
  );
};

export const Brisbane = () => {
  return (
    <div>
      <h1>Brisbane</h1>
    </div>
  );
};

export const Fiji = () => {
  return (
    <div>
      <h1>Fiji</h1>
    </div>
  );
};

export const Auckland = () => {
  return (
    <div>
      <h1>Auckland</h1>
    </div>
  );
};