const express = require ('express');
const app = express();
const bodyParser= require('body-parser');
const config = require('./config.js');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(config.mongoUrl, {
  useMongoClient: true
});

require('./routes/routes')(app);

app.listen(config.port, function() {
  console.log(`Iris app server listening on port ${config.port}...`)
});



