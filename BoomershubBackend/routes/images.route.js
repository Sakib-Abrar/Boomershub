var express = require("express");
var images = require("../repository/images.repository");
var router = express.Router();

router.post("/api/images", function(req, res) {
  images
    .findWhere(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

module.exports = router;
