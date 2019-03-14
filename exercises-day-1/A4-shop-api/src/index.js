const config = require('dotenv').config().parsed;
const express = require('express');

const {logger} = require('./services/logger-service');
const {loggerMiddleware} = require('./common/logger-middleware');
const {notFound404Middleware} = require('./common/not-found404-middleware');
const {attachRoutes} = require('./routes');

const app = express();

app.use(express.json());
app.use(loggerMiddleware)

/*
const router = express.Router();

router.get('', (req, res) => {});
router.post('', (req, res) => {});
router.get(':id', (req, res) => {});

app.use('/users', router);
*/


// GO inside the attachRoutes to see the #TASKs
attachRoutes(app);

// The order of the middleware matters!
app.use(notFound404Middleware)

// eslint-disable-next-line
app.use((error, req, res, next) => {

	const {status, message, stack} = error;
	const env = app.get('env');
	const sendError = {
		error: {
			message,
			status
		}
	}
	Object.assign(sendError.error, env === 'development' ? {env, stack} : {})
	res.status(status || 500).json(sendError);
})

const server = app.listen(config.PORT || 3020, () => {
	logger.info(`Listen on port: ${config.PORT || 3020}`)
	logger.info(`Running on env: ${config.NODE_ENV} ${app.get('env')}`)
});

server.on('error', (error) => {
	logger.error('Error in application', error);
})
