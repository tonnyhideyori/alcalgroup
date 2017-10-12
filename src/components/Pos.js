import React, { Component } from 'react';

class Pos extends Component{
  render(){
    return(
      <div>
      <div className="col-sm-4">
      <div className="panel panel-success">
        <div className="panel-heading "><h4><i>Point of sale systems(POS)</i></h4></div>
        <div className="panel-body">

          <div id="myCarousel" className="carousel slide" data-ride="carousel">

  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>


  <div className="carousel-inner" role="listbox">
    <div className="item active">
      <img src={require("../images/images_posmult.jpg")} style={{width:"120%"}}  alt="Los Angeles"/>
    </div>

    <div className=" item">
      <img src={require("../images/pos.jpg")} style={{width:"120%"}} alt="Chicago"/>
    </div>

    <div className="item">
      <img src={require("../images/images___.jpg")} style={{width:"120%"}}  alt="New York"/>
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
           <p><br/><b>We offer the best and flexible point of sales softwares for your business,<br/>
            our softwares are aimed at doing away the unnecessary need for price tags, stock control, price changes,
          <br/> different types of discounts and much more.We also provide wide range of hardware, card printers, card solutions for access, payment solutions and identification.</b></p></div>
      </div>
    </div>
      </div>
    )
  }
}
export default Pos;
