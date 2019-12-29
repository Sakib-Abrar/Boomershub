import React, { Component } from "react";
import Search from "./search";

class Scrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  handleListUpdate = newList => {
    this.setState({ list: newList });
  };

  render() {
    const propertiesList = this.state.list.map(function(data) {
      return (
        <li key={data.name}>
          <a href={data.href} key={data.name}>
            {data.name}
          </a>
        </li>
      );
    });
    return (
      <React.Fragment>
        <Search onChange={this.handleListUpdate} parent="scraping"></Search>
        <div className="container justify-content-md-center">
          <ul>{propertiesList}</ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Scrapper;
