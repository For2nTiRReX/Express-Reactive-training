const {db} = require('../../services/db-service')

exports.customerService = {
    getAll(filter = {}) {
        // asyc:
        return Promise.resolve(db('customers').fetchAll(filter))
        // sync:
        // return db('customers').fetchAll(filter);
    },
    getById(id) {
        return db('customers').fetchOne({id: id})
    }
}
