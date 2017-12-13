const express = require ('express');
const app = express();
const bodyParser= require('body-parser');
const config = require('./config.js');
const mongoose = require('mongoose');
const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//MiddleWare
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.getUserByUsername({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

mongoose.connect(config.mongoUrl, {
  useMongoClient: true
});

const db = mongoose.connection;

require('./routes/routes')(app);

app.listen(config.port, function() {
  console.log(`Iris app server listening on port ${config.port}...`)
});
