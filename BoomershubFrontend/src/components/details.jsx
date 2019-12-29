import React, { Component } from "react";
import Axios from "axios";
import DetailsCarousel from "./detailsCarousel";

class Details extends Component {
  state = {
    locationId: 0,
    imageList: [],
    accessors: [
      {
        tag: "Name",
        key: "name"
      },
      {
        tag: "Address",
        key: "address"
      },
      {
        tag: "City",
        key: "city"
      },
      {
        tag: "State",
        key: "state"
      },
      {
        tag: "Zip Code",
        key: "zipcode"
      },
      {
        tag: "County",
        key: "county"
      },
      {
        tag: "Phone",
        key: "phone"
      },
      {
        tag: "Type",
        key: "type"
      },
      {
        tag: "Capacity",
        key: "capacity"
      }
    ]
  };

  componentDidMount() {
    this.updateImageList(this.state.locationId);
  }
  updateImageList(propertiesId) {
    console.log(propertiesId);
    Axios.post("http://localhost:3000/api/images/", {
      propertiesId: propertiesId
    })
      .then(response => {
        this.setState({
          imageList: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const locationData = this.props.location.query.row.values;
    this.state.locationId = locationData["id"];
    console.log(this.props);
    const detailsFields = this.state.accessors.map(function(data) {
      return (
        <p key={data.key}>
          {data.tag}: {locationData[data.key]}
        </p>
      );
    });
    return (
      <React.Fragment>
        <div
          className="container justify-content-md-center"
          style={{ marginTop: "20px" }}
        >
          <h1>Details of {locationData["name"]}</h1>
          {detailsFields}
          <DetailsCarousel imageList={this.state.imageList}></DetailsCarousel>
        </div>
      </React.Fragment>
    );
  }
}

export default Details;
