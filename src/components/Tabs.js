import React, { Component } from "react";
import Team from "./Team";
import About from "./About";

class Tabs extends Component {
  state = {
    tabs: [
      { text: "Introduction of the company", data: <About /> },
      { text: "Our Team", data: <Team /> }
    ],
    activeTab: 0,
    loaded: true
  };

  setActive = tab => {
    const shouldActivate = this.state.tabs.findIndex(
      tabToFind => tabToFind.text === tab.text
    );
    this.setState({ activeTab: shouldActivate, loaded: false }, () => {
      setTimeout(() => this.setState({ loaded: true }), 250);
    });
  };

  render() {
    const { activeTab, loaded } = this.state;
    return (
      <div>
        <div id="tab" className="tab">
          {this.state.tabs.map((tab, index) => {
            return (
              <button
                key={index}
                className={`tablinks ${activeTab === index ? "active" : ""}`}
                onClick={() => this.setActive(tab)}
              >
                {tab.text}
              </button>
            );
          })}
        </div>

        <div className={`tabcontent ${loaded ? "loaded" : ""}`}>
          {loaded && this.state.tabs[activeTab].data}
        </div>
      </div>
    );
  }
}

export default Tabs;
