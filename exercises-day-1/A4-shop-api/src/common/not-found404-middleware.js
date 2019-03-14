const {serverError} = require('./server-error');

exports.notFound404Middleware = (req, res, next) => {
	next(serverError(`Route not found ${req.path}`))
}