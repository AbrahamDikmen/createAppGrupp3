import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/*Import components */
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
     
      <Navbar />
  
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
   
    </Router>
  )
}