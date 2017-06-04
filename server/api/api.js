var api = require('express').Router();

api.use('/user', require('./user/user.js'));
api.use('/category', require('./category/category.js'));
api.use('/post', require('./post/post.js'));


module.exports = api;
