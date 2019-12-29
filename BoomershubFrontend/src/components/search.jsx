import React, { Component } from "react";
import Axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      tableData: "None"
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateSearchResult = this.updateSearchResult.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  updateSearchResult(event) {
    if (this.props.parent === "searching") {
      Axios.post("http://localhost:3000/api/properties/search", {
        searchText: this.state.input
      })
        .then(response => {
          this.props.onChange(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      Axios.post("http://localhost:3000/api/scrapper", {
        searchText: this.state.input
      })
        .then(response => {
          this.props.onChange(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="container"
          style={{ marginTop: "80px", marginBottom: "80px" }}
        >
          <div className="row justify-content-md-center">
            <input
              type="text"
              className="form-control"
              style={{ maxWidth: "500px" }}
              placeholder={"Start " + this.props.parent + " for Places"}
              value={this.state.input}
              onChange={this.handleChange}
            />
            <button className="btn-primary" onClick={this.updateSearchResult}>
              Search
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
