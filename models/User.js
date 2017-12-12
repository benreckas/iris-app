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
  if(user.isModified('login.password')){
      bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(user.login.password, salt, (err, hash) => {
               user.login.password = hash;
               next()
           });
       });
   } else {
       next()
   }
});

const User = module.exports = mongoose.model('User', UserSchema);
