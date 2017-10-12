import React from "react";
import Ebus from "./Ebus";
import Pos from "./Pos";
import Ad from "./Ad";
import Cs from "./Cs";
import Os from "./Os";
import NavbarInstance from "./Navbar";
import Slidingimage from "./SlidingImage";
import "../css/App.css";
import Footer from "./Footer";
const Service = () => {
  return (
    <div className="container" style={{ background: "rgb(255, 194, 195)" }}>
      <NavbarInstance />
      <Slidingimage />
      <div align="center" className="w3-panel w3-border-bottom w3-border-red">
        <h3>Some of the Service that we do:</h3>
      </div>
      <div className="row">
        <Ebus />
        <Pos />
        <Ad />
      </div>
      <div className="row">
        <Cs />
        <Os />
      </div>
      <Footer />
    </div>
  );
};
export default Service;
