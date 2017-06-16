var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var config = require('../../config/config.js');
mongoose.connect(config.db.url);

var UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password: {
    type: String,
    required: true
  }
});

UserSchema.pre('save', function (next) {
    console.log("Executing before SAVE");
    if (!this.isModified('password')) return next();
    this.password = this.encryptPassword(this.password);
    next();
})

UserSchema.methods = {
  // check the passwords on signin
  authenticate: function(plainTextPword) {
    return bcrypt.compareSync(plainTextPword, this.password);
  },
  // hash the passwords
  encryptPassword: function(plainTextPword) {
    if (!plainTextPword) {
      return ''
    } else {
      var salt = bcrypt.genSaltSync(10);
      return bcrypt.hashSync(plainTextPword, salt);
    }
  }
};

module.exports = mongoose.model('user', UserSchema);
