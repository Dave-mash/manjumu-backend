const { Sequelize } = require('sequelize');

const { development } = require('./config/database.json');
const db = new Sequelize(development.url);

const dbConn = async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

dbConn();

module.exports = { db }