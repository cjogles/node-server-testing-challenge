const express = require('express');

const configMiddleware = require('../middleware/config-middleware.js');

const Users = require('../users/users-model.js');

// const usersRouter = require('../users/users-router.js');

const server = express();

configMiddleware(server);
// server.use('/users', usersRouter);

// CRUD

module.exports = server;