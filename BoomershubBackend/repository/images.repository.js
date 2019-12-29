const db = require("../config/db.config.js");
const Images = db.images;

exports.findWhere = data => {
  return Images.findAll({
    where: { properties_id: data.propertiesId }
  });
};
