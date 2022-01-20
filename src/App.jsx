import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/*Import components */
import Home from "./components/Pages/Home";
import ErrorPage from "./components/Pages/ErrorPage";
import NavbarOne from "./components/NavbarOne";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Router>

      <NavbarOne />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>


    </Router>


  )
}
