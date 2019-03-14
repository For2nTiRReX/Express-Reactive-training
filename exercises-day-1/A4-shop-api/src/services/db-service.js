const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')

const db = low(adapter)

exports.db = (databaseName) => {

	const base = db.get(databaseName)

	return {
		fetchAll(filter) {
			if(Object.keys(filter).length > 0) {
				return base.find(filter).value();
			}
			return base.value();
		},
		fetchOne(where) {
			return base.find(where).value()
		}
	}
};
