import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import CV from "./pages/CV";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <Navbar />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;