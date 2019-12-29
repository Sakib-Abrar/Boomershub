var express = require("express");
var properties = require("../repository/properties.repository");
var fs = require("fs");
var csv = require("fast-csv");

var router = express.Router();

/* GET users listing. */
// Create a new Properties
router.post("/api/properties", function(req, res) {
  properties
    .create(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Retrieve all Properties
router.get("/api/properties", function(req, res) {
  properties
    .findAll()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

router.post("/api/properties/search", function(req, res) {
  console.log(req.body.searchText);
  properties
    .search(req.body.searchText)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send(error);
    });
});

// Update a Properties with Id
router.put("/api/properties/:propertiesId", properties.update);

// Delete a Properties with Id
router.delete("/api/properties/:propertiesId", properties.delete);

router.post("/api/properties/upload", function(req, res, next) {
  if (req.files) {
    if (req.files.dataFile.size === 0) {
      return next(new Error("Would you select a file first?"));
    }
    let dataArray = [];
    let stream = fs.createReadStream(req.files.dataFile);
    let csvStream = csv
      .parse()
      .on("data", data => {
        dataArray.push(data);
      })
      .on("end", () => {
        for (let data of dataArray) {
          console.log(data);
          properties.create({
            name: data[0],
            address: data[1],
            city: data[2],
            state: data[3],
            zipcode: data[4],
            county: data[5],
            phone: data[6],
            type: data[7],
            capacity: data[8]
          });
        }
        res.status(200).send("File Upload Successful");
      });

    stream.pipe(csvStream);
  }
});

module.exports = router;
