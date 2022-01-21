import React from "react";

// test med useParams
import { useParams } from "react-router-dom";

export const Citys = (props) => {
  let { city } = useParams();

  const cityData = props.cities.find(x => x['city'] == city);

  return (
    <div>
      {
        cityData &&
        <>
          <h1>{cityData.city}</h1>
          <h2>{cityData.timezone}</h2>
        </>
      }
    </div>
  )
}
/*export const Citys = () => {
  return <div></div>;
};*/

export const Amsterdam = () => {
  return (
    <div>
      <h1>Amsterdam</h1>
    </div>
  );
};

export const Barcelona = () => {
  return (
    <div>
      <h1>Barcelona</h1>
    </div>
  );
};

export const Bergen = () => {
  return (
    <div>
      <h1>Bergen</h1>
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

export const CapeTown = () => {
  return (
    <div>
      <h1> CapeTown </h1>
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

export const Eslöv = () => {
  return (
    <div>
      <h1>Eslöv</h1>
    </div>
  );
};

export const Houston = () => {
  return (
    <div>
      <h1>Houston</h1>
    </div>
  );
};

export const Istanbul = () => {
  return (
    <div>
      <h1>Istanbul</h1>
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

export const Lund = () => {
  return (
    <div>
      <h1>Lund</h1>
    </div>
  );
};

export const Mallorca = () => {
  return (
    <div>
      <h1>Mallorca</h1>
    </div>
  );
};

export const Malmo = () => {
  return (
    <div>
      <h1>Malmo</h1>
    </div>
  );
};

export const Miami = () => {
  return (
    <div>
      <h1>Miami</h1>
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

export const NewDelhi = () => {
  return (
    <div>
      <h1>New Delhi</h1>
    </div>
  );
};

export const RiodeJaneiro = () => {
  return (
    <div>
      <h1>Rio de Janeiro</h1>
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

export const Tokyo = () => {
  return (
    <div>
      <h1>Tokyo</h1>
    </div>
  );
};

export const Venice = () => {
  return (
    <div>
      <h1>Venice</h1>
    </div>
  );
};
