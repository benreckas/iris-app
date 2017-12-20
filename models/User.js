const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
  name: {
      type: String
  },
  email: {
      type: String,
      required: true
  },

  username: {
      type: String,
      required: true
  },

  password: {
      type: String,
      required: true
  },

  usertype: {
      type: String,
      required: true
  }
});

UserSchema.pre('save', function(next){
  var user = this;

  if(User.findOne({username:user.username})) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            user.password = hash;
            next();
        });
    });
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
    const query = {username: username}
    User.findOne(query, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}
