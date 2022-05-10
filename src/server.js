const express = require("express");

const addFavorite = require('./routes/addFavorite/addFavorite');
const deleteFavorite = require('./routes/deleteFavorite/deleteFavorite');
const getFavorites = require('./routes/getFavorites/getFavorites');

const server = express();
server.use(express.json());

server.use('/favorites', getFavorites);
server.use('/favorite', addFavorite);
server.use('/favorite', deleteFavorite);

module.exports = {
	server: server
};