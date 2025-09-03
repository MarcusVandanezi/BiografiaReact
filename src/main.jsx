import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AboutMe from "./components/AboutMe";
import Carrer from "./components/Carrer";
import Techs from "./components/Techs";
import Galery from "./components/Galery";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="main-div">
    <AboutMe />
    <Carrer />
    <Techs />
    <Galery />
    </div>
    <Footer />
  </StrictMode>
);
