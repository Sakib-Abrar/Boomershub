import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useTable, useSortBy } from "react-table";

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    useSortBy
  );

  // Render the UI for your table
  return (
    <>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

class DataTable extends Component {
  state = {
    columns: [
      {
        Header: "Id",
        accessor: "id",
        show: false
      },
      {
        Header: "Name",
        accessor: "name",
        Cell: ({ row }) => (
          <Link
            to={{
              pathname: `/details/${row.values.id}`,
              query: { row }
            }}
          >
            {row.values.name}
          </Link>
        )
      },
      {
        Header: "Address",
        accessor: "address"
      },
      {
        Header: "City",
        accessor: "city"
      },
      {
        Header: "State",
        accessor: "state"
      },
      {
        Header: "Zip Code",
        accessor: "zipcode"
      },
      {
        Header: "County",
        accessor: "county"
      },
      {
        Header: "Phone",
        accessor: "phone"
      },
      {
        Header: "Type",
        accessor: "type"
      },
      {
        Header: "Capacity",
        accessor: "capacity"
      }
    ]
  };

  render() {
    if (this.props.tableData === "None") {
      return <React.Fragment></React.Fragment>;
    } else {
      return (
        <div className="container">
          <Table columns={this.state.columns} data={this.props.tableData} />
        </div>
      );
    }
  }
}

export default DataTable;
