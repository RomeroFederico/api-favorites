const express = require('express');
const router = express.Router();

const { deleteFavoriteCB } = require('./deleteFavoriteCB.js');

router.delete('/:imdbID', deleteFavoriteCB);

module.exports = router;