import React from 'react';
import NavbarInstance from './Navbar'
import Slidingimage from './SlidingImage'
import Footer from './Footer'
import Tabs from './Tabs';
const Us=()=>{
  return(
    <div className="container" style={{background:"rgb(255, 194, 195)"}}>
  <NavbarInstance/>
  <Slidingimage/>
  <Tabs/>
  <Footer/>
  </div>
)


}
export default Us;
