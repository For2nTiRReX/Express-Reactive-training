const {db} = require('../../services/db-service')

exports.customerService = {
    getAll(filter = {}) {
        return db('customers').fetchAll(filter);
    },
    getById(id) {
        return db('customers').fetchOne({id: id})
    }
}
