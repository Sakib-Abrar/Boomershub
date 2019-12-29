module.exports = (sequelize, Sequelize) => {
  const Properties = sequelize.define("tbl_properties", {
    name: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    zipcode: {
      type: Sequelize.INTEGER
    },
    county: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.INTEGER
    },
    capacity: {
      type: Sequelize.INTEGER
    }
  });

  return Properties;
};
