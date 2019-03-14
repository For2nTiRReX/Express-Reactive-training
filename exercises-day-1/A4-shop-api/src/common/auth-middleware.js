const serverError = require( './server-error' ).serverError

exports.authMiddleware = (req, res, next) => {
	const {headers} = req;
	if(headers['authorization'] === 'JBL') {
        next();
        return;
    } 
	next(serverError('Authorization required', 401));
}
