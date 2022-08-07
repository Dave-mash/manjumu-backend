'use strict';

const inventories = require('./data/inventories');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Inventories', inventories, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Inventories', null, {});
  }
};