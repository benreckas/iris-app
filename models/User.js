const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
<<<<<<< HEAD

=======
>>>>>>> 2f51f2bc897c008363b24bbd6da58dc75f63e21b
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
      console.log('username has been found');
    if(user.isModified('login.password')){
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                 user.password = hash;
                 next()
             });
         });
     } else {
         next()
     }
     console.log('username has not been found');
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