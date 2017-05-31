var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');
var morgan = require('morgan');

var lionRouter = require('./lions');
var tigerRouter = require('./tigers');

app.use(morgan('dev'))
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    console.log("Req: ", req.body);
    next();
})
// this is called mounting. when ever a req comes in for
// '/lion' we want to use this router
app.use('/lions', lionRouter);
app.use('/tigers', tigerRouter);

app.use(function(err, req, res, next) {
  if (err) {
<<<<<<< HEAD
    console.log(err.message);
=======
>>>>>>> 0a70576c22b16847a39bbedeb0801fcff3a652b3
    res.status(500).send(err);
  }
});

//{"instructions": "Send method defined in rfc2616 section 9.5"}

module.exports = app;
