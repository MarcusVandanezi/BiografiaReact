import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AboutMe from "./components/AboutMe.jsx";
import Carrer from "./components/Carrer.jsx";
import Techs from "./components/Techs.jsx";
import Galery from "./components/Galery.jsx";
import Footer from "./components/Footer.jsx";
import "./components/AboutMe.css";
import "./components/Carrer.css";
import "./components/Techs.css";
import "./components/Galery.css";
import "./components/Footer.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AboutMe />
    <Carrer />
    <Techs />
    <Galery />
    <Footer />
  </StrictMode>
);
