var app = require('express')();
var apiRouter = require('./api/api.js');
var errorHandler = require('./middleware/errorHandler.js');
var config = require('./config/config.js');
var auth = require('./auth/routes.js');

//set middlewares
require('./middleware/middleware.js')(app);
//main api
app.use('/api', apiRouter);
app.use('/auth', auth);

//Error handler
app.use(errorHandler());

module.exports = app;
