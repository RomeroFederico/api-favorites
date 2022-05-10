let { promiseReadDB, promiseWriteDB } = require('../../methods/modules.js');

function deleteFavoriteCB(req, res) {

	let { imdbID } = req.params;

	promiseReadDB()
	.then((favorites) => {
		let newFavorites = favorites.filter(f => f.imdbID !== imdbID);
		if (newFavorites.length !== favorites.length) return promiseWriteDB(JSON.stringify(newFavorites));
		res.status(400);
		return { error: "No se indico un imdbID valido." };
	})
	.then((value) => res.json(value))
	.catch((reason) => res.status(400).json({ error: "Ocurrio un error en el servidor", reason: reason }));
}

module.exports = {
	deleteFavoriteCB: deleteFavoriteCB
}