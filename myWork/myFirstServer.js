// TODO: make this work.
// if yuo go to localhost:3000 the app
// there is expected crud to be working here
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var morgan = require('morgan');
var _ = require('lodash');

// express.static will serve everything
// with in client as a static resource
// also, it will server the index.html on the
// root of that directory on a GET to '/'
app.use(morgan('dev'));
app.use(express.static('client'));

// body parser makes it possible to post JSON to the server
// we can accss data we post on as req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var lions = [];
var id = 0;

// TODO: make the REST routes to perform CRUD on lions
/*
*Example Body
*   name    : String,
*   id      : String,
*   age     : Number,
*   pride   : String,
*   gender  : Male
*/

//Use middleware for obtaining lion if params id is served.
app.param('id',function (req, res, next, id) {
    //console.log("ID: ", id);
    var lion = _.find(lions, {id: id});
    if(lion){
        req.lion = _.find(lions, {id: id});
        next();
    }else{
        res.status(404).send({message:"Lion not found"});
    }
    //console.log("lion: ", req.lion);
})

//Middleware Update Id
var updateId = function (req, res, next) {
    id++;
    req.id = id + '';
    next();
}

//GET /lions
app.get('/lions', function (req, res, next) {
    res.json(lions);
    //next(new Error('Nel'));
})

//GET /lions/:id
app.get('/lions/:id', function (req, res) {
    // var id = req.params.id;
    // var lion = _.find(lions, {id: id});
    res.json(req.lion || {});
})

//POST lion
app.post('/lions',updateId, function (req, res) {
    var lion = req.body;
    //id++;
    //lion.id = id + '';
    lion.id = req.id;
    lions.push(lion);
    res.json(lion);
})

//PUT /lions/:id
app.put('/lions/:id', function (req, res) {
    //var id = req.params.id;
    var newLion = req.body;
    //var index = _.findIndex(lions,{id:id});
    //var oldLion = lions[index];
    var oldLion = req.lion;
    if(!oldLion) return res.send();

    var updatedLion = _.assign(oldLion,newLion);
    res.json(updatedLion);
})

//"DELETE /lions/:id"
app.delete('/lions/:id', function (req, res) {
    //var id = req.params.id;
    //var lionIndex = _.findIndex(lions,{id:id});
    if(!req.lion) return res.send();
    // _.remove(lions, function(n) {
    //     return n.id == id;
    // })
    var deletedLion = req.lion;//lions[lionIndex];
    var lionIndex = _.findIndex(lions,{id:deletedLion.id});
    lions.splice(lionIndex,1);
    res.json(deletedLion);
})

app.get('/testError', function (req,res, next) {
    next(new Error("I'm a tested error"));
});

//Error Handling Middleware
app.use(function (err, req, res, next) {
    //console.log("Error: ", err);
    if(err){
        res.status(500).send(err.message);
    }
})

app.listen(3000);
console.log('on port 3000');
