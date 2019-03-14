const {logger} = require('../services/logger-service')

exports.loggerMiddleware = (req, res, next) => {
	const {method, url, headers} = req;
	logger.info(`HTTP: ${method} ${url}`, headers);
	next();
}