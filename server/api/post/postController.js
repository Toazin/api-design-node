var Post = require('./PostModel.js');
var _ = require('lodash');

exports.param = function (req, res, next, id) {
    Post.findById(id)
        .populate('author categories')
        .exec()
        .then(function (post) {
            if(!post){
                var err = new Error("There is no post with the id: " + id);
                err.type = 404;
                next(err);
            }else{
                req.post = post;
                next();
            }
        }, function (err) {
            next(err);
        })

}
//get
exports.get = function (req, res, next) {
    Post.find({})
        .populate('author categories')
        .exec()
        .then(function (post) {
            //console.log("I found this posts: ", post);
            res.json(post);
        }, function (err) {
            next(err);
        })
}
//getOne
exports.getOne = function (req,res, next) {
    var post = req.post;
    res.json(post);
}
//put
exports.put = function(req, res, next) {
  var post = req.post;
  var update = req.body;

  _.merge(post, update);
  post.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  })
};

//postat
exports.post = function (req, res, next) {
    var newPost = req.body;
    Post.create(newPost).then(function (post) {
        res.json(post);
    },function (err) {
        next(err);
    })
}
//delete
exports.delete = function(req, res, next) {
  req.post.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
