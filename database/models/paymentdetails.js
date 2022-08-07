'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PaymentDetails.hasOne(models.OrderDetails, {
        foreignKey: 'orderId',
        as: 'paymentdetails',
        onDelete: 'CASCADE',
      });
    }
  };
  PaymentDetails.init({
    orderId: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    provider: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PaymentDetails',
  });
  return PaymentDetails;
};