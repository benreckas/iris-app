const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
  /*info:{
      firstName: {type: String, required: true},
      middleName: {type: String, required: false},
      lastName: {type: String, required: true},
      address: {type:String, required: true},
      phone: {type: Number, required:true},
      photo: {type: String, required: true}
  },

  login:{
    email: {
      type: String,
      required: true,
      validator:{}
    },
    password:{
      type: String,
      required: true,
      validator:{

      }
    }
  },

  permissions:{
    role: String,
    validator:{}
  },

  school:{
    district: String,
    city: String,
    state: String,
    schoolName: String,
    validator:{}
  }
});*/


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

const User = mongoose.model('User', UserSchema);

module.exports = User;
