module.exports = (sequelize, Sequelize) => {
  const Forum = sequelize.define("forum", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
  });

  return Forum;
};
