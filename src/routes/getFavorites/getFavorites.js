const express = require('express');
const router = express.Router();

const { getFavoritesCB, getFavoritesOnlyIdCB } = require('./getFavoritesCB.js');

router.get('/', getFavoritesCB);
router.get('/info', getFavoritesOnlyIdCB);

module.exports = router;