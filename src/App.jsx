import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
/*Import components */
import Home from "./components/Pages/Home";
import MyCities from "./components/Pages/MyCities";
import ErrorPage from "./components/Pages/ErrorPage";
import NavbarOne from "./components/NavbarOne";
import "bootstrap/dist/css/bootstrap.min.css";

/*City imports */
import {
  Amsterdam,
  Barcelona,
  Bergen,
  Bogota,
  CapeTown,
  Dubai,
  LosAngeles,
  Houston,
  Istanbul,
  Jerusalem,
  BuenosAires,
  Mallorca,
  Malmo,
  Miami,
  Moskva,
  NewDelhi,
  RiodeJaneiro,
  Shanghai,
  Tokyo,
  Venice,
} from "./components/Pages/cities/Cities";
import { Cities } from "./components/Pages/cities/Cities";

import AnalogueClock from "./components/AnalogueClock";

export default function App() {
  const [cities, setCities] = useState([]);

  // A function that parses the localStorage.storedCities field, assigns
  // storedCities the read values. If an error is raised while attempting
  // to parse the storedCities variable is assigned an empty array.
  const readLocalStorage = () => {
    let storedCities;
    try {
      storedCities = JSON.parse(localStorage.storedCities);
    } catch (error) {
      storedCities = [];
    }
    return storedCities;
  };

  // useEffect hook that reads data from static json file and parses
  // data from localStorage. Concatenates arrays containing cities,
  // calls setCities and passes in the concatenated array
  useEffect(async () => {
    let rawData = await fetch("../src/jsonfiles/cities-timezones.json");
    let storedCities = readLocalStorage();
    let standardCities = await rawData.json();
    let fullCitiesList = storedCities.concat(standardCities);

    setCities(fullCitiesList);
  }, []);

  return (
    <Router>
      <NavbarOne />

      <Routes>
        {/*Page Routes*/}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="/MinaStader"
          element={<MyCities cities={readLocalStorage()} />}
        />

        {/*City Routes*/}
        <Route path="/:city" element={<Cities cities={cities} />} />
        <Route path="/Amsterdam" element={<Amsterdam />} />
        <Route path="/Barcelona" element={<Barcelona />} />
        <Route path="/Bergen" element={<Bergen />} />
        <Route path="/Bogota" element={<Bogota />} />
        <Route path="/CapeTown" element={<CapeTown />} />
        <Route path="/Dubai" element={<Dubai />} />
        <Route path="/Los Angeles" element={<LosAngeles />} />
        <Route path="/Houston" element={<Houston />} />
        <Route path="/Istanbul" element={<Istanbul />} />
        <Route path="/Jerusalem" element={<Jerusalem />} />
        <Route path="/Buenos Aires" element={<BuenosAires />} />
        <Route path="/Mallorca" element={<Mallorca />} />
        <Route path="/Malmo" element={<Malmo />} />
        <Route path="/Miami" element={<Miami />} />
        <Route path="/Moskva " element={<Moskva />} />
        <Route path="/NewDelhi" element={<NewDelhi />} />
        <Route path="/RiodeJaneiro" element={<RiodeJaneiro />} />
        <Route path="/Shangha" element={<Shanghai />} />
        <Route path="/Tokyo" element={<Tokyo />} />
        <Route path="/Venice" element={<Venice />} />
      </Routes>
    </Router>
  );
}
