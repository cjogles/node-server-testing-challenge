const knex = require('knex');
const knexfile = '../knexfile.js';

const environment = process.env.DB_ENV || 'development';

module.exports = knex(knexfile[environment]);