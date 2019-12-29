var express = require("express");
var cheerio = require("cheerio");
var axios = require("axios");

var router = express.Router();
var query = require("querystring");

// Retrieve all Properties
router.post("/api/scrapper", function(req, res) {
  let body = query.stringify({
    locsearch: req.body.searchText,
    ftype: "al_all,all"
  });

  let config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };

  axios
    .post(
      "https://apps.hhs.texas.gov/LTCSearch/providersearch.cfm",
      body,
      config
    )
    .then(response => {
      // Load the web page source code into a cheerio instance
      const $ = cheerio.load(response.data);

      // The pre.highlight.shell CSS selector matches all `pre` elements
      // that have both the `highlight` and `shell` class
      const urlElems = $("tbody tr td a");

      var links = [];
      for (let i = 0; i < urlElems.length; i++) {
        var name = $(urlElems[i]).text();
        var href = $(urlElems[i]).attr("href");
        console.log(name);
        console.log(href);
        links.push({
          name: name,
          href: "https://apps.hhs.texas.gov/LTCSearch/" + href
        });
      }

      // let finalArray = Promise.all(
      //   links.map(async value => {
      //     let propertiesObj = await getResultAsync(value.name, value.href);
      //     return propertiesObj;
      //   })
      // );

      res.status(200).send(links);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send(error);
    });
});

async function getResultAsync(name, href) {
  let result = await axios
    .get("https://apps.hhs.texas.gov/LTCSearch/" + href)
    .then(response => {
      const $ = cheerio.load(response.data);
      var address = $('div[id="p7EHCd_2"] p')[2].text();
      var map = $('div[id="p7EHCd_2"] p a').attr("href");
      var capacityHtml = $('div[id="p7tp3-col-wrapper"] ul li');
      var capacity = "unknown";
      if (capacityHtml.length > 3) {
        capacity = capacityHtml[3].text();
      }

      var propertiesObj = {
        name: name,
        address: address,
        map: map,
        capacity: capacity
      };
      console.log(propertiesObj);
      return propertiesObj;
    })
    .catch(error => {
      console.log(error);
      return error;
    });

  return result;
}

module.exports = router;
