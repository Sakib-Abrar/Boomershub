import React, { Component } from "react";
import Search from "./search";
import DataTable from "./dataTable";

class Scrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: "None"
    };
  }

  handleTableUpdate = newTableData => {
    this.setState({ tableData: newTableData });
  };

  render() {
    return (
      <React.Fragment>
        <Search onChange={this.handleTableUpdate} parent="searching"></Search>
        <DataTable tableData={this.state.tableData} />
      </React.Fragment>
    );
  }
}

export default Scrapper;
