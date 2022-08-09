'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      sku: {
        allowNull: false,
        type: Sequelize.STRING
      },
      inventoryId: {
        type: Sequelize.INTEGER,
        // Product belongsTo Inventory
        references: {
            model: 'Inventories',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      discountId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Discounts',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      brand: {
        allowNull: false,
        type: Sequelize.STRING
      },
      imgToken: {
        allowNull: false,
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};