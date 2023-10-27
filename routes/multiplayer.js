const multiplayer = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving all the tips
multiplayer.get('/', (req, res) => {
  readFromFile('./db/guns.json').then((data) => res.json(JSON.parse(data)));
});

module.exports = multiplayer;
