import React, { Component } from 'react';

class Ebus extends Component{
  render(){
    return(
      <div>
      <div className="col-sm-4">
      <div className="panel panel-success">
        <div className="panel-heading "><h4><i>E-Bus ticketing</i></h4></div>
        <div className="panel-body">

          <div id="myCarousel" className="carousel slide" data-ride="carousel">

  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>


  <div className="carousel-inner" role="listbox">
    <div className="item active">
      <img src={require("../images/images_ebus.jpg")} style={{width:"120%"}}  alt="Los Angeles"/>
    </div>

    <div className=" item">
      <img src={require("../images/images_eticket.jpg")} style={{width:"120%"}} alt="Chicago"/>
    </div>

    <div className="item">
      <img src={require("../images/eticketing.jpg")} style={{width:"120%"}}  alt="New York"/>
    </div>
  </div>


  <a className="left carousel-control" href="#myCarousel"  data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left icon-prev" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#myCarousel"  data-slide="next">
    <span className="glyphicon glyphicon-chevron-right icon-next" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

        </div>
         <div className="panel-footer  w3-grey">
           <p><br/><b>We provide an automated electronic bus ticketing system that simplifies and manages the revenues inflow between and at the terminals using Point Of Sales (POS) machines, USSD applications and web based. The system is to enable the transformation from the legacy of traditional manual ticketing ways to sophisticated ways that marks advancement of technology in the Tanzania</b></p></div>
      </div>
    </div>
      </div>
    )
  }
}
export default Ebus;
