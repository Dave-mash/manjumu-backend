'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Product.belongsTo(models.Inventories);
      Product.hasOne(models.Discount, {
        foreignKey: 'discountId',
        as: 'Product',
        onDelete: 'CASCADE',
      });
    }
  };
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    sku: DataTypes.STRING,
    inventoryId: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    discountId: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    imgToken: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};