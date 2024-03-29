module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bussinesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
	      allowNull: false,
      },
      loc: {
        type: Sequelize.STRING,
	      allowNull: false,
      },
      kind: {
        type: Sequelize.STRING,
	      allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
      down: queryInterface /* , Sequelize */ => queryInterface.dropTable('Bussinesses')
};
