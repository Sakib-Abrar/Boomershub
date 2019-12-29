const env = require("./env.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
  define: {
    timestamps: false
  },
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.properties = require("../models/properties.model")(sequelize, Sequelize);
db.images = require("../models/images.model")(sequelize, Sequelize);

module.exports = db;
