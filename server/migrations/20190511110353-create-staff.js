module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Staffs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
	      allowNull: false,
	      unique: true,
        type: Sequelize.STRING
      },
      firstname: {
	      allowNull: false,
        type: Sequelize.STRING
      },
      lastname: {
	      allowNull: false,
        type: Sequelize.STRING
      },
      position: {
	      allowNull: false,
        type: Sequelize.STRING
      },
      phonenumber: {
	      allowNull: true,
        type: Sequelize.STRING
      },
      bussinessId: {
        type: Sequelize.INTEGER,
	      onDelete: 'CASCADE',
            references: {
              model: 'Bussinesses',
              key: 'id',
              as: 'bussinessId',
            }
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
     down: queryInterface /* , Sequelize */ =>  queryInterface.dropTable('Staffs')
};
