var Category = require('./CategoryModel.js');
var _ = require('lodash');

exports.param = function (req, res, next, id) {
    Category.findById(id).then(function (category) {

        if(!category){
            var err = new Error("There is no category with the id: " + id);
            err.type = 404;
            next(err);
            //res.status(404).json({message:"There is no category with the id: " + id})
        }else{
            req.category = category;
            //console.log("CAT: ", req.category);
            next();
        }
    }, function (err) {
        next(err);
    })

}
//get
exports.get = function (req, res, next) {
    Category.find({}).then(function (categories) {
            res.json(categories);
    }, function (err) {
        next(err);
    })
}
//getOne
exports.getOne = function (req,res, next) {
    var category = req.category;
    res.json(category);
}
//put
exports.put = function(req, res, next) {
  var category = req.category;
  var update = req.body;

  _.merge(category, update);
  category.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  })
};

//postat
exports.post = function (req, res, next) {
    var newCategory = req.body;
    Category.create(newCategory).then(function (category) {
        res.json(category);
    },function (err) {
        next(err);
    })
}
//delete
exports.delete = function(req, res, next) {
  req.category.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
