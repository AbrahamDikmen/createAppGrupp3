import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/*Import components */
import Home from "./components/Pages/Home";
import ErrorPage from "./components/Pages/ErrorPage";
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
<<<<<<< HEAD

=======
>>>>>>> 4fd54bb279e8ce911786841414d301511412f97f
