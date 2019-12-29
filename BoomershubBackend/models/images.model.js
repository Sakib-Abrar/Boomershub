module.exports = (sequelize, Sequelize) => {
  const Images = sequelize.define("lst_images", {
    properties_id: {
      type: Sequelize.INTEGER
    },
    link: {
      type: Sequelize.STRING
    }
  });

  return Images;
};
