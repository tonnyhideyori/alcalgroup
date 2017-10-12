import React, { Component } from "react";

class Os extends Component {
  render() {
    return (
      <div>
        <div className="col-sm-4">
          <div className="panel panel-success">
            <div className="panel-heading ">
              <h4>
                <i>Office supplies & stationaries</i>
              </h4>
            </div>
            <div className="panel-body">
              <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    className="active"
                  />
                  <li data-target="#myCarousel" data-slide-to="1" />
                  <li data-target="#myCarousel" data-slide-to="2" />
                </ol>

                <div className="carousel-inner" role="listbox">
                  <div className="item active">
                    <img
                      src={require("../images/imagesstta.jpg")}
                      style={{ width: "120%" }}
                      alt="Los Angeles"
                    />
                  </div>

                  <div className=" item">
                    <img
                      src={require("../images/stationariesss.jpg")}
                      style={{ width: "120%" }}
                      alt="Chicago"
                    />
                  </div>

                  <div className="item">
                    <img
                      src={require("../images/stat.jpg")}
                      style={{ width: "120%" }}
                      alt="New York"
                    />
                  </div>
                </div>

                <a
                  className="left carousel-control"
                  href="#myCarousel"
                  data-slide="prev"
                >
                  <span
                    className="glyphicon glyphicon-chevron-left icon-prev"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="right carousel-control"
                  href="#myCarousel"
                  data-slide="next"
                >
                  <span
                    className="glyphicon glyphicon-chevron-right icon-next"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="panel-footer  w3-grey">
              <p>
                <br />
                <b>
                  A variety of office supplies as papers, files, printers, ink,
                  thermal papers roll and many more.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Os;
