let { promiseReadDB } = require('../../methods/modules.js');

function getFavoritesCB(req, res) {
	promiseReadDB()
	.then((favorites) => res.json(favorites))
	.catch((reason) => res.status(400).json({ error: "Ocurrio un error en el servidor", reason: reason }));
}

function getFavoritesOnlyIdCB(req, res) {
	promiseReadDB()
	.then((favorites) => res.json(favorites.map(f => { return { imdbID: f.imdbID } })))
	.catch((reason) => res.status(400).json({ error: "Ocurrio un error en el servidor", reason: reason }));
}

module.exports = {
	getFavoritesCB: getFavoritesCB,
	getFavoritesOnlyIdCB: getFavoritesOnlyIdCB
}