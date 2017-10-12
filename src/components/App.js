import React, { Component } from 'react';
import NavbarInstance from './Navbar'
import Slidingimage from './SlidingImage'
import Service from './Service'
import Ebus from './Ebus'
import Pos from './Pos'
import Ad from './Ad'
import Cs from './Cs'
import Os from './Os'
import Footer from './Footer'
import '../css/App.css';

class App extends Component {
  render() {
    return(
      <div className="container" style={{background:"rgb(255, 194, 195)"}}>
      <NavbarInstance/>
      <Slidingimage/>
      <div align="center"><h1><b>What do we do !</b></h1></div>
      <div className="row">
      <Ebus/>
        <Pos/>
        <Ad/>
      </div>
    <div className="row">
      <Cs/>
      <Os/>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default App;
