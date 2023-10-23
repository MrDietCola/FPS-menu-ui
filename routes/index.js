const express = require('express');

const multiplayerRouter = require('./multiplayer');

const app = express();

app.use('/multiplayer', multiplayerRouter);

module.exports = app;
