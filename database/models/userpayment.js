'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserPayment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserPayment.init({
    userId: DataTypes.STRING,
    paymentType: DataTypes.STRING,
    accountNumber: DataTypes.INTEGER,
    provider: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserPayment',
  });
  return UserPayment;
};