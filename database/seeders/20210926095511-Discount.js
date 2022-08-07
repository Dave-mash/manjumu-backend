'use strict';

const discounts = require('./data/discounts');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Discounts', discounts, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Discounts', null, {});
  }
};
