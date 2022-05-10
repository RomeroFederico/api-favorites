const express = require('express');
const router = express.Router();

const { addFavoriteCB } = require('./addFavoriteCB.js');

router.post('/', addFavoriteCB);

module.exports = router;