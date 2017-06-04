var app = require('express')();
var apiRouter = require('./api/api.js');
var errorHandler = require('./middleware/errorHandler.js');

//set middlewares
require('./middleware/middleware.js')(app);
//main api
app.use('/api', apiRouter);

//Error handler
app.use(errorHandler());

module.exports = app;
