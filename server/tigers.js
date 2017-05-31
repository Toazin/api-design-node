var _ = require('lodash');

var tigerRouter = require('express').Router();

var tigers = [];
var id = 0;

var updateId = function(req, res, next) {
  if (!req.body.id) {
    id++;
    req.body.id = id + '';
  }
  next();
};

tigerRouter.param('id', function(req, res, next, id) {
  var tiger = _.find(tigers, {id: id})

  if (tiger) {
    req.tiger = tiger;
    next();
  } else {
    res.status(404).send({message: "Tiger not found"});
  }
});
//get
tigerRouter.get('/', function (req, res) {
    res.json(tigers);
})
//get/:id
tigerRouter.get('/:id', function (req, res) {
    console.log("entre id", req.body.id);
    res.send(req.tiger);
})
//post
tigerRouter.post('/',updateId, function (req, res) {
    var tiger = req.body;

    tigers.push(tiger);

    res.json(tiger);
})
//delete/:id
tigerRouter.delete('/:id', function (req, res) {
    var tigerIndex = _.findIndex(tigers,{id:req.params.id});

    tigers.splice(tigerIndex,1);

    res.json(req.tiger);
})
//put
tigerRouter.put('/:id', function (req, res) {
    var tiger = req.body;
    var updateTiger = _.assign(req.tiger,tiger);
    res.json(updateTiger);
})



module.exports = tigerRouter;
