var fs = require('fs');
const path = require('path');

const PATH = path.resolve(__dirname, '../db.json');

let readDB = function(filename, cb) {
	fs.readFile(filename, 'utf8', function (err, buffer) {
		if (err) cb(err);
		else cb(null, JSON.parse(buffer));
	});
}

let promiseReadDB = function() {
	return new Promise(function (resolve, reject) {
		readDB(PATH, function (err, str) {
			if (err) reject(err);
			else resolve(str);
		});
	});
};

let writeDB = function(filename, data, cb) {
	fs.writeFile(filename, data, 'utf8', (err) => {
		if (err) cb(err);
		else cb(null, {success: true});
	});
};

let promiseWriteDB = function(data) {
	return new Promise(function(resolve, reject) {
		writeDB(PATH, data, function(err, str) {
			if (err) reject(err);
			else resolve(str);
		});
	});
};

module.exports = {
	promiseReadDB: promiseReadDB,
	promiseWriteDB: promiseWriteDB
}