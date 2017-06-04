var User = require('./UserModel.js');
var _ = require('lodash');

exports.param = function (req, res, next, id) {
    User.findById(id).then(function (user) {
        if(!user){
            var err = new Error("There is no User with the id: " + id);
            err.type = 404;
            next(err);
        }else{
            req.user = user;
            next();
        }
    }, function (err) {
        next(err);
    })

}
//get
exports.get = function (req, res, next) {
    User.find({}).then(function (user) {
            res.json(user);
    }, function (err) {
        next(err);
    })
}
//getOne
exports.getOne = function (req,res, next) {
    var user = req.user;
    res.json(user);
}
//put
exports.put = function(req, res, next) {
  var user = req.user;
  var update = req.body;

  _.merge(user, update);
  user.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  })
};

//post
exports.post = function (req, res, next) {
    var newUser = req.body;
    User.create(newUser).then(function (user) {
        res.json(user);
    },function (err) {
        next(err);
    })
}
//delete
exports.delete = function(req, res, next) {
  req.user.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
