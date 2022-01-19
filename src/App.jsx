import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/*Import components */
import Home from "./components/Pages/Home";
import ErrorPage from "./components/Pages/ErrorPage";
import Navbar from "./components/Navbar";

/*City imports */
import {
  Amsterdam,
  Barcelona,
  Bergen,
  Bogota,
  CapeTown,
  Dubai,
  Eslöv,
  Houston,
  Istanbul,
  Jerusalem,
  Lund,
  Mallorca,
  Malmo,
  Miami,
  Moskva,
  NewDelhi,
  RiodeJaneiro,
  Shanghai,
  Tokyo,
  Venice,
} from "./components/Pages/citys/Citys";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/*Page Routes*/}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />

        {/*City Routes*/}
        <Route path="/Amsterdam" element={<Amsterdam />} />
        <Route path="/Barcelona" element={<Barcelona />} />
        <Route path="/Bergen" element={<Bergen />} />
        <Route path="/Bogota" element={<Bogota />} />
        <Route path="/CapeTown" element={<CapeTown />} />
        <Route path="/Dubai" element={<Dubai />} />
        <Route path="/Eslöv" element={<Eslöv />} />
        <Route path="/Houston" element={<Houston />} />
        <Route path="/Istanbul" element={<Istanbul />} />
        <Route path="/Jerusalem" element={<Jerusalem />} />
        <Route path="/Lund" element={<Lund />} />
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
