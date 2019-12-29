import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
          <Link to={{ pathname: "/" }} style={{ fontSize: "25px" }}>
            Boomershub
          </Link>
          <Link to={{ pathname: "/scrapper" }}>Scrapper</Link>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
