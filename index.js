//Config
require('dotenv').config();

var app = require('./server/server.js');

app.listen(process.env.PORT);
console.log("Listening port", process.env.PORT);
