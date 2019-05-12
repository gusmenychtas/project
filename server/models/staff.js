  export default (sequelize, DataTypes) => {
  const Staff = sequelize.define('Staff', {
       email: {
        type: DataTypes.STRING,
        allowNull: {
        args: false,
        msg: 'Please enter email address'
      },
        unique: {
        args: true,
        msg: 'Email already exists'
      },
       validate: {
        isEmail: {
        args: true,
        msg: 'Please enter a valid email address'
        },
      },
        },
       firstname: {
        type: DataTypes.STRING,
        allowNull: {
        args: false,
        msg: 'Please insert first name'
          }
        },
       lastname: {
        type: DataTypes.STRING,
        allowNull: {
        args: false,
        msg: 'Please insert last name'
          }
        },
       position: {
        type: DataTypes.STRING,
        allowNull: {
        args: false,
        msg: 'Please insert a position'
          }
        },
       phonenumber: {
       	type: DataTypes.STRING,
        allowNull:{
        args:true,
       	}
        },
        bussinessId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'Bussiness',
            key: 'id',
            as: 'bussinessId',
          }
        }
      }, {});
      Staff.associate = (models) => {
        // associations can be defined here
	 Staff.belongsTo(models.Bussiness, {
    foreignKey: 'bussinessId',
    onDelete: 'CASCADE'
  });
      };
      return Staff;
};
