import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navbar/Navigation";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";

const Mainlayout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="about-us" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Mainlayout;
