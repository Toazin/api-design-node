var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require('../../config/config.js');
mongoose.connect(config.db.url);

var categorySchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('category', categorySchema);
