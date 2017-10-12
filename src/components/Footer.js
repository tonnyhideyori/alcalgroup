import React, { Component } from 'react';

class Footer extends Component{
  render(){
    return(
      <footer id="foot" style={{marginTop:"15px",background:"rgb(255, 196, 255)"}}>
      <div className="w3-panel w3-border-bottom w3-border-green">
      <h3>CONTACT US</h3>
      <p>Our andress</p>
  <p>Sam Nujoma Road,Opposite Mlimani city mall,Kinondoni,&nbsp;&nbsp;
  P.O.Box 71839, Dar Es Salaam,Tanzania.&nbsp; &nbsp;<br/>
   Phone: (+255)655-015-416&nbsp;||&nbsp; (+255)652-140-917 &nbsp;&nbsp;E-mail: info@alcalgroup.com
  </p>
      </div>
      <div className="w3-panel w3-border-bottom w3-border-green">
      <p style={{float: "left"}}> &copy;2017 Alcal group &reg;ltd&nbsp;&nbsp;&nbsp;&nbsp; designed by Edwin Ismail&nbsp;&nbsp;Email:&nbsp;&nbsp;<b>eismail44(at)gmaildotcom</b>
  &nbsp; &nbsp;</p>
      </div>
      
      </footer>

    );
  }
}
export default Footer;
