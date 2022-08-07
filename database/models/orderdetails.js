'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderDetails.hasMany(models.OrderItems, {
        foreignKey: 'orderId',
        as: 'orderdetails',
        onDelete: 'CASCADE',
      });
    }
  };
  OrderDetails.init({
    userId: DataTypes.STRING,
    total: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'OrderDetails',
  });
  return OrderDetails;
};