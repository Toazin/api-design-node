//Config
require('dotenv').config();
var config = require('./server/config/config.js');
//console.log("My config: ", config);
var app = require('./server/server.js');

app.listen(config.port);
console.log("Listening port", config.port);
