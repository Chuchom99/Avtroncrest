import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navbar/Navigation";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Insight from "./pages/insight/Insight";
import Software from "./pages/software/Software";
import Futures from "./pages/futures/Futures";
import Stock from "./pages/futures/Stock";
import Commodities from "./pages/futures/Commodities";
import Forex from "./pages/futures/Forex";
import CopyTrading from "./pages/futures/CopyTrade";
import Options from "./pages/futures/Options";
import LiveTrade from "./pages/futures/LiveTrade";

const Mainlayout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="insight" element={<Insight />} />
        <Route path="software" element={<Software />} />
        <Route path="futures" element={<Futures />} />
        <Route path="stock" element={<Stock />} />
        <Route path="commodity-stock" element={<Commodities />} />
        <Route path="forex" element={<Forex />} />
        <Route path="copy-trading" element={<CopyTrading />} />
        <Route path="advanced-trading" element={<Options />} />
        <Route path="live-trading" element={<LiveTrade />} />

      </Routes>
      <Footer />
    </div>
  );
};

export default Mainlayout;
