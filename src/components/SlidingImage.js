import React, { Component } from "react";

class Slidingimage extends Component {
  render() {
    return (
      <div>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#myCarousel" data-slide-to="1" />
            <li data-target="#myCarousel" data-slide-to="2" />
            <li data-target="#myCarousel" data-slide-to="3" />
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img
                src={require("../images/logo.jpeg")}
                style={{ width: "250%", height: "500px" }}
                alt="slide1"
              />
            </div>

            <div className="item">
              <img
                src={require("../images/softwareI.jpg")}
                style={{ width: "250%", height: "500px" }}
                alt="slide2"
              />
            </div>

            <div className="item">
              <img
                src={require("../images/pos.jpg")}
                style={{ width: "250%", height: "500px" }}
                alt="slide3"
              />
            </div>

            <div className="item">
              <img
                src={require("../images/2614265_orig.jpg")}
                style={{ width: "200%", height: "500px" }}
                alt="slide4"
              />
            </div>
          </div>

          <a
            className="left carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="glyphicon glyphicon-chevron-left"
              aria-hidden="true"
            />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="glyphicon glyphicon-chevron-right"
              aria-hidden="true"
            />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Slidingimage;
