var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/blogger-app');

var UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('user', UserSchema);
