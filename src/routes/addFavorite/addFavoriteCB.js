let { promiseReadDB, promiseWriteDB } = require('../../methods/modules.js');

function addFavoriteCB(req, res) {

	let { movie } = req.body;

	promiseReadDB()
	.then((favorites) => {
		let newFavorites = [...favorites, movie];
		return promiseWriteDB(JSON.stringify(newFavorites));
	})
	.then((value) => res.json(value))
	.catch((reason) => res.status(400).json({ error: "Ocurrio un error en el servidor", reason: reason }));
}

module.exports = {
	addFavoriteCB: addFavoriteCB
}