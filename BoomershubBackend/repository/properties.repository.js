const db = require("../config/db.config.js");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const Properties = db.properties;

// Post a Properties
exports.create = data => {
  // Save to MySQL database
  Properties.create({
    name: data.name,
    address: data.address,
    city: data.city,
    state: data.state,
    zipcode: data.zipcode,
    county: data.county,
    phone: data.phone,
    type: data.type,
    capacity: data.capacity
  }).then(Properties => {
    // Send created Properties to client
    return Properties;
  });
};

// FETCH all Propertiess
exports.findAll = () => {
  return Properties.findAll();
};

exports.search = searchTerm => {
  return Properties.findAll({
    where: {
      [Op.or]: [
        { name: searchTerm },
        { city: searchTerm },
        { county: searchTerm },
        { zipcode: searchTerm }
      ]
    }
  });
};

// Update a Properties
exports.update = (req, res) => {
  const id = req.params.propertiesId;
  Properties.update(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      age: req.body.age
    },
    { where: { id: req.params.propertiesId } }
  ).then(() => {
    res.status(200).send("updated successfully a Properties with id = " + id);
  });
};

// Delete a Properties by Id
exports.delete = (req, res) => {
  const id = req.params.propertiesId;
  Properties.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send("deleted successfully a Properties with id = " + id);
  });
};
